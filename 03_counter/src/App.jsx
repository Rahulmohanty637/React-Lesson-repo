import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  console.log("new render")
  let [counter, setCount] = useState(15)
  function addvalue() {
    console.log("Value added", Math.random());
    // if(counter < 20){
    //   counter = counter + 1;
    // }
    // setCount(counter);
    setCount(counter + 1);
    console.log(counter);
    setCount(counter + 1);
    setCount(counter + 1);
    console.log(counter);
  }

  function minusvalue() {
    if (counter > 0) {
      setCount(counter - 1);
    }
  }

  return (
    <>
      <h1>Number Changing using hooks</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Increase</button>
      <br />
      <br />
      <button onClick={minusvalue}>Decrease</button>
    </>
  )
}

export default App
