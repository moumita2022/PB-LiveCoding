import React,{useState} from 'react'

export default function Counter() {
    //in order to use state in functional component use useState Hook
  let [count, setCount] = useState(0)  // [0, function]

  const incrementCountValue=()=>{
    setCount(count+1)
  }

  const decrementCountValue=()=>{
    setCount(count-1)
  }
  return (
    <div>
            <h1>Counter: {count}</h1>
   {/*    <button onClick={()=>setCount(count+1)}>Increment</button> */}
      {/* <button onClick={function(){setCount(count+1)}}>Increment</button>*/}

      <button onClick={incrementCountValue}>Increment</button>
      <button onClick={decrementCountValue}>Decrement</button>
    </div>
  )
}
