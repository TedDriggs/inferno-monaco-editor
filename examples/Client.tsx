import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import MonacoEditor from 'src';

export default class Client extends InfernoComponent<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MonacoEditor width="100%" height="1000px" />
            </div>
        );
    }
}