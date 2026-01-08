import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
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
                                <a href="#" className="social-icon">F</a>
                                <a href="#" className="social-icon">X</a>
                                <a href="#" className="social-icon">IG</a>
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
