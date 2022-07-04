
let secondItem = document.querySelector(".item-2")

console.dir(secondItem)
secondItem.style.backgroundColor="yellow"

//target previous li
secondItem.previousElementSibling.style.border="2px solid green"

//targeting next li
secondItem.nextElementSibling.style.color="red"


//target parent ul 
secondItem.parentElement.parentElement.previousElementSibling.style.backgroundColor="pink"

//target 5th li
secondItem.nextElementSibling.nextElementSibling.nextElementSibling.style.fontSize="30px"

secondItem.parentElement.lastElementChild.style.border="5px solid black"

/* console.log(secondItem.parentElement.parentElement.parentElement.parentElement.parentElement) */

secondItem.closest("section").style.border="2px dotted green"