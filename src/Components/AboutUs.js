import React from "react";
import "./AboutUs.css"; // Import the CSS file
import dnPhoto from '../assets/dnPhoto2.jpeg';  // Import images from your project
import rkPhoto from '../assets/rkPhoto.jpg';  // Import images from your project

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      {/* Header Section */}
      <div className="about-us-header">
        <h2 className="description">
          🌿 Flourish Counseling Space – An initiative by IMC (Institute of Mental Health and Counseling)
        </h2>
      </div>

      {/* Content Section */}
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
          <strong>We will make you an instrument to help yourself with proven therapeutic techniques.</strong>
        </p>
      </div>

      {/* Counselor Image Section with Details */}
      <div className="about-us-images">
        <div className="image-wrapper">
          <img src={dnPhoto} alt="Counselor 1" className="round-image" />
         
        </div>
        <div className="counselor-details">
            <h3 className="counselor-name">Dr. Durgesh Nandinee</h3>
            <p className="experience">Ph.D. Psychology M.Sc, Health Psychology.</p>
            <p className="experience">12 years of experience</p>
            <div className="expertise">
              <h4>Expertise:</h4>
              <ul>
                <li>Stress and anxiety management</li>
                <li>Adjsutment issues</li>
                <li>Cognitive Behavioral Therapy(CBT)</li>
                <li>Depression</li>
                <li>Addiction</li>
                <li>Workplace conflict</li>
                <li>Marital/Relationship Counseling</li>
                <li>Postpartum depression</li>
                <li>Career counseling</li>
                <li>Gender dysphoria</li>
              </ul>
            </div>
            <div className="languages">
              <h4>Speaks:</h4>
              <p>English, Hindi, Bengali, Odiya, Telugu</p>
            </div>
          </div>
        <div className="image-wrapper">
          <img src={rkPhoto} alt="Counselor 2" className="round-image" />
        </div>
        <div className="counselor-details">
            <h3 className="counselor-name">Raghu Kiran Bolle</h3>
            <p className="experience">MPhil in Rehabilitation Psychology(RCI licensed) IM.Sc, Health Psychology, PGD in Psychological Counseling.</p>
            <p className="experience">5+ years of experience</p>
            <div className="expertise">
              <h4>Expertise:</h4>
              <ul>
                <li>Psychological Assessments & Diagnosis</li>
                <li>Behavioral Therapy</li>
                <li>Stress management</li>
                <li>Autism Spectrum & ADHD Support</li>
                <li>Anxiety Disorders</li>
                <li>Relationship Counseling/Couple Counseling</li>
                <li>Pre & Post Marital Counseling</li>
                <li>Clinical Depression</li>
                <li>Career Guidance</li>
              </ul>
            </div>
            <div className="languages">
              <h4>Speaks:</h4>
              <p>Telugu, Hindi, and English</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
