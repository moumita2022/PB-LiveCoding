//target h1 
// insert text into h1
/* document.querySelector("h1").innerText="text changed" */

// insert HTML into h1
/* document.querySelector("h1").innerHTML="<span>text changed</span>" */

// insert text into h1
/* document.querySelector("h1").textContent = "text changed" */


console.log(document.querySelector("h1").textContent) //returns all nodes inside h1
console.log(document.querySelector("h1").innerText) // returns only text node
console.log(document.querySelector("h1").innerHTML) // returns html inside h1
// it will overwrite the old class
 /* document.querySelector("h1").className = "hide" */

 //alternative way
/*  document.querySelector("h1").classList.add("hide") */
 /* document.querySelector("h1").classList.remove("hide") */

 //toggle //check if the class is there it will remove other it will add
 document.querySelector("h1").classList.toggle("hide")

//contains
console.log(document.querySelector("h1").classList.contains("heading"))

/*document.querySelector("h1").id = "changed-id" */
/* console.dir(document.querySelector("h1")) */

//Element // Node
//everything in dom is called node

//elements are the tags inside the dom



// create paragraph element

const p = document.createElement("p")  // <p></p>

p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea voluptates sequi id, architecto quo! Ad tempora vel illo quidem libero nulla qui odio harum consequuntur quae magni quod asperiores, blanditiis maiores quisquam facilis odit voluptatum labore, soluta adipisci commodi temporibus. Enim voluptatem quis dignissimos voluptatum, itaque sunt nesciunt nulla minus magni aperiam. Laudantium voluptatibus nobis expedita pariatur libero, perspiciatis quibusdam quisquam voluptatum non corporis quae vitae doloribus. Magni ipsum perspiciatis blanditiis natus, molestiae eveniet praesentium excepturi sit incidunt, voluptatibus consequuntur. Est nostrum optio sit, iste veniam officiis perferendis culpa dolorem ullam. Modi beatae minus, voluptatibus laboriosam quidem sit delectus." // <p> lorem100 .... </p>

p.style.border="2px solid green"

document.body.append(p)

const img = document.createElement("img") //<img src="" alt="">
img.src = "https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="


const main = document.createElement("main")
main.append(img)
document.body.append(main)

// ParentElement.insertBefore(mainnode , targeted node)
/* document.body.insertBefore(main, p) */


/* const ul = document.querySelector("ul")
ul.insertAdjacentElement("beforeend",p) */


/* appendBefore() */




let data =[
    {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
    ]