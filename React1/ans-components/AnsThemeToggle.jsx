import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <h1>Current Theme: {isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}> Switch to {isDark ? "Light" : "Dark"} Mode </button>
    </div>
  );
}

export default ThemeToggle;
