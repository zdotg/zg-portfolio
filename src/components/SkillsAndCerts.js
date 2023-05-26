import React from "react";
import "../styles/skillsAndCerts.css";
import "../App.css";

const SkillsAndCerts = () => {
  const skills = [
    { name: "Front-End Development", progress: 80 },
    { name: "Back-End Development", progress: 60 },
    { name: "Full-Stack Development", progress: 65 },
    { name: "Database and Data Management", progress: 75 },
    { name: "DevOps and Deployment", progress: 50 },
    { name: "Software Development Practices and Tools", progress: 85 },
    { name: "Additional Skills", progress: 90 },
  ];

  return (
    <div className="card skills-card">
      <div className="card-body">
        <h2 class="main-text text-center">Skills and Certifications</h2>
        {skills.map((skill) => (
          <div
            className="progress mb-3"
            key={skill.name}
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning text-dark text-start px-2"
              style={{ width: `${skill.progress}%` }}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndCerts;
