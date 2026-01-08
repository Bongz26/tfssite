import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onPayPremium }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar for contact info */}
      <div className="top-bar">
        <div className="container flex justify-between items-center">
          <div className="top-contact">
            <span>Toll Free: <strong>08000 14 5745</strong></span>
          </div>
          <div className="top-links">
            {/* Placeholder for social links or secondary nav */}
            <a href="#">Career</a>
            <a href="#">Branches</a>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <div className="logo-wrapper">
              <div className="logo-main">THUSANANG</div>
              <div className="logo-sub">FUNERAL SERVICES</div>
            </div>
          </div>

          <nav className="nav-links desktop-only">
            <a href="#home" className="active">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="cta-group flex items-center gap-4">
            <button className="btn btn-premium" onClick={onPayPremium}>
              💳 Pay Premium
            </button>
            <button className="btn btn-secondary">Get a Quote</button>
            <button className="btn btn-primary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call Me Back
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
