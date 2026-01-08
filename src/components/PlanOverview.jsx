import React from 'react';
import './PlanOverview.css';

const PlanOverview = ({ planId, planOptions, planCategory, onViewFullDetails, onBack }) => {
    const planColors = {
        green: '#34c759',
        silver: '#9ca3af',
        gold: '#d97706',
        platinum: '#4b5563',
        black: '#111827',
        pearl: '#c4b804',
        ivory: '#eab308'
    };

    const planColor = planColors[planId] || '#34c759';
    const planName = planId.toUpperCase();

    return (
        <div className="plan-overview-container">
            <button className="btn-back" onClick={onBack}>← Back to Plans</button>

            <div className="plan-overview-header" style={{ background: planColor }}>
                <h2 className="plan-overview-title">{planName} PLAN</h2>
            </div>

            {planCategory === 'motjha' ? (
                <div className="pricing-breakdown">
                    <h3 className="breakdown-title">MOTJHA / SOCIETY</h3>
                    <div className="price-list">
                        {planOptions['6'] && (
                            <div className="price-row">
                                <span className="price-label">6 Members</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['6']}</span>
                            </div>
                        )}
                        {planOptions['10'] && (
                            <div className="price-row">
                                <span className="price-label">10 Members</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['10']}</span>
                            </div>
                        )}
                        {planOptions['14'] && (
                            <div className="price-row">
                                <span className="price-label">14 Members</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['14']}</span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="pricing-breakdown">
                    <h3 className="breakdown-title">SINGLE</h3>
                    <div className="price-list">
                        {planOptions['single-18-65'] && (
                            <div className="price-row">
                                <span className="price-label">Age 18-65</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['single-18-65']}</span>
                            </div>
                        )}
                        {planOptions['single-66-85'] && (
                            <div className="price-row">
                                <span className="price-label">Age 66-85</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['single-66-85']}</span>
                            </div>
                        )}
                        {planOptions['single-86-100'] && (
                            <div className="price-row">
                                <span className="price-label">Age 86-100</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['single-86-100']}</span>
                            </div>
                        )}
                    </div>

                    <h3 className="breakdown-title">FAMILY</h3>
                    <div className="price-list">
                        {planOptions['family-18-65'] && (
                            <div className="price-row">
                                <span className="price-label">Age 18-65</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['family-18-65']}</span>
                            </div>
                        )}
                        {planOptions['family-66-85'] && (
                            <div className="price-row">
                                <span className="price-label">Age 66-85</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['family-66-85']}</span>
                            </div>
                        )}
                        {planOptions['family-86-100'] && (
                            <div className="price-row">
                                <span className="price-label">Age 86-100</span>
                                <span className="price-value" style={{ color: planColor }}>{planOptions['family-86-100']}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="plan-overview-cta">
                <button
                    className="btn-view-full-benefits"
                    style={{ background: planColor }}
                    onClick={onViewFullDetails}
                >
                    View Full Benefits & Details →
                </button>
            </div>
        </div>
    );
};

export default PlanOverview;
