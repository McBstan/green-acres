import React from 'react';
import styles from './About.module.css';
// import TeamMember from './TeamMember';

function AboutUs() {
  return (
    <>
      <video playsInline src='/videos/Grass.mp4' autoPlay loop muted />

      <section className={styles.aboutUs}>
        <h2>Our Story</h2>
        <p>
          Welcome to GreenAcres Yardcare, your trusted partner for all your lawn and garden maintenance needs. We have been serving the Middle TN for 5 years, and our passion for creating beautiful outdoor spaces is unmatched.
        </p>

        <h2>Our Mission</h2>
        <p>
          At GreenAcres Yardcare, our mission is to provide top-notch lawn care and landscaping services to enhance the beauty and value of your property. We are committed to delivering exceptional customer service, using eco-friendly practices, and ensuring the health and vitality of your lawn and garden.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team of experienced professionals is dedicated to making your outdoor space the envy of the neighborhood. We take pride in our work and treat your property as if it were our own.
        </p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.whyWrapper}>
        <div className={styles.cols}></div>
        <ul className={styles.cols}>
          <li>Years of experience in lawn care</li>
          <li>Professional and friendly staff</li>
          <li>Customized solutions for your unique needs</li>
          <li>Environmentally friendly practices</li>
          <li>Affordable and competitive pricing</li>
        </ul>
        <div className={styles.cols}></div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
