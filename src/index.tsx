/// <reference types="monaco-editor" />

import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import IModelContentChangedEvent = monaco.editor.IModelContentChangedEvent;
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IEditorOptions = monaco.editor.IEditorOptions;

export interface EditorSettings {
    width: string;
    height: string;
    value: string;
    theme: string;
    options: IEditorOptions;
    language: string;
    requireConfig: any;
    onMonacoAvailable: { (ns: typeof monaco): void };
    onDidMount: { (editor: IStandaloneCodeEditor): void };
    onChange: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

export interface EditorProps {
    width?: string;
    height?: string;
    value?: string;
    theme?: string;
    options?: IEditorOptions;
    language?: string;
    requireConfig?: any;
    onMonacoAvailable?: { (ns: typeof monaco): void };
    onDidMount?: { (editor: IStandaloneCodeEditor): void };
    onChange?: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

export default class MonacoEditor extends InfernoComponent<EditorProps, never> {
    private element: HTMLElement;
    private editor?: IStandaloneCodeEditor;

    constructor(props: EditorProps) {
        super(props);
    }

    componentDidMount() {
        this.afterViewInit();
    }

    componentWillUnmount() {
        this.dispose();
    }

    render() {
        const { width, height } = this.settings;
        return (
            <div
                ref={elem => (this.element = elem)}
                style={{ width, height }}
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

    private afterViewInit() {
        const { requireConfig } = this.props;
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
        const {
            value,
            language,
            theme,
            options,
            onMonacoAvailable,
        } = this.settings;
        if (typeof monaco !== 'undefined') {
            onMonacoAvailable(monaco);
            this.editor = monaco.editor.create(this.element, {
                value,
                language,
                theme,
                ...options,
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
        height: '500',
        value: '',
        language: 'javascript',
        theme: 'vs',
        options: {},
        onMonacoAvailable: noop,
        onChange: noop,
        onDidMount: noop,
        requireConfig: {},
    };
}

function noop(_: any): void {}
