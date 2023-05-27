import React from "react";
import "../styles/certs.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "../images/certificates/Bootstrap.png";
import DSA from "../images/certificates/Data_StructuresandAlgos.png";
import FrontEnd from "../images/certificates/Front_End_WebandMobile.png";
import FullStack from "../images/certificates/Full_Stack_WebandMobile.png";
import HCJ from "../images/certificates/HTML_CSS_JS.png";
import ReactCert from "../images/certificates/React.png";
import SQLDevops from "../images/certificates/Sql_Devops_Python.png";

const Certs = () => {
  return (
    <div class="card certs-card">
      <div class="card-body">
        <h2 class="main-text text-center">Certificates</h2>
        <div id="certsCarousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item d-flex justify-content-center active">
              <img
                src={Bootstrap}
                class="d-block w-25"
                alt="Bootstrap Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={DSA}
                class="d-block w-25"
                alt="Data Structures and Algorithms Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={FrontEnd}
                class="d-block w-25"
                alt="Front End Mobile and Web Dev Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={FullStack}
                class="d-block w-25"
                alt="Full Stack Mobile and Web Dev Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={HCJ}
                class="d-block w-25"
                alt="HTML, CSS, Javascript Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={ReactCert}
                class="d-block w-25"
                alt="React Certificate"
              />
            </div>
            <div class="carousel-item d-flex justify-content-center">
              <img
                src={SQLDevops}
                class="d-block w-25"
                alt="SQL and Devops Certificate"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#certsCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#certsCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certs;
