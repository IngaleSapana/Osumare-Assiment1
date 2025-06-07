// HeroSection.jsx
import React, { useState } from 'react';
import './HeroSection.css';
import BrandLogos from './BrandLogos';

const HeroSection = ({ openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: 'Emily Johnson',
      role: 'Project Manager',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'David Lee',
      role: 'Team Lead',
      img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop',
    },
  ];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-section py-5 px-4 px-md-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: '#0f0f4e' }}>
            <b>Simplify Your Life with Our<br />Todo App</b>
          </h1>
          <p className="hero-intro-text">Stay organized and productive every day with do List.</p>
          <div className="mt-3 d-flex justify-content-center gap-3">
            <button className="btn btn-pink px-4" onClick={openModal}>Get Started</button>
            <button className="btn btn-outline-pink px-4">Learn More</button>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card pink-card p-4 h-90">
              <h1 className="text-white">
                <b>
                  <span style={{ color: 'rgb(255 255 255 / 54%)' }}>Organize.</span><br />
                  Achieve.<br />Relax.
                </b>
              </h1>
              <p className="text-white mt-2">Manage tasks, set reminders, and accomplish more with simplicity and ease.</p>
              <div className="mt-3 d-flex gap-3">
                <button className="btn btn-light text-pink px-4" style={{ borderRadius: '20px' }} onClick={openModal}>Get Started Today</button>
                <button className="btn btn-outline-light px-4" style={{ borderRadius: '20px', background: '#f31840' }}>Discover Features</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card position-relative overflow-hidden image-card text-white">
              <img src={slides[currentSlide].img} className="card-img" alt="user" />

              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div>
                  <h5>{slides[currentSlide].name}</h5>
                  <p className="mb-2">{slides[currentSlide].role}</p>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="play-btn">
                   <i className="fa-solid fa-play play-icon"></i>
                  </button>
                </div>
              </div>

              <button className="arrow left-arrow" onClick={handlePrev}><i className="fa-solid fa-arrow-left arrow-icon"></i></button>
              <button className="arrow right-arrow" onClick={handleNext}><i className="fa-solid fa-arrow-right arrow-icon"></i></button>
            </div>
          </div>  
        </div>

        <BrandLogos />
      </div>
    </section>
  );
};

export default HeroSection;
