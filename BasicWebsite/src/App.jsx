import { useState, useEffect } from "react";
import { ContextProvider } from "./Context/context";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  const [Theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(Theme);
  }, [Theme]);

  return (
    <>
      <ContextProvider value={{ Theme, darkTheme, lightTheme }}>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
