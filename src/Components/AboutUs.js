// import React from "react";
// import './AboutUs.css'
// function AboutUs() {
//   return (
//     <div className="about-box">
//         About us component works
//     </div>
//   );
// }

// export default AboutUs;

// AboutUsPage.jsx
import React from "react";
import "./AboutUs.css"; // Import the CSS file
import counseling  from '../assets/counseling.jpeg'
const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-header">
        <h1 className="title">About Us</h1>
        <p className="description">
          Flourish Counseling Space – An initiative by IMC (Institute of Mental
          Health and Counseling).
        </p>
      </div>

      <div className="about-us-content">
        <p className="my-color-black">
          Life throws curveballs: grief, job loss, relationship problems, confusion related to gender,
          and major life transitions. Anyone experiencing emotional distress, struggling with mental
          health conditions, couples and families facing relationship challenges, people seeking personal
          growth and self-improvement, and those who have experienced trauma, Flourishing Counseling Space
          will enable them to be catalysts by minimizing the damage of these negative attributions in their
          life. Counseling helps individuals navigate these challenges with resilience. It provides support
          and guidance during difficult times.
        </p>
        <p className="my-color-black">
          We will make you an instrument to help yourself with proven therapeutic techniques.
        </p>
      </div>

      <div className="about-us-image">
        <img src={counseling} height='200' width='200' alt="Counseling" />
      </div>
    </div>
  );
};

export default AboutUs;
