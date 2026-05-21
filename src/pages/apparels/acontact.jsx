// Contact.jsx - Professional Contact Page Component with CONVINCE GROUP LTD.
import React, { useEffect, useState } from 'react';
import Base from './base1.jsx';
import './acontact.css';

const Contact = () => {
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
      '.apparels-contact-container .apparels-contact-section-heading, ' +
      '.apparels-contact-container .apparels-contact-info-card, ' +
      '.apparels-contact-container .apparels-contact-form-container, ' +
      '.apparels-contact-container .apparels-map-wrapper, ' +
      '.apparels-contact-container .apparels-contact-hours-card, ' +
      '.apparels-contact-container .apparels-contact-cta-section'
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
      <div className="apparels-contact-container">
        {/* Hero Section */}
        <div className="apparels-contact-hero-section">
          <div className="apparels-contact-hero-overlay"></div>
          <div className="apparels-contact-hero-content">
            <h1 className="apparels-contact-hero-title">Contact Us</h1>
            <p className="apparels-contact-hero-subtitle">Get in touch with our team for inquiries, support, or collaboration</p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="apparels-contact-main-section">
          <div className="apparels-contact-grid">
            {/* Left Side - Contact Information */}
            <div className="apparels-contact-info-side">
              <h2 className="apparels-contact-section-heading">Get In Touch</h2>
              <p className="apparels-contact-info-description">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              {/* Address Card */}
              <div className="apparels-contact-info-card">
                <div className="apparels-contact-info-icon">📍</div>
                <div className="apparels-contact-info-content">
                  <h3>Office Address</h3>
                  <p className="apparels-contact-address-text">{contactInfo.address}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="apparels-contact-info-card">
                <div className="apparels-contact-info-icon">📞</div>
                <div className="apparels-contact-info-content">
                  <h3>Phone Numbers</h3>
                  <div className="apparels-contact-phone-list">
                    {contactInfo.phone.map((num, idx) => (
                      <a key={idx} href={`tel:${num}`} className="apparels-contact-phone-link">{num}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fax Card */}
              <div className="apparels-contact-info-card">
                <div className="apparels-contact-info-icon">📠</div>
                <div className="apparels-contact-info-content">
                  <h3>Fax</h3>
                  <p>{contactInfo.fax}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="apparels-contact-info-card">
                <div className="apparels-contact-info-icon">✉️</div>
                <div className="apparels-contact-info-content">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="apparels-contact-email-link">{contactInfo.email}</a>
                </div>
              </div>

              {/* Managing Director Card */}
              <div className="apparels-contact-info-card apparels-contact-person-card">
                <div className="apparels-contact-info-icon">👨‍💼</div>
                <div className="apparels-contact-info-content">
                  <h3>Managing Director</h3>
                  <p className="apparels-contact-person-name">{contactInfo.managingDirector.name}</p>
                  <a href={`tel:${contactInfo.managingDirector.cell}`} className="apparels-contact-person-cell">
                    📱 {contactInfo.managingDirector.cell}
                  </a>
                </div>
              </div>

              {/* Director Card */}
              <div className="apparels-contact-info-card apparels-contact-person-card">
                <div className="apparels-contact-info-icon">👨‍💼</div>
                <div className="apparels-contact-info-content">
                  <h3>Director</h3>
                  <p className="apparels-contact-person-name">{contactInfo.director.name}</p>
                  <a href={`tel:${contactInfo.director.cell}`} className="apparels-contact-person-cell">
                    📱 {contactInfo.director.cell}
                  </a>
                  <a href={`mailto:${contactInfo.director.email}`} className="apparels-contact-person-email">
                    ✉️ {contactInfo.director.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form with CONVINCE GROUP LTD. Title */}
            <div className="apparels-contact-form-side">
              <div className="apparels-contact-form-container">
                {/* Company Title inside Form Card */}
                <div className="apparels-contact-company-header">
                  <h1 className="apparels-contact-company-title">CONVINCE GROUP LTD.</h1>
                  <p className="apparels-contact-company-subtitle">Leading Manufacturer & Exporter of Premium Apparel Products</p>
                  <p className="apparels-contact-company-subtitle-second">Excellence in Knitwear, Sweaters, Vests & Garment Accessories</p>
                </div>
                
                <div className="apparels-contact-form-divider"></div>
                
                <h2 className="apparels-contact-form-title">Send Us a Message</h2>
                <p className="apparels-contact-form-subtitle">We'll respond to your inquiry within 24 hours</p>
                
                {formStatus.submitted && (
                  <div className={`apparels-contact-form-alert ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="apparels-contact-form">
                  <div className="apparels-contact-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      className="apparels-contact-form-input"
                    />
                  </div>
                  
                  <div className="apparels-contact-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address"
                      required
                      className="apparels-contact-form-input"
                    />
                  </div>
                  
                  <div className="apparels-contact-form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="apparels-contact-form-input"
                    />
                  </div>
                  
                  <div className="apparels-contact-form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="apparels-contact-form-textarea"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="apparels-contact-form-btn">
                    Send Message
                    <span className="apparels-contact-btn-icon">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="apparels-contact-map-section">
          <div className="apparels-contact-map-container">
            <h2 className="apparels-contact-section-heading">Find Us Here</h2>
            <p className="apparels-contact-map-subtitle">Visit our office at Mirpur, Dhaka</p>
            <div className="apparels-map-wrapper">
              <iframe
                src={mapUrl}
                title="Convince Group Office Location"
                className="apparels-contact-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="apparels-contact-hours-section">
          <div className="apparels-contact-hours-container">
            <h2 className="apparels-contact-section-heading">Working Hours</h2>
            <div className="apparels-contact-hours-grid">
              <div className="apparels-contact-hours-card">
                <div className="apparels-contact-hours-icon">🕐</div>
                <div className="apparels-contact-hours-info">
                  <h4>Saturday - Thursday</h4>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="apparels-contact-hours-card">
                <div className="apparels-contact-hours-icon">🕐</div>
                <div className="apparels-contact-hours-info">
                  <h4>Friday</h4>
                  <p>Closed</p>
                </div>
              </div>
              <div className="apparels-contact-hours-card">
                <div className="apparels-contact-hours-icon">📞</div>
                <div className="apparels-contact-hours-info">
                  <h4>Emergency Support</h4>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="apparels-contact-cta-section">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help with your apparel manufacturing needs</p>
<div className="apparels-contact-cta-buttons">
  <button 
    className="apparels-contact-cta-btn apparels-contact-cta-primary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Quote%20Request%20-%20Apparels&body=Hello,%20I%20would%20like%20to%20request%20a%20quote%20for%20apparel%20products:%0A%0AProduct%20Type:%20%0AQuantity:%20%0ASize/Color:%20%0ASpecial%20Requirements:%20%0A%0AThank%20you!", "_blank")}
  >
    Request a Quote
  </button>
  <button 
    className="apparels-contact-cta-btn apparels-contact-cta-secondary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Schedule%20a%20Meeting%20-%20Apparels&body=Hi,%20I%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20apparel%20requirements.%0A%0APreferred%20Date:%20%0APreferred%20Time:%20%0AMeeting%20Type%20(Online/In-person):%20%0ATopics%20to%20discuss:%20%0A%0ABest%20regards,%0A%5BYour%20Name%5D", "_blank")}
  >
    Schedule a Meeting
  </button>
</div>
        </div>
      </div>
    </Base>
  );
};

export default Contact;