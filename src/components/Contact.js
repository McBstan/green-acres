import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
    <video playsInline src='/videos/Grass.mp4' autoPlay loop muted />
      <section className="contact-section">
        <h2>Contact us to get a quote today!</h2>

        <div className="business-hours">
          <h3>Business Hours</h3>
          <ul>
            <li>Monday: 8:00 AM - 4:00 PM</li>
            <li>Tuesday: 8:00 AM - 4:00 PM</li>
            <li>Wednesday: 8:00 AM - 4:00 PM</li>
            <li>Thursday: 8:00 AM - 4:00 PM</li>
            <li>Friday: 8:00 AM - 4:00 PM</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Phone: <a href="tel:+6157888044">615-788-8044</a></p>
        </div>
      </section>
    </>
  );
}

export default Contact;
