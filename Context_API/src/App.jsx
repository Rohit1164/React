import React from "react";
import { ThemeProvider, ThemeSwitcher } from "./ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
