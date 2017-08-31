import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import MonacoEditor from 'src';

export default class Client extends InfernoComponent<any, any> {
    private editor?: MonacoEditor;
    private handleChange: { (newValue: string): void };

    constructor(props) {
        super(props);
        window.addEventListener('resize', _evt => { if (this.editor) this.editor.layout(); });
        this.handleChange = nv => {
            if (nv.includes('readonly!')) {
                this.setState({
                    readOnly: true
                });
            }
        }

        this.state = {
            readOnly: false
        };
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                <div style={{ width: '30%', height: '100%' }}>
                    <p>Type `readonly!` to disable the editor (demonstrates prop updates)</p>
                </div>
                <MonacoEditor 
                    ref={node => this.editor = node}
                    width="80%"
                    height="100%"
                    readOnly={this.state.readOnly}
                    value="if (Flow.server.ipaddr.isRFC1918) Application('int').commit();"
                    style={{
                        border: '1px solid gray',
                        margin: '5px',
                    }}
                    onChange={this.handleChange} />
            </div>
        );
    }
}