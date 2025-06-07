import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SubmissionTable from './components/SubmissionTable';
import ModalForm from './components/ModalForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleModalSubmit = (formEntry) => {
    setSubmittedData(prev => [
      ...prev,
      { ...formEntry, timestamp: new Date().toLocaleString() }
    ]);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <HeroSection openModal={() => setShowModal(true)} />
      <FeaturesSection />
      <Testimonial />
      <CTASection />
      <Footer />
      <SubmissionTable data={submittedData} />
      {showModal && (
        <ModalForm
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </>
  );
}

export default App;
