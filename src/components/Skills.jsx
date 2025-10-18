import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillList = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB","Canva"];

  return (
    <section id="skills" className="skills text-center">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <div className="skill-badge" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
