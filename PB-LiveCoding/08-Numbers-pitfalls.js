// Numbers

// Number Pitfalls

// Coercion
// datatype conversion

console.log("2"*"4"); //output: 8 // implicit coercion
console.log("3"-"1"); //output: 2 // implicit coercion
console.log("5"/"5"); //output: 1 // implicit coercion
console.log("8"%"2"); //output: 0 // implicit coercion
console.log(3+"3"); //output: 33 // concatenation

console.log(0.1 + 0.2) ; // output : 0.3000000...4  // can support upto 15 decimal places
console.log(15.2+1.3); //// 16.5
console.log(0.2+0.4) // 0.6000000000000001

console.log(10/3); //output :3.333333333333335

console.log((0.1+0.2).toFixed(2) + 1 ); // 0.30 convert into string

// Number conversion

//Number Method
console.log(Number((0.1+0.2).toFixed(2)))
let postalCode = "14137 Berlin"
console.log(Number(postalCode)) // NaN 

//ParseFloat Method 
console.log(parseFloat((0.1+0.2).toFixed(2))) // 0.300 number type
console.log(parseFloat(postalCode)) // extract number from string and give output: 14137
const number = 4;
console.log(number.toFixed(1),"floating number") // 4.0

//ParseInt Method
console.log(parseInt(2.9)) // output: 2 interger
console.log(parseInt(postalCode)) // extract number from string and give output: 14137


