import React from 'react';

function Toolbar(props) {

    return (
      <div className="toolbar">
        {props.text}
        <i className={props.icon} onClick={props.onClick}/>
      </div>
    );
  }
  
export default Toolbar;