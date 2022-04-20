const characters = "ABCDEFGHIJKL MNOPQRSTUVWXYZ";
 //                 0123456789 ... 

/*  string method will not change original string */
// string.length property

console.log(characters.length) // 26

// index starts from 0  ....  ;
console.log(characters[0])
console.log(characters[characters.length-1])
console.log(characters[13])

// charAt method
console.log(characters.charAt(0)) 
console.log(characters.charAt(characters.length-1))

// toLowerCase method
console.log(characters.toLowerCase());

//toUpperCase method
console.log(characters.toUpperCase());


// indexOf method
console.log(characters.indexOf(" ",13))

//extracting part from string
// slice method
console.log(characters.slice(-13, -9)) // (not included5 is exclusive // for  positions you can use negative value as well

// subString and substr method
 console.log(characters.substring(0,2))  // it will not work with negatibve value

 //substr
 console.log(characters.substr(6, 5)) // starting position , length of characters


//replace method
console.log(characters.replace(" ",","))


//search and match methods

console.log(characters.search("ABCD")); //return the start index of your string

//Regular Expression 
//RegEx
