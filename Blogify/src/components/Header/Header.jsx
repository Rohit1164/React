import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoutBtn from "./LogoutBtn";
import Container from "../containers/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <>
      <Container>
        <nav className="bg-gray-900 shadow-md dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="text-xl font-bold text-white dark:text-white">
                <NavLink to={"/"}>Blogify</NavLink>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li
                        key={item.slug}
                        className="text-white dark:text-gray-300 hover:text-blue-500"
                      >
                        <button
                          onClick={() => navigate(item.slug)}
                          className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>

              {/* Mobile Navigation Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white dark:text-white focus:outline-none"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <ul className="md:hidden space-y-2 px-4 pb-4">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li
                      key={item.slug}
                      className="text-white dark:text-gray-300 hover:text-blue-500"
                    >
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          )}
        </nav>
      </Container>
    </>
  );
}

export default Header;
