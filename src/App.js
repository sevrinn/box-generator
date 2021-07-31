/**
 * As of right now this code is NOT working. I was trying to add mulitple user parameters 
 * and confused myself so putting it down for a second. I WILL be back soon. Seriously driving me nuts. 
 * When the submitted, app adds new box object to box object by setting state of boxList.
 * I can print that list to the console. Why can I not get them to render on the app.js. the component 
 * is imported correctly. hmmmmmmm. okay. sit on it. do something else and come back.
 */

import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';



function App() {
  //this variable holds state for the the array of boxes that is empty to start
  
  const [boxList, setBoxList] = useState([]);
  
  return (
    <div className = "App">
      {/* lifts state of boxList and setBoxList to BoxForm component */}
      <BoxForm setBoxList={setBoxList} boxList={boxList}/>
      {/* sets styles for the div that holds the our boxes when then are created */}
      <div style={{display: "flex", 
                  flexWrap: "wrap", 
                  justifyContent: "center", 
                  textAlign: "center", 
                  width: 650, 
                  marginLeft: "auto", 
                  marginRight: "auto"
                  }}>
      {/* maps over each item in boxList array returning a div, with styles including the color that was inputed  */}
      {
        boxList.map((box, index) => {
          console.log(box.boxColor);
          return <div key={index} style={{backgroundColor: box.boxColor, width: 100, height: box.boxHeight, marginRight: 10, marginTop: 10}}>

          </div>
        })
      }
      </div>
      
    </div>
  );
}

export default App;
