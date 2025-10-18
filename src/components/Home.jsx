import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="home d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h1>
        Hello, I'm <span>Neelam Kausar</span>
      </h1>
      <p>A passionate React Developer from Pakistan 🇵🇰</p>
      <a href="#projects" className="btn btn-custom mt-3">
        View My Work
      </a>
    </section>
  );
};

export default Home;
