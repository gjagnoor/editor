// eslint-disable-next-line
import React, {useState, useEffect} from "react";
import EditorHTML from "./Editorhtml.js";
import EditorJS from "./EditorJS.js";
import EditorCSS from "./EditorCSS.js";
import Terminal from 'terminal-in-react';
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
import result from "./result.js";
import testing from "./testing.js";
const FileSystemPlugin = pseudoFileSystemPlugin();



function App() {
  const [html, setHTML] = useState("<h5>Waiting for changes...</h5>");
  const [css, setCSS] = useState(null);
  const [js, setJS] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
    /* Source Document Code as function */
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js, /* Source document function call so that the site responds again to new code changes */]);


  const srcDoc = `
    <html>
      <head>
      </head>
      <body>
        <script>
          ${js}
        </script>
      </body>
    </html>
  `
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <div className="pane mid-pane" style={{ display: "flex" }}>
        {/* <EditorHTML setHTML={setHTML} /> 
        <EditorCSS setCSS={setCSS} /> */}
        <EditorJS setJS={setJS} />

      </div>

      <div className="bottom-pane">

      <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            "run": "node js",
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            // showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            "run": `node result.js`,
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
          plugins={[
            FileSystemPlugin,
            {
              class: NodeEvalPlugin,
              config: {
                filesystem: FileSystemPlugin.displayName
              }
            }
          ]}
      />

      </div>
    </div>
  );
}

export default App;
