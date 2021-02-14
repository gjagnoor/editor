// eslint-disable-next-line
import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/show-hint.css";
require('codemirror/mode/css/css.js');


export default function EditorCSS (props) {
    const [value, setValue] = useState(`h5 {
    color: red;
    font-size: 2em;
}

#main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

body {
    font-family: monospace;
}
`)
        return (
            <div className="indeditor">
                <div className="editor_heading">
                    <h5 className="heading_text">CSS</h5>
                </div>
                <CodeMirror 
                    onBeforeChange={(editor, data, value) => {
                        setValue(value);
                        props.setCSS(value);
                    }}
                    value={value}
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
                        autocorrect: true,
                        extraKeys: {
                            "Ctrl": "autocomplete"
                        }  
                    }}
                />
            </div>
        )
}