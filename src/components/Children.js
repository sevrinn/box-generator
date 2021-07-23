import React from 'react';
import MyNewComponent from './MyNewComponent';
import MyButton from './MyButtonComponent';
import styles from './MyButtonComponent'
const Children = () => {

  return(
    <div>
      <MyNewComponent header={ "Header Prop" }>
        <h1>These are children</h1>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        <MyButton style={styles}/>
      </MyNewComponent>
      
    </div>
  );
}

export default Children;