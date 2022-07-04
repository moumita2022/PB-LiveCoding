let h1 = document.querySelector("h1")


//load DOMContentLoaded

/* window.addEventListener("load",()=>{
    //trigger when html DOM is created
    console.log("page loaded")
    document.body.style.backgroundColor="green"
}) */

window.addEventListener("DOMContentLoaded",()=>{
    //trigger when content in dom loaded
    console.log("DOM loaded successfully ")
})

// click change input keyup submit resize load DOMContentLoaded


//first way
/* h1.onclick = function(){
    console.log("user clicked on h1")
}

 */
//second way
/* function printHello(){
    console.log("Hello World")
}
 */


// attaching event listener to h1
// h1.addEventListener("click", function(){
//     h1.style.backgroundColor="gray"
//    /*  alert("Hello") */
// /*    const li = document.createElement("li")
//    li.innerText = "load events"
//    document.querySelector("ul").append(li) */
// })

let count = 0

function clickhandler(){
   
    if(h1.style.backgroundColor!== "" ){
        h1.style.backgroundColor=""
    }else{
           h1.style.backgroundColor="gray" 
    }
count++;
if(count===10){
    // remove event listener from h1
    h1.removeEventListener("click" , clickhandler) 
}

}
//dont call eventhandler ,just pass referrence
h1.addEventListener("click",clickhandler)



/* setTimeout(()=>{
   h1.removeEventListener("click" , clickhandler) 
},5000) */



// mouseover // mouseenter  // mouseleave  //mouseout //click  //dblclick //contextmenu

//target second paragraph
let secondPara = document.querySelector(".para2")

secondPara.style.border = "2px solid black"
secondPara.style.padding="20px"

/* secondPara.addEventListener("mouseover", ()=>{
    secondPara.style.backgroundColor="red"
    secondPara.style.color="white"
} )

secondPara.addEventListener("mouseout",()=>{
    secondPara.style.backgroundColor=""
    secondPara.style.color="black"
}) */

/* secondPara.addEventListener("dblclick", ()=>{
    h1.style.backgroundColor="red"
    h1.innerText= "user double clicked on second paragraph"
}) */

/* secondPara.addEventListener("contextmenu", ()=>{
    alert("right click is not allowed")
}) */


/* secondPara.addEventListener("dragstart",()=>{
    console.log("do something")
}) */
