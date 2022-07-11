
/* import {sum} from "./math.js" */
import additionFunction from "./math.js"

import {number1,number2,result} from "./variables.js"


//attach event listener

number2.addEventListener("input", ()=>{
    console.log(number1.value)
    console.log(number2.value)
    result.value = additionFunction(+number1.value, +number2.value)
})




// directive keyword 
// import and export

// readiablity
// easy debugging
//TOP-level-scope
//Isolated (independent)
// use strict mode


// named export named inport 

// default export and default inport

// A module cannot have multiple default exports





