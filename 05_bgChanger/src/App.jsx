import { useState } from 'react'
import './App.css'

function App() {
<<<<<<< HEAD
  const [color, setColor] = useState("black");

  function changeColor(color) {
    setColor(color);
  }


  return (
    <div className="w-full h-screen"
      style={{ backgroundColor : color }}>Home
      <br />
      <button>Red</button>
      <button>Green</button>
      <button>Blue</button>
      <button>White</button>
      <button>Gulambi</button>
    </div>
=======
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("white");

  return (
    <>
     <div className="bg-${color} h-screen w-screen text-black flex justify-center items-center">Hello</div>
    </>
>>>>>>> f61c8e43c63088e2ed9e953f568fba34e30682b1
  )
}

export default App
