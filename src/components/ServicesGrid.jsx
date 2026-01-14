import React from 'react';
import './ServicesGrid.css';

const ServiceCard = ({ title, image, description, onSelect }) => {
    return (
        <div className="service-grid-card" onClick={onSelect}>
            <div className="service-grid-image" style={{ backgroundImage: `url('${image}')` }}>
                <div className="service-grid-overlay"></div>
            </div>
            <div className="service-grid-label">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

const ServicesGrid = ({ onSelectService }) => {
    const services = [
        {
            id: 'catering',
            title: 'CATERING',
            image: '/service-catering.png',
            description: 'Professional catering services for memorial gatherings'
        },
        {
            id: 'kgomo',
            title: 'KGOMO (COW)',
            image: '/service-cow.png',
            description: 'Traditional cattle provisions for cultural ceremonies'
        },
        {
            id: 'decor',
            title: 'DECOR',
            image: '/service-decor.png',
            description: 'Professional decoration services for funeral services'
        },
        {
            id: 'tombstone',
            title: 'TOMBSTONE',
            image: '/service-tombstone.jpg',
            description: 'Beautiful granite and marble headstones and memorials'
        },
        {
            id: 'groceries',
            title: 'GROCERIES',
            image: '/service-grocery.png',
            description: 'Essential grocery packages including rice, maize, oil, and more'
        },
        {
            id: 'cars',
            title: 'CARS',
            image: '/service-fleet.png',
            description: 'Professional hearse and family transportation fleet'
        },
        {
            id: 'tents',
            title: 'TENTS',
            image: '/service-tents.jpg',
            description: 'Quality tent hire with chairs and tables for all events'
        },
        {
            id: 'caskets',
            title: 'CASKETS',
            image: '/Nguni-Brown-White-Closed.jpg',
            description: 'Wide range of caskets from economy to premium selections'
        },
        {
            id: 'unveiling',
            title: 'UNVEILING',
            image: '/service-unveiling.png',
            description: 'Tombstone unveiling ceremonies and coordination'
        },
        {
            id: 'repatriation',
            title: 'REPATRIATION',
            image: '/service-funeral.jpg',
            description: 'Repatriation services across South Africa and beyond'
        }
    ];

    return (
        <div className="services-grid-container">
            <h3 className="services-grid-title">Available Top-Up Services</h3>
            <p className="services-grid-description">
                Enhance your existing funeral cover with these additional services
            </p>
            <div className="services-grid">
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        image={service.image}
                        description={service.description}
                        onSelect={() => onSelectService(service)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
