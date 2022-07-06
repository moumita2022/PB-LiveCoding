let form = document.querySelector("form")



form.addEventListener("submit", (e)=>{
    //prevent default bahiviour;
    e.preventDefault()

   /*  let user = {
        name: "ali",
        skills:["html","react","css"],
        gender:"male",
        image:"./image/profile.jpg",
        country:"Germany"
    } */

    let user ={skills:[]}
    user.name= form.username.value;


    document.querySelectorAll("input[type=checkbox]").forEach(input=>{
        if(input.checked){
            user.skills.push(input.value)
        }
    })

    document.querySelectorAll("input[type=radio]").forEach(input=>{
        if(input.checked){
            user.gender = input.value
        }
    })
    
   /*  user.image = form.image.files[0].name */


    console.log(form.select)
    user.country = form.select.value

   console.log(user)




  /*  console.log(form.html.checked) */

/* console.log(form.html.value)
console.log(form.css.value)
console.log(form.javascript.value)
console.log(form.react.value) */



})