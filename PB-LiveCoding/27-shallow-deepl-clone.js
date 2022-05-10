// Shallow clone VS Deep Clone

// const student = {
//     name :"Mike",
//     age:26
// }

// const student2 = student ; //shallow clone  , they have same reference
// they refer to a same object ,if you change anything in two ,you will see changes in both.
// student2.age = 30;
// console.log(student2)
// console.log(student)

const student = {
    name :"Mike",
    age:26,
    address: {
        house:21,
        street :40,
        city:"berlin",
        location:{
            lat:232332,
            long:423424
        }
    },
    sayhi: function(){
        console.log("Hello")
    }
}
// Deep clone
// make copy or merge differnce objects
/* const copyStudent  = Object.assign({}, student) */
 
const newCopy = JSON.stringify(student) // convert object into string
const deepCopy = JSON.parse(newCopy) // convert back string into object

deepCopy.age = 30;
deepCopy.address.city = "Hamburg"

console.log(deepCopy)
console.log(student)
// copyStudent.age = 30;
// copyStudent.address.city="Hamburg"

// console.log(copyStudent)

// console.log(student)




// merging 2 objects
// const firstStudent = { 
//     institute:"DCI",
//     course:"Web dev",
//     startingDate:"01.01.2021",
// }
// const secondStudent = {
//     name:"Oliver",
//     age:34,
//     startingDate:"12.12.2021"
// }

// const mergedObject = Object.assign({},secondStudent, firstStudent)
// console.log(mergedObject)



