// Advanced Array Methods
// Array.map() returns an array
// Array.filter() returns an array
// Array.reduce()returns any datatype
// Array.find()returns item or undefined
// Array.every() returns boolean
// Array.some()returns boolean

// Array.forEach()
// Array.sort()


/* function printSquare(arr , func){
    for(const item of arr){
        func(item)
    }
}


printSquare([1,2,3,4] , function(item){console.log(item*item)}) */

// map is most usefull and used method
// map will call function on each element of your array and returns an array
// map will return you same length of array
const numbers =[1,2,3,4,5]

const sqaureNumbers = numbers.map(item=>item*item)  // [1,4,9,16,25]
console.log(sqaureNumbers)
const data = ["kind", "hard","cool"]  //expected output: ["kinder", "harder","cooler"]

// const resultArray = []
// for(let i = 0; i<data.length; i++){
//     resultArray.push(data[i]+"er")
// }
// console.log(resultArray)


const resultArray = data.map(function(word){
    return word+"er"
})
console.log(resultArray)




//forEach returns nothing, it will call function on each element of your array
/* const words= ["a","b","c"]
words.forEach(function(item){
    console.log(item+"____")
})
 */


//filter 
// filter will call function on each element of your array and returns an array
// filter will not always return you same length of array
// depending on condition you will get new array
const cities = ["berlin","frankfurt","bonn","hamburg"]

const updatedCities = cities.filter(function(item){
   return item!=="berlin"
})

console.log(updatedCities)


//reduce returns any datatype "string","number", "array","object"
/* const randomNumbers=[2,3,6,8,9,3,2]  // number

const sum = randomNumbers.reduce(function(accumulator,item){
        accumulator+=item
        return accumulator
},0)
console.log(sum) */


const occurance= [1,1,2,3,2,1,3,5,6,3,4,5,6,7,2] // {1: 2, 2: 4, .....}

const result = occurance.reduce(function(acc, item){
    if(acc[item]){
        acc[item]++;
    }else{
        acc[item]=1
    }
    return acc
}, {})
console.log(result)

/* user["firstname"]="John"
user= {
    firstname:"john"
} */



//Array.find() if item found in array it will return  that item otherwise return undefined 

/* let names= ["John","Robert","Max","Hanny"]
const item = names.find(function(name){
    return name==="Robin"
})
console.log(item) */

//Array.every returns boolean value depeneding on the condition (return true if all items met that condition otherwise false)
let names= ["John","Robert","Max","Hanny"]
const bool = names.every(function(name){
    return typeof name ==="string"
})

console.log(bool)

