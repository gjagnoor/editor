// eslint-disable-next-line
import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/xml-hint.js";
import "codemirror/addon/hint/show-hint.css";
require('codemirror/mode/xml/xml');
// import /* codemirror XML (HTML) mode */
// import /* codemirror CSS mode */
// import /* codemirror JS mode */

export default class EditorHTML extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            value: ""
        };
    }

    render() {
        return (
            <div style={{ width: "33%", margin: "1%" }}>
                <div style={{backgroundColor: "black", height: "2em"}}>
                    <h5 style={{color: "white", textAlign: "center"}}>HTML</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value });
                        this.props.setHTML(value)
                    }}
                    value={this.state.value}
                    className="editor"
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true,
                        indentWithTabs: true,
                        tabSize: 4,
                        lineWrapping: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        extraKeys: {
                            "Ctrl": "autocomplete"
                        }
                    }}
                />
            </div>
        )
    
    }
}