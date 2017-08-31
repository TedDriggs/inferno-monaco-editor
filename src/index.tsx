/// <reference types="monaco-editor" />

import { InfernoChildren } from 'inferno';
import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import IModelContentChangedEvent = monaco.editor.IModelContentChangedEvent;
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IEditorOptions = monaco.editor.IEditorOptions;

/**
 * Props interface after defaultProps have been applied. Not intended for 
 * external use.
 */
export interface EditorSettings {
    width: string;
    height: string;
    value: string;
    theme: string;
    style: { [key: string]: any };
    readOnly?: boolean;
    options: IEditorOptions;
    language: string;
    requireConfig: { [prop: string]: any };
    onMonacoAvailable: { (ns: typeof monaco): void };
    onDidMount: { (editor: IStandaloneCodeEditor): void };
    onChange: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

/**
 * Props for `MonacoEditor` component.
 */
export interface EditorProps {
    width?: string;
    height?: string;
    value?: string;
    theme?: string;
    style?: { [key: string]: any };
    /**
     * Should the editor be read only.
     * When unspecified, the editor will look in `options`.
     */
    readOnly?: boolean;
    /** Options passed through to the underlying editor instance. */
    options?: IEditorOptions;
    language?: string;
    // XXX apply real type to this.
    requireConfig?: { [prop: string]: any };
    onMonacoAvailable?: { (ns: typeof monaco): void };
    onDidMount?: { (editor: IStandaloneCodeEditor): void };
    onChange?: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

export default class MonacoEditor extends InfernoComponent<EditorProps, void> {
    private element: HTMLElement;
    private editor?: IStandaloneCodeEditor;

    /** Merged output of width, height, and any other style properties. */
    private mergedStyle: { width: string; height: string; [key: string]: any };

    /** Merged output of loose props and `options` prop. */
    private mergedOptions: IEditorOptions;

    constructor(props: EditorProps) {
        super(props);
        this.performMerges(props as EditorSettings);
    }

    componentDidMount() {
        this.afterViewInit();
    }

    componentWillReceiveProps(nextProps: EditorProps) {
        this.performMerges(nextProps as EditorSettings);
        const { props } = this;

        const widthChanged = props.width !== nextProps.width;
        const heightChanged = props.height !== nextProps.height;

        if (widthChanged || heightChanged) {
            this.layout();
        }
    }

    componentWillUnmount() {
        this.dispose();
    }

    render(): InfernoChildren {
        return (
            <div
                ref={elem => (this.element = elem)}
                style={this.mergedStyle}
                className="inferno-monaco-container"
            />
        );
    }

    /**
     * Update the size of the editor to fill its container; call after changing
     * the size of the element.
     */
    layout() {
        if (this.editor) {
            this.editor.layout();
        }
    }

    dispose() {
        if (this.editor) {
            this.editor.dispose();
        }

        this.editor = undefined;
    }

    private performMerges(props: EditorSettings) {
        const { width, height, style, readOnly, options } = props;
        this.mergedStyle = { width, height, ...style };
        if (typeof readOnly === 'boolean') {
            this.mergedOptions = { readOnly, ...options };
        } else {
            this.mergedOptions = options;
        }
    }

    private afterViewInit() {
        const { requireConfig } = this.settings;
        const loaderUrl = requireConfig.url || 'vs/loader.js';
        const w = window as any;
        const onGotAmdLoader = () => {
            if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
                // Do not use webpack
                if (requireConfig.paths && requireConfig.paths.vs) {
                    w.require.config(requireConfig);
                }
            }

            // Load monaco
            w.require(['vs/editor/editor.main'], () => {
                this.initMonaco();
            });

            // Call the delayed callbacks when AMD loader has been loaded
            if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
                w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__ = false;
                let loaderCallbacks =
                    w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__;
                if (loaderCallbacks && loaderCallbacks.length) {
                    let currentCallback = loaderCallbacks.shift();
                    while (currentCallback) {
                        currentCallback.fn.call(currentCallback.context);
                        currentCallback = loaderCallbacks.shift();
                    }
                }
            }
        };

        // Load AMD loader if necessary
        if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
            // We need to avoid loading multiple loader.js when there are multiple editors loading concurrently
            //  delay to call callbacks except the first one
            w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__ =
                w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__ || [];
            w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__.push({
                context: this,
                fn: onGotAmdLoader,
            });
        } else {
            if (typeof w.require === 'undefined') {
                var loaderScript = document.createElement('script');
                loaderScript.type = 'text/javascript';
                loaderScript.src = loaderUrl;
                loaderScript.addEventListener('load', onGotAmdLoader);
                document.body.appendChild(loaderScript);
                w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__ = true;
            } else {
                onGotAmdLoader();
            }
        }
    }

    private initMonaco() {
        const { value, language, theme, onMonacoAvailable } = this.settings;

        if (typeof monaco !== 'undefined') {
            onMonacoAvailable(monaco);
            this.editor = monaco.editor.create(this.element, {
                value,
                language,
                theme,
                ...this.mergedOptions,
            });

            // After monaco editor has been initialized
            this.onDidMount();
        }
    }

    /** Gets the component props with defaults applied. */
    private get settings(): EditorSettings {
        return this.props as EditorSettings;
    }

    private onDidMount() {
        const { onDidMount, onChange } = this.settings;
        const editor = this.editor as IStandaloneCodeEditor;
        onDidMount(editor);
        editor.onDidChangeModelContent(evt => onChange(editor.getValue(), evt));
    }

    static defaultProps: EditorSettings = {
        width: '100%',
        height: '500px',
        value: '',
        language: 'javascript',
        theme: 'vs',
        style: {},
        options: {},
        onMonacoAvailable: noop,
        onChange: noop,
        onDidMount: noop,
        requireConfig: {},
    };
}

function noop(_: any): void {}
