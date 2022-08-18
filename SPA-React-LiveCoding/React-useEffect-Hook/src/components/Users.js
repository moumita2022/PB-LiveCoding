import React, { useState,useEffect } from 'react'

export default function Users() {

    const [users,setUsers]=useState([])
    const [page,setPage]=useState(1)

    const fetchUsers=async(page)=>{
        const response = await fetch(`https://reqres.in/api/users?page=${page}`)
        const result = await response.json()
        console.log(result.data)
        setUsers(result.data)

    }


    /* useEffect(()=>{}, []) */
    useEffect(()=>{
        //onload // mounting phase
        //updating phase
        fetchUsers(page)    
    }, [page])

 /*    useEffect(()=>{
        return ()=>{}
    },[]) */


  return (
    <div>
        <h2>Users Profile</h2>
        <button onClick={fetchUsers}>get users</button>
        <button onClick={()=>setPage(page+1)}>change page</button>
        <div>
            {users.map(user=>{
                return( 
                    <div key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <img src={user.avatar} width="200" alt="" />
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
