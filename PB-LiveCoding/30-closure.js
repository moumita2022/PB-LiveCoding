// // Closure

// //Scope

// let age = 34;
// // global scoped variable


// //function binds together with its lexical or outerscope makes a closure.
// // when function uses outer scoped variable is called closure.

/* A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables. */

/* Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned. */




// function sum(){
//     // local scoped variable
//     let name = "John"
//     console.log(age,name)
//         function innerfunction(){
//             let inner = "abc"
//             // local scoped varaible
//             console.log(name)// lexical scoped variable

//         }
//         innerfunction()

// }

// sum()


function secureFunction(){

 let count = 0;

 //lexical envirnoment
    function countClick(){  
        count++;
        console.log(count)
    }
  /*   count = 10; */
    return countClick;
    // returning function along with lexical scoped variable
    // memorizing variable reference
   
}

let userClicked = secureFunction()

userClicked()
userClicked()
userClicked()

userClicked()
userClicked()




/* function multipleSeven(){
    let seven = 7;
    return (num)=>{
        console.log(seven*num)
    }
}


let productSeven = multipleSeven()

productSeven(3)
productSeven(7) */

function multipleOf(num){
    return (int)=>{
        console.log(int*num)
    }
}

let multipleOfEight= multipleOf(8)
multipleOfEight(4)



let multipleOfFive = multipleOf(5)
multipleOfFive(9)
