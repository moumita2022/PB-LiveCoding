//Functions in JS

// function declaration //hoisting work only in function declaration
// function expression
// arrow function

//function declaration
function Greet(name="Guest",age=24){
    console.log ("Hello "+name+" , your age is "+age)
}

//invoke // call
Greet(undefined , 33) // hello Naqvi
Greet("Noor") // hello Noor
Greet("Smith",34) // hello Smith


//function expression // assigning function as a value to a variable
let sayHello = function(){
    console.log("Hello Everyone")
}

sayHello()


//arrow function //fat arrow function  // ES6 format to write function expression
let Sayhi = ()=>console.log("hi User")
Sayhi()

//pure and impure function
// when function is performing side effect it is called impure function


//pure function
function sum(a,b){
    return a+b
}
sum(2,3)


//impure function
function pushItem(array){
    array.push("New item")
}

let array = []
pushItem(array)

//pure
function addItem(array){
    return [...array, "New item"]
}
let numbers=[1,2,3]
console.log(addItem(numbers))


//arrow function 
/* const printNumber = (number)=> ( {num:number} ) */

const printNumber = (number)=> {
    return {num:number}
}

console.log(printNumber(23)) // { num :23}

