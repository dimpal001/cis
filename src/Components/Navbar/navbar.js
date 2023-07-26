import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Event handler to toggle the collapsed menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Event handler to close the menu
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            NEHU, Shillong
          </a>
          <button
            className="navbar-toggler f-flex d-lg-none flex-column justify-content-around"
            type="button"
            onClick={handleToggleMenu} // Add onClick event to toggle the menu
            aria-label="Toggle navigation"
          >
            <span
              className={`toggler-icon top-bar ${menuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`toggler-icon middle-bar ${menuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`toggler-icon bottom-bar ${menuOpen ? "open" : ""}`}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse d-md-flex justify-content-end ${
              menuOpen ? "show" : ""
            }`}
            onClick={handleCloseMenu}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/colleges">
                  Colleges
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <div className="d-flex">
                  <Link
                    className="nav-link pe-2 pe-md-2.5"
                    target="_blank"
                    to="https://facebook.com"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                  <Link
                    className="nav-link px-2 px-md-2.5"
                    target="_blank"
                    to="https://instagram.com"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                  <Link
                    className="nav-link px-2 px-md-2.5"
                    target="_blank"
                    to="https://twitter.com"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
