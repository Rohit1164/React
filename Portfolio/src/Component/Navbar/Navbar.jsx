import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuSunMoon, LuSunMedium } from "react-icons/lu";

function PortfolioNavbar() {
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "MEGA PROJECT") {
      navigate("/mega-porjects");
    } else if (value === "MINI PROJECT") {
      navigate("/mini-projects");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(saved || (prefersDark ? "dark" : "light"));
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="bg-white text-black dark:bg-gray-900 dark:text-white w-full shadow-md dark:shadow-lg dark:drop-shadow-[0_4px_6px_rgba(255,255,255,0.2)]">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <select
              className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>
                Work
              </option>
              <option value="MEGA PROJECT">MEGA PROJECT</option>
              <option value="MINI PROJECT">MINI PROJECT</option>
            </select>
          </li>

          <li>
            <NavLink to="/about" className="hover:text-blue-500 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-500 transition">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="text-2xl font-bold tracking-wide">
          <NavLink to="/">MyPortfolio</NavLink>
        </div>

        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <LuSunMedium /> : <LuSunMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default PortfolioNavbar;
