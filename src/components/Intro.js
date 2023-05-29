import React from "react";
import emoji from "../images/emoji-sticker.png";
import "../styles/intro.css";
import "../App.css";

const Intro = () => {
  return (
    <div class="card mx-auto intro-card pb-5 pt-5 ">
      <div class="card-body d-flex align-items-center justify-content-center">
        <div class="col-7">
          <div class="pb-2">
            <small class="main-text">Welcome to my world</small>
            <h2 class="main-text">Hi, I'm Zach</h2>
            <h3 class="main-text">
              <span class="text-gradient">A </span>
              Full Stack <span class="text-gradient">Web Developer</span>
            </h3>
            <small class="main-text">
              Utilizing a blend of technical skills, a growth mindset, and a
              dedication to continuous learning!
            </small>
          </div>
          <div class="row ">
            <div class="col-lg-12 center">
              <a
                href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing"
                class="btn  button-gradient main-text "
                role="button"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
        <div class="custom-shape"></div>
        <img
          src={emoji}
          alt="My memoji"
          width="250px"
          height="250px"
          className="me-4"
          class="img-border-intro"
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};

export default Intro;
