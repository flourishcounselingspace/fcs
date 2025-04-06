import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from react-icons
import './FaqComponent.css'; // Import custom CSS

const FaqComponent = () => {
  const faqs = [
    { question: "What is counseling?", answer: "Counseling is a professional relationship that helps you explore emotions, thoughts, and behaviors to enhance personal well-being." },
    { question: "How do I make an appointment?", answer: "You can make an appointment by calling our center or filling out the online form on our website." },
    { question: "What types of counseling do you offer?", answer: "We offer individual, couple, family, and group counseling services." },
    { question: "Are the sessions confidential?", answer: "Yes, all counseling sessions are confidential, and we adhere to strict ethical standards." },
    { question: "How long is a typical counseling session?", answer: "A typical session lasts between 45 minutes to an hour." },
    { question: "What should I expect during my first session?", answer: "During your first session, we’ll discuss your concerns and establish goals for therapy." },
    { question: "Do you offer online counseling?", answer: "Yes, we offer online counseling sessions via secure video conferencing." },
    { question: "How much do your services cost?", answer: "Please contact us for detailed information regarding pricing and payment options." },
    { question: "Do you accept insurance?", answer: "Yes, we accept several insurance plans. Please check with us to confirm if your insurance provider is covered." },
    { question: "Can I cancel or reschedule my appointment?", answer: "Yes, you can cancel or reschedule with at least 24 hours notice." },
    { question: "What is the cancellation policy?", answer: "If you cancel within 24 hours, you will be charged a cancellation fee." },
    { question: "How do I prepare for a counseling session?", answer: "There’s no specific preparation required, but it helps to reflect on the issues you’d like to discuss." },
    { question: "Can I bring a family member to my session?", answer: "Yes, family members can join if you feel it would be beneficial to your session." },
    { question: "How do I know if counseling is right for me?", answer: "If you are experiencing emotional distress, or feel stuck in life, counseling can help you gain clarity and direction." },
    { question: "How many sessions will I need?", answer: "The number of sessions varies depending on the individual’s goals and progress." },
    { question: "Can I change counselors if I don't feel comfortable?", answer: "Yes, you can request to work with a different counselor if you feel it’s necessary." },
    { question: "What are the benefits of counseling?", answer: "Counseling can help you improve your mental health, solve personal issues, and develop coping strategies." },
    { question: "Is counseling only for people with mental health problems?", answer: "No, counseling is for anyone who wants to improve their personal well-being or navigate life challenges." },
    { question: "Do you offer counseling for children and teenagers?", answer: "Yes, we offer age-appropriate counseling for children and teens." },
    { question: "How do I know if my counselor is qualified?", answer: "All of our counselors are licensed and have extensive training in their respective areas of expertise." },
  ];

  // State to keep track of active FAQ item
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (index) => {
    setActiveKey(activeKey === index ? null : index); // Toggle the active state
  };

  return (
    <div className="faq-container">
      <h2 className="white-color">Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question"
              onClick={() => handleToggle(index)} // Toggle on click
            >
              <span>{faq.question}</span>
              <span className="faq-toggle-icon">
                {activeKey === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {activeKey === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
