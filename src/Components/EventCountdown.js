import React, { useState, useEffect, useMemo } from 'react';
import './EventCountdown.css';
import { useNavigate } from 'react-router-dom';

const EventCountdown = () => {
  const navigate = useNavigate();

  const goToContactUsPage = () => {
    navigate("/fcs/contactus");
  };

  // Updated event date to 27th July 2025
  const eventDate = useMemo(() => new Date('2025-07-27T00:00:00'), []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  function calculateTimeLeft(eventDate) {
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) return null;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="event-container">
      <div className="event-header">
        <h1>Counseling Event - 27th July</h1>
        <p>Join us for a mental health counseling session—online or in-person—at just ₹999!</p>
      </div>

      <div className="event-details">
        <div className="event-countdown">
          <h2>Countdown to Event</h2>
          {timeLeft ? (
            <div className="countdown-timer">
              <div className="time-unit">
                <span>{timeLeft.days}</span>
                <p>Days</p>
              </div>
              <div className="time-unit">
                <span>{timeLeft.hours}</span>
                <p>Hours</p>
              </div>
              <div className="time-unit">
                <span>{timeLeft.minutes}</span>
                <p>Minutes</p>
              </div>
              <div className="time-unit">
                <span>{timeLeft.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          ) : (
            <p>The event has started!</p>
          )}
        </div>

        <div className="event-info">
          <h2>Event Details</h2>
          <p>
            On 27th July, we will be hosting a <strong>Counseling Event</strong> for individuals, families, and communities. Whether you're facing personal challenges, need guidance, or simply want to talk with a compassionate professional, this event is for you.
          </p>
          <p>
            <span className="price-highlight"><strong>Price:</strong> <del>₹2000</del> ₹999 only!!</span>
          </p>
          <p>
            <strong>Location:</strong> Choose between <a href="https://maps.app.goo.gl/NX9oedCEcu8ukWFv6" target="_blank" rel="noopener noreferrer"><strong>In-person</strong></a> at our counseling center or join us <a href="https://wa.me/919937190927" target="_blank" rel="noopener noreferrer"><strong>Online</strong></a> for a virtual session. Whatever works best for you!
          </p>
          <div className="rush-warning">
            <h3>🚨 High Rush! 🚨</h3>
            <p>
              Due to high demand, we recommend booking your session at least <strong>24 hours prior</strong> to the event to secure your spot and get your session confirmed.
            </p>
          </div>
          <button className="counseling-button" onClick={goToContactUsPage}>Book Your Session</button>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
