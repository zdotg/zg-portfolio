import React from "react";
import "../styles/certs.css";
import "../App.css";
import Bootstrap from "../images/certificates/Bootstrap.png";
import DSA from "../images/certificates/Data_StructuresandAlgos.png";
import ReactNative from "../images/certificates/React_Native.png";
import FrontEnd from "../images/certificates/Front_End_WebandMobile.png";
import FullStack from "../images/certificates/Full_Stack_WebandMobile.png";
import HCJ from "../images/certificates/HTML_CSS_JS.png";
import ReactCert from "../images/certificates/React.png";
import SQLDevops from "../images/certificates/Sql_Devops_Python.png";
import Modern from "../images/certificates/ModernSWE.png";
import SQLData from "../images/certificates/Sql_Data_MOdeling.png";

const Certs = () => {
  return (
    <div class="card certs-card certs-border">
      <div class="card-body">
        <h2 class="main-text text-center">Certificates</h2>
        <div class="row text-center pb-5">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={HCJ}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">Web Dev Fundamentals Bootcamp</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={DSA}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">
                Python Fundamentals Data Structures, and Algorithms
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={SQLData}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">SQL and Python</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={Modern}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">Modern Software Engineering with DevOps</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={SQLDevops}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">Backend Python, SQL, and Devops Bootcamp</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={Bootstrap}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">Front-End Web UI Framework: Bootstrap</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={ReactCert}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">Front End JavaScript Library: React</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={ReactNative}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">
                Multiplatform Mobile App Development with React Native
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={FrontEnd}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">
                Front End Web and Mobile Development Bootcamp
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div>
              <img
                class="enlarge"
                src={FullStack}
                width="250"
                height="300"
                alt="Web Dev"
              />
              <p class="main-text">
                Server-side Development with NodeJS Express and MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certs;
