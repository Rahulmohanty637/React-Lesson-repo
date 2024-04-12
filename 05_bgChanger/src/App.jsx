import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("black");



  return (
    <div className="w-screen h-screen"
      style={{ backgroundColor: color }}>Home
      <br />
      <div className='fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>Red</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>Green</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>Blue</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>Gulambi</button>
      </div>
    </div>
  )
}

export default App
