import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// let testForm = document.querySelector("#contact form")

// testForm.addEventListener('submit',e => {
//   e.preventDefault();

//   const formData = new FormData(testForm);
//   fetch(testForm.getAttribute('action'), {
//     method: 'POST',
//     headers: {
//       'Accept' : 'application/x-www-form-urlencoded; charset = UTF-8',
//       'Content-Type' : 'application/x-www-form-urlencoded; charset = UTF-8'
//     },
//     body: new URLSearchParams(formData).toString()
//   })
//   .then(() => console.log("Form successfully submitted"))
//   .catch((error) => alert(error));
// });

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Landscaping newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form name ="contact v1" method="POST" data-netlify="true" onSubmit={"submit"}>
          <input type="hidden" name="form-name" value="contact v1" />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
            <div class= 'footer-link-items-header'>
              <h3>Socials</h3>
            </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          {/* <div className='footer-link-wrapper'> */}
            
            <div class='footer-link-items'>
              <Link to='https://instagram.com/greenacres_yardcare'>Instagram</Link>
              <Link to='https://www.facebook.com/GreenAcresYardcare'>Facebook</Link>
            </div>
          {/* </div> */}
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            GreenAcres
            </Link>
          </div>
          <small class='website-rights'>GreenAcres Yardcare © 2023</small>
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa-brands fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa-brands fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;