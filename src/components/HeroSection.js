import {React,useEffect,useRef} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log('Error playing the video:', error));
    }
  }, []);

  return (
    <>
    <video ref={videoRef} playsInline="true" src='/videos/Lawnmower.mp4' autoPlay loop muted />
      <div className='hero-container'>
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
    </>
  );
}

export default HeroSection;