import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className='page-wrapper'>
    <div className='col'></div>
    <div className='col'>
        <h1 className="heading">Contact us to get a quote today!</h1>

            <div>
                <h2 className="subheading">Business Hours</h2>
                <ul className="list">
                <li className="listItem">Monday: 8:00 AM - 4:00 PM</li>
                <li className="listItem">Tuesday: 8:00 AM - 4:00 PM</li>
                <li className="listItem">Wednesday: 8:00 AM - 4:00 PM</li>
                <li className="listItem">Thursday: 8:00 AM - 4:00 PM</li>
                <li className="listItem">Friday: 8:00 AM - 4:00 PM</li>
                <li className="listItem">Saturday: Closed</li>
                <li className="listItem">Sunday: Closed</li>
                </ul>
            </div>

        <div>
            <h2 className="subheading">Contact Information</h2>
            <p>Phone: <a href="tel:+6157888044">615-788-8044</a></p>
            <br></br>
        </div>
        <br></br>
    </div>
    <div className='col'></div>
    </div>
  );
}

export default Contact;