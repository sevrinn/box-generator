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
                  width: 550, 
                  marginLeft: "auto", 
                  marginRight: "auto"
                  }}>
      {/* maps over each index */}
      {
        boxList.map((color, index) => {
          return <div key={index} style={{backgroundColor: color, width: 100, height: 100, marginRight: 10, marginTop: 10}}>

          </div>
        })
      }
      </div>
      
    </div>
  );
}

export default App;
