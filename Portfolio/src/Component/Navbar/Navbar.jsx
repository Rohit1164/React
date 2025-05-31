import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "MEGA PROJECT") {
      navigate("/project");
    } else if (value === "MINI PROJECT") {
      navigate("/mini-projects");
    }
  };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="lg:w-full md:w-full sm:w-full h-[100px] bg-gray-300 dark:bg-green-950 text-black dark:text-white">
      <nav className="bg-gray-300 dark:bg-green-950 text-black dark:text-white">
        <ul className="flex gap-4 items-center px-4 py-2">
          <li>
            <NavLink
              to="/about"
              className={
                "bg-gray-300 dark:bg-green-950 text-black dark:text-white"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <select
              className="bg-gray-300 dark:bg-green-950 text-black dark:text-white border-none"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>
                PROJECTS
              </option>
              <option value="MEGA PROJECT">MEGA PROJECT</option>
              <option value="MINI PROJECT">MINI PROJECT</option>
            </select>
          </li>
          <li>
            <NavLink
              to="/"
              className={
                "bg-gray-300 dark:bg-green-950 text-black dark:text-white"
              }
            >
              HOME
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/skills"
              className={
                "bg-gray-300 dark:bg-green-950 text-black dark:text-white"
              }
            >
              SKILLS
            </NavLink>
          </li> */}

          <li>
            <NavLink to="/contect">CONTACT</NavLink>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode ? "bg-green-950 text-white" : "bg-gray-300 text-black"
              }
            >
              {darkMode ? <IoSunnyOutline /> : <LuSunMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
