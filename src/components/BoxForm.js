import React, { useState } from 'react';


const BoxForm = (props) => {
  //this variable holds state for the color the user enters
  const [boxColor, setBoxColor] = useState("");
  //destructures props brought in from app.js
  const {boxList, setBoxList} = props;

  //the newBox function is called when the add button is clicked
  //it takes an event as an argument passed to it from the anonymous 
  //function that took in the event of the submit button being clicked

  //it prevents the page from reloading
  //sets the boxlist to a shallow copy of current boxList (of colors) 
  //and adds new color
  const newBox=(event)=> {
    event.preventDefault()
    setBoxList([...boxList, boxColor])
    setBoxColor("")
  }

  return(
    // on submit takes the even, calls the newBox func and passes it the event
    //as the input changes, onChange takes in the change event, setting the BoxColor (passed in as a prop) to be whatever is being typed in input
    //needs value to equal boxColor to see typing in field
    <form onSubmit={(event) => newBox(event)}>
        <label>Enter an <a href="https://htmlcolorcodes.com/color-names/" target="_blank" rel="noreferrer">HTML Color Name</a> color:</label>
        {/* */}
        <input onChange={(changeEvent)=> {
          setBoxColor(changeEvent.target.value);
        }} type="text"
          value={boxColor} />
        <button>Add </button>
      </form>
  );
};

export default BoxForm;