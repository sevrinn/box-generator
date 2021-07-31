import React, { useState } from 'react';


const BoxForm = (props) => {

  
  //this variable holds state for the color the user enters
  const [boxColor, setBoxColor] = useState("");
  // //boxHeight holds state for height user enters
  const [boxHeight, setBoxHeight] = useState("");
  // //boxProperties holds the state of our color and height in an object
  // const [boxProperties, setBoxProperties] = useState({});
  //destructures props brought in from app.js
  const {boxList, setBoxList} = props;

  //the newBox function is called when the add button is clicked
  //it takes an event as an argument passed to it from the anonymous 
  //function that took in the event of the submit button being clicked

  //it prevents the page from reloading
  //it sets newBoxObj to 
  //sets the boxlist to a shallow copy of current boxList (of colors) 
  //and adds new color
  const newBox=(event)=> {
    event.preventDefault()

    //create js object to hold values
    const newBoxObj = {
      boxColor,
      boxHeight,
    }
    console.log("Box will be a color of " + newBoxObj.boxColor + " and a height of " + newBoxObj.boxHeight);
    setBoxList([...boxList, newBoxObj])
    
    console.log(newBoxObj);
    
    setBoxColor("")
    setBoxHeight("")
    console.log(boxList.length);
  }
  
  return(
    // on submit takes the event, calls the newBox func and passes it the event
    //as the input changes, onChange takes in the change event, setting the BoxColor (passed in as a prop) to be whatever is being typed in input
    //needs value to equal boxColor to see typing in field
    <form onSubmit={(event) => newBox(event)}>
        <label>Enter an <a href="https://htmlcolorcodes.com/color-names/" target="_blank" rel="noreferrer">HTML Color Name</a> color:</label>
        {/* */}
        <div className="input-group">
          <label>Enter color name:</label>
          <input onChange={(changeEvent)=> {
          setBoxColor(changeEvent.target.value);
        }} type="text"
          value={boxColor} />
        </div>
        
        <div className="input-group">
          <label>Enter box height:</label>
          <input onChange={(e)=> {
          setBoxHeight(e.target.value);
        }} type="text"
        value={boxHeight} />
        </div>
        
          
        <button>Add </button>
      </form>
  );
};

export default BoxForm;