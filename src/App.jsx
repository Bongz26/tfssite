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

  return (
    <>
      <Navbar onPayPremium={handleOpenPayPremium} />
      <Hero onOpenService={(service) => handleOpenModal(service, 'green')} />
      <About />
      <Services />
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
