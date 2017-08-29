import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';
import monaco, {
    IEditor,
    IModelContentChangedEvent,
} from 'monaco-editor/dev/vs/editor/editor.main';

interface EditorSettings {
    width: string;
    height: string;
    value: string;
    onMonacoAvailable: { (ns: monaco): void };
    onDidMount: { (editor: IEditor): void };
    onDidChangeModelContent: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

export interface EditorProps {
    width?: string;
    height?: string;
    value?: string;
    onMonacoAvailable?: { (ns: monaco): void };
    onDidMount?: { (editor: IEditor): void };
    onDidChangeModelContent?: {
        (value: string, evt: IModelContentChangedEvent): void;
    };
}

export default class MonacoEditor extends InfernoComponent<EditorProps, any> {
    private editor: IEditor | null;

    constructor(props: EditorProps) {
        super(MonacoEditor.withDefaults(props));
    }

    componentWillUnmount() {
        this.dispose();
    }

    render() {
        const { width, height } = this.props;
        return (
            <div
                ref="container"
                style={{ width, height }}
                className="inferno-monaco-container"
            >
                {' '}
            </div>
        );
    }

    dispose() {
        if (this.editor) {
            this.editor.dispose();
        }

        this.editor = null;
    }

    private static withDefaults(props: EditorProps): EditorSettings {
        return Object.assign(
            {
                width: '100%',
                height: '500',
                value: '',
                language: 'javascript',
                theme: 'vs',
                options: {},
                onMonacoAvailable: noop,
                onDidChangeModelContent: noop,
                onDidMount: noop,
            },
            props,
        );
    }
}

function noop(_: any): void {}
