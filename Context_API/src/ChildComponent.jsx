import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <center>
      <div
        style={{
          height: "100vh",
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <p>Current theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    </center>
  );
}

export default ChildComponent;
