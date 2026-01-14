import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CasketGallery from './components/CasketGallery'
import Footer from './components/Footer'
import ServiceModal from './components/ServiceModal'
import PayPremium from './components/PayPremium'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [planId, setPlanId] = useState('green');
  const [isPayPremiumOpen, setIsPayPremiumOpen] = useState(false);

  const [servicesView, setServicesView] = useState('intro');

  const handleOpenModal = (service, plan = 'green') => {
    setSelectedService(service);
    setPlanId(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenPayPremium = () => {
    setIsPayPremiumOpen(true);
  };

  const handleClosePayPremium = () => {
    setIsPayPremiumOpen(false);
  };

  const handleNavigateToServices = () => {
    setServicesView('intro');
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    // Prevent default if it's a link click
    if (e) e.preventDefault();

    // Reset specific views
    setServicesView('intro');

    // Scroll to top or home
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar
        onPayPremium={handleOpenPayPremium}
        onHomeClick={handleHomeClick}
      />
      <Hero
        onOpenService={(service) => handleOpenModal(service, 'green')}
        onNavigateToServices={handleNavigateToServices}
      />
      <About />
      <Services currentView={servicesView} onViewChange={setServicesView} />
      <CasketGallery />
      <Footer />
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
        planId={planId}
      />
      <PayPremium
        isOpen={isPayPremiumOpen}
        onClose={handleClosePayPremium}
      />
    </>
  )
}

export default App
