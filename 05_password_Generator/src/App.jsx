import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numalw, setNumalw] = useState(false);
  const [charalw, setCharalw] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Password Generator</h1>
    </>
  )
}

export default App
