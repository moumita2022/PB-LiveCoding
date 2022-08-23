
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Users from './components/Users';


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

    <Routes>
      <Route path="/" element={<Home/>}    />
      <Route path="/users" element={<Users/>}    />
      <Route path="/about" element={<About/>}      />
      <Route path="/users/:name" element={<User/>} />

    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;