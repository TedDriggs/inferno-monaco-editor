import InfernoComponent from 'inferno-component';
export declare type IEditor = any;
export declare type IModelContentChangedEvent = any;
export interface IEditorOptions {}
export declare type monaco = any;
export declare const monaco: any;
export interface EditorSettings {
    width: string;
    height: string;
    value: string;
    theme: string;
    options: IEditorOptions;
    language: string;
    requireConfig: any;
    onMonacoAvailable: {
        (ns: monaco): void;
    };
    onDidMount: {
        (editor: IEditor): void;
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
    options?: IEditorOptions;
    language?: string;
    requireConfig?: any;
    onMonacoAvailable?: {
        (ns: monaco): void;
    };
    onDidMount?: {
        (editor: IEditor): void;
    };
    onChange?: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}
export default class MonacoEditor extends InfernoComponent<EditorProps, never> {
    private element;
    private editor?;
    constructor(props: EditorProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
    /**
     * Update the size of the editor to fill its container; call after changing
     * the size of the element.
     */
    layout(): void;
    dispose(): void;
    private afterViewInit();
    private initMonaco();
    /** Gets the component props with defaults applied. */
    private readonly settings;
    private onDidMount();
    static defaultProps: EditorSettings;
}
