import React, { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [email, setEmail] = useState('');

  const showToast = (message, duration = 3000) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, duration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formProps).toString(),
    })
    .then(() => {
      showToast('Subscription successful!');
      setEmail('');
    })
    .catch((error) => {
      showToast('Subscription failed. Please try again.');
    });
  };

  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerSubscription}>
        <p className={styles.footerSubscriptionHeading}>
          Join the Landscaping newsletter to receive our best deals
        </p>
        <p className={styles.footerSubscriptionText}>
          You can unsubscribe at any time.
        </p>

        {isToastVisible && (
        <div className={`${styles.toast} ${isToastVisible ? styles.show : ''}`}>
          {toastMessage}
        </div>
      )}

        <div className={styles.inputAreas}>
        <form name="newsletter-signup" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="newsletter-signup" />
          <input
            className={styles.footerInput}
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            required
          />
          <button type="submit" className={styles.buttonOutline}>Subscribe</button>
        </form>
      </div>
      </section>

      <div className={styles.footerLinks}>
        <div className={styles.footerLinkItemsHeader}>
          <p><strong>Socials</strong></p>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <a href='https://instagram.com/greenacres_yardcare' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.facebook.com/GreenAcresYardcare' target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <div>
            <Link href='/'>GreenAcres</Link>
          </div>
          <small className={styles.websiteRights}>GreenAcres Yardcare © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
