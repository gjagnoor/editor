// eslint-disable-next-line
import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/show-hint.css";
const fs = require("fs").writeFile;
require('codemirror/mode/javascript/javascript');
// import /* codemirror XML (HTML) mode */
// import /* codemirror CSS mode */
// import /* codemirror JS mode */

export default class EditorJS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    render() {
        console.log("fs:::", fs);
        return (
            <div style={{ width: "34%", margin: "1%" }}>
                <div style={{backgroundColor: "black", height: "2em"}}>
                    <h5 style={{color: "white", textAlign: "center"}}>JS</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value });
                        this.props.setJS(value);
                        fs('../src/components/result.js', this.state.value);
                    }}
                    value={this.state.value}
                    className="editor"
                    options={{
                        mode: 'javascript',
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
