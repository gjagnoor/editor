// eslint-disable-next-line
import React, {useState} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/show-hint.css";
require('codemirror/mode/javascript/javascript');

export default function EditorJS (props) {
    const [value, setValue] = useState(`$("button").on("click", () => {
    alert("Yay I work!");
});`)
        return (
            <div className="indeditor">
                <div className="editor_heading">
                    <h5 className="heading_text">JS</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        setValue(value);
                        props.setJS(value);
                    }}
                    value={value}
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
                        autocorrect: true,
                        extraKeys: {
                            "Ctrl": "autocomplete"
                        }
                        
                    }}
                />
            </div>
        )
}