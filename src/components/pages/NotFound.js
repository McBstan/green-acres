import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

export default function NotFound() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <br></br>
        <br></br>
        {/* <h2>Page not found!</h2> */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
        <p>Go to the <Link to="/">Homepage</Link>.</p>
      </div>
    );
  }