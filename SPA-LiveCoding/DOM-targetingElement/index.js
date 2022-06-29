
// Targeting DOM Elements

//DOM
// targeting single Element
// document.getElementById() 


// CSSTargetSelector
// document.querySelector() // returns you a element which is first in the dom tree

//universal selector
let p = document.querySelector("article:nth-child(2)") //first paragraph in dom tree

p.style.backgroundColor="green"
p.style.border="2px solid black"



// target multiple elements 
// document.getElementsByClassName() //returns HTMLCollection
// document.getelementsByTagName() // returns HTMLCollection

let images = Array.from(document.getElementsByTagName("img"))//returns HTMLCollection

/* console.log(images[0])
images[0].style.width = "500px"
images[0].style.height = "500px" */

images.forEach(img=>{
    img.width="200"
    img.height="200"
    img.style.display="inline-block"
    img.style.padding = "10px 10px"
    img.style.border="2px solid gray"
})


// CSSTargetSelector
// multiple elements
// document.querySelectorAll(".item") //NODEList //only forEach will work

const items = document.querySelectorAll(".item") // NodeList

items.forEach(item=>{
  /*   item.style.backgroundColor="gray"
    item.style.color = "white"
    item.style.padding="10px 10px" */

    item.style.cssText = `
    background-color:gray; 
    color:white; 
    padding:10px 10px; 
    border:2px solid red;
    ` 
})



//target first section in our DOM

let section = document.querySelector("section")
section.style.display = "flex"

console.dir(section)

Array.from(section.children).forEach(article=>{
    article.style.padding="20px"
})


/* section.addEventListener("click", ()=>{
    section.style.backgroundColor= "red"
}) */