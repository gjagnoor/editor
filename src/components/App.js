// eslint-disable-next-line
import React, {useState, useEffect} from "react";
import EditorHTML from "./Editorhtml.js";
import EditorJS from "./EditorJS.js";
import EditorCSS from "./EditorCSS.js";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  control: {
    padding: theme.spacing(2),
  },
  editors: {
    display: "flex",
    flexWrap: "wrap",
  }
}));

function App() {
  const [html, setHTML] = useState(`
    <div id="main">
      <h5 id="heading">Welcome to EDITOR</h5>
      <p>Edit the code above. Result will appear here :) Happy Coding!</p>
      <button>Click Me!</button>
    </div>
  `);
  const [css, setCSS] = useState(`
    h5 {
      color: pink;
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
  `);
  const [js, setJS] = useState(`
    $("button").on("click", () => {
      alert("Yay I work!");
    });
  `);
  const classes = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => {
    /* Source Document Code as function */
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js, /* Source document function call so that the site responds again to new code changes */]);


  const srcDoc = `
    <html>
      <head>
        <style>
          ${css}
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `
  return (
    <div className="App">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} spacing={2}>
          <Grid container justify="center" spacing={2}>
              <Grid key={1} item xs={12} sm={4}>
                <EditorHTML setHTML={setHTML} /> 
              </Grid>
            <Grid key={2} item xs={12} sm={4}>
                <EditorCSS setCSS={setCSS} />
              </Grid>
              <Grid key={3} item xs={12} sm={4}>
                <EditorJS setJS={setJS} />
              </Grid>
          </Grid>
          <Grid container spacing={2}>
            <iframe
              srcDoc={srcDoc}
              title="result"
              referrerPolicy="no-referrer"
              width="100%"
              height="350"
              style={{backgroundColor: "white"}}
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
