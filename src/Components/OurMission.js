// src/components/CounselingIntro.js
import React from "react";
import "./OurMission.css"; // Import the CSS file
import { useNavigate } from 'react-router-dom'; 

const OurMission = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStarted = () => {
    navigate("/contactus"); // Change "/newpage" to your desired route
  };

  return (
    <section className="counseling-container">
      <div className="counseling-content">
        <h2 className="counseling-title">
          🌿 Flourish Counseling Space – Your Path to Healing & Growth
        </h2>
        <p className="counseling-text">
          At <strong>Flourish Counseling Space</strong>, an initiative by 
          <strong> IMC (Institute of Mental Health and Counseling)</strong>, we believe that 
          <span className="highlight"> no one should have to suffer from mental stress or anxiety alone.</span>
        </p>

        <p className="counseling-text">
          Life can be overwhelming—grief, job loss, relationship struggles, identity confusion, 
          and major life transitions can leave you feeling lost. Whether you're facing emotional 
          distress, battling mental health challenges, navigating relationship difficulties, or 
          seeking personal growth, <strong>we are here to support you.</strong>
        </p>

        <p className="counseling-text">
          Our compassionate counseling services empower you to overcome obstacles, heal from trauma, 
          and build resilience using <strong>proven therapeutic techniques.</strong> 
          We don’t just help—you become an active participant in your own healing journey.
        </p>

        <p className="counseling-text emphasis">
          💙 Let us guide you toward a healthier, happier you. Take the first step today!
        </p>

        <button className="counseling-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default OurMission;
