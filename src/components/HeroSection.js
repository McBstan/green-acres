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
      <video ref={videoRef} playsInline={true} src='/videos/LawnmowerOptimizedMore.mp4' autoPlay loop muted />
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
          {/* <button name="button" type="button" id="work-request-button-63a1eb07-1b81-43e0-b71f-81e05ca2e88e" style="display: inline-flex;color:#ffffff;background-color:#7db00e;align-items:center;justify-content:center;min-height:36px;padding:8px 12px;font-family:'Noto Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:1;-webkit-font-smoothing:antialiased;-webkit-appearance:none;text-align:center;text-decoration:none;border:1px solid transparent;border-radius:4px;outline:none;cursor:pointer;vertical-align:middle;">
            REQUEST</button>
            <link rel="stylesheet" media="screen" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" />
            <script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js" clienthub_id="63a1eb07-1b81-43e0-b71f-81e05ca2e88e" form_url="https://clienthub.getjobber.com/client_hubs/63a1eb07-1b81-43e0-b71f-81e05ca2e88e/public/work_request/embedded_dialog_work_request_form">
          </script> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
