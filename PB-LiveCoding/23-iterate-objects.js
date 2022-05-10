// iterate objects (array and object)

const student = {
  lastName: "Franz",
  firstName: "Rene",
  age: 23,
};
/* console.log(student["firstName"]) */

// const keys = Object.keys(student) // ["firstName", "lastName"]

// for(let i = 0 ; i<keys.length ; i++){
//     console.log(keys[i]) // firstName   => student["firstName"]
//     console.log(student[keys[i]])
// }

// console.log("Franz" in student)

// for... in => iterate over your object



for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

const dci = {
  course: "Web Dev",
  student: 230,
  address: {
    city: "berlin",
    postalCode: 12345,
  },
};
for (const key in dci) {
    if(typeof dci[key] === "object"){
        for(const innerkey in dci[key]){
            console.log(dci[key][innerkey])
        }
    }else{
        console.log(dci[key]);  
    }

}



// for..of loop => iterate array/string
/* let numbers = [2,4,6,8,0] */
// for(const item of numbers){
//     console.log(item)
// }

let str = "hello World";
// for(const item of str){
//     console.log(item)
// }
// let result = ""
// for(const item of str){
//     if(str[0]===item){
//         result += item.toUpperCase()
//     }else{
//         result += item
//     }
// }
// console.log(result)