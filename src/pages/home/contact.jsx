// Contact.jsx - Professional Contact Page Component with Etafil (Bangladesh) Ltd.
import React, { useEffect, useState } from 'react';
import Base from '../base.jsx';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });
  const [activeLocation, setActiveLocation] = useState('office'); // 'office' or 'factory'

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
      '.contact-container .contact-section-heading, ' +
      '.contact-container .contact-info-card, ' +
      '.contact-container .contact-form-container, ' +
      '.contact-container .map-wrapper, ' +
      '.contact-container .contact-hours-card, ' +
      '.contact-container .contact-cta-section, ' +
      '.contact-container .location-card'
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

  // Updated handleSubmit to open Gmail directly
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all fields before sending.'
      });
      setTimeout(() => {
        setFormStatus({ submitted: false, error: false, message: '' });
      }, 3000);
      return;
    }

    const companyEmail = "habib@etafil.com";
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    const subject = `Contact Form: ${formData.subject} - from ${formData.name}`;
    
    const body = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW MESSAGE FROM CONTACT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Date: ${dateStr}
Time: ${timeStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from the Etafil (Bangladesh) Ltd. website contact form.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best regards,
${formData.name}
${formData.email}`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Show success message and reset form
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Gmail opened! Please send the email to complete your message.'
    });
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 3000);
  };

  // Function to open Gmail with pre-filled email for Quote Request
  const handleRequestQuote = () => {
    const companyEmail = "habib@etafil.com";
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const subject = "Quote Request - Etafil (Bangladesh) Ltd. Products";
    
    const body = `Dear Etafil (Bangladesh) Ltd. Team,

I would like to request a price quote for your premium sewing thread products.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUEST DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product Interest: [Please specify which products you're interested in]
  □ Cotton Sewing Threads
  □ Polyester Sewing Threads
  □ Filament Threads
  □ Specialty Threads

Estimated Quantity: [Please specify quantity per month]
Required Specifications: [Color, thickness, special requirements]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: [Your Company Name]
Contact Person: [Your Name]
Designation: [Your Position]
Phone Number: [Your Phone Number]
Email Address: [Your Email]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SHIPPING INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Destination Country: [Country]
Preferred Incoterm: [FOB/CIF/EXW]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Please add any special requirements or questions here]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request Date: ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your prompt response. I look forward to your quotation.

Best regards,
[Your Name]
[Your Designation]
[Your Company Name]`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  // Function to open Gmail with pre-filled email for Meeting Schedule
  const handleScheduleMeeting = () => {
    const companyEmail = "habib@etafil.com";
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const subject = "Meeting Schedule Request - Etafil (Bangladesh) Ltd.";
    
    const body = `Dear Etafil (Bangladesh) Ltd. Team,

I would like to schedule a meeting to discuss potential collaboration opportunities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEETING REQUEST DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Proposed Date: [Please suggest 2-3 preferred dates]
Proposed Time: [Preferred time slot]
Meeting Duration: [30 min / 1 hour / 2 hours]
Meeting Type: □ Virtual (Zoom/Teams) □ In-Person □ Phone Call

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISCUSSION TOPICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Product Catalog & Pricing
□ Bulk Order Quotation
□ Custom Thread Development
□ Partnership Opportunities
□ Quality Certification
□ Other: [Please specify]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: [Your Company Name]
Contact Person: [Your Name]
Designation: [Your Position]
Phone Number: [Your Phone Number]
Email Address: [Your Email]
Country: [Your Country]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREFERRED CONTACT METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Email
□ Phone
□ WhatsApp
□ Other

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Please add any specific topics or requirements you'd like to discuss]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request Date: ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I look forward to your confirmation of available time slots.

Best regards,
[Your Name]
[Your Designation]
[Your Company Name]`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const getGmailComposeUrl = (email, subject = '', body = '') => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
  };

  // Location Data
  const locations = {
    office: {
      name: "Head Office",
      address: "House No. 65, Shah Maghdum Avenue Sector-12, Uttara, Dhaka-1230, Bangladesh.",
      phone: "(880-2) 55085783",
      email: "info@etafilbd.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8375!2d90.3811543!3d23.8716526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40fdb5dc265%3A0xc7384110a48079bf!2sTamishna%20Group%20Head%20Office!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
      icon: "🏢",
    },
    factory: {
      name: "Factory Location",
      address: "Bhadam Road, Bhadam, Tongi, Gazipur.",
      phone: "01713-046911",
      email: "habib@etafil.com",
       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8375!2d90.3587344!3d23.8986797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c399245dc53b%3A0x35b8a67c568d23a2!2sEtafil%20Accessories%20L.T.D!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
      icon: "🏭",

    }
  };

  // Contact Information
  const contactInfo = {
    address: "House No. 65, Shah Maghdum Avenue Sector-12, Uttara, Dhaka-1230, Bangladesh.",
    phone: ["(880-2) 55085783", "55087270 – 76"],
    email: ["info@etafilbd.com","habib@etafil.com","showkat@etafil.com"],
    managingDirector: {
      name: "Md. Habib Ullah",
      position: "AGM (Marketing)",
      cell: "01713-046911",
      email: "habib@etafil.com"
    },
    director: {
      name: "Md. Showkat Hossain",
      position: "AGM (Marketing)",
      cell: "01713-046908",
      email: "showkat@etafil.com"
    }
  };

  return (
    <Base>
      <div className="contact-container">
        {/* Hero Section */}
        <div className="contact-hero-section">
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">Get in touch with our team for inquiries, support, or collaboration</p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="contact-main-section">
          <div className="contact-grid">
            {/* Left Side - Contact Information */}
            <div className="contact-info-side">
              <h2 className="contact-section-heading">Get In Touch</h2>
              <p className="contact-info-description">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              {/* Address Card */}
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-content">
                  <h3>Office Address</h3>
                  <p className="contact-address-text">{contactInfo.address}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div className="contact-info-content">
                  <h3>Phone Numbers</h3>
                  <div className="contact-phone-list">
                    {contactInfo.phone.map((num, idx) => (
                      <a key={idx} href={`tel:${num}`} className="contact-phone-link">{num}</a>
                    ))}
                  </div>
                </div>
              </div>


              {/* Email Card */}
              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-content">
                  <h3>Email</h3>
                  <div className="contact-email-list">
                    {contactInfo.email.map((email, idx) => (
                      <a
                        key={idx}
                        href={getGmailComposeUrl(email)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-email-link"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Managing Director Card */}
              <div className="contact-info-card contact-person-card">
                <div className="contact-info-icon">👨‍💼</div>
                <div className="contact-info-content">
                  <h3>AGM (Marketing)</h3>
                  <p className="contact-person-name">{contactInfo.managingDirector.name}</p>
                  <a href={`tel:${contactInfo.managingDirector.cell}`} className="contact-person-cell">
                    📱 {contactInfo.managingDirector.cell}
                  </a>
                  <a
                    href={getGmailComposeUrl(contactInfo.managingDirector.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-person-email"
                  >
                    ✉️ {contactInfo.managingDirector.email}
                  </a>
                </div>
              </div>

              {/* Director Card */}
              <div className="contact-info-card contact-person-card">
                <div className="contact-info-icon">👨‍💼</div>
                <div className="contact-info-content">
                  <h3>AGM (Marketing)</h3>
                  <p className="contact-person-name">{contactInfo.director.name}</p>
                  <a href={`tel:${contactInfo.director.cell}`} className="contact-person-cell">
                    📱 {contactInfo.director.cell}
                  </a>
                  <a
                    href={getGmailComposeUrl(contactInfo.director.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-person-email"
                  >
                    ✉️ {contactInfo.director.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-side">
              <div className="contact-form-container">
                {/* Company Title inside Form Card */}
                <div className="contact-company-header">
                  <h1 className="contact-company-title1">Etafil (Bangladesh) Ltd.</h1>
                  <p className="contact-company-subtitle">Leading Manufacturer & Exporter of Premium Sewing Thread Products</p>
                  <p className="contact-company-subtitle-second">Excellence in Cotton Thread, Polyester Thread, Filament Thread</p>
                </div>
                
                <div className="contact-form-divider"></div>
                
                <h2 className="contact-form-title1">Send Us a Message</h2>
                <p className="contact-form-subtitle">Fill the form below and we'll get back to you within 24 hours</p>
                
                {formStatus.submitted && (
                  <div className={`contact-form-alert ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address"
                      required
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="contact-form-textarea"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="contact-form-btn">
                    Send Message
                    <span className="contact-btn-icon">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards Section - Head Office & Factory */}
        <div className="contact-locations-section">
          <div className="container">
            <h2 className="contact-section-heading">Our Locations</h2>
            <p className="contact-map-subtitle">Visit us at our head office or factory location</p>
            
            <div className="locations-grid">
              {/* Head Office Card */}
              <div className="location-card">
                <div className="location-card-header">
                  <div className="location-icon">{locations.office.icon}</div>
                  <h3>{locations.office.name}</h3>
                </div>
                <div className="location-details">
                  <div className="location-address">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{locations.office.address}</p>
                  </div>
                  <div className="location-phone">
                    <i className="fas fa-phone"></i>
                    <a href={`tel:${locations.office.phone}`}>{locations.office.phone}</a>
                  </div>
                  <div className="location-email">
                    <i className="fas fa-envelope"></i>
                    <a
                      href={getGmailComposeUrl(locations.office.email)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locations.office.email}
                    </a>
                  </div>
                  <div className="location-timing">

                    <span>{locations.office.timing}</span>
                  </div>
                </div>
                <div className="location-map">
                  <iframe
                    src={locations.office.mapUrl}
                    title="Head Office Location"
                    className="location-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Factory Card */}
              <div className="location-card">
                <div className="location-card-header">
                  <div className="location-icon">{locations.factory.icon}</div>
                  <h3>{locations.factory.name}</h3>
                </div>
                <div className="location-details">
                  <div className="location-address">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{locations.factory.address}</p>
                  </div>
                  <div className="location-phone">
                    <i className="fas fa-phone"></i>
                    <a href={`tel:${locations.factory.phone}`}>{locations.factory.phone}</a>
                  </div>
                  <div className="location-email">
                    <i className="fas fa-envelope"></i>
                    <a
                      href={getGmailComposeUrl(locations.factory.email)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locations.factory.email}
                    </a>
                  </div>
                  <div className="location-timing">

                    <span>{locations.factory.timing}</span>
                  </div>
                </div>
                <div className="location-map">
                  <iframe
                    src={locations.factory.mapUrl}
                    title="Factory Location"
                    className="location-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta-section">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help with your sewing thread requirements</p>
          <div className="contact-cta-buttons">
            <button className="contact-cta-btn contact-cta-primary" onClick={handleRequestQuote}>
              Request a Quote
            </button>
            <button className="contact-cta-btn contact-cta-secondary" onClick={handleScheduleMeeting}>
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Contact;
