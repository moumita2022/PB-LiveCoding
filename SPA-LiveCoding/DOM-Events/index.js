let h1 = document.querySelector("h1")



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


h1.addEventListener("")
// mouseover // mouseenter  // mouseleave  //mouseout //click  //dblclick //contextmenu