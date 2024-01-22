// Header.js
import React from 'react';
import '../css/Header.css'; // Import your CSS file for styling
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header-section"> {/* Correct class name here */}
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
