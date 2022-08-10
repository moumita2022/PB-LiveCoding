
import React, { useState } from 'react';
import Counter from './Counter';

function App() {

  const [inputValue, setInputValue]= useState("")

  const getInputValue=(e)=>{
   
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
  
    <Counter/>
   {/*  <Counter/>
    <Counter/>
    <Counter/>
    <Counter/> */}

    <input type="text" onChange={getInputValue} /> {/* controlled and uncontrolled element/component*/}
<br />
    <h2>{inputValue}</h2>
  
    </div>
  );
}

export default App;

