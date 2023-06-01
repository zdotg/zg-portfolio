import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Certs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
