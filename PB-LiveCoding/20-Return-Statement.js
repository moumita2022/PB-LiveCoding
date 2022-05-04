// return statement;

// return statement is used to return a particular value or values from a function (for multiple values use array or object)

// return statement can stop execution of your code/ stop function execution

// you can return any type of data from function

// use return statement always in the end of your function


function printHi(){
   console.log("Hello") 
   console.log("bye")
   return;
}

/* printHi() */


const randomNumber = Math.random()
/* console.log(randomNumber) */

let name = "Jonny";
const upperLetterName = name.toUpperCase()
/* console.log(upperLetterName) */



// concat first and last name

function concatName(firstname, lastname){
    const fullName= `${firstname} ${lastname}`
   /*  console.log(fullName) */
   return fullName;
    //insert return undefined;
}
// if return statmenet is not there function will automatically returns undefined
/* concatName("John", "Smith") */

const fullName = concatName("John", "Smith") 

/* console.log(fullName) */

function greetUser(fullname){
    console.log(`Good Morning !, ${fullname}`)
}

/* greetUser(fullName) */




// function isAllowed(age){
//     if(age>=18){
//         return true;
//     }else{
//         /* console.log("not allowed") */
//         return false
//     }
// }

// const letDrive = isAllowed(12)
// console.log(letDrive)


function sumUp(a,b,c){
    return a+b+c
}

let total = sumUp(3,5,7) // 15   let total=15;

/* console.log(total)

console.log(total*total) */


function multiValues(){
    let num1 = 23;
    let num2=12;
    let num3 = 43;
   /*  return [num1 ,num2 , num3] */
}

/* console.log(multiValues()) */

