import React, { useState } from 'react';
import './CasketGallery.css';

const CasketGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const caskets = [
        {
            id: 1,
            name: 'PONGEE HALFVIEW',
            wood: 'KIAAT',
            category: 'halfview',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/pongee-halfview-kiaat.png'
        },
        {
            id: 2,
            name: 'RAISED HALFVIEW',
            wood: 'WALNUT',
            category: 'halfview',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/raised-halfview-walnut.png'
        },
        {
            id: 3,
            name: 'PORTHOLE',
            wood: 'walnut',
            category: 'premium',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/porthole-walnut.png'
        },
        {
            id: 4,
            name: '4 TIER PRESTIGE',
            wood: 'MOUNTAIN ASH',
            category: 'prestige',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry, mountain ash',
            image: '/caskets/4-tier-prestige-mountain-ash.jpg'
        },
        {
            id: 5,
            name: 'PRINCETON DOME',
            wood: 'PRESTIGE CHERRY',
            category: 'dome',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/princeton-dome-cherry.jpg'
        },
        {
            id: 6,
            name: 'STANDARD DOME',
            wood: 'IRON WOOD',
            category: 'dome',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/standard-dome-ironwood.jpg'
        },
        {
            id: 7,
            name: '4 CORNER WOOD TURNING DOME',
            wood: 'KIAAT',
            category: 'dome',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/4-corner-wood-turning-kiaat.jpg'
        },
        {
            id: 8,
            name: '4 CORNER FIGURINE DOME',
            wood: 'WALNUT',
            category: 'dome',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/4-corner-figurine-walnut.jpg'
        },
        {
            id: 9,
            name: 'ROYAL DOME',
            wood: 'OAK',
            category: 'dome',
            description: 'Available in kiaat, fitzroy walnut, prestige cherry',
            image: '/caskets/royal-dome-oak.jpg'
        },
        {
            id: 10,
            name: 'SKINZ LEATHER DOME',
            wood: 'CHERRY ALLIGATOR',
            category: 'luxury',
            description: 'Available in cherry alligator, pecan ostrich',
            image: '/caskets/skinz-leather-cherry-alligator.jpg'
        },
        {
            id: 11,
            name: 'SKINZ LEATHER DOME',
            wood: 'NGUNI BROWN',
            category: 'luxury',
            description: 'Available in brown Nguni, black Nguni',
            image: '/caskets/skinz-nguni-brown.jpg'
        },
        {
            id: 12,
            name: 'HAVARD',
            wood: 'TAN',
            category: 'premium',
            description: 'Available in tan, mountain ash',
            image: '/caskets/havard-tan.jpg'
        },
        {
            id: 13,
            name: 'OXFORD',
            wood: 'PECAN',
            category: 'premium',
            description: 'Available in cherry, pecan, cedar',
            image: '/caskets/oxford-pecan.jpg'
        },
        {
            id: 14,
            name: 'BALMORAL',
            wood: 'CHERRY',
            category: 'premium',
            description: 'Available in cherry, pecan, cedar',
            image: '/caskets/balmoral-cherry.jpg'
        },
        {
            id: 15,
            name: 'SENATOR',
            wood: 'CHERRY',
            category: 'prestige',
            description: 'Available in cherry, pecan',
            image: '/caskets/senator-cherry.jpg'
        },
        {
            id: 16,
            name: 'EMPEROR',
            wood: 'PECAN',
            category: 'prestige',
            description: 'Available in cherry, pecan',
            image: '/caskets/emperor-pecan.jpg'
        },
        {
            id: 17,
            name: 'STEEL CASKET',
            wood: 'COPPER',
            category: 'steel',
            description: 'Durable steel construction',
            image: '/caskets/steel-casket-copper.jpg'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Caskets' },
        { id: 'halfview', label: 'Half View' },
        { id: 'dome', label: 'Dome Style' },
        { id: 'premium', label: 'Premium' },
        { id: 'prestige', label: 'Prestige' },
        { id: 'luxury', label: 'Luxury' },
        { id: 'steel', label: 'Steel' }
    ];

    const filteredCaskets = selectedCategory === 'all'
        ? caskets
        : caskets.filter(c => c.category === selectedCategory);

    return (
        <section className="casket-gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">OUR COLLECTION</h4>
                    <h2 className="main-heading">Caskets & <span className="highlight">Coffins</span></h2>
                    <p className="section-description">
                        Choose from our extensive range of quality caskets and coffins,
                        crafted with dignity and respect for your loved ones.
                    </p>
                </div>

                <div className="casket-filters">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="casket-grid">
                    {filteredCaskets.map(casket => (
                        <div key={casket.id} className="casket-card">
                            <div className="casket-image-wrapper">
                                <img
                                    src={casket.image}
                                    alt={`${casket.name} - ${casket.wood}`}
                                    className="casket-image"
                                />
                                <div className="casket-overlay">
                                    <button className="btn-view-casket">View Details</button>
                                </div>
                            </div>
                            <div className="casket-info">
                                <h3 className="casket-name">{casket.name}</h3>
                                <div className="casket-wood">{casket.wood}</div>
                                <p className="casket-description">{casket.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCaskets.length === 0 && (
                    <div className="no-results">
                        <p>No caskets found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CasketGallery;
