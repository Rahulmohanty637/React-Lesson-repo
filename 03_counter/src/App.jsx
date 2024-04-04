import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15;
  function addvalue() {
    console.log("Value added", Math.random());
    counter = counter + 1;
    console.log(counter)
  }

  return (
    <>
      <h1>Number Changing using hooks</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Increase</button>
      <br />
      <br />
      <button>Decrease</button>
    </>
  )
}

export default App
