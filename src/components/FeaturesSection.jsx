import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    icon: 'fa-layer-group',
    title: 'User-Friendly Interface',
    desc: 'Our platform offers seamless task management to boost your efficiency.',
    number: '01',
  },
  {
    icon: 'fa-paper-plane',
    title: 'Collaborate & Share Effortlessly',
    desc: 'Invite team members to work together and achieve your goals faster.',
    number: '02',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Effortless Collaboration',
    desc: 'Invite team members to work together and achieve your goals faster.',
    number: '03',
  },
  {
    icon: 'fa-list-check',
    title: 'Seamless Access',
    desc: 'Stay connected and manage your tasks on the go with ease.',
    number: '04',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">
          Transform Your Productivity with Our<br />Innovative To-Do List Features
        </h2>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card p-4">
                <div className="icon-wrapper mb-3">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <div className="underline mb-2">
                  <span></span><span></span>
                </div>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
