import React from 'react';
import { Button } from './Button';
import styles from './Footer.module.css'; // Assuming you use CSS Modules
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerSubscription}>
        {/* Subscription section */}
        <p className={styles.footerSubscriptionHeading}>
          Join the Landscaping newsletter to receive our best deals
        </p>
        <p className={styles.footerSubscriptionText}>
          You can unsubscribe at any time.
        </p>
        <div className={styles.inputAreas}>
          {/* Form (assuming using Netlify or similar for handling) */}
          <form name="contact v1" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact v1" />
            <input
              className={styles.footerInput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button type="submit" buttonStyle='buttonOutline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className={styles.footerLinks}>
        <div className={styles.footerLinkItemsHeader}>
          <p><strong>Socials</strong></p>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            {/* External Links should still use 'a' tags */}
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
