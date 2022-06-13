// Advanced Array Method
//Map
//Filter
//Reduce


//Array.map returns new array with same length

// let numbers = [1,2,3,4,5]

/* function makeSqaure(number){
    return number*number
}
 */

/* let squaredNumbers = numbers.map(makeSqaure) */
/* console.log(squaredNumbers) */

/*  let squaredNumbers = numbers.map(function makeSqaure(number){
    return number*number
}) 
console.log(squaredNumbers)  */

/* let squaredNumbers = numbers.map(number=>{
    return number*number
}) 
console.log(squaredNumbers)  */

// let squaredNumbers = numbers.map(n=>n*n) 
// console.log(squaredNumbers) 

/* let words = ["hard","kind","light","bright"] // ["harder","kinder","lighter","brighter"]
let result = words.map(word=>word+"er")
console.log(result) */

/* let words = ["hard","kind","light","bright"] // ["hard","kind","lighter","brighter"]
let result = words.map(word=>{
    if(word.slice(-1)==="t"){
       return word+"er"
    }else{
        return word
    }
})
console.log(result) */


//slice, it allows negative index numbers and substr ,it allows use positive index numbers




// Array.filter returns new array filled with the items that pass the test in function.
/* 
let ages = [18,13,24,16,54,32,22,12]

let output = ages.filter(item=>item>18) // [24,54,32,22]
console.log(output) */



let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
//filter out all cities having population greater than 3m

// let result = cities.filter(item=>item.population>3000000 )
// console.log(result)

// filter out all the cities having "o" in name
let result = cities.filter(item=>item.name.includes("o") && item.population>3000000 )
/* console.log(result) */



//Array.reduce returns you a single value (an object, an array, string ,number and boolean)

let numbers = [2,4,6,8,32,4,31,65] 

//acc is just like container
// item => each element inside our array
// index => index position /number for each item
// array give you complete array you are iterating through
/* let sum = numbers.reduce((acc,item)=>{
return acc+=item
},0)
console.log(sum) */



/* let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];

let totalAges= people.reduce((acc,item)=>{
    return acc+=item.age
},0) */

/* console.log(totalAges) */


let randomNumbers = [1,1,1,2,2,1,2,3,3,5,6,5,4,5,3,5,6,7]
//expected output => {"1":4,"2":3,...}

let frequency = randomNumbers.reduce((acc,item)=>{
    if(acc[item]){
        acc[item]++;
    }else{
        acc[item]=1
    }
    return acc;
}, {})  // => {"1":3,"2":1}

/* console.log(frequency) */






/* let numbersRandom=[1,2,3,4,5] */

/* numbersRandom.forEach(item=>console.log(item*item)) */


//Array.reduce((acc,item)=>{},initial value )

// Array.map((item,index,array)=>{},contextObject)

//Array.filter((item,index.array)=>{}, contextObject)


/* 
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];

  let contextObject = {
      youngPeople :18,
      oldPeople:50
  }

  let contextObject2= {
      youngPeople:24,
      oldPeople:65
  }

  let outputValue = people.filter(function(item){
    return item.age>this.oldPeople}, contextObject)
  console.log(outputValue) */



  //Array.every (returns boolean value true if all item pass test)
  //Array.some ( returns boolean true if any of the item pass that test)
  //Array.sort 
  //Array.startWith
  //Array.endWith
  

  let people = [
    { name: "John", age: 21, class:"FBW-E04-1" },
    { name: "Oliver", age: 55 , class:"FBW-E04-2"},
    { name: "Michael", age: 55 , class:"FBW-E04-1"},
    { name: "Dwight", age: 19, class:"FBW-E04-2" },
    { name: "Oscar", age: 21 , class:"FBW-E04-1"},
    { name: "Kevin", age: 55 , class:"FBW-E04-3"},
  ];

  //check if all people we have in this array having age greater than 18
  let resultOutput = people.every(item=>item.age>18) 

  console.log(resultOutput)