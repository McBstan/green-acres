import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import styles from './Navbar.module.css'; // Import as a module

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        const handleResize = () => showButton();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
                    GreenAcres
                </Link>
                <div className={styles.menuIcon} onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </div>
                <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                    <li>
                        <Link href='/home' className={styles.navLinks} onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/services' className={styles.navLinks} onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    {/* <li>
                            <Link href='/products' className={styles.navLinks} onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li> */}
                    <li>
                        <Link href='/aboutus' className={styles.navLinks} onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className={`${styles.navLinks} ${styles.desktopOnly}`}>
                        <Link href = 'https://clienthub.getjobber.com/client_hubs/63a1eb07-1b81-43e0-b71f-81e05ca2e88e/login/new?source=share_login' onClick={closeMobileMenu}>
                            My Quotes
                        </Link>
                    </li>
                    <li>
                        <Link href = 'https://clienthub.getjobber.com/client_hubs/63a1eb07-1b81-43e0-b71f-81e05ca2e88e/login/new?source=share_login' className={styles.navLinksMobile} onClick={closeMobileMenu}>
                            View Invoice
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup' className={styles.navLinksMobile} onClick={closeMobileMenu}>
                            Request Quote
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='buttonOutline'>Contact Us</Button>}
            </div>
        </nav>
    );
}

export default Navbar;
