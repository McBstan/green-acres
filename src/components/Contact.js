import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <>
    <video playsInline src='/videos/Grass.mp4' autoPlay loop muted />
      <section className={styles.contactSection}>
        <h2>Get a quote today!</h2>

        <div className={styles.businessHours}>
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

        <div className={styles.contactInfo}>
          {/* <h3>Call Anytime</h3> */}
          <p>Phone: <a href="tel:+6157888044">615-788-8044</a></p>
        </div>

        
      </section>
    </>
  );
}

export default Contact;
