import React from 'react';
import './App.css';
import Landingpage from './View/landingpage';
import { Routes, Route } from "react-router-dom";
import Signup from './View/Signup';
import Login from './View/Login';

function App() {
  return(
     <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
)}

export default App;
