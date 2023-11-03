import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './ServicesHero.css';

function ServicesHero() {
  return (
    <div className='services-hero-container'>
      <video playsInline src='/videos/Grass.mp4' autoPlay loop muted />
      <h1>Services</h1>
      {/* <p>What are you waiting for?</p>
      <div className='services-hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REQUEST QUOTE
        </Button>
      </div> */}
    </div>
  );
}

export default ServicesHero;