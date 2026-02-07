import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A ka value change ho gyi'); 
  }

  function bChanging() {
    console.log('B ka value change ho gyi');
  }

  useEffect(function(){
    aChanging()
  },[a])
  
  useEffect(function(){
    bChanging()
  },[b])
  return (

    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={() =>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={() =>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App