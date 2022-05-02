// REPL 
// read evalaute print loop


// LOOPS 
// for loop
// while loop
// do while

// Loops are used to repeat our actions.


// in programming , loops are sequence of instrcutions which execute repeatedly until certain condition is met.

// syntax: for(initalizationEypression ; condition ; updateExpression){ // code / body }

// initailizationEXpression (let i = 0) executes only once before entering into the loop

// condition (i<3) executes on every iteration. if false ,loop stops

// body executes body in each iteration

// updateExpression (i++) executes after body in each iteration

//Numeric Repetition

/* for(let i = 0 ; i<3; i++){
    console.log("hello World ", i )
} */

// iteration 1;
// i = 0
// i < 3 => 0 < 3
// body console.log("..")
// i++ =>  i=1

// iteration 2;
// i < 3 = 1 < 3
// body  ....
// i++ => i=2

// iteration 3;
 // i< 3 => 2 < 3
 // body  ....
 // i++ => i = 3

// iteration 4
// i<3 => 3< 3 false=> stops loop




/* // write a loop to print numbers 0 - 10

for(let i = 0 ; i<=10 ; i++ ){  
    console.log("number ",i)
} */


// print each character of word
let string = "Hello World"

/* for(let x = 0 ; x < string.length ; x++  ){
    console.log(string[x])
}
 */

/* for(let x = string.length-1 ; x >= 0 ; x--){
    console.log(string[x])
} */


// print each element in your array

/* let numbers = [3,6,8,12,15,16,19]

for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i]*2)
} */

// print all even number in between 0-10
/* for(let i = 0 ; i<=10 ; i+=2){
    //  if(i%2===0){
    //     console.log(i)
    // }
    console.log(i)
} */

/* console.log(i) */ //ReferenceError: i is not defined


/* let i = 2;

for(let x = 0; x<5 ; x++){

    console.log(i)
}

console.log(x) */


// find sum of all number from 0 - 100 ;

/* let sum = 0;

for(let i = 0 ; i<=100 ; i++){
    sum += i;  
}

console.log(sum) */



// print this layout
// *
// **
// *** 
// ****
// *****

/* console.log("hello".repeat(3)) */

/* for(let i = 5; i >= 1 ;i --){
    console.log("*".repeat(i))
} */


// nested loops
/* let cities = ["Berlin", "Frankfurt","Hamburg"]

for(let i = 0 ; i < cities.length ; i++){
        for(let j= 0 ; j< cities[i].length ; j++){
            console.log(cities[i][j])
        }
} */


// break/stop your loop manually
/* for(let i = 0 ; i < 10 ;i++){
   
    console.log(i)
    if(i===5){
        break;
    }
} */


// break your loop if there is - negative number in your array
/* let numbers = [1,-4,7,9,12,-7,-2,2,3,7,0]

for(let i = 0 ;i<numbers.length ; i++){
    if(numbers[i]<0){
        break;
    }
    console.log(numbers[i])
} */


//continue => skip that iteration
/* let numbers = [1,-4,7,9,12,-7,-2,2,3,7,0]

for(let i = 0; i<numbers.length ;i++){
   if(!(numbers[i]>0)){ 
        continue;
    } 
    console.log(numbers[i])
} */


