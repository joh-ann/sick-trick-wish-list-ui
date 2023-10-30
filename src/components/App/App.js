import './App.css';
import React, { useEffect } from 'react';
import { useState, setState } from 'react'
import TricksList from '../TricksList/TricksList';
import Form from '../Form/Form';

function App() {
  const [tricks, setTricks] = useState([]);

  function getAllTricks() {
    return fetch("http://localhost:3001/api/v1/tricks")
    .then(response => response.json())
    .then(data => setTricks(data))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getAllTricks();
  })

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form/>
      <TricksList tricks={tricks}/>
    </div>
  );
}

export default App; 
