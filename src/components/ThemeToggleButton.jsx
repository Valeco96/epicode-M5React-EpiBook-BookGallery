import { Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={theme === "dark" ? "light" : "dark"} onClick={toggleTheme}>
      {theme === "dark" ? "Tema chiaro" : "Tema scuro"}
    </Button>
  );
}

export default ThemeToggleButton;
