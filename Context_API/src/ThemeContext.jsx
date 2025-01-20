import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useState("light");

  const handleThemeSwitcher = () => {
    return setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
