//Primitive datatype
//String, Number, Boolean, undefined, null , symbol

const str = "hello";  // const str = new String("hello")
const num  = 23; // const num = new Number(23)
const bool = true; // const bool = new Boolean(true)


// Object datatype
// Arrays, Functions, Object

const numbers = [1,2,3,4] // const numbers = new Array(1,2,3,4)
const studentData = ["Joseph", 24 , "fwb04","Berlin"]
console.log(studentData[1])
// object is a set {} of key value pairs 
// collection of data in a single namespace
// structured data format

//use contructor 
//use literal way



//use Object contructor 
// const user = new Object()
// user.name = "John"; //property inside object
// user.age = 23;
// user.class="fbw04";
// user.city="Berlin"; 

// console.table(user["name"]) // sqaure bracket notation 
// console.log(user.name) // dot notation



//literal way
const user = {
    name:"Micheal" ,
    age:32 ,
    class:"fbw03",
    address: {street:"alt-buch",house:43,city:"berlin", location:{lat:2324,long:3242432}},
    isStudent:true,
    skills:["html","css","js"],
    ["first name"]: "smith"
} 

/* user.profession="student" */

/* console.log(user.address.location.long) */

/* console.log(user["name"])
console.log(user.name) */

/* console.log(user["first name"] ) */


const fruit = "orange";
//for dynamic value ,we can use bracket notaion to set our key
const fruitBucket={
    [fruit+"s"]:2
}

/* console.log(fruitBucket) */

// in object we can use reserved keywords as a key for that object
const reserved_keywords={
    for:1,
    if:2,
    class:3,
    function:4,
    while:5
}

/* console.log(reserved_keywords) */



//user input
/* const user_name= "hyfgjgkdsf";
const user_passord = "password123"

const student ={
    username : user_name,
    password : user_password
} */