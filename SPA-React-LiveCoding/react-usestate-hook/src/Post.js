import React from "react"

export default function Post(props){
    return(
        <div style={{width:"300px",margin:"10px", boxShadow:"2px 2px 10px black"}}>
            <h2>{props.title}</h2>
            <p>{props.userId}</p>
            <p>{props.body}</p>
        </div>
    )
}