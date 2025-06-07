import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        {/* Logo Box */}
         <div className="d-flex align-items-center">
      <img src={logo} alt="do List Logo" style={{ width: '70px', height: '70px',marginLeft:'150px'}} />
    </div>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item"><a className="nav-link nav-text" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link nav-text" href="#">Features</a></li>
            <li className="nav-item"><a className="nav-link nav-text" href="#">More Option</a></li>
            <li className="nav-item"><a className="nav-link nav-text" href="#">Contact</a></li>
            <li className="nav-item"><button className="btn btn-outline-pink px-3">Log In</button></li>
            <li className="nav-item"><button className="btn btn-pink px-3">Sign Up</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
