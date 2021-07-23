import React, {useState} from 'react';

const MessageDisplay = (props) => {
  return(
    <div className="message-display">
      <h1>Current Message</h1>
      <pre>{ props.message }</pre>
    </div>
  );

}

export default MessageDisplay;