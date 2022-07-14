//async await
//GET => read
//POST => add 
//PATCH AND PUT => update 
//DELETE => delete

/* 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${data[2].id}` )
    .then(res=>res.json())
    .then(user=>console.log(user))
    .catch(err=>console.log(err))
}) */

//returns promise
/* async function func(){
    return 1
}
func().then(value=>console.log(value)) */

//async await we are using to write our asynchronous coding into synchronous way

// const myFunc =  async()=>{
//       const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       const data = await response.json()
//       const res = await fetch(`https://jsonplaceholder.typicode.com/users/${data[2].id}`)
//       const user = await res.json()
//       console.log(user)
// }

// myFunc()

const fetchUserData = async ()=>{
    try{
       const response = await fetch("https://reqres.in/api/users?page=2") 
        const data = await response.json()
        console.log(data)
    } 
   

    catch(err){
        console.log(err.message)
    }
}

fetchUserData()

/* try{}
catch(err){} */

console.log("start .......")
try{
    console.log(b)
}

catch(err){
console.log(err.message)
}
console.log("line ---- 57")



console.log("ending .....")





