import { createContext, useState } from "react";

const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
