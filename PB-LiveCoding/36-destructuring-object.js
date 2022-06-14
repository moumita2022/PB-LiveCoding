// Destructuring is way to extract values from array or object into distinct variables
//ES6

// let array  = ["Sara",24,true,"Berlin" ]

// console.log(array[2])

// console.log(array[3])
//ES5
/* let name = array[0]
let age = array[1]
let status = array[2]
let city = array[3]

console.log(name)

console.log(city) */


//ES6 Destructuring array values
/* let array  = */
//extract all values from array
// const [name,age,status,city] =  ["Sara",24,true,"Berlin" ]

// console.log(name, city)


//extract only name and city from array
// const [name, , ,city] = ["Sara",24,true,"Berlin"]
// console.log(name,city)

let data = ["sum",2,4,5,6,8,6,2,7,9,3]
//rest element must the last in destructuring pattern
// const [operator , ...numbers ] = data

// console.log(numbers)
// console.log(operator)

// set default values
/* let myData = ["John","FBW32",true,32 ,"Berlin"]
myData.push("Pakistan") */
// const [name,className,status,age=25,city ,country="germany" ] = myData
/* 
console.log(age)
console.log(country) */

//Nested Array Destructuring

/* let myData = ["John","FBW32",true,[32 ,"Berlin"], [1,2,3,4]]

const [name,className, status, [age, city], [num1,num2,num3,num4] ] = myData

console.log(age)
console.log(num4) */





//Destructuring Object

// let userDataStoredInDataBases = {
//     name:"Sara",
//     age:23,
//     city:"Hamburg",
//     address:{
//         street:40,
//         house:218,
//     }
// }
// ES5
// console.log(userDataStoredInDataBases.city)
// console.log(userDataStoredInDataBases.name)
/* 
let city = userDataStoredInDataBases.city;
let name = userDataStoredInDataBases.name; */

/* console.log(name, city) */


//ES6 destructuring
// position doesn't matter
// use same variable names as the keys inside object
// const {city, name,age} = userDataStoredInDataBases
// console.log(name)

let userDataStoredInDataBases = {
    name:"Sara",
    age:23,
    city:"Hamburg",
    address:{
        street:40,
        house:218
    }
}
//set default values
//  const {name, age=18 , city="Berlin",address:{street,house}} = userDataStoredInDataBases

/* const {name, age=18 , city="Berlin",address} = userDataStoredInDataBases
const {house,street} = address */

// console.log(house)
// console.log(address.house)



/* function printUser(student){
    const {name,age} = student
    console.log(`student name is ${name}, he is ${age} years old` )
}

printUser({name:"Moen", age:32}) */

function createUser(name,age,city){
    return {
        name: name,
        age:age,
        city:city
    }
}

const {name,age,city} = createUser("Safiye",21,"Frankfurt")

// console.log(name)
// console.log(age)


function createSecretCodes(){
    let codesArray= []
    for(let i = 0; i<5;i++){
        codesArray.push(Math.ceil(Math.random()*10000000))
    }
    return codesArray
}


let codes = createSecretCodes()
let [code1,code2,code3,code4,code5] = codes
console.log(code5)