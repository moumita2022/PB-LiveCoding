
//Synchronous Code // blocking code

/* console.log("line ---- 4")
console.log("line ---- 5")

console.log(b)

for(let i = 0; i<= 1000000000;i++){
    if(i === 1000000000){
        console.log("for loop finished")
    }
}

let a = "Name"
console.log(a)

console.log("line ---- 10") */

console.log("start ----")
console.log("line --- 21")

console.log("line ---- 23")

// non-blocking code //Asynchronous // execute parallel to each other
setTimeout(()=>{
    console.log("first --- executed after 2 seconds")
    console.log(new Date().getTime())
} ,2000 )

setTimeout(()=>{
    console.log("second --- executed after 2 seconds")
    console.log(new Date().getTime())
} ,2000 )

setTimeout(()=>{
    console.log("third ---- executed after 2 seconds")
    console.log(new Date().getTime())
} ,2000 )


console.log("line ---- 29")

console.log("end ----")

//compiler will execute all synchronous code first and then execute your asynchronous


