import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image">
                    {/* Placeholder for now, later we copy one of the user images here */}
                    <div className="img-placeholder" style={{ backgroundImage: "url('/about-img.jpg')" }}></div>
                </div>
                <div className="about-content">
                    <h4 className="sub-heading">WHO WE ARE</h4>
                    <h2 className="main-heading">Compassionate <span className="highlight">Care</span> When You Need It Most</h2>
                    <p className="description">
                        Funeral Services has been a pillar of strength for families during their most difficult times.
                        We understand that arranging a funeral is not just about logistics—it is about honoring a life lived.
                    </p>
                    <p className="description">
                        Our dedicated team provides dignified, professional, and personalized services to ensure your loved ones
                        are laid to rest with the respect they deserve. From our premium fleet to our compassionate staff,
                        we are with you every step of the way.
                    </p>
                    <button className="btn btn-primary">Read More About Us</button>
                </div>
            </div>
        </section>
    );
};

export default About;
