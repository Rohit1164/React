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
      className={`h-lvh text-3xl ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col pt-[20%] items-center">
        <p>Your Theme is: {theme}</p>
        <button
          onClick={handleThemeSwitcher}
          className="h-14 p-3 pb-3 m-4 bg-blue-600 rounded-md"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
};
