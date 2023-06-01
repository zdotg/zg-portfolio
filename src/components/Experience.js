import React from "react";
import "../styles/experience.css";
import "../App.css";

const Experience = () => {
  return (
    <div className="card mx-auto pt-5 pb-5 experience-card border-style-two">
      <div className="card-body d-flex align-items-center">
        <div className="col" style={{ zIndex: "2" }}>
          <div className="pb-2">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <h4 className="main-text text-center">
                  <span className="text-gradient border-style-one">
                    Academic
                  </span>{" "}
                  Qualifications
                </h4>
                <ul>
                  <li className="pt-2 main-text list-style-none">
                    NuCamp's Full Stack Mobile and Web Development Bootcamp
                  </li>
                  <small className="main-text" style={{ fontSize: ".55rem" }}>
                    GRADUATED May 2023
                  </small>
                  <li className="pt-2 main-text list-style-none">
                    B.S. from The University of Montevallo
                  </li>
                  <small className="main-text" style={{ fontSize: ".55rem" }}>
                    GRADUATED 2013
                  </small>
                </ul>
              </div>
              <div className="col-lg-6 ">
                <h4 className="main-text text-center">
                  <span className="text-gradient border-style-one">Job </span>
                  Experience
                </h4>
                <ul>
                  <li className="pt-2 main-text list-style-none">
                    Crocodile Wine - Wine Sales Specialist
                  </li>
                  <small className="main-text" style={{ fontSize: ".55rem" }}>
                    Current work
                  </small>
                  <li className="pt-2 main-text list-style-none">
                    Windsor Boutique Hotel - Hotel Concierge
                  </li>
                  <small className="main-text" style={{ fontSize: ".55rem" }}>
                    Current work
                  </small>
                  <li className="pt-2 main-text list-style-none">
                    Bottle Riot - Bartender
                  </li>
                  <small className="main-text" style={{ fontSize: ".55rem" }}>
                    2017-2019
                  </small>
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
