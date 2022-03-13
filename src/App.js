import './App.css';
import { placeHolder } from './utilis/placeHolder';
import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

function App() {

  const [markdown, setMarkdown] = useState(placeHolder);

  const onChangeMarkdown = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <div className="App">
      <Editor markdown={markdown} onChangeMarkdown={onChangeMarkdown}/>
      <div className='previewWrap'>
      <Previewer markdown={markdown}/>
      </div>
    </div>
  );
}

export default App;
