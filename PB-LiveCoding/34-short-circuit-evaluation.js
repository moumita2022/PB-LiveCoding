//short circuit evaluation
//logical operation
// && ||

/* let age = 17; */
// both condition are true

/* if(age>18 && age<40){
    console.log("you are a young person")
} */
/* console.log("Hello world") */





/* age>18 && console.log("you are a young person") */

let age = 17;
let status = age>18 && "allowed"
console.log(status)


if(2>1){
    console.log("2 is greater than 1 ")
}
2>1 ?  console.log("2 is greater than 1 "): null;
2>1 && console.log("2 is greater tahn 1")//right side code will only execute if condition on left is true


age >18 || console.log("you are under age") //right side code will only execute if condition on left is false

!(age>18) && console.log("you are under age")