import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  let[counter,setCounter]=useState(69) //counter is varibale of any name like ankit and setcounter is function can be of any name

  //let counter=5
  const addValue=()=>{
//counter+=1;
setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
  <>
    <h1>hey </h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}>add value</button>
    <br/>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
