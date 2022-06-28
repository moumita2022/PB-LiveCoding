//The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

//API Application Programming Interface

// DOM Docuemnt Object Model

console.dir(document)

/* console.log(document.all[7]) */
/* document.all[7].innerHTML = "DOM manipulation" */
/* document.all[7].style.border= "1px solid black"
document.all[7].style.backgroundColor="gray" */


/* document.getElementById(id) //returns single element
document.getElementsByTagName(tag name) // returns HTMLCollection
document.getElementsByClassName(classname) // returns HTMLCollection

document.querySelector(css selector)
document.querySelector("h1")
document.querySelectorAll(css selector) returns NODEList  */

let h1 = document.getElementById("header")

h1.style.backgroundColor="green"

let secondParagraph = document.getElementById("secondpara")
secondParagraph.style.border="3px solid red"


let paras = document.getElementsByTagName("p") // HTMLCollection (array methods will not work on HTMLCollection)
console.log(paras)
/* paras[0].innerText = "text changed"
paras[0].textContent = "text changed"
paras[0].style.fontSize="50px"
paras[1].style.backgroundColor="yellow" */

//convert HTMLCOllection into an array
/*  Array.from(paras).forEach(para=>{
    para.style.backgroundColor="yellow"
}) */

//convert HTMLCOllection into an array
let convertedCollection = [...paras]
convertedCollection.forEach(para=>{
    para.style.backgroundColor="yellow"
})

/* for(let i = 0 ; i<paras.length ; i++){
    paras[i].style.backgroundColor="yellow"
} */



/* const listItems = Array.from(document.getElementsByClassName("item")) */ //HTMLCollection converted into array
/* 
listItems.forEach(item=>{
    item.style.padding="10px 5px";
    item.style.border = "2px solid green"
}) */