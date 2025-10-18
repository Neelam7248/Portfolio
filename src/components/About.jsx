import React from "react";
import "./About.css"; // 👈 make sure ye CSS import ho

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-item">
            <h3>🎓 Education</h3>
            <p>
              Master in IT from <strong>Virtual University of Pakistan</strong><br />
              Completed in 2022
            </p>
          </div>

          <div className="about-item">
            <h3>💼 Experience</h3>
            <p>1 year experience as a React Developer at Tech Solutions</p>
            <p>1 year experience as MERN Stack Developer (Independent Developer) </p>
          </div>

          <div className="about-item">
            <h3>💡 Interests</h3>
            <p>Web Development,

Full Stack Development,

MERN Stack Applications,

Frontend & Backend Integration,

Database Management (MongoDB, SQL),

Self-Directed Learning in IT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
