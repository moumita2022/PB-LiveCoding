// decision in Javascript

// global scope
// local / block scope / functional scope
// lexical scope


//Block
/* if(2>1){
        console.log("Javascript");
        console.log("first Block")
        const firstName= "Syed"
        console.log("block");
        console.log(firstName)
}else{
    console.log("second Block")
}
 */

const age = 39; 


if(age<12){ //age is less than 12
    console.log("Maria is a little girl")
}else if(age>12 && age<20){ //age is in between 13-19
    console.log("Maria is a teenager")
}else if(age>=20 && age<40){//age is in between 20-39
    console.log("Maria is a young woman")
}else {
    console.log("Maria is an old woman")
}





