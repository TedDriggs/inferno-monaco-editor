import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import MonacoEditor from 'src';

export default class Client extends InfernoComponent<any, any> {
    private editor?: MonacoEditor;
    private handleChange: { (newValue: string): void };
    private themePicker?: HTMLSelectElement;
    private handleThemeChange: { (): void };

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

        this.handleThemeChange = () => {
            if (this.themePicker) {
                this.setState({
                    theme: this.themePicker.value,
                });
            }
        }

        this.state = {
            readOnly: false,
            theme: 'vs',
        };
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                <div style={{ width: '30%', height: '100%' }}>
                    <p>Type `readonly!` to disable the editor (demonstrates prop updates)</p>
                    <label>
                        Theme{' '} 
                        <select 
                            ref={n => this.themePicker = n} 
                            onChange={this.handleThemeChange} 
                            value={this.state.theme}>
                            {['vs', 'vs-dark', 'hc-black'].map(i => <option value={i}>{i}</option>)}
                        </select>
                    </label>
                </div>
                <MonacoEditor 
                    ref={node => this.editor = node}
                    width="80%"
                    height="100%"
                    readOnly={this.state.readOnly}
                    theme={this.state.theme}
                    value="if (Flow.server.ipaddr.isRFC1918) Application('int').commit();"
                    style={{
                        border: '1px solid gray',
                    }}
                    onChange={this.handleChange} />
            </div>
        );
    }
}