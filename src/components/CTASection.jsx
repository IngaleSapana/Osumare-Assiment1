import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        {/* Left Image */}
        <div className="cta-image">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2080&auto=format&fit=crop"
            alt="Mobile App"
          />
        </div>

        {/* Right Text */}
        <div className="cta-content">
          <h2>Start Organizing Your Life Today</h2>
          <p>
            Join us now and transform your productivity with our intuitive to-do
            list platform!
          </p>
          <div className="cta-buttons">
            <button className="btn-pink">Sign Up</button>
            <button className="btn-outline-pink">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
