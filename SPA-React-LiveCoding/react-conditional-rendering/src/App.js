import React from "react";
import "./style.css";

function App() {
/*   const status = true;

  const task = {
    text: "Live Coding",
    status: true,
  };
  const task2 = {
    text: "Exercises",
    status: false,
  };
  const error = true; */

  const user = null
 const page ="home"

  return (
    <div className="App">

<ul>
  <li>Home</li>
  {/* React.Fragment <></> */}
  {user ? <><li>Profile</li><li>logout</li></> :<li>login</li> }

{page==="home"? <h1>Home Page</h1> : page==="contact"?<h1>Contact Page</h1> : page==="about"? <h1>About Page</h1>: <h1>No such page found</h1>}


</ul>

      {/* <h1 style={{backgroundColor:task.status?"green":"blue" }}>{task.text}</h1>
      <h1 style={{backgroundColor:task2.status?"green":"blue" }}>{task2.text}</h1> */}

      {/* <h1 className={task.status ? "done" : "pending"}>{task.text}</h1>
      <h1 className={task2.status ? "done" : "pending"}>{task2.text}</h1>

      { error ? (
        <div>
          <h1>Error Message</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            inventore laudantium ratione aliquid non dolorem perferendis
            explicabo vel sed officiis.
          </p>
          <h2>"something wrong with the network"</h2>
        </div>
      ) : <h1>No error</h1>} */}

{/* && operator if you have only if condition withour else part */}
{/* { error && (
        <div>
          <h1>Error Message</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            inventore laudantium ratione aliquid non dolorem perferendis
            explicabo vel sed officiis.
          </p>
          <h2>"something wrong with the network"</h2>
        </div>
      )}
*/}
    </div>
  );
} 

export default App;
