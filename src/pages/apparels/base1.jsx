import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './base1.css';

const Base = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Section - Sticky Header */}
      <div className={`app-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className='app-header'>
          <Link to="/" className="brand-link">
            <div className="brand-container">
              <img 
                src='https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs' 
                alt='Convince Group Logo'
                className='brand-logo-main'
              />
              <div className="brand-text-wrapper">
                <span className="brand-name-main">Convince</span>
                <span className="brand-suffix">Apparels</span>
              </div>
            </div>
          </Link>

          <div className='nav-menu'>
            <Link to="/apparels">
              <li className={isActive('/apparels') ? 'nav-item active' : 'nav-item'}>Home</li>
            </Link>
            <Link to="/aproducts">
              <li className={isActive('/aproducts') ? 'nav-item active' : 'nav-item'}>Products</li>
            </Link>
            <Link to="/abuyers">
              <li className={isActive('/abuyers') ? 'nav-item active' : 'nav-item'}>Buyers</li>
            </Link>
            <Link to="/acontact">
              <li className={isActive('/acontact') ? 'nav-item active' : 'nav-item'}>Contact Us</li>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer div to prevent content from jumping under fixed header */}
      <div className="header-spacer"></div>

      <div className='page-content'>
        {children}
      </div>

      {/* Footer Section */}
      <footer className='site-footer'>
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-block company-block">
            <div className="footer-brand">
              <img 
                src='https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs' 
                alt='Convince Group'
                className='footer-brand-img'
              />
              <h3 className="footer-brand-name">Convince Group</h3>
            </div>
            <p className="footer-description">
              A diversified industrial conglomerate in Bangladesh, focused on ready-made garments (RMG) manufacturing, garments accessories and packaging, yarn dyeing and information and communications technology (ICT)
            </p>
          </div>

          {/* Important Links */}
          <div className="footer-block links-block">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-menu">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/companies" className="footer-link">Our Companies</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/acontact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-block contact-block">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-details">
              <div className="contact-row">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <p className="contact-text">Plot 68-71, Block K, Road 4<br />Rupnagar C/A, Dhaka 1216, Bangladesh</p>
              </div>
              <div className="contact-row">
                <i className="fas fa-phone contact-icon"></i>
                <div className="contact-text">
                  <p>+880 1234-567890</p>
                  <p>+880 0987-654321</p>
                </div>
              </div>
              <div className="contact-row">
                <i className="fas fa-envelope contact-icon"></i>
                <div className="contact-text">
                  <p>info@convincegroup.com</p>
                  <p>support@convincegroup.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="footer-block social-block">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/convincegroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            {/* Newsletter */}
            <div className="newsletter-box">
              <h4 className="footer-heading">Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" className="newsletter-input" />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-content">
            <p className="copyright-text">Copyright © {new Date().getFullYear()} Convince Group. All rights reserved.</p>
            <div className="footer-bottom-menu">
              <Link to="/terms" className="footer-bottom-link">Terms of Use</Link>
              <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Base;