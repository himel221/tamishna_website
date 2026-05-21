// ZipperContact.jsx - Professional Contact Page Component for Zipper Division
import React, { useEffect, useState } from 'react';
import Base from './base2.jsx';
import './zcontact.css';

const ZipperContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  // Scroll Animation - Fixed to include all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    // Added all sections that need animation
    const sections = document.querySelectorAll(
      '.zipper-contact-container .zipper-contact-section-heading, ' +
      '.zipper-contact-container .zipper-contact-info-card, ' +
      '.zipper-contact-container .zipper-contact-form-container, ' +
      '.zipper-contact-container .zipper-map-wrapper, ' +
      '.zipper-contact-container .zipper-contact-hours-card, ' +
      '.zipper-contact-container .zipper-contact-cta-section'
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 5000);
  };

  // Contact Information
  const contactInfo = {
    address: "Plot# 68-71, Block# K, Rupnagar, Section: 2, Mirpur, Dhaka-1216",
    phone: ["9023886", "9002584", "8031776", "8057457"],
    fax: "880-2-9010401",
    email: "cal@convincebd.biz",
    managingDirector: {
      name: "Mr. Rafez Alam Chowdhury",
      position: "Managing Director",
      cell: "+88 01780 154949",
      email: "cal@convincebd.biz"
    },
    director: {
      name: "Rashik Alam Chowdhury",
      position: "Director",
      cell: "+88 01780 154949",
      email: "rashikchy@gmail.com"
    }
  };

  // Google Maps Embed URL - Correct Mirpur Location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8375!2d90.3635!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c146411837f5%3A0x207f30ae9ebec5f3!2sConvince%20Group!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";

  return (
    <Base>
      <div className="zipper-contact-container">
        {/* Hero Section */}
        <div className="zipper-contact-hero-section">
          <div className="zipper-contact-hero-overlay"></div>
          <div className="zipper-contact-hero-content">
            <h1 className="zipper-contact-hero-title">Contact Us</h1>
            <p className="zipper-contact-hero-subtitle">Get in touch with our team for inquiries, support, or collaboration</p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="zipper-contact-main-section">
          <div className="zipper-contact-grid">
            {/* Left Side - Contact Information */}
            <div className="zipper-contact-info-side">
              <h2 className="zipper-contact-section-heading">Get In Touch</h2>
              <p className="zipper-contact-info-description">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              {/* Address Card */}
              <div className="zipper-contact-info-card">
                <div className="zipper-contact-info-icon">📍</div>
                <div className="zipper-contact-info-content">
                  <h3>Office Address</h3>
                  <p className="zipper-contact-address-text">{contactInfo.address}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="zipper-contact-info-card">
                <div className="zipper-contact-info-icon">📞</div>
                <div className="zipper-contact-info-content">
                  <h3>Phone Numbers</h3>
                  <div className="zipper-contact-phone-list">
                    {contactInfo.phone.map((num, idx) => (
                      <a key={idx} href={`tel:${num}`} className="zipper-contact-phone-link">{num}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fax Card */}
              <div className="zipper-contact-info-card">
                <div className="zipper-contact-info-icon">📠</div>
                <div className="zipper-contact-info-content">
                  <h3>Fax</h3>
                  <p>{contactInfo.fax}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="zipper-contact-info-card">
                <div className="zipper-contact-info-icon">✉️</div>
                <div className="zipper-contact-info-content">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="zipper-contact-email-link">{contactInfo.email}</a>
                </div>
              </div>

              {/* Managing Director Card */}
              <div className="zipper-contact-info-card zipper-contact-person-card">
                <div className="zipper-contact-info-icon">👨‍💼</div>
                <div className="zipper-contact-info-content">
                  <h3>Managing Director</h3>
                  <p className="zipper-contact-person-name">{contactInfo.managingDirector.name}</p>
                  <a href={`tel:${contactInfo.managingDirector.cell}`} className="zipper-contact-person-cell">
                    📱 {contactInfo.managingDirector.cell}
                  </a>
                </div>
              </div>

              {/* Director Card */}
              <div className="zipper-contact-info-card zipper-contact-person-card">
                <div className="zipper-contact-info-icon">👨‍💼</div>
                <div className="zipper-contact-info-content">
                  <h3>Director</h3>
                  <p className="zipper-contact-person-name">{contactInfo.director.name}</p>
                  <a href={`tel:${contactInfo.director.cell}`} className="zipper-contact-person-cell">
                    📱 {contactInfo.director.cell}
                  </a>
                  <a href={`mailto:${contactInfo.director.email}`} className="zipper-contact-person-email">
                    ✉️ {contactInfo.director.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form with CONVINCE GROUP LTD. Title */}
            <div className="zipper-contact-form-side">
              <div className="zipper-contact-form-container">
                {/* Company Title inside Form Card */}
                <div className="zipper-contact-company-header">
                  <h1 className="zipper-contact-company-title">CONVINCE GROUP LTD.</h1>
                  <p className="zipper-contact-company-subtitle">Leading Manufacturer & Exporter of Premium Zipper Products</p>
                  <p className="zipper-contact-company-subtitle-second">Excellence in Nylon, Metal, Vislon Zippers & Garment Accessories</p>
                </div>
                
                <div className="zipper-contact-form-divider"></div>
                
                <h2 className="zipper-contact-form-title">Send Us a Message</h2>
                <p className="zipper-contact-form-subtitle">We'll respond to your inquiry within 24 hours</p>
                
                {formStatus.submitted && (
                  <div className={`zipper-contact-form-alert ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="zipper-contact-form">
                  <div className="zipper-contact-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      className="zipper-contact-form-input"
                    />
                  </div>
                  
                  <div className="zipper-contact-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address"
                      required
                      className="zipper-contact-form-input"
                    />
                  </div>
                  
                  <div className="zipper-contact-form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="zipper-contact-form-input"
                    />
                  </div>
                  
                  <div className="zipper-contact-form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="zipper-contact-form-textarea"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="zipper-contact-form-btn">
                    Send Message
                    <span className="zipper-contact-btn-icon">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="zipper-contact-map-section">
          <div className="zipper-contact-map-container">
            <h2 className="zipper-contact-section-heading">Find Us Here</h2>
            <p className="zipper-contact-map-subtitle">Visit our office at Mirpur, Dhaka</p>
            <div className="zipper-map-wrapper">
              <iframe
                src={mapUrl}
                title="Convince Group Office Location"
                className="zipper-contact-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="zipper-contact-hours-section">
          <div className="zipper-contact-hours-container">
            <h2 className="zipper-contact-section-heading">Working Hours</h2>
            <div className="zipper-contact-hours-grid">
              <div className="zipper-contact-hours-card">
                <div className="zipper-contact-hours-icon">🕐</div>
                <div className="zipper-contact-hours-info">
                  <h4>Saturday - Thursday</h4>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="zipper-contact-hours-card">
                <div className="zipper-contact-hours-icon">🕐</div>
                <div className="zipper-contact-hours-info">
                  <h4>Friday</h4>
                  <p>Closed</p>
                </div>
              </div>
              <div className="zipper-contact-hours-card">
                <div className="zipper-contact-hours-icon">📞</div>
                <div className="zipper-contact-hours-info">
                  <h4>Emergency Support</h4>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="zipper-contact-cta-section">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help with your zipper manufacturing needs</p>
<div className="zipper-contact-cta-buttons">
  <button 
    className="zipper-contact-cta-btn zipper-contact-cta-primary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Quote%20Request&body=I%20would%20like%20to%20request%20a%20quote%20for%20zippers.", "_blank")}
  >
    Request a Quote
  </button>
  <button 
    className="zipper-contact-cta-btn zipper-contact-cta-secondary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Schedule%20Meeting&body=I%20would%20like%20to%20schedule%20a%20meeting.", "_blank")}
  >
    Schedule a Meeting
  </button>
</div>
        </div>
      </div>
    </Base>
  );
};

export default ZipperContact;