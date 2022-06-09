//recursive function

//print numbers from 1 to 10

/* for(let i= 10;i<=1;i--){
    console.log(i)
}
 */
/* let number =1;
while(number<=10){
    console.log(number)
    number++;
} */

//recursive function
//base condition should always be on the top before recursive call
// function printNumber(n){
//     //base condition
//     if(n===0){
//         return
//     }
//     console.log(n)
//     printNumber(n-1)//recursive call

// }

// printNumber(10)

//sum of all numbers from 1 - 100

// function findSum(){
//     let sum = 0;
//     for(let i=1;i<=100;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(findSum())

//recursive function
/* function findSum(number){
    if(number===0){
        return 0
    }
    return number+findSum(number-1)
}
console.log(findSum(100)) */

/* function factorial(n){
    let result = 1;
    for(let i = n; i>=1;i--){
        result*=i
    }
    return result
}
console.log(factorial(5)) */ // 5*4*3*2*1

//recursive function
// function factorial(n){
// //base condition
//     if(n===1){
//         return 1
//     }
//     return n*factorial(n-1) // 5*4*3*2*1*1
// }
// console.log(factorial(5))

//fibonacci numbers
// [0,1,1,2,3,5,8,13,21]

/* function getFibonacciNumbers(n){//3
    if(n<2){
        return [0,1]
    }else{
        let s = getFibonacciNumbers(n-1) // 1 => [0,1]
        s.push(s[s.length-1]+s[s.length-2]) // [0,1,1,2]
        return s
    } 
}
console.log(getFibonacciNumbers(2)) */

let post = [
  {
    message: "Hello Ali",
    reply: [
      {
        message: "Hi John, I am good, how are you",
        reply: [
          {
            message: "Good ",
            reply: [{ message: "bye", reply: [
                {
                    message:"talk you later",
                    reply:[]
                }
            ] }],
          },
        ],
      },
    ],
  },
];

function printMessages(post){
    post.forEach(item=>{
         /* let keys= Object.keys(item); */
         let values= Object.values(item)

        /*  console.log(item[keys[0]]) */
        console.log(values[0])
         if(/* keys.length>0 */ values[1].length>0 ){
              printMessages(/* item[keys[1]] */ values[1]) // recursive call
         }   
    })
}
printMessages(post)