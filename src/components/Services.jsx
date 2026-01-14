import React, { useState } from 'react';
import './Services.css';
import PlanCards from './PlanCards';
import PlanOverview from './PlanOverview';
import ServiceModal from './ServiceModal';
import ServicesGrid from './ServicesGrid';

const Services = ({ currentView, onViewChange }) => {
    // currentView and onViewChange are now controlled by parent (App.jsx)
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedPlanOptions, setSelectedPlanOptions] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [planCategory, setPlanCategory] = useState('motjha'); // 'motjha' or 'single-family'

    const handleViewServices = () => {
        onViewChange('services-grid');
    };

    const handleViewPlans = (category = 'motjha') => {
        setPlanCategory(category);
        onViewChange('plans');
    };

    const handleSelectPlan = (planId, action, options, category) => {
        setSelectedPlan(planId);
        setSelectedPlanOptions(options);
        setPlanCategory(category);
        if (action === 'overview') {
            onViewChange('overview');
        } else if (action === 'apply') {
            setIsModalOpen(true);
        }
    };

    const handleSelectService = (service) => {
        // If POLICY is selected, open the funeral cover modal with GREEN plan
        if (service.id === 'policy') {
            setSelectedService({ title: 'Funeral Cover', description: 'Comprehensive funeral cover plans' });
            setSelectedPlan('green');
            setIsModalOpen(true);
        }
        // If TOP-UP is selected, show info about additional coverage
        else if (service.id === 'top-up') {
            setSelectedService({
                title: 'Top-Up Services',
                description: 'Add extra coverage to your existing policy for ages 18-100. Choose from caskets, tombstones, groceries, or cash benefits.'
            });
            setIsModalOpen(true);
        }
        else if (service.id === 'caskets') {
            const element = document.getElementById('caskets');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        else {
            setSelectedService(service);
            setIsModalOpen(true);
        }
    };

    const handleViewFullDetails = () => {
        setIsModalOpen(true);
    };

    const handleBackToPlans = () => {
        onViewChange('plans');
    };

    const handleBackToIntro = () => {
        onViewChange('intro');
        setSelectedPlan(null);
        setSelectedService(null);
    };

    const handleBackToServices = () => {
        onViewChange('services-grid');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">OUR SERVICES</h4>
                    <h2 className="main-heading">Comprehensive <span className="highlight">Funeral Solutions</span></h2>
                </div>

                {currentView === 'intro' && (
                    <div className="services-intro">
                        <p className="services-intro-text">
                            Choose from our funeral cover plans or add top-up services to enhance your existing coverage.
                            We offer comprehensive solutions tailored to meet your needs.
                        </p>
                        <div className="intro-buttons">
                            <button className="btn btn-primary" onClick={() => handleViewPlans('motjha')}>
                                MOTJHA / SOCIETY PLANS
                            </button>
                            <button className="btn btn-primary" onClick={() => handleViewPlans('single-family')}>
                                SINGLE / FAMILY PLANS
                            </button>
                            <button className="btn btn-secondary" onClick={handleViewServices}>
                                TOP-UP SERVICES
                            </button>
                        </div>
                    </div>
                )}

                {currentView === 'services-grid' && (
                    <>
                        <button className="btn-back-to-intro" onClick={handleBackToIntro}>← Back</button>
                        <ServicesGrid onSelectService={handleSelectService} />
                    </>
                )}

                {currentView === 'plans' && (
                    <>
                        <button className="btn-back-to-intro" onClick={handleBackToIntro}>← Back</button>
                        <PlanCards
                            onSelectPlan={handleSelectPlan}
                            planCategory={planCategory}
                            onCategoryChange={setPlanCategory}
                        />
                    </>
                )}

                {currentView === 'overview' && (
                    <PlanOverview
                        planId={selectedPlan}
                        planOptions={selectedPlanOptions}
                        planCategory={planCategory}
                        onViewFullDetails={handleViewFullDetails}
                        onBack={handleBackToPlans}
                    />
                )}
            </div>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService || { title: 'Funeral Cover' }}
                planId={selectedPlan}
            />
        </section>
    );
};

export default Services;
