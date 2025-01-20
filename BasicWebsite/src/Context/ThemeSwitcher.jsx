import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitcher = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeSwitcher = () => {
  const { theme, handleThemeSwitcher } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={handleThemeSwitcher}
        className="h-5  bg-blue-600 rounded-md"
      >
        Switch {theme}
      </button>
    </div>
  );
};
