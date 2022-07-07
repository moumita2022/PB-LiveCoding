const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

//Event Delegation
// event delegation is just a technique ,instead of attaching event listener to each child ,we can attach a single listener to parent element



btn.addEventListener("click", () => {
  //<li>TASK 1 <span>X</span></li>

  const li = document.createElement("li"); //<li></li>
  const span = document.createElement("span"); // <span></span>
  span.innerText = "X"; //<span>X</span>
  li.innerText = input.value; // <li>task 2 </li>
  li.append(span); //<li>task 2 <span>X</span></li>

  ul.append(li);
  input.value = "";

//   li.addEventListener("click", () => {
//     li.classList.toggle("done");
//     console.log("task done .... clicked on li");
//   });

//   span.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("clicked on span");
//     li.remove();
//     /*     span.parentElement.remove()
//     e.target.parentElement.remove() */
//   });
});

//Event Delegation
ul.addEventListener("click",(e)=>{
    console.log(e.target, "target")
    console.dir(e.target)
   /*  if(e.target.tagName==="LI"){
        e.target.classList.toggle("done");
    }

    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
 */

    switch(e.target.localName){
        case "li":
            e.target.classList.toggle("done")
            break
        case "span":
            e.target.parentElement.remove()
            break
        default:
            break
    }
})



//LocalStorage

console.log(localStorage)
console.log(sessionStorage)

// adding in localstorage
// in localstorage value will always be a string
localStorage.setItem("name","Naqvi")
localStorage.setItem("number", 24)

let user = {name:"ibrahim",age:23}

//JSON.stringify() => convert object into string
// JSON.parse() => convert string back to original object


//convert object into string
// let stringifyUser = JSON.stringify(user)

// localStorage.setItem("user", stringifyUser)

/* sessionStorage.setItem("user",stringifyUser) */

// get data from localStorage
// console.log( JSON.parse(localStorage.getItem("user"))  )

// delete single item from localstorage
// localStorage.removeItem("name")


// delete everything in localstorage
// localStorage.clear()