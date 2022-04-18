import './App.css';
import { placeHolder } from './utilis/placeHolder';
import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import Toolbar from './Toolbar';

function App() {

  const [markdown, setMarkdown] = useState(placeHolder);

  const [editorMax, setEditorMax] = useState(false);

  const [previewMax, setPreviewMax] = useState(false);

  const onChangeMarkdown = (e) => {
    setMarkdown(e.target.value);
  }

  const onClickMaxEditor = () => {
    setEditorMax(!editorMax);
  }

  const onClickMaxPreviewer = () => {
    setPreviewMax(!previewMax);
  }

  const classes = editorMax
    ? ["editorWrap maximized", "previewWrap hide", "fa fa-compress"]
    : previewMax
    ? ["editorWrap hide", "previewWrap maximized", "fa fa-compress"]
    : ["editorWrap", "previewWrap", "fa fa-arrows-alt"]

  return (
    <div className="App">
      <div className={classes[0]}>
        <Toolbar text="Editor" icon={classes[2]} onClick={onClickMaxEditor}/>
        <Editor markdown={markdown} onChangeMarkdown={onChangeMarkdown}/>
      </div>
      <div className={classes[1]}>
        <Toolbar text="Previewer" icon={classes[2]} onClick={onClickMaxPreviewer}/>
        <Previewer markdown={markdown}/>
      </div>
    </div>
  );
}

export default App;
