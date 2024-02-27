import React from 'react';
import logo from '../asserts/logo.png';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="Company logo" />
    </div>
  );
}

export default Header;
