import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const STYLES = ['buttonPrimary', 'buttonOutline'];

const SIZES = ['buttonMedium', 'buttonLarge'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href='/signup' passHref className={styles.btnMobile}>
        <button
          className={`${styles.button} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
    </Link>
  );
};
