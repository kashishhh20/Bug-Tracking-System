import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bug } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Bug size={28} />
          <span className="logo-text">Bug Tracking System</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/aboutus">About Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/register" onClick={toggleMenu}>Register</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/contactus" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/aboutus" onClick={toggleMenu}>About Us</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
