// in js we have 3 kinds of operators

// arthematic operator
// conditional operator 
// logical operators

// arthematic operator 
// + - * / % modulos ** exponential 
 
/* console.log(2+2); // 4
console.log(3-1); // 2
console.log(4*3); // 12
console.log(10/5); // 2
console.log(10%3); // 1    10 - 9 = 1  6 % 5 = 1
console.log(2**3); //2*2*2  = 8 */


let a = 2; 
//post increment operator
/* console.log(a++);
console.log(a) */

//post decrement operator
/* console.log(a--); // 2
console.log(a) // 1 */

// pre increment,  pre decrement

console.log(++a); //3


//urany operator , binary operator
// 2s areb called operand  + is called operator
// 3 + 2    
// binary operator need  two operands , + - * ** %

//unary operator need only one operand: ++ -- typeof
console.log(typeof "hello"); 
console.log(typeof true);
console.log(typeof 45);
console.log(typeof undefined);
console.log(typeof null); //object


//convert any number into string or any string into a number
let num = 23;
console.log(String(num));
let stringNum = "34";
console.log(Number(stringNum));
