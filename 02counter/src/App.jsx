import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  
  let counter=5
  const addValue=()=>{
counter+=1;
  }

  return (
  <>
    <h1>hey </h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}>add value</button>
    <br/>
     <button>remove value</button>
    </>
  )
}

export default App
