import React from 'react';

function Editor(props) {

    return (
      <textarea
        id="editor"
        onChange={props.onChangeMarkdown}
        type="text"
        value={props.markdown}
      />
    );
  }
  
export default Editor;