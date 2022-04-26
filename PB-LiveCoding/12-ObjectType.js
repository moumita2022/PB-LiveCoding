// Datatypes

// Primitive ( string,number,boolean, undefined, null , symbol)

// Object (Array, object, function)

const studentOne = "Joseph";
const studentTwo= "Robert";
const studentThird = "Max";
const studentFourth = "Thomas";
const studentFifth = "Smith";

//Array 
// Array allows you to store multiple values in a single vairable
// these value can be of primitive and object type

const data = [    "Berlin", 23, true , [[10,12],21,35,42,55]  ]

// square bracket / index notation
/* console.log(typeof data[0]) */

// how many elements you have in array
/* console.log(data.length) */

// resign value to any item inside our array
/* data[0] = "Frankfurt"; 

console.log(data)
data[1] = "Syed"
console.log(data)


data[3][1] =  24
console.log( data[3][4] , data[3][0]) */

const studentNames = ["Joseph" , "Robert" ,"Max", "Thomas","Smith","Syed","John","Jame"]



studentNames[7] = "jonny"

studentNames[7] =  studentNames[7][0].toUpperCase() + studentNames[7].slice(1);


console.table(studentNames)
