// Math Object

//it will generate a random number 0.1-0.9
/* console.log(Math.random()) */


//it will generate a random number 1-9
console.log(Math.random()*10) // 10 exclusive 
//generate number in between 10-20
console.log(Math.random() * (20-10) + 10) //  10.00 -19.99

//Math.floor 
// 2.5 => 2 (round it down)
console.log(Math.floor(2.9))  // 2
console.log(Math.floor(3.1)) // 3
//Math.ceil (round it up)
console.log(Math.ceil(2.9))  // 3
console.log(Math.ceil(3.1)) // 4

//Math.round
console.log(Math.round(2.3)) // 2
console.log(Math.round(2.5)) // 3

//Math.max returns maximum/largest number in your numbers
console.log(Math.max(3,5,7,9)) // 9

//Math.min returns minimum/smallest number in your numbers
console.log(Math.min(3,5,7,1,0,2,9,-6)) // -6

//Math.sqrt
//returns squareroot of that number
console.log(Math.sqrt(49)); // 7 
console.log(Math.sqrt(25));// 5

//Math.pow
// exponential
console.log(Math.pow(5,2)) // 5*5 =>25

//Math.PI

console.log(Math.PI) // 3.14 ...