import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("white");

  return (
    <>
     <div className="bg-${color} h-screen w-screen text-black flex justify-center items-center">Hello</div>
    </>
  )
}

export default App
