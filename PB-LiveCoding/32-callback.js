// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished


// function sum(a){
//     console.log(a)
//     a("Naqvi")
// }

// function PrintName(name){
//     console.log(name)
// }

// sum(PrintName)


//sequence control
// function a(callback1,callback2){
//     console.log("Hello")
//     callback1(callback2)

// }
// //callback1
// function b(callback){
//     console.log("World")
//     callback()
// }
// //callback2
// function c(){
//     console.log("Hello World")
// }

// a(b,c)

/* a()
b()
c() */




// lets make a coffee

// function boilWater(c1,c2,c3){

//     console.log("water boiled ..... 10s")
//     c1(c2,c3)
// }

// function addCoffee(c1,c2){
//     console.log("coffee added, .... 2s")
//     c1(c2)
// }

// function addSugar(call){
//     console.log("sugar mixed ..... 3s")
//     call()
// }
// function addMilk(){
//     console.log("done! your coffee is ready, Enjoy!")
// }

// boilWater(addCoffee,addSugar,addMilk)
/* boilWater()
addCoffee()
addSugar()
addMilk() */




//asynchronous coding
//code is running parallel to each other

function boilWater(c1,c2,c3){  
    setTimeout(()=>{
         console.log("water boiled ..... 10s")
           c1(c2,c3)
    }, 10000)
   
}

function addCoffee(c1,c2){
    setTimeout(()=>{
         console.log("coffee added, .... 2s")
         c1(c2) 
    },2000)
  

}

function addSugar(c1){
    // setTimeout(handler, time in millisecond, optional(arguments for handler))
    setTimeout(()=>{
        console.log("sugar mixed ..... 3s")
        c1()
    },3000)
  
}
function addMilk(){
    setTimeout(()=>{
         console.log("done! your coffee is ready, Enjoy!")
    }, 1000)  
}

/* boilWater(addCoffee,addSugar,addMilk) */




function createRandomNumber(){
    return Math.ceil(Math.random()*10)
}

function createRandomNumberUpto100(){
    return Math.ceil(Math.random()*100)
}

function pickAnyLetter(){
    let string= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef"
    return string[Math.floor(Math.random()*string.length)]
}


function printRandomArrayNumbers(callback){
    let array = []
    for(let i= 0 ;i<5;i++){
        array.push(callback())
    }
    return array
}

console.log(printRandomArrayNumbers(createRandomNumber))