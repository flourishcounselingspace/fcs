import React from 'react';
import './MissionInfo.css';

const MissionInfo = () => {
  return (
    <div className="mission-container">
      <section className="section">
        <h2 className="section-title">🌿 What Sets Us Apart</h2>
        <p>
          At Flourish Counseling Space, we believe that mental health care should feel personal, compassionate, and accessible to everyone. Our team of experienced, empathetic therapists offers a wide range of therapy options tailored to meet your unique needs. What truly sets us apart is our commitment to inclusivity—we provide services in <strong>Telugu, English, Hindi, Bengali, and Odia</strong>, so you can feel truly understood in the language that feels most natural to you. Wherever you are on your mental health journey, we’re here to support you with warmth, respect, and cultural sensitivity.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">🎯 Mission</h2>
        <p>
          Our mission is to provide compassionate, expert, and client-centered counseling services that help individuals, families, and communities grow, heal, and thrive. We are committed to making mental health support accessible and effective for people from all walks of life.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">💬 Why It Matters</h2>
        <p>
        At our mental health counseling center, your well-being is our highest priority. We understand that reaching out for support takes courage, and we’re here to meet you with compassion, understanding, and expertise. Our space is intentionally designed to be safe, inclusive, and free of judgment—where you can speak freely and feel truly heard. Whether you're facing life’s challenges, navigating emotional pain, or seeking personal growth, we are here to walk alongside you. Together, we’ll explore your path to healing, build resilience, and move toward the goals that matter most to you.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">🌱 Our Core Values</h2>
        <ul className="values-list">
          <li><span>🧡</span><strong>Compassion:</strong> Treating each person with care, empathy, and respect.</li>
          <li><span>🔒</span><strong>Confidentiality:</strong> Maintaining the highest privacy standards for all personal information.</li>
          <li><span>🌍</span><strong>Diversity & Inclusion:</strong> Embracing every individual’s background and identity.</li>
          <li><span>🎯</span><strong>Personalized Care:</strong> Creating tailored solutions for unique personal needs and goals.</li>
          <li><span>🛠️</span><strong>Client-Centered Approach:</strong> Every session is adapted to your preferences—healing isn't one-size-fits-all.</li>
        </ul>
      </section>
    </div>
  );
};

export default MissionInfo;
