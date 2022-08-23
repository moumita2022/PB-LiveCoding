import React,{useState,useEffect} from 'react'
import {useLocation, useParams} from "react-router-dom"

export default function User() {
const {name} = useParams()
const {state} = useLocation()
/* const [users,setUsers]=useState([])

useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=>{
        console.log(result.data)
        setUsers(result.data)
    })
} , [])

const user = users.find(item=>item.first_name===params.name) */

  return (
    <div>

<h2>Hi , {name}</h2>
            <h2>{state.first_name} {state.last_name} </h2>
            <img src={state.avatar} alt="user image" /> 
            <p>{state.email}</p>   
        
        
        {/* 
            <h2>Hi , {params.name}</h2>
            <h2>{user?.first_name} {user?.last_name} </h2>
            <img src={user?.avatar} alt="user image" /> 
            <p>{user?.email}</p>    */}    
         </div>
  )
}
