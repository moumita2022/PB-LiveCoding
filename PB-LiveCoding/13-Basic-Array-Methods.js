// Basic Array Methods

const cities = ["Berlin","Hamburg","Frankfurt","Dresden","Bonn"];

// push and pop method to remove and add item in then end array 
cities.push("Dusseldorf")  //add new item in your array (in the end)
console.log(cities)

// pop will always delete last item from your array
cities.pop();
console.log(cities)

// shift and unshift method will add and remove item from the start of your array

//shift will always delete first item in your array
cities.shift()
console.log(cities)

//unshift will always add item in the beginning of your array
cities.unshift("Berlin")
console.log(cities)

//includes method (check whether that item exist in the array)
console.log(cities.includes("Berlin"))

//reverse method  (reverse order of your items inside your array)
cities.reverse()
console.log(cities)

//splice method will remove/add/replace any item from your array
             // index, number item deleted ,new item
cities.splice(2 , 0 , "leipzig")

console.table(cities)

// slice (extract a part of your array)
console.log(cities.slice(2,-2))

//sort ,method them ascending or descending
console.log(cities.sort())


//join 
console.log(cities.join("$")) // join all item using that separator


//indexOf
console.log(cities.indexOf("Berlin"))