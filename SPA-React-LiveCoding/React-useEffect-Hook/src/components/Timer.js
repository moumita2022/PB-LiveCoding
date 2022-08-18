import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [time,setTime]=useState(new Date().toUTCString())

//useEffect(()=>{} , [])
   useEffect(()=>{
     //mounting phase
    //unmounting phase     
    let int = setInterval(()=>{
        console.log("inside setInterval ....")
        setTime(new Date().toUTCString())
    },1000)

    return ()=>{
            console.log("component unmounted")
             clearInterval(int)
        
        
    }
   },[])

//    // useEffect(()=>{ 
//        //code for onload
//        //....
//        //...
//        return ()=>{}
//    }  , [])

  return (
    <div>
        <h1>{time}</h1>
        <button>change time</button>
    </div>
  )
}
