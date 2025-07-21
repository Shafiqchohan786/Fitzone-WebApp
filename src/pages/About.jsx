import React from "react";
import fitness1 from "../assets/fitness-image1.jpg";
import fitness2 from "../assets/fitness-image2.jpg";
import fitness3 from "../assets/fitness-image3.jpg";
import fitness4 from "../assets/fitness-image4.jpg";
import fitness5 from "../assets/fitness-image5.jpg";
import fitness6 from "../assets/fitness-image6.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About FitZone</h2>
      <p className="about-text">
        At <strong>FitZone</strong>, fitness is an art and science combined — where passion meets precision.
        Our expert trainers craft personalized programs designed to sculpt your body and empower your mind.
      </p>
      <p className="about-text">
        Join a community driven by ambition, sweat, and results. Here, every rep counts and every goal is within reach.
      </p>
      <p className="about-text">
        Whether you’re chasing strength, endurance, or wellbeing, FitZone transforms your vision into reality with innovation and heart.
      </p>

      <div className="gallery">
        <img src={fitness1} alt="Fitness 1" />
        <img src={fitness2} alt="Fitness 2" />
        <img src={fitness3} alt="Fitness 3" />
        <img src={fitness4} alt="Fitness 7" />
        <img src={fitness5} alt="Fitness 5" />
        <img src={fitness6} alt="Fitness 6" />
      </div>
    </section>
  );
};

export default About;
