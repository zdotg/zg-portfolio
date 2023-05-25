import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import SkillsAndCerts from "./components/SkillsAndCert";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <About />
      <SkillsAndCerts />
    </div>
  );
};

export default App;
