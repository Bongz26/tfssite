import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Column 1: Links */}
                        <div className="footer-col">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#claims">Claims</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Contact Info */}
                        <div className="footer-col">
                            <h3>Contact Us</h3>
                            <ul className="contact-info">
                                <li>
                                    <span className="icon">📞</span>
                                    <span>08000 14 5745</span>
                                </li>
                                <li>
                                    <span className="icon">✉️</span>
                                    <span>info@thusanangfs.co.za</span>
                                </li>
                                <li>
                                    <span className="icon">📍</span>
                                    <span>Site 1, Portion 2 Beirut, Phuthaditjhaba<br />South Africa</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Social & About */}
                        <div className="footer-col">
                            <h3>Connect With Us</h3>
                            <p className="footer-about-text">
                                Providing dignified funeral services with compassion and respect. We are here for you 24/7.
                            </p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/ThusanangFS" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon" aria-label="X (Twitter)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container flex justify-between items-center footer-legal-content">
                    <div className="fsp-text">
                        Thusanang Funeral Services is an Authorized Financial Services Provider.
                    </div>
                    <div className="developed-by">
                        Developed by <a href="https://dondastech.co.za" target="_blank" rel="noopener noreferrer">Dondas Tech</a>
                    </div>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <span className="divider">|</span>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
