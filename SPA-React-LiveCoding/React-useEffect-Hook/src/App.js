
import React, { useState } from 'react';
import Timer from './components/Timer';
import Users from './components/Users';

function App() {
 /*  const [show,setShow]=useState(true) */

  return (
    <div className="App">
      <h1>React useEffect Hook</h1>
      {/* <button onClick={()=>setShow(!show)}>show/hide timer</button>
      { show && <Timer/>} */}

      
      <Users/>
    </div>
  );
}

export default App;