import React, { useState } from 'react';
import './PayPremium.css';

const PayPremium = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Enter Details, 2: Confirm Payment, 3: Success
    const [policyNumber, setPolicyNumber] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('eft');
    const [memberDetails, setMemberDetails] = useState(null);

    // Mock function to fetch member details
    const handleLookup = (e) => {
        e.preventDefault();
        // In production, this would call your API
        setMemberDetails({
            name: 'John Doe',
            policyNumber: policyNumber,
            plan: 'Gold Plan',
            premium: 'R264.00',
            dueDate: '2026-01-15',
            status: 'Active'
        });
        setStep(2);
    };

    const handlePayment = () => {
        // In production, this would process the payment
        setStep(3);
    };

    const handleClose = () => {
        setStep(1);
        setPolicyNumber('');
        setIdNumber('');
        setMemberDetails(null);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="pay-premium-overlay" onClick={handleClose}>
            <div className="pay-premium-container" onClick={e => e.stopPropagation()}>
                <div className="pay-premium-header">
                    <h2 className="pay-premium-title">
                        {step === 1 && '💳 Pay My Premium'}
                        {step === 2 && '✓ Confirm Payment'}
                        {step === 3 && '🎉 Payment Successful'}
                    </h2>
                    <button className="pay-premium-close" onClick={handleClose}>&times;</button>
                </div>

                <div className="pay-premium-content">
                    {/* Step 1: Enter Policy Details */}
                    {step === 1 && (
                        <form onSubmit={handleLookup} className="lookup-form">
                            <div className="form-intro">
                                <p>Enter your policy details to view and pay your premium</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="policyNumber">Policy Number *</label>
                                <input
                                    type="text"
                                    id="policyNumber"
                                    value={policyNumber}
                                    onChange={(e) => setPolicyNumber(e.target.value)}
                                    placeholder="e.g., TFS-2024-001234"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="idNumber">ID Number *</label>
                                <input
                                    type="text"
                                    id="idNumber"
                                    value={idNumber}
                                    onChange={(e) => setIdNumber(e.target.value)}
                                    placeholder="e.g., 8901015800080"
                                    required
                                    maxLength="13"
                                />
                            </div>

                            <button type="submit" className="btn btn-premium-primary">
                                Look Up Policy
                            </button>
                        </form>
                    )}

                    {/* Step 2: Confirm Payment */}
                    {step === 2 && memberDetails && (
                        <div className="payment-confirmation">
                            <div className="member-details-card">
                                <h3>Member Details</h3>
                                <div className="detail-row">
                                    <span className="detail-label">Name:</span>
                                    <span className="detail-value">{memberDetails.name}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Policy Number:</span>
                                    <span className="detail-value">{memberDetails.policyNumber}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Plan:</span>
                                    <span className="detail-value">{memberDetails.plan}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Status:</span>
                                    <span className="status-badge status-active">{memberDetails.status}</span>
                                </div>
                            </div>

                            <div className="premium-amount-card">
                                <h3>Premium Due</h3>
                                <div className="premium-due-amount">{memberDetails.premium}</div>
                                <div className="due-date">Due: {memberDetails.dueDate}</div>
                            </div>

                            <div className="payment-methods">
                                <h3>Select Payment Method</h3>

                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="eft"
                                        name="paymentMethod"
                                        value="eft"
                                        checked={paymentMethod === 'eft'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="eft" className="payment-label">
                                        <span className="payment-icon">🏦</span>
                                        <div>
                                            <div className="payment-name">EFT / Bank Transfer</div>
                                            <div className="payment-desc">Transfer to our bank account</div>
                                        </div>
                                    </label>
                                </div>

                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="card"
                                        name="paymentMethod"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="card" className="payment-label">
                                        <span className="payment-icon">💳</span>
                                        <div>
                                            <div className="payment-name">Credit/Debit Card</div>
                                            <div className="payment-desc">Pay instantly with your card</div>
                                        </div>
                                    </label>
                                </div>

                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="whatsapp"
                                        name="paymentMethod"
                                        value="whatsapp"
                                        checked={paymentMethod === 'whatsapp'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="whatsapp" className="payment-label">
                                        <span className="payment-icon">💬</span>
                                        <div>
                                            <div className="payment-name">WhatsApp Assistance</div>
                                            <div className="payment-desc">Get help via WhatsApp</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {paymentMethod === 'eft' && (
                                <div className="bank-details">
                                    <h4>Bank Details</h4>
                                    <div className="bank-info">
                                        <div className="bank-row">
                                            <span>Bank:</span>
                                            <strong>FNB</strong>
                                        </div>
                                        <div className="bank-row">
                                            <span>Account Name:</span>
                                            <strong>Thusanang Funeral Services</strong>
                                        </div>
                                        <div className="bank-row">
                                            <span>Account Number:</span>
                                            <strong>62812345678</strong>
                                        </div>
                                        <div className="bank-row">
                                            <span>Branch Code:</span>
                                            <strong>250655</strong>
                                        </div>
                                        <div className="bank-row">
                                            <span>Reference:</span>
                                            <strong>{memberDetails.policyNumber}</strong>
                                        </div>
                                    </div>
                                    <p className="bank-note">
                                        ⚠️ Please use your policy number as the payment reference
                                    </p>
                                </div>
                            )}

                            <div className="payment-actions">
                                <button className="btn btn-secondary" onClick={() => setStep(1)}>
                                    Back
                                </button>
                                <button className="btn btn-premium-primary" onClick={handlePayment}>
                                    {paymentMethod === 'eft' ? 'I Have Made Payment' :
                                        paymentMethod === 'whatsapp' ? 'Chat on WhatsApp' : 'Proceed to Payment'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Success */}
                    {step === 3 && (
                        <div className="payment-success">
                            <div className="success-icon">✓</div>
                            <h3>Payment Received!</h3>
                            <p>
                                Thank you for your payment. Your premium has been recorded and will reflect
                                in your account within 24-48 hours.
                            </p>
                            <div className="success-details">
                                <div className="success-row">
                                    <span>Reference:</span>
                                    <strong>PAY-{Date.now()}</strong>
                                </div>
                                <div className="success-row">
                                    <span>Amount:</span>
                                    <strong>{memberDetails?.premium}</strong>
                                </div>
                                <div className="success-row">
                                    <span>Policy:</span>
                                    <strong>{memberDetails?.policyNumber}</strong>
                                </div>
                            </div>
                            <button className="btn btn-premium-primary" onClick={handleClose}>
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PayPremium;
