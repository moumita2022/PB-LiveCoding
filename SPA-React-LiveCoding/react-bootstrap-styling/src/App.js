import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// npm i bootstrap
/* 
multiline comments
*/

function App() {
  let user = {
    name: "John",
    age: 34,
  };

  let numbers = [1, 2, 3, 4, 5]; //=> [1,4,9,16,25]
/*   let list = [<li>item 1</li>, <li>item 2</li>, <li>item 3</li>]; */

  let sqauredNumbers = numbers.map((num) => {
    return <li>{num * num} </li>;
  });
  // [<li>1</li>, <li>4</li>, <li>9</li>, <li>16</li>,<li>25</li>]

  return (
    <div className="container-fluid">
      <h1 className="text-center bg-success">
        welcome, hi {user.name}, we have these number {sqauredNumbers}{" "}
      </h1>
    </div>
  );
}

export default App;
