import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const obj = {
    username : "Rahul",
    roll : "21",
  }

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-5">TailwindCSS</h1>
     <Card username="Emma" btnText="Click mee"/>
     <Card username="Georgia" btnText="Explore mee"/>
     <Card username="Georgia"/>
    </>
  );
}

export default App;
