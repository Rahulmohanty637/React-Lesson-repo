import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numalw, setNumalw] = useState(false);
  const [charalw, setCharalw] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numalw) str+= "0123456789";
    if(charalw) str+= "!@#$%^&*_+=[]{}~`";
    for (let index = 0; index < array.length; index++) {
      
      
    }
  }, [
    length,
    numalw,
    charalw,
    setPassword,
  ]);

  return (
    <>
      <h1>Password Generator</h1>
    </>
  );
}
