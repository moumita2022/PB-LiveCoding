
import React from 'react';
import Article from './components/Article';
import User from './components/User';

function App() {
  

  let users =[
    {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
    ]


    // create all users 
    let allUsers = users.map(user=>{
      return(<User key={user.id} first_name = {user.first_name} last_name={user.last_name} avatar ={user.avatar} email={user.email} />)
    })

    console.log(allUsers)


  return (
    <div className="App">
      <h1>My React App</h1>
      { allUsers }
      {/* <Article/> */} 
      {/* {Article({heading:"heading 1", para1:"first article",para2:"article 1"})} */}
      {/* <Article/> */} 
    {/*   {Article({heading:"heading 2", para1:"second article",para2:"article 2"})} */}
      {/* <Article/> */} 
      {/* {Article({heading:"heading 3", para1:"third article",para2:"article 3"})} */}

     {/*  <Article heading="heading 1" paragraph="first para" para2="article 1" /> 
      <Article heading="heading 2" paragraph="second para" para2="article 2" /> 
      <Article heading="heading 3" paragragh="third para" para2="article 3" />  */}
      <Article/> 
      <Article/> 
    </div>
  );
}

export default App;


// props is the data passing from parent to child component
// props are just like an arguments pass to a function


/* function greetUser(obj){
  console.log(`Hi, my name is ${obj.name}, I am ${obj.course} teacher`)
}

greetUser({name:"Naqvi",course:"Web Dev"})
greetUser({name :"Robert",course:"Python"})
greetUser({name:"Leon",course:"Marketing"}) */