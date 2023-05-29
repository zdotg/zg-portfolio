import React from "react";
import portfolio from "../images/portfolio.png";
import wineShop from "../images/little-wine-shop.png";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section class="project-section row">
      <h2 class="main-text text-center">Projects</h2>
      <div class="card project-card col-lg-6">
        <img src={portfolio} class="card-image-top" alt="Portfolio Snippet" />
        <div class="card-body main-text">
          <div>
            <h5 class="card-title text-gradient pt-3">Personal Portfolio</h5>
            <p class="card-text ">
              Portfolio using React, Bootstrap, Javascript, and CSS
            </p>
          </div>
        </div>
        <a
          href="https://github.com/zdotg/zg-portfolio"
          class="btn  button-gradient main-text"
        >
          GitHub
        </a>
      </div>
      <div class="card project-card col-lg-6">
        <img src={wineShop} class="card-image-top" alt="Portfolio Snippet" />
        <div class="card-body main-text">
          <div>
            <h5 class="card-title text-gradient">Little Wine Shop</h5>
            <p class="card-text">
              Mock Wine Shop using React, Bootstrap, Javascript, MongoDB and CSS
            </p>
            <p class="card-text">This project is a work in progress.</p>
          </div>
        </div>
        <a
          href="https://github.com/zdotg/little_wine_shop"
          class="btn  button-gradient main-text"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
