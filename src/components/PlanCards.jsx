import React from 'react';
import './PlanCards.css';

const PlanCard = ({ planName, options, description, image, onView, colorClass, planColor, planCategory }) => {
    // Get the lowest price to display as "FROM ONLY"
    const getLowestPrice = () => {
        if (planCategory === 'motjha') {
            return options['6'];
        } else {
            return options['single-18-65'];
        }
    };

    const getPriceNote = () => {
        if (planCategory === 'motjha') {
            return 'per month (6 members)';
        } else {
            return 'per month (Single 18-65)';
        }
    };

    const lowestPrice = getLowestPrice();
    const priceNote = getPriceNote();

    return (
        <div className="plan-card-simple" onClick={onView}>
            <div className="plan-card-hero" style={{ backgroundImage: `url('${image}')` }}>
                <div className={`plan-hero-overlay ${colorClass}`}></div>
                <div className="plan-badge-corner" style={{ background: planColor }}>
                    {planName}
                </div>
                <div className="plan-hero-content">
                    <h2 className="plan-hero-title">{planName} PLAN</h2>
                    <p className="plan-hero-description">{description}</p>
                </div>
            </div>
            <div className="plan-price-section">
                <div className="price-from-label">FROM ONLY</div>
                <div className="price-from-amount">{lowestPrice}</div>
                <div className="price-from-note">{priceNote}</div>
            </div>
            <button className="btn-view-details">View Details</button>
        </div>
    );
};

const PlanCards = ({ onSelectPlan, planCategory = 'motjha', onCategoryChange }) => {
    // MOTJHA O TJHELE / SOCIETY PLANS
    const motjhaPlans = [
        {
            id: 'green',
            name: 'GREEN',
            options: { '6': 'R132', '10': 'R165', '14': 'R187' },
            description: 'Affordable entry-level coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-green',
            planColor: '#34c759'
        },
        {
            id: 'silver',
            name: 'SILVER',
            options: { '6': 'R180', '10': 'R242', '14': 'R308' },
            description: 'Enhanced coverage with benefits',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-silver',
            planColor: '#9ca3af'
        },
        {
            id: 'gold',
            name: 'GOLD',
            options: { '6': 'R259', '10': 'R341', '14': 'R473' },
            description: 'Premium comprehensive coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-gold',
            planColor: '#d97706'
        },
        {
            id: 'platinum',
            name: 'PLATINUM',
            options: { '6': 'R330', '10': 'R462', '14': 'R682' },
            description: 'Superior protection plan',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-platinum',
            planColor: '#4b5563'
        },
        {
            id: 'black',
            name: 'BLACK',
            options: { '6': 'R460', '10': 'R704' },
            description: 'Premium black label coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-black',
            planColor: '#111827'
        },
        {
            id: 'pearl',
            name: 'PEARL',
            options: { '6': 'R640', '10': 'R946' },
            description: 'Exclusive pearl collection',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-pearl',
            planColor: '#c4b804'
        },
        {
            id: 'ivory',
            name: 'IVORY',
            options: { '6': 'R790', '10': 'R1368' },
            description: 'Ultimate premium coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-ivory',
            planColor: '#eab308'
        }
    ];

    // SINGLE OR FAMILY PLANS
    const singleFamilyPlans = [
        {
            id: 'green',
            name: 'GREEN',
            options: {
                'single-18-65': 'R45', 'single-66-85': 'R80', 'single-86-100': 'R105',
                'family-18-65': 'R65', 'family-66-85': 'R90', 'family-86-100': 'R145'
            },
            description: 'Affordable entry-level coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-green',
            planColor: '#34c759'
        },
        {
            id: 'silver',
            name: 'SILVER',
            options: {
                'single-18-65': 'R88', 'single-66-85': 'R130', 'single-86-100': 'R205',
                'family-18-65': 'R115', 'family-66-85': 'R150', 'family-86-100': 'R285'
            },
            description: 'Enhanced individual/family coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-silver',
            planColor: '#9ca3af'
        },
        {
            id: 'gold',
            name: 'GOLD',
            options: {
                'single-18-65': 'R132', 'single-66-85': 'R187', 'single-86-100': 'R312',
                'family-18-65': 'R152', 'family-66-85': 'R207', 'family-86-100': 'R402'
            },
            description: 'Premium individual/family benefits',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-gold',
            planColor: '#d97706'
        },
        {
            id: 'platinum',
            name: 'PLATINUM',
            options: {
                'single-18-65': 'R165', 'single-66-85': 'R275', 'single-86-100': 'R415',
                'family-18-65': 'R195', 'family-66-85': 'R315', 'family-86-100': 'R535'
            },
            description: 'Superior individual/family protection',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-platinum',
            planColor: '#4b5563'
        },
        {
            id: 'black',
            name: 'BLACK',
            options: {
                'single-18-65': 'R240', 'single-66-85': 'R410',
                'family-18-65': 'R280', 'family-66-85': 'R470'
            },
            description: 'Premium black label coverage',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-black',
            planColor: '#111827'
        },
        {
            id: 'pearl',
            name: 'PEARL',
            options: {
                'single-18-65': 'R315',
                'family-18-65': 'R405'
            },
            description: 'Exclusive pearl tier benefits',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-pearl',
            planColor: '#c4b804'
        },
        {
            id: 'ivory',
            name: 'IVORY',
            options: {
                'single-18-65': 'R450',
                'family-18-65': 'R565'
            },
            description: 'Ultimate individual/family premium',
            image: '/service-funeral.jpg',
            colorClass: 'overlay-ivory',
            planColor: '#eab308'
        }
    ];

    const plans = planCategory === 'motjha' ? motjhaPlans : singleFamilyPlans;
    const categoryTitle = planCategory === 'motjha' ? 'MOTJHA O TJHELE / SOCIETY PLANS' : 'SINGLE OR FAMILY PLANS';
    const categoryDesc = planCategory === 'motjha'
        ? 'Comprehensive group funeral cover for societies and families'
        : 'Individual and family funeral cover with age-based pricing';

    return (
        <div className="plan-cards-container">
            <div className="plan-category-header">
                <h3 className="category-title">{categoryTitle}</h3>
                <p className="category-description">{categoryDesc}</p>

                <div className="category-toggle">
                    <button
                        className={`toggle-btn ${planCategory === 'motjha' ? 'active' : ''}`}
                        onClick={() => onCategoryChange('motjha')}
                    >
                        Motjha / Society
                    </button>
                    <button
                        className={`toggle-btn ${planCategory === 'single-family' ? 'active' : ''}`}
                        onClick={() => onCategoryChange('single-family')}
                    >
                        Single / Family
                    </button>
                </div>
            </div>
            <div className="plan-cards-grid-simple" key={planCategory}>
                {plans.map(plan => (
                    <PlanCard
                        key={plan.id}
                        planName={plan.name}
                        options={plan.options}
                        description={plan.description}
                        image={plan.image}
                        colorClass={plan.colorClass}
                        planColor={plan.planColor}
                        planCategory={planCategory}
                        onView={() => onSelectPlan(plan.id, 'overview', plan.options, planCategory)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlanCards;
