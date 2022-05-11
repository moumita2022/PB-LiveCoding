// destructuring Objects

// destructuring is a special/short syntax to unpack your array elements in bundle of varaibles

//stytax
/* const [] = [] */
const data = ["dci","web dev",32, "teacher","Syed"]
console.table(data)

const [ institute,course,age,profession,fullname ] = data

/* const name = data[4];
const profession= data[3];
const age = data[2];
const course = data[1];
const institute= data[0] */


console.log(`My name is ${fullname} ,I am ${course} ${profession} ,`)

//rest operator
const numbers = ["rollnumber", 2,12,32,43,54]

const [rollnum, any, ...ids ] = numbers

console.log(rollnum)
console.log(ids)


//destructuring few elements from array
const student =["Rene", "Web dev",24]
const [ ,courses] = student
console.log(courses)


//set default value
const [a , b="anything" , c=7 ] = [2, ,4]

console.log(a,b,c)

//destructuring in function
// function sum(arr){
//     console.log(arr[0]+arr[1]+arr[2])
// }
function sum( [a,b,c] ){  // [a,b,c] = [2,3,4]
    console.log(a+b+c)
}
sum( [2,3,4] )


const title = "marketing";




//destructuring Object
const dciCourse = {
    title: "web dev",
    start:"01.01.2021",
    students:20,
    address:{
        street:"vulankstrasse",
        postalcode:14323,
        city:"berlin"
    }
}

const { title:courseTitle , start, students, address } = dciCourse

const {city,street,postalcode} = address


console.log(`this is ${courseTitle} course, starting from  ${start}, address is ${city}: ${postalcode}`)



//destrcuturing in function
function isWithinRange(num, {min,max}){
    if(num>=min && num <= max){
        return true
    }
    return false
}

console.log(isWithinRange(8, {min:0, max:5}))
