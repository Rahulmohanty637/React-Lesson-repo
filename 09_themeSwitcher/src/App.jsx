import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themMode, setThemeMode] = useState("light");

  const lightThemeColor = () => {
    setThemeMode("light");
  };

  const darkThemeColor = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    const html = document
      .querySelector("html")
      .classList.remove("light", "dark");
    html.classList.add("dark");
  }, [themMode]);
  
  return (
    <ThemeProvider value={{ themMode, darkThemeColor, lightThemeColor }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
