import React from "react";
import fitnessImg from "../assets/fitness.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1>Welcome to Fitness</h1>
        <p>
          <strong>Transform your body and mind with FitZone.</strong>  
          Our expert trainers, modern equipment, and personalized plans help you achieve your fitness goals faster than ever.
        </p>
        <p>
          Join our vibrant community today! Whether you want to build muscle, lose weight, or boost endurance, we’re here to support your journey.
        </p>
        <button 
          className="btn-filled home-join-btn" 
          onClick={() => navigate("/register")}
        >
          Join Now
        </button>
      </div>
      <div className="home-right">
        <img src={fitnessImg} alt="Fitness" />
      </div>
    </section>
  );
};

export default Home;
