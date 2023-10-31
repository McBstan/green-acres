import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick]  = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        GreenAcres
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                      <FontAwesomeIcon icon={click ?  faXmark : faBars}></FontAwesomeIcon>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>   
                        <li>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li> */}
                        <li>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Request Quote
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar