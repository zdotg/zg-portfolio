import React from "react";
import "../styles/experience.css";
import "../App.css";

const Experience = () => {
  return (
    <div class="card mx-auto pt-5 pb-5 experience-card">
      <div class="card-body d-flex align-items-center ">
        <div class="col" style={{ zIndex: "2" }}>
          <div class="pb-2">
            <div class="d-flex justify-content-between">
              <div
                class="col-lg-6 d-flex flex-column align-items-center"
                style={{ borderRight: "1px solid white" }}
              >
                <h4 class="main-text">
                  <span class="text-gradient">Academic</span> Qualifications
                </h4>
                <div class="border-style-one"></div>
                <ul>
                  <li class="pt-2 main-text list-style-none">
                    NuCamp's Full Stack Mobile and Web Development Bootcamp
                  </li>
                  <small class="main-text">graduated may 2023</small>
                  <li class="pt-2 main-text list-style-none">
                    B.S. from The University of Montevallo
                  </li>
                  <small class="main-text">graduated 2013</small>
                </ul>
              </div>
              <div class="col-lg-6 d-flex flex-column align-items-center">
                <h4 class="main-text">
                  <span class="text-gradient">Job </span>Experience
                </h4>
                <div class="border-style-one"></div>
                <ul>
                  <li class="pt-2 main-text list-style-none ">
                    Crocodile Wine - Wine Sales Specialist
                  </li>
                  <small class="main-text">current work</small>
                  <li class="pt-2 main-text list-style-none ">
                    Bottle Riot - Bartender
                  </li>
                  <small class="main-text">2017-2019</small>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
