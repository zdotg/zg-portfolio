import React from "react";
import "../styles/header.css";
import "../App.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm px-5 nav-styles ">
      <div class="container-sm">
        <a href="#" class="navbar-brand ">
          <div class="display-6 navbar-text main-text">
            Zach <span class="text-gradient">Gallman</span>;
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#NavBar"
          aria-controls="NavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="NavBar">
          <ul class="navbar-nav mx-auto justify-content-center pt-2">
            <li class="nav-item active">
              <a class="nav-link main-text" href="#About">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-text" href="#Skills">
                Skills & Certifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-text" href="#Portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        {/* Figure out how to make the contact me button collapse at a certain breakpoint. Then figure out how to make a contact me option appear when the navbar collapses at small viewport sizes */}
        <div class="d-none d-sm-block">
          <button type="button" class="btn button ">
            <span class="text-gradient">Contact Me</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
