import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react'
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
  }, [])

  // function addTrick(newTrick) {
  //   setTricks([...tricks, newTrick])
  // }

  function addTrick(newTrick) {
    return fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrick)
    })
    .then(response => response.json())
    .then(data => setTricks([...tricks, data]))
    .catch(error => console.log(error.message))
  }
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <TricksList tricks={tricks}/>
    </div>
  );
}

export default App; 
