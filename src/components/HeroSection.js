import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video playsInline src='/videos/Lawnmower.mp4' autoPlay loop muted />
      <h1>Achieve Greenness</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REQUEST QUOTE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;