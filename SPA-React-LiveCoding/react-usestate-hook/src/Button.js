import React from "react"


function Button(props){
  return (
    <button style={{padding:"10px",fontSize:"20px",backgroundColor:props.color,color:"white"}}>{props.title}</button>
  )
}

export default Button;


/* function sum(num1,num2){
  console.log(num1+num2)
}
sum(2,3) // 5
sum(3,4) // 7 */

