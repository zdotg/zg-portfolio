import React from "react";
import emoji from "../images/emoji-sticker.png";
import "../styles/intro.css";
import "../App.css";

const Intro = () => {
  return (
    <div class="card mx-auto intro-card pb-5 pt-5">
      <div class="card-body d-flex align-items-center">
        <div class="col-8">
          <div class="pb-2">
            <small class="main-text">Welcome to my world</small>
            <h2 class="main-text">Hi, I'm Zach</h2>
            <h3 class="main-text">
              Full Stack <span class="text-gradient">Web Developer</span>
            </h3>
            <small class="main-text">
              Utilizing a blend of technical skills, a growth mindset, and a
              dedication to continuous learning!
            </small>
          </div>
          <button class="btn button-gradient main-text">Download My CV</button>
        </div>
        <img
          src={emoji}
          alt="My memoji"
          width="250px"
          height="250px"
          className="me-4"
          style={{ zIndex: 2 }}
        />
        <div class="custom-shape"></div>
      </div>
    </div>
  );
};

export default Intro;
