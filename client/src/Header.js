import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="hello">Your Clinic helloo Logo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/branches">Branches</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
