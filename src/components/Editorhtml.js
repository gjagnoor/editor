// eslint-disable-next-line
import React, {useState} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/xml-hint.js";
import "codemirror/addon/hint/show-hint.css";
require('codemirror/mode/xml/xml');

export default function EditorHTML (props) {
    const [value, setValue] = useState(`<div id="main">
    <h5 id="heading">Welcome to EDITOR</h5>
    <p>Edit the code above. Result will appear here :) Happy Coding!</p>
    <button>Click Me!</button>
</div>`)
        return (
            <div className="indeditor">
                <div className="editor_heading">
                    <h5 className="heading_text">HTML</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        setValue(value);
                        props.setHTML(value);
                    }}
                    value={value}
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
                        autocorrect: true,
                        extraKeys: {
                            "Ctrl": "autocomplete"
                        }
                        
                    }}
                />
            </div>
        )
}