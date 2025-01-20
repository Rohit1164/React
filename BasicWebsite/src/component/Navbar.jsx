import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn/ThemeBtn";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-t">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand " href="#">
            Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink
                  to={"/"}
                  className="nav-link  active "
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"about"} className="nav-link  active" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink
                  to={"contect"}
                  className="nav-link "
                  aria-disabled="true"
                >
                  Contect
                </NavLink>
              </li>
            </ul>
            <div>{/* <ThemeBtn /> */}</div>
            <form className="d-flex" role="search">
              <Link to={"signin"}>
                <button className="btn btn-primary" type="submit">
                  SignIn
                </button>
              </Link>
              <Link to={"signup"}>
                <button className="btn btn-outline-success" type="submit">
                  SignUp
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
