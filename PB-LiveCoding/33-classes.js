//different ways to create a Object

//Object constructor
// let student = new Object()
// student.name="Nicolas"
// student.age = 23;
// console.log(student)

//Literal Way
/* let student = {
    name:"Nicolas",
    age:23,
    detail:function(){
        console.log(this.name)
    }
    //alternative way to write a method
    // detail(){
    //     console.log(this.name)
    // }
}
console.log(student) */


//functional way
function createStudent(name,age){
    return {
        name:name,
        age:age,
        detail(){
            console.log(this.name)
        }
    }
}
// let student1 = createStudent("Nicolas",23)
// let student2 = createStudent("Syed",34)
/* console.log(student1,student2) */


//Factory Function // Contsructor
//Convention : always use Capital letter for constructor name

// function CreateUser(name,age){
//     this.name=name;
//     this.age=age
// }
//   CreateUser.prototype.detail=function(){
//         console.log(this.name)
//     }

// /* CreateUser("Thomas",32) */


//  let user = new CreateUser("Jonny",23)  // =>{name:"Jonny",age:23}
  
// console.log(user)
// user.detail()



//classes are not object they are template to create object
// class CreateUser {
//     constructor(name,age){
//         this.name = name;
//         this.age=age
//     }
//     detail(){
//         console.log(this.name)
//     }
//     //static methods use only with class , not with instance
//     static printUser(){
//         console.log("This is static method")
//     }
//     static checkInstances(a,b){
//         if(a.age===b.age){
//             console.log("Both users having same age")
//         }else{
//             console.log("They have different age")
//         }
//     }
// }

// CreateUser.printUser()

// // user2 is an instance of CreateUser class
// let user2 = new CreateUser("James",34)
// let user3 = new CreateUser("Mike",24)

// CreateUser.checkInstances(user2,user3)



// class DCI

class Dci{
    constructor(institute, name,course,duration){
        this.institute= institute;
        this.name=name;
        this.course= course;
        this.duration=duration
    }
    printDetail(){
        console.log(`student name is ${this.name},studying ${this.course}, duration of this course is ${this.duration} months`)
    }
    //....
    //....
}

// let student1 = new Dci("DCI","Misbah","Web dev",12)
// console.log(student1)
// student1.printDetail()
// let student2 = new Dci("DCI","Naqvi","web dev",12)
// let studnet3 = new Dci("DCI","Abbas","Marking",12)

class WebDev extends Dci{
    constructor(name,duration,teacher){
         super("DCI",name,"Web Dev",duration) 
        this.teacher = teacher
    }
}
let webdevStudent= new WebDev("Hammed",12,"Naqvi")
webdevStudent.printDetail()