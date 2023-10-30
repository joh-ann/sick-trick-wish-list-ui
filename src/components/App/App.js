import './App.css';
import React, { useEffect } from 'react';
import { useState, setState } from 'react'


function App() {

  function getAllTricks() {
    return fetch("http://localhost:3001/api/v1/tricks")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  useEffect(() => {
    getAllTricks();
  })
  
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
