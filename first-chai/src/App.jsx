import {useState} from 'react';
import './App.css'
import Chai from "./Chai.jsx";
function App() {
  
  let [counter,setCounter]=useState(0);
  const addValue=() =>{
    setCounter(counter+1);
    console.log("counter is",counter);
  }
  const remove=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h2>Hello Im Harshita</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>ADD VALUE</button>
      <br></br>
      <br></br>
      <button onClick={remove}>REMOVE VALUE</button>
    </>
  )
}

export default App
