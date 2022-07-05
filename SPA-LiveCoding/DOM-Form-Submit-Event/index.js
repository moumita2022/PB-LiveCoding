let form = document.querySelector("form")


form.addEventListener("submit", (event)=>{
    //event.preventDefault() method stop default behaviour of our form
      event.preventDefault()

      /* target is the element that triggered the event (e.g., the user clicked on)
      currentTarget is the element that the event listener is attached to. */

      //first 
/*    console.log(event.target.username.value)
      console.log(form.email.value)
      console.log(event.target.password.value)  */
     
    /*   let userdata = {
        username:event.target.username.value , 
        email:event.target.email.value , 
        password: event.target.password.value
    }
    console.log(userdata) */


/* let userdata = {}
document.querySelectorAll("input").forEach(input=>{
    userdata[input.name] = input.value
})
console.log(userdata) */

//using FormData constructor
let formdata = new FormData(form)
console.log(typeof formdata)
/* console.log(formdata.get("username"))
console.log(formdata.get("email"))
console.log(formdata.get("password"))
 */
/* let userdata = {
    username: formdata.get("username"),
    email:formdata.get("email"),
    password:formdata.get("password")
}
console.log(userdata) */
let userdata = {}
for(let pair of formdata){
    /* console.log(pair) */
    userdata[pair[0]] = pair[1]
}
console.log(userdata)

    console.log("form submitted")
})