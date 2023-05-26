import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import SkillsAndCerts from "./components/SkillsAndCerts";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <SkillsAndCerts />
    </div>
  );
};

export default App;
