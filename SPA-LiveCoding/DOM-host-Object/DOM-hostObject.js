let student = {
    name:"Naqvi",
    age:28,
    address:{
        city:"Berlin",
        country:"Germany"
    },
    getStudentName(){
        console.log(this.name)
    },
    incrementAge(){
        this.age++;
    },
    setName(name){
        this.name = name
    }
}

console.log(student.name)
student.getStudentName()
/* student.name = "Syed" */
student.setName("Syed")
student.getStudentName()
student.age= student.age+1;
student.incrementAge()
console.log(student.age) // 30



// runtime environments
// NODEJS => node filename
// BROWSER => write js directly or link external js file into script tag. 

// host object browser is called window
console.log(window)
//methods in host object
//alert
/* window.alert("welcome to our webpage") */

/* let age; */

//prompt => method is used to get information from the user

let name = window.prompt("please enter ypur name here !")
// user provides information and clicks okay
// in the case user clicks on cancel we get null back 
/* window.alert(name) */

//confirm // returns boolean value depending on user action
/* let answer = window.confirm("are you really want to close this page ? ")

if(answer===true){
    window.close()
}else{
    console.log("thanks")
} */



/* window.alert("Hello") */



console.log("line 62")
console.log("line 63")
console.log("line 64")





//host object in nodejs is called global
/* console.log(global) */

//built-in Objects in Js
// String
// Object
// Math
// Array
// REGEX
// ...
