import React, {useState} from 'react';

const BoxDisplay = (props) => {
  return(
    <div className="box-display">
      <h1>Current Message</h1>
      <pre>{ props.message }</pre>
    </div>
  );

}

export default BoxDisplay;