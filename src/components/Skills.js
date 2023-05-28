import React from "react";
import "../styles/skills.css";
import "../App.css";

const Skills = () => {
  const skills = [
    { name: "Front-End Development 80%", progress: 80 },
    { name: "Back-End Development 60%", progress: 60 },
    { name: "Full-Stack Development 65%", progress: 65 },
    { name: "Database and Data Management 55%", progress: 55 },
    { name: "DevOps and Deployment 50%", progress: 50 },
    { name: "Software Development Practices and Tools 70%", progress: 70 },
    { name: "Communication and Teamwork 90%", progress: 90 },
  ];

  return (
    <div class="card skills-card" id="Skills">
      <div class="card-body mx-auto" style={{ width: "75%" }}>
        <h2 class="main-text text-center">Skills</h2>
        {skills.map((skill) => (
          <div
            class="progress mb-3"
            key={skill.name}
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-warning text-dark text-start px-2"
              style={{ width: `${skill.progress}%` }}
            >
              {skill.name}
            </div>
          </div>
        ))}
        <div class="row align-middle text-left mx-5 main-text">
          <div class="col-lg-3">
            <ul class="mb-3">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
              <li>Python</li>
              <li>jQuery</li>
              <li>SQL/PostgreSQL Databases</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="col-lg-3">
            <ul class="mb-3">
              <li>SCSS</li>
              <li>Responsive Web Design</li>
              <li>Mobile-First Design Principles</li>
              <li>Cross-Platform Design</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Passion to Learn</li>
              <li>Planning/Coordination with teams</li>
              <li>Wire-framing</li>
            </ul>
          </div>
          <div class="col-lg-3">
            <ul class="mb-3">
              <li>React.Js</li>
              <li>Redux/Context</li>
              <li>Dependencies</li>
              <li>React Native</li>
              <li>Android Studio/Emulators</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB/Atlas</li>
              <li>Docker and Kubernetes</li>
              <li>Version Control</li>
            </ul>
          </div>
          <div class="col-lg-3">
            <ul class="mb-3">
              <li>NoSQL Databases</li>
              <li>DevOps</li>
              <li>Flask/Insomnia</li>
              <li>CI/CD Pipelines</li>
              <li>Agile methods</li>
              <li>Network Infrastructure Administration</li>
              <li>Cloud Deployments (AWS, GCS, Azure)</li>
              <li>Software Development Lifecycle </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
