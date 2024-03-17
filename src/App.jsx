import { useState } from 'react'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0);
  const addVal = ()=>{
    counter = counter + 1;
    setCounter(counter);
  }
  const remVal = ()=>{
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter);
    }
  }
  return (
    <>
    <h1>Hello Anoop</h1>
    <h2>Hello I am counter: {counter}</h2>
    <button onClick={addVal}>Add Value</button>
    <button onClick={remVal}>Remove Value</button>
    </>
  )
}

export default App
