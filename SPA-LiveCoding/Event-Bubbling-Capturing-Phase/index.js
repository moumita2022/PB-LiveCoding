// Bubbling

//when an event happens on any element ,it runs event handlers on that element,then on its parent and then the way up to the ascenstors

/* btn.addEventListener("click", ()=>{
    console.log("hello")
})

btn.addEventListener("click", ()=>{
    console.log("world")
}) */

let parent = document.querySelector(".parent")
let child = document.querySelector(".child")
let grandchild = document.querySelector(".grandchild")


//execution of events in bubbling and capturing phases is called propagation

parent.addEventListener("click",(e)=>{
    console.log("clicked on parent")
} )

child.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("clicked on child")
})

grandchild.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.stopImmediatePropagation()
    console.log("clicked on grandchild")
})

grandchild.addEventListener("click",(e)=>{
    console.log("clicked on grandchild second event handler")
})