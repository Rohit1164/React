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
    return localStorage.getItem("theme") === "dark" || false;
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
    <>
      <main className="lg:w-[100%] md:w-[100%] sm:w-[100%] h-[100px] bg-green-950">
        <nav>
          <ul>
            <li>
              <span>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </span>
            </li>
            <li>
              <span>
                <select
                  className="bg-green-950 text-white border-none"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    PROJECTS
                  </option>
                  <option value="MEGA PROJECT">MEGA PROJECT</option>
                  <option value="MINI PROJECT">MINI PROJECT</option>
                </select>
              </span>
            </li>
            <li>
              <span>
                <NavLink to={"/"}>HOME</NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to={"/skills"}>SKILLS</NavLink>
              </span>
            </li>
            <li>
              <span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-2 py-2 rounded-[50%] bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                >
                  {darkMode}
                </button>
              </span>
            </li>
            <button>
              <NavLink to={"/contect"}>Contect</NavLink>
            </button>
          </ul>
        </nav>
      </main>
      {/* <Home /> */}
    </>
  );
}

export default Navbar;

// import "./Navbar.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import ColorModeToggle from "../ColorModeToggle";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     if (value === "MEGA PROJECT") {
//       navigate("/project");
//     } else if (value === "MINI PROJECT") {
//       navigate("/mini-projects");
//     }
//   };

//   return (
//     <>
//       <main className="bg-green-950 text-black dark:bg-green-950 dark:text-white min-h-screen p-4">
//         <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] h-[100px] bg-green-950 text-white">
//           <nav>
//             <ul className="flex items-center gap-4 p-4">
//               <li>
//                 <NavLink to={"/about"}>ABOUT</NavLink>
//               </li>
//               <li>
//                 <select
//                   className="bg-green-950 text-white border-none"
//                   onChange={handleChange}
//                   defaultValue=""
//                 >
//                   <option value="" disabled>
//                     PROJECTS
//                   </option>
//                   <option value="MEGA PROJECT">MEGA PROJECT</option>
//                   <option value="MINI PROJECT">MINI PROJECT</option>
//                 </select>
//               </li>
//               <li>
//                 <NavLink to={"/"}>HOME</NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/skills"}>SKILLS</NavLink>
//               </li>
//               <li>
//                 <ColorModeToggle />
//               </li>
//               <li>
//                 <NavLink to={"/contect"}>
//                   <button className="bg-blue-600 px-3 py-1 rounded text-white">
//                     CONTACT
//                   </button>
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Navbar;
