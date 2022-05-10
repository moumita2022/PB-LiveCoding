// abstract and referencial comparison

const a = "hello";
/* const b = "hello"; */
const b = a;

console.log(a===b) // true


const user = {
    name:"Misbah",
    age:24
}
 const user2 = {
    name:"Misbah",
    age:24
} 

console.log(user === user2) // false

console.log([1]===[1]) // false


const fruits = {
    bananas : 3,
    oranges: 5
}
const fruits2 = fruits;

console.log(fruits===fruits2) //true
// console.log(fruits2)

fruits2.bananas = 20;

console.log(fruits)
console.log(fruits2)


const number  = [4,6,8,4]

function sum(){
    console.log(4+5)
}
function add(){
    console.log(4+5)
}
 console.log(sum === add)// false

