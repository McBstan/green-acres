import React, { useEffect } from 'react';
import styles from './HeroSection.module.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

function HeroSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loadFormScript = () => {
    // Create a script element and load the external form script
    const script = document.createElement('script');
    script.id = 'work-request-script';
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.async = true;
    script.setAttribute('clienthub_id', '63a1eb07-1b81-43e0-b71f-81e05ca2e88e');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/63a1eb07-1b81-43e0-b71f-81e05ca2e88e/public/work_request/embedded_work_request_form');
    document.body.appendChild(script);
  };

  useEffect(() => {
    // Load the CSS only once when the component mounts
    const link = document.createElement('link');
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.rel = 'stylesheet';
    link.media = 'screen';
    document.head.appendChild(link);

    return () => {
      // Clean up the link when the component unmounts
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadFormScript();
    } else {
      // Close the modal and remove the script
      const script = document.getElementById('work-request-script');
      if (script) {
        script.remove();
      }
      // Attempt to reset reCAPTCHA if it's part of the form
      if (window.grecaptcha && window.grecaptcha.reset) {
        window.grecaptcha.reset();
      }
    }
  }, [isOpen]);

  return (
    <div>
      <video playsInline={true} src='/videos/LawnmowerOptimizedMore.mp4' autoPlay loop muted className={styles.video} />
      <div className={styles.heroContainer}>
        <h1>Achieve Greenness</h1>
        <p>What are you waiting for?</p>
        <div className={styles.heroBtns}>
          <button
            className={`${styles.button} ${styles.buttonOutline}`}
            onClick={onOpen}
          >
            REQUEST QUOTE
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* The form container */}
            <div id="63a1eb07-1b81-43e0-b71f-81e05ca2e88e"></div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HeroSection;
