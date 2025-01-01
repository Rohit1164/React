import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ChildComponent from "./ChildComponent";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

export default App;
