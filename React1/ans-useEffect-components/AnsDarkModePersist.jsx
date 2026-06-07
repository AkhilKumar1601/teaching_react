import { useEffect, useState } from "react";

function DarkModePersist() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>
        Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default DarkModePersist;
