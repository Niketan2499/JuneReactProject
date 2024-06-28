import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5)
  // let counter = 5;
  const removeValue=()=>{
    // counter=counter-1;
    if(counter>0)
    setcounter(counter-1);
    console.log("Remove value", counter)
  }
  const addValue = ()=>{
    // counter=counter+1;
    if(counter<20)
      setcounter((prevcounter)=>{return prevcounter+1})
      setcounter((prevcounter)=>{return prevcounter+1})
      setcounter((prevcounter)=>{return prevcounter+1})
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1); 
    console.log("valueAdded",counter);
  }
  return (
    <>
      <h1>Niketan Counter {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
