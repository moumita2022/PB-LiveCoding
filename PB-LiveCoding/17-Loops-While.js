// While Loop

// Loops are used to repeat our actions.


// in programming , loops are sequence of instrcutions which execute repeatedly until certain condition is met.


// syntax :  while(condition){ // code}

//print out all numbers from 0-9

/* let i = 0;

while(i<10){
    console.log(i)
    i++;
} */



// print all characters in this string
let string = "hello world";

let x = 16;
while(x<string.length){
    console.log(string[x])
    x++;    
}

// do while

 // syntax:  do{} while()

/*  let a=20;
 do{
    console.log(a)
    a++;
 } while(a<5) */


// print each element inside your array

let cities = ["Berlin", "Hamburg","Bonn"]

let b=0;
while(b<cities.length){
    console.log(cities[b])
    b++;
}