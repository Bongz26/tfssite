import React from 'react';
import './Hero.css';

const Hero = ({ onOpenService }) => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Honoring Lives with <span className="highlight-text">Dignity & Respect</span>
                        </h1>
                        <p className="hero-subtitle">
                            Comprehensive funeral services and affordable cover plans designed to give
                            you and your family peace of mind during difficult times.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">25+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">10,000+</div>
                                <div className="stat-label">Families Served</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Available</div>
                            </div>
                        </div>

                        <div className="hero-cta">
                            <button
                                className="btn-hero-primary"
                                onClick={() => onOpenService({
                                    title: "Funeral Cover",
                                    description: "Affordable and comprehensive funeral plans designed to give you peace of mind."
                                })}
                            >
                                View Funeral Plans
                            </button>
                            <a href="tel:0800014574" className="btn-hero-secondary">
                                <svg className="phone-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Call: 0800 014 5745
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-aside">
                    <div className="quick-links-card">
                        <h3 className="card-title">Quick Access</h3>
                        <div className="quick-links">
                            <button
                                className="quick-link-btn"
                                onClick={() => onOpenService({
                                    title: "Funeral Cover",
                                    description: "Affordable and comprehensive funeral plans"
                                })}
                            >
                                <svg className="link-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="9" x2="15" y2="9"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                </svg>
                                <div className="link-content">
                                    <span className="link-title">Funeral Cover</span>
                                    <span className="link-desc">View our plans</span>
                                </div>
                                <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                            <button
                                className="quick-link-btn"
                                onClick={() => onOpenService({
                                    title: "Burial Services",
                                    description: "Dignified burial services including repatriation and storage"
                                })}
                            >
                                <svg className="link-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <div className="link-content">
                                    <span className="link-title">Burial Services</span>
                                    <span className="link-desc">Complete arrangements</span>
                                </div>
                                <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                            <button
                                className="quick-link-btn"
                                onClick={() => onOpenService({
                                    title: "Tombstones & Memorials",
                                    description: "Lasting tributes to honor your loved ones"
                                })}
                            >
                                <svg className="link-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                </svg>
                                <div className="link-content">
                                    <span className="link-title">Tombstones</span>
                                    <span className="link-desc">Beautiful memorials</span>
                                </div>
                                <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                            <button
                                className="quick-link-btn"
                                onClick={() => {
                                    const element = document.getElementById('caskets');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <svg className="link-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                </svg>
                                <div className="link-content">
                                    <span className="link-title">Our Collection</span>
                                    <span className="link-desc">View our full range</span>
                                </div>
                                <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>

                        <div className="card-footer">
                            <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p className="footer-text">
                                Available 24/7 for your convenience
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-bottom-wave"></div>
        </section>
    );
};

export default Hero;
