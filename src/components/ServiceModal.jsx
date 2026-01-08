import React, { useEffect, useState } from 'react';
import './ServiceModal.css';

const ServiceModal = ({ isOpen, onClose, service, planId: initialPlanId }) => {
    const [currentPlanId, setCurrentPlanId] = useState(initialPlanId || 'green');

    useEffect(() => {
        if (initialPlanId) {
            setCurrentPlanId(initialPlanId);
        }
    }, [initialPlanId]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    const handlePlanClick = (planId) => {
        setCurrentPlanId(planId);
    };

    // Latest color-graded plans matching PLAN_BENEFITS
    const planDetails = {
        green: {
            name: 'GREEN',
            color: '#34c759',
            cover: '5,000',
            casket: 'Basic Package',
            benefits: [
                '15 liters Juice',
                '40 liters Cakes',
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora'
            ],
            premium: 'R132.00'
        },
        silver: {
            name: 'SILVER',
            color: '#9ca3af',
            cover: '10,000',
            casket: 'Economy Casket',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '1 Table',
                '1 Toilet',
                '50 Chairs',
                '50 Programmes',
                '1 Crucifix',
                'R100 Airtime',
                '1 Service (Incl. Hearse & Family Car)'
            ],
            premium: 'R180.00'
        },
        gold: {
            name: 'GOLD',
            color: '#d97706',
            cover: '15,000',
            casket: 'Pongee Casket',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '2 Tables',
                '1 Toilet',
                '100 Chairs',
                '100 Programmes',
                '1 Crucifix',
                '1 Flower',
                'R200 Airtime',
                '1 Service (Incl. Hearse & Family Cars)'
            ],
            premium: 'R264.00'
        },
        platinum: {
            name: 'PLATINUM',
            color: '#4b5563',
            cover: '20,000',
            casket: 'Raised HalfView Casket',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '2 Tables',
                'VIP Toilet',
                '100 Chairs',
                '100 Programmes',
                '1 Crucifix',
                '1 Flower',
                'R200 Airtime',
                '1 Service (Incl. Hearse & Family Cars)'
            ],
            premium: 'R330.00'
        },
        black: {
            name: 'BLACK',
            color: '#111827',
            cover: '30,000',
            casket: 'Four Tier Casket',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '2 Tables',
                'VIP Toilet',
                '150 Chairs',
                '150 Programmes',
                '1 Crucifix',
                '1 Flower',
                'R200 Airtime',
                '1 Service (Incl. Hearse & Family Car)'
            ],
            premium: 'R460.00'
        },
        pearl: {
            name: 'PEARL',
            color: '#c4b804',
            cover: '40,000',
            casket: 'Princeton Dome Casket',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '2 Tables',
                'VIP Toilet',
                '200 Chairs',
                '150 Programmes',
                '1 Crucifix',
                '1 Flower',
                'R200 Airtime',
                '1 Service (Incl. Hearse & Family Cars & Deco)'
            ],
            premium: 'R640.00'
        },
        ivory: {
            name: 'IVORY',
            color: '#eab308',
            cover: '50,000',
            casket: 'Four CNR Figurine',
            benefits: [
                'Groceries: Rice, Maize, Sugar, Oil, Tea, Cremora',
                '1 Tent',
                '2 Tables',
                'VIP Toilet',
                '200 Chairs',
                '150 Programmes',
                '1 Crucifix',
                '1 Flower',
                'R200 Airtime',
                '1 Tombstone',
                '1 Cow',
                '1 Service (Incl. Hearse & Family Cars & Deco)'
            ],
            premium: 'R790.00'
        }
    };

    const plan = planDetails[currentPlanId] || planDetails.green;

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-container modal-fulldetails" onClick={e => e.stopPropagation()}>

                {/* Clickable Color Strip */}
                <div className="color-strip-header">
                    <div
                        className={`strip-segment strip-green ${currentPlanId === 'green' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('green')}
                        title="Green Plan - R132"
                    ></div>
                    <div
                        className={`strip-segment strip-silver ${currentPlanId === 'silver' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('silver')}
                        title="Silver Plan - R180"
                    ></div>
                    <div
                        className={`strip-segment strip-gold ${currentPlanId === 'gold' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('gold')}
                        title="Gold Plan - R264"
                    ></div>
                    <div
                        className={`strip-segment strip-platinum ${currentPlanId === 'platinum' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('platinum')}
                        title="Platinum Plan - R330"
                    ></div>
                    <div
                        className={`strip-segment strip-black ${currentPlanId === 'black' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('black')}
                        title="Black Plan - R460"
                    ></div>
                    <div
                        className={`strip-segment strip-pearl ${currentPlanId === 'pearl' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('pearl')}
                        title="Pearl Plan - R640"
                    ></div>
                    <div
                        className={`strip-segment strip-ivory ${currentPlanId === 'ivory' ? 'active' : ''}`}
                        onClick={() => handlePlanClick('ivory')}
                        title="Ivory Plan - R790"
                    ></div>
                </div>

                <div className="modal-header">
                    <h3 className="modal-title">{service.title} - {plan.name} Plan</h3>
                    <button className="modal-close" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-content">
                    {service.title === "Funeral Cover" ? (
                        <>
                            {/* Plan Summary */}
                            <div className="benefits-table-section">
                                <h4 style={{ borderLeft: `4px solid ${plan.color}`, paddingLeft: '1rem' }}>
                                    {plan.name} PLAN - Thusanang
                                </h4>

                                <div className="plan-summary">
                                    <div className="summary-card" style={{ borderColor: plan.color }}>
                                        <div className="summary-icon" style={{ background: plan.color }}>💰</div>
                                        <div>
                                            <div className="summary-label">Cover Amount</div>
                                            <div className="summary-value" style={{ color: plan.color }}>R{plan.cover}</div>
                                        </div>
                                    </div>
                                    <div className="summary-card" style={{ borderColor: plan.color }}>
                                        <div className="summary-icon" style={{ background: plan.color }}>⚰️</div>
                                        <div>
                                            <div className="summary-label">Casket Type</div>
                                            <div className="summary-value">{plan.casket}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="benefits-list">
                                    <h5 style={{ color: plan.color, marginBottom: '1rem' }}>✓ What's Included:</h5>
                                    <div className="benefits-grid">
                                        {plan.benefits.map((benefit, index) => (
                                            <div key={index} className="benefit-item">
                                                <span className="benefit-icon" style={{ background: plan.color }}>✓</span>
                                                <span className="benefit-text">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Premium Display */}
                                <div className="premium-section" style={{ borderTop: `3px solid ${plan.color}` }}>
                                    <div className="premium-label">Premium - {plan.name} Plan Thusanang</div>
                                    <div className="premium-amount" style={{ background: plan.color }}>{plan.premium}</div>
                                </div>
                                <div className="premium-note">Premium Per Month (6 Members)</div>
                            </div>

                            {/* Action Buttons */}
                            <div className="action-buttons-section">
                                <button className="btn-action btn-apply">Apply Now</button>
                                <button className="btn-action btn-whatsapp">
                                    <span className="whatsapp-icon">💬</span> WhatsApp Chat
                                </button>
                                <button className="btn-action btn-terms">View T's & C's</button>
                            </div>
                        </>
                    ) : (
                        <div className="generic-details">
                            <p>{service.description}</p>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--color-gray-50)', borderRadius: 'var(--border-radius)' }}>
                                <p>Please contact us directly for a personalized quote regarding {service.title}.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
