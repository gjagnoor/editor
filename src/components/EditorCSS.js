// eslint-disable-next-line
import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/show-hint.css";
require('codemirror/mode/css/css.js');


export default class EditorJS extends React.Component {

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
                    <h5 style={{color: "white", textAlign: "center"}}>CSS</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value });
                        this.props.setCSS(value);
                    }}
                    value={this.state.value}
                    className="editor"
                    options={{
                        mode: 'css',
                        theme: 'material',
                        lineNumbers: true,
                        indentWithTabs: true,
                        tabSize: 4,
                        lineWrapping: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        extraKeys: {
                            "Ctrl":"autocomplete"
                        }
                        
                    }}
                />
            </div>
        )
    
    }
}