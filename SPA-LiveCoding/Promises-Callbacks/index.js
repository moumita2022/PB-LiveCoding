//  setTimeout(()=>{
//     console.log("added sugar and coffeee ----- ")
// }, 1000)

// setTimeout(()=>{
//     console.log("added milk ----- ")
//     console.log("coffee is ready")
// }, 2000)

//  setTimeout(()=>{
//     console.log("boiled water ")
//     let name ="Naqvi"
//     return name
// }, 3000)

/* const myPromise = new Promise((resolve,reject)=>{
    let request = false 
    if(request){
        resolve({success:true, message:"everything is okay"})
    }else{
        reject("there is error from external server")
    }
}) */

//State in Promise
/* A JavaScript Promise object can be:

Pending
Fulfilled
Rejected */

/* myPromise
.then(value=> console.log(value))
.catch(err=>console.log(err)) */

function boilWater() {
  const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("boiled water");
    }, 3000);
  });
  return task1;
}

function addSugarAndCoffee() {
  const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("added sugar and coffeee ----- ");
    }, 1000);
  });
  return task2;
}

function addMilk() {
  const task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("added milk -----coffee is ready ");
    }, 2000);
  });
  return task3;
}


/* boilWater().then((value)=>{
    console.log(value)
    addSugarAndCoffee().then(data=>{
        console.log(data)
        addMilk().then(result=>console.log(result))
    }) 
}) */

/* boilWater().then(value=>{
    console.log(value)
    return addSugarAndCoffee()
}).then(data=>{
    console.log(data)
    return addMilk()
}).then(result=>console.log(result))
.catch(err=>console.log(err)) */
product= {
    title:"iphone",
    price:1500,
    description:"kkhldhald"
}

// in synchronous coding JSON methods will work
/* JSON.stringify(product)
JSON.parse() */

//asynchronous coding .json method will work

/* console.log(fetch("https://jsonplaceholder.typicode.com/users"))

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(result=>console.log(result))
.catch(err=>console.log(err)) */

// if you get text data use response.text()
/* fetch("./index.txt")
.then(response=>response.text())
.then(result=>console.log(result)) */

// if you get json data response.json()
fetch("./data.json")
.then(response=>response.json())
.then(data=>console.log(data.name))



// async await
