import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themMode: "light",
  darkThemeColor: () => {},
  lightThemeColor: () => {},
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}