/// <reference types="monaco-editor" />
import { InfernoChildren } from 'inferno';
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
    style: {
        [key: string]: any;
    };
    readOnly?: boolean;
    options: IEditorOptions;
    language: string;
    requireConfig: {
        [prop: string]: any;
    };
    onMonacoAvailable: {
        (ns: typeof monaco): void;
    };
    onDidMount: {
        (editor: IStandaloneCodeEditor): void;
    };
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
    style?: {
        [key: string]: any;
    };
    /**
     * Should the editor be read only.
     * When unspecified, the editor will look in `options`.
     */
    readOnly?: boolean;
    /** Options passed through to the underlying editor instance. */
    options?: IEditorOptions;
    language?: string;
    requireConfig?: {
        [prop: string]: any;
    };
    onMonacoAvailable?: {
        (ns: typeof monaco): void;
    };
    onDidMount?: {
        (editor: IStandaloneCodeEditor): void;
    };
    onChange?: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}
export default class MonacoEditor extends InfernoComponent<EditorProps, void> {
    private element;
    private editor?;
    /** Merged output of width, height, and any other style properties. */
    private mergedStyle;
    /** Merged output of loose props and `options` prop. */
    private mergedOptions;
    constructor(props: EditorProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: EditorSettings): void;
    componentWillUnmount(): void;
    render(): InfernoChildren;
    /**
     * Update the size of the editor to fill its container; call after changing
     * the size of the element.
     */
    layout(): void;
    dispose(): void;
    private performMerges(props);
    private afterViewInit();
    private initMonaco();
    /** Gets the component props with defaults applied. */
    private readonly settings;
    private onDidMount();
    static defaultProps: EditorSettings;
}
