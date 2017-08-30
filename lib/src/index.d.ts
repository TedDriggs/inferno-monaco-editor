/// <reference types="monaco-editor" />
import InfernoComponent from 'inferno-component';
import IModelContentChangedEvent = monaco.editor.IModelContentChangedEvent;
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IEditorOptions = monaco.editor.IEditorOptions;
export interface EditorSettings {
    width: string;
    height: string;
    value: string;
    theme: string;
    style: {
        [key: string]: any;
    };
    options: IEditorOptions;
    language: string;
    requireConfig: any;
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
export interface EditorProps {
    width?: string;
    height?: string;
    value?: string;
    theme?: string;
    style?: {
        [key: string]: any;
    };
    /** Options passed through to the underlying editor instance. */
    options?: IEditorOptions;
    language?: string;
    requireConfig?: any;
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
export default class MonacoEditor extends InfernoComponent<EditorProps, never> {
    private element;
    private editor?;
    /** Merged output of width, height, and any other style properties. */
    private mergedStyle;
    constructor(props: EditorProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: EditorProps): void;
    componentWillUnmount(): void;
    render(): any;
    /**
     * Update the size of the editor to fill its container; call after changing
     * the size of the element.
     */
    layout(): void;
    dispose(): void;
    private mergeStyle(props);
    private afterViewInit();
    private initMonaco();
    /** Gets the component props with defaults applied. */
    private readonly settings;
    private onDidMount();
    static defaultProps: EditorSettings;
}
