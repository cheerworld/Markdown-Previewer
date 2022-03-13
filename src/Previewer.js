import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Previewer(props) {

    return (
      <div
        id="preview"
      >
        <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
      </div>
    );
  }
  
export default Previewer;