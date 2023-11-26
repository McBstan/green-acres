import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import styles from './HeroSection.module.css'; // Import as a module

function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log('Error playing the video:', error));
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} playsInline={true} src='/videos/Lawnmower.mp4' autoPlay loop muted />
      <div className={styles.heroContainer}>
        <h1>Achieve Greenness</h1>
        <p>What are you waiting for?</p>
        <div className={styles.heroBtns}>
          <Button
            buttonStyle='buttonOutline'
            buttonSize='buttonLarge'
          >
            REQUEST QUOTE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
