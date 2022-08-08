import {useState} from "react"


function App() {

/* console.log(useState(0)) */ // [initialvalue, function]

const [count, setCount] = useState(0)
const [bgColor, setBgColor]= useState("blue")
 

  function incrementCounter(){
    console.log("user clicked")
    setCount(count+1)

  }

  function changeBGColor(){
    if(bgColor==="blue"){
       setBgColor("red")
    }else{
      setBgColor("blue")
    }
   
  }

function decrementCounter(){
  setCount(count-1)
}

const resetCounter=()=>{
  setCount(0)
}

  console.log("render")
  return (
    <div className="App">
    <h1 style={{backgroundColor:bgColor}} onClick={changeBGColor}>Counter: {count}  </h1>
    <button onClick={incrementCounter}>increment</button>
    <button onClick={decrementCounter}>decrement</button>
    <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default App;
