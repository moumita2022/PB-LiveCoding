// if - eLse

// if(condition){ // condition is true ,it will execute this block}
// else { if condition is false ,then this block will execute}

const theme = "Dark";

if(theme === "Dark"){ 
    console.log("Apply Dark Theme");
}else { 
    console.log("Apply Light Theme");
}


const month = 1; 
/* 
if(month === 1){
    console.log("this is month January");
}else if(month===2){
    console.log("this is month February");
}else if(month ===3){
    console.log("this is month March");
}else if(month ===4){
    console.log("this is month April");
}else if(month ===5){
    console.log("this is month May");
}
 */

// switch(month){
 //   case 1 :
   //     console.log("this is month January");
//}

switch(month){
    case 1:
        console.log("this is month January")
        break;
    case 2: 
        console.log("this is month February");
        break;
    case 3:
        console.log("this is month March");
        break;
    case 4:
        console.log("this is month April");
        break;
    case 5:
        console.log("this is month May");
        break;
     // ...
     // ...
    default:
          console.log("this is month December");
}






//Ternary Operator

// javascript ternary operator represented with the ? 
// it is called ternary because it uses 3 operands

// const a = b + c
// + operator , b and c operands (binary)

// (condition) ? statement : statement ;

//ternary will be used to assign value to your variable depending on certain condition


const age = 21;

/* let allowed;

if(age>=21){
    allowed = true;
}else{
    allowed = false
}
 */

const allowed = age>=21 ? true : false ;



/* const theme = "Dark"; */
(theme === "Dark") ? console.log("Apply Dark Theme"):console.log("Apply Light Theme");


console.log( theme=="Dark"? "Apply Dark Theme":"Apply Light Theme" )


/* if(month === 1){
    console.log("this is month January");
}else if(month ===  2 ) {
    console.log("this is month February");
}else if(month ===3){
    console.log("this is month March");
}else if(month ===4){
    console.log("this is month April");
}else if(month ===5){
    console.log("this is month May");
} */

month===1 ? console.log("this is month January"): 
month===2 ? console.log("this is month Febuary"):
month===3 ? console.log("this is month March"):
month===4 ? console.log("this is month April"):
month ===11? console.log("this is month November"):
console.log("this is month December");
