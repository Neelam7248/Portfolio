import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Library App",
      desc: "MERN Stack based library system with PDF preview and book management.",
      link: "https://github.com/Neelam7248/library"
    },
    {
      name: "Home Service App",
      desc: "MERN Stack project with CRUD operations and popup forms,Serves as a platform for searching need based employer and workers as cooks, baby sitters and maid ."
      ,
      link: "https://github.com/Neelam7248/HomeCareSystem"
    },{
      name: "Simple Apps",
      desc: "MERN Stack project with simple Apps."
      ,
      link: "https://github.com/Neelam7248/SimpleApps"
    },{
      name: "Ecommerce",
      desc: "MERN Stack project with CRUD operations and popup forms,Serves as customer Portal for selecting Product."
      ,
      link: "https://github.com/Neelam7248/Ecommerce"
    },{
      name: "IR-QuailFarm",
      desc: "MERN Stack project  work as Task manager."
      ,
      link: "https://github.com/Neelam7248/IR-QuailFarm"
    },{
      name: "Simple-Gemini-Integrated-Form",
      desc: "MERN Stack project with Gemini integration."
      ,
      link: "https://github.com/Neelam7248/Gemini-Integrated-Form"
    }
  ];

  return (
    <section id="projects" className="projects text-center">
      <h2 className="section-title">Projects</h2>
      <div className="project-list container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
