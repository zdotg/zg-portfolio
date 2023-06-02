import React from "react";
import "../styles/header.css";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md nav-styles nav-text">
      <div className="container-sm ">
        <a href="#" className="navbar-brand ">
          <div className="display-6 main-text">
            Zach <span className="text-gradient">Gallman</span>;
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#NavBar"
          aria-controls="NavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavBar">
          <ul className="navbar-nav mx-auto justify-content-center pt-2">
            <li className="nav-item active">
              <a className="nav-link nav-text" href="#About">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Skills">
                Skills & Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
