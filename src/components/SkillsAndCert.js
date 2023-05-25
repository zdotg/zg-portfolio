import React from "react";
import "../styles/skillsAndCert.css";
import "../App.css";

const SkillsAndCerts = () => {
  return (
    <div class="card mx-auto pt-5 pb-5 skills-card">
      <div class="card-body d-flex align-items-center">
        <div class="col">
          <div class="pb-2">
            <div class="d-flex justify-content-between">
              <div class="col-lg-6 d-flex flex-column align-items-center">
                <h4 class="main-text">
                  <span class="text-gradient">Acedemic</span> Qualifications
                </h4>
                <ul></ul>
              </div>
              <div class="col-lg-6 d-flex flex-column align-items-center">
                <h4 class="main-text">
                  <span class="text-gradient">Job </span>Experience
                </h4>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndCerts;
