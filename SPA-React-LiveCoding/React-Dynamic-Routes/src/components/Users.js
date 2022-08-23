import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Users() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(result=>{
            console.log(result.data)
            setUsers(result.data)
        })
    } , [])


  return (
    <div>
        <h1>Users Page</h1>
        <ul>
            {users.map(user=>{
                return (<li key={user.id}> <NavLink to={`/users/${user.first_name}`} state={user}>{user.first_name} </NavLink></li>)
            })}
        </ul>
    </div>
  )
}
