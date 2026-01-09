import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onPayPremium }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container flex justify-between items-center">
          <div className="top-left">
            📧 info@thusanang.co.za | 📞 0800 014 5745
          </div>
          <div className="top-right">
            Career/Branches
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container">
          <div className="logo">
            <div className="logo-wrapper">
              <div className="logo-main">THUSANANG</div>
              <div className="logo-sub">FUNERAL SERVICES</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links desktop-only">
            <a href="#home" className="active">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#caskets">Caskets</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="cta-group desktop-only">
            <button className="btn btn-premium" onClick={onPayPremium}>
              💳 Pay Premium
            </button>
            <button className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn mobile-only" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a href="#home" onClick={closeMobileMenu}>Home</a>
              <a href="#about" onClick={closeMobileMenu}>About Us</a>
              <a href="#services" onClick={closeMobileMenu}>Services</a>
              <a href="#caskets" onClick={closeMobileMenu}>Caskets</a>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </nav>
            <div className="mobile-cta">
              <button className="btn btn-premium btn-block" onClick={() => { onPayPremium(); closeMobileMenu(); }}>
                💳 Pay Premium
              </button>
              <button className="btn btn-primary btn-block">
                📞 Call Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
