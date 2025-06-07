import React from "react";
import "./Testimonial.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Testimonial = () => {
  return (
    <section className="testimonial">
       <h2 className="section-title mb-2">Customer Testimonials</h2>
        <p className=" subtitle mb-5">This tool has transformed my productivity and organization!</p>
      <div className="testimonial-container">
      
        <div className="testimonial-text-box">
          <p className="testimonial-text">
            "Using this website has made my tasks so much easier! I can't
            imagine my day without it."
          </p>
          <div className="testimonial-user">
            <div className="user-icon" />
            <div>
              <p className="user-name">Sherri Cronin</p>
              <p className="user-title">Project Manager, TechCorp</p>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn">
              <FaChevronLeft />
            </button>
            <button className="control-btn active">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="testimonial-img-box">
          <img src={'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="testimonial" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
