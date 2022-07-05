let h1 = document.querySelector("h1")


//Event Object : wheneven any event occurs event object is created and passes to the event handler


h1.addEventListener("click", (event)=>{
    console.log(event)
})


/* let button = document.querySelector("button")
let input = document.querySelector("input")

button.addEventListener("click",()=>{
    console.log("user clicked")
    console.log(input.value)

    document.querySelector("h2").innerText=input.value
    input.value=""

}) */

// keydown (it will trigger event before actual value added into the input field)
//change (it will trigger event when user focus out inout field)
// (keyup input) always use with inout field

// keydown  change  (keyup input) always use with inout field
let input = document.querySelector("input")

input.addEventListener("input",()=>{
    console.log(input.value)
    document.querySelector("h2").innerText = input.value
})

/* input.addEventListener("focus",()=>{
    input.style.padding="10px"
})
input.addEventListener("focusout",()=>{
    input.style.padding="0"
}) */



/* let checkboxInputs = document.querySelectorAll("input[type=checkbox]")

console.log(checkboxInputs)

checkboxInputs.forEach(inp=>{
    inp.addEventListener("change",(event)=>{
       console.log(event.target.value)     
    })
}) */

let select = document.querySelector("select")
select.addEventListener("change", (e)=>{
    console.log(e.target.value)
})