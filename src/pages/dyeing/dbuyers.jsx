// dbuyers.jsx - Dyeing Buyers Showcase Component
import React, { useEffect, useState } from 'react';
import Base3 from './base3.jsx';
import './dbuyers.css';

const DyeingBuyers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Scroll Animation 
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

    const sections = document.querySelectorAll(
      '.dbuyers-container .dbuyers-section-heading, ' +
      '.dbuyers-container .dbuyers-buyer-card, ' +
      '.dbuyers-container .dbuyers-testimonial-card, ' +
      '.dbuyers-container .dbuyers-stat-card, ' +
      '.dbuyers-container .dbuyers-benefit-card'
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

  // Hero Slider Images for Dyeing
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/dyeing.jpg', title: 'Our Valued Buyers', subtitle: 'Trusted by leading textile brands worldwide' },
    { url: process.env.PUBLIC_URL + '/images/DYEING!.jpg', title: 'Global Partnerships', subtitle: 'Building lasting relationships across continents' },
    { url: process.env.PUBLIC_URL + '/images/Dyeing1.jpg', title: 'Quality Commitment', subtitle: 'Delivering excellence in dyeing & finishing' },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Buyers/Clients Data - Using your specified buyers
  const buyers = [
    { 
      id: 1,
      name: "LERROS", 
      logo: process.env.PUBLIC_URL + '/images/lerros.jpg', 
      country: "Germany",
      region: "Europe",
      partnershipYear: "2015",
      description: "Leading fashion retailer in Europe specializing in casual wear"
    },
    { 
      id: 2,
      name: "OVS", 
      logo: process.env.PUBLIC_URL + '/images/ovs.png', 
      country: "Italy",
      region: "Europe",
      partnershipYear: "2016",
      description: "Italian retail giant with extensive fashion portfolio"
    },
    { 
      id: 3,
      name: "O'STIN", 
      logo: process.env.PUBLIC_URL + '/images/ostin.jpg', 
      country: "Russia",
      region: "Europe",
      partnershipYear: "2018",
      description: "Russian fashion manufacturing excellence"
    },
    { 
      id: 4,
      name: "GLORIA JEANS", 
      logo: process.env.PUBLIC_URL + '/images/gj.png', 
      country: "Russia",
      region: "Europe",
      partnershipYear: "2014",
      description: "Denim and casual wear specialist"
    },
    { 
      id: 5,
      name: "JEANS FRITZ", 
      logo: process.env.PUBLIC_URL + '/images/jf.png',
      country: "Germany",
      region: "Europe",
      partnershipYear: "2017",
      description: "German sportswear and denim brand"
    },
    { 
      id: 6,
      name: "NEW LOOK", 
      logo: process.env.PUBLIC_URL + '/images/newllok.jpg', 
      country: "UK",
      region: "Europe",
      partnershipYear: "2019",
      description: "British fashion retail chain"
    },
    { 
      id: 7,
      name: "NEXT", 
      logo: process.env.PUBLIC_URL + '/images/next.png', 
      country: "UK",
      region: "Europe",
      partnershipYear: "2013",
      description: "Premium British fashion retailer"
    },
    { 
      id: 8,
      name: "OXBOW", 
      logo: process.env.PUBLIC_URL + '/images/oxbow.jpg', 
      country: "France",
      region: "Europe",
      partnershipYear: "2020",
      description: "French surf and lifestyle brand"
    },
    { 
      id: 9,
      name: "MANGO", 
      logo: process.env.PUBLIC_URL + '/images/mango.webp', 
      country: "Spain",
      region: "Europe",
      partnershipYear: "2012",
      description: "Spanish fashion giant"
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Maria Garcia",
      designation: "Quality Director",
      company: "MANGO",
      text: "Convince Dyeing has exceptional color matching capabilities. Their consistency and quality control are unmatched in the industry.",
      rating: 5,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "James Wilson",
      designation: "Sourcing Manager",
      company: "NEXT",
      text: "Their eco-friendly dyeing process and commitment to sustainability align perfectly with our brand values.",
      rating: 5,
      date: "2024-02-20"
    },
    {
      id: 3,
      name: "Sophie Martin",
      designation: "Production Head",
      company: "OXBOW",
      text: "The advanced technology and technical expertise at Convince Dyeing ensures perfect results every time.",
      rating: 5,
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "Hans Schmidt",
      designation: "Supply Chain Director",
      company: "LERROS",
      text: "Convince Dyeing's attention to detail and quality consistency has made them our preferred partner.",
      rating: 5,
      date: "2024-02-05"
    },
    {
      id: 5,
      name: "Elena Volkov",
      designation: "Sustainability Head",
      company: "O'STIN",
      text: "Their commitment to eco-friendly dyeing processes and chemical management is commendable.",
      rating: 5,
      date: "2024-01-28"
    },
    {
      id: 6,
      name: "Marco Rossi",
      designation: "Technical Director",
      company: "OVS",
      text: "The technical expertise at Convince Dyeing is world-class. Their color matching is impressive.",
      rating: 5,
      date: "2024-02-12"
    }
  ];

  // Statistics Data
  const statistics = [
    { number: "9+", label: "Global Buyers", icon: "🌍" },
    { number: "8+", label: "Countries Served", icon: "📍" },
    { number: "20+", label: "Years of Trust", icon: "⭐" },
    { number: "99%", label: "Client Satisfaction", icon: "😊" },
    { number: "100%", label: "Quality Compliance", icon: "✅" },
  ];

  // Filter buyers based on search
  const getFilteredBuyers = () => {
    let filtered = [...buyers];
    
    if (searchTerm.trim()) {
      filtered = filtered.filter(buyer => 
        buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredBuyers = getFilteredBuyers();

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 200, height = 120) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-size='16' fill='%2364748b' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Handle contact click - Opens Gmail
  const handleContactClick = () => {
    const companyEmail = "cal@convincebd.biz";
    const subject = "Dyeing Service Inquiry - Convince Group";
    const body = `Dear Convince Dyeing Team,

I am interested in your professional dyeing services and would like to get more information.

Please contact me with details about:
- Service catalog
- Pricing structure
- Minimum Order Quantities
- Color matching capabilities

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle Request Quote
  const handleRequestQuote = (buyerName) => {
    const companyEmail = "cal@convincebd.biz";
    const subject = `Partnership Inquiry - ${buyerName}`;
    const body = `Dear Convince Dyeing Team,

I represent ${buyerName} and would like to explore potential partnership opportunities for textile dyeing services.

Please contact me to discuss:
- Dyeing requirements
- Capacity planning
- Technical specifications
- Commercial terms

Looking forward to your response.

Best regards,
[Your Name]
[Your Designation]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <Base3>
      <div className="dbuyers-container">
        {/* Hero Slider Section
        <div className='dbuyers-hero-wrapper'>
          <div className="dbuyers-hero-slider-section">
            <div className="dbuyers-slider-container dbuyers-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`dbuyers-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="dbuyers-slide-overlay"></div>
                  <div className="dbuyers-slide-caption">
                    <h1 className="dbuyers-hero-title">{image.title}</h1>
                    <p className="dbuyers-hero-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <button className="dbuyers-slider-arrow dbuyers-prev" onClick={prevSlide}>❮</button>
              <button className="dbuyers-slider-arrow dbuyers-next" onClick={nextSlide}>❯</button>
              
              <div className="dbuyers-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`dbuyers-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Introduction Section */}
        <div className="dbuyers-intro-section">
          <h1 className="dbuyers-main-title">Our Global Dyeing Partners</h1>
          <p className="dbuyers-main-subtitle">
            We take pride in serving some of the world's most prestigious fashion brands and textile companies. 
            Our commitment to color excellence, sustainable dyeing processes, and innovation has earned us the trust 
            of industry leaders across the globe.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="dbuyers-stats-section">
          <div className="dbuyers-stats-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="dbuyers-stat-card">
                <div className="dbuyers-stat-icon">{stat.icon}</div>
                <h3 className="dbuyers-stat-number">{stat.number}</h3>
                <p className="dbuyers-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="dbuyers-filter-section">
          <h2 className="dbuyers-section-heading">Our Valued Partners</h2>
          
          <div className="dbuyers-search-bar">
            <input 
              type="text" 
              placeholder="Search buyers by name, country, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dbuyers-search-input"
            />
            <span className="dbuyers-search-icon">🔍</span>
          </div>
        </div>

        {/* Buyers Grid Section */}
        <div className="dbuyers-grid-section">
          {filteredBuyers.length > 0 ? (
            <div className="dbuyers-buyers-grid">
              {filteredBuyers.map((buyer) => (
                <div key={buyer.id} className="dbuyers-buyer-card">
                  <div className="dbuyers-buyer-logo">
                    <img 
                      src={buyer.logo} 
                      alt={buyer.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(buyer.name, 200, 120);
                      }}
                    />
                  </div>
                  <div className="dbuyers-buyer-content">
                    <h3 className="dbuyers-buyer-name">{buyer.name}</h3>
                    <p className="dbuyers-buyer-country">{buyer.country}</p>
                    <p className="dbuyers-buyer-description">{buyer.description}</p>
                    <div className="dbuyers-buyer-details">
                      <span className="dbuyers-detail-item">
                        <strong>Partner Since:</strong> {buyer.partnershipYear}
                      </span>
                    </div>
                    <div className="dbuyers-buyer-badge">{buyer.region}</div>
                    <button 
                      className="dbuyers-inquiry-btn"
                      onClick={() => handleRequestQuote(buyer.name)}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="dbuyers-no-results">
              <p>No buyers found matching your search criteria.</p>
              <button onClick={() => setSearchTerm('')}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="dbuyers-testimonials-section">
          <h2 className="dbuyers-section-heading">What Our Buyers Say</h2>
          <p className="dbuyers-testimonials-subtitle">Real experiences from our valued partners</p>
          
          <div className="dbuyers-testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="dbuyers-testimonial-card">
                <div className="dbuyers-testimonial-header">
                  <div className="dbuyers-testimonial-info">
                    <h4 className="dbuyers-testimonial-name">{testimonial.name}</h4>
                    <p className="dbuyers-testimonial-designation">{testimonial.designation}</p>
                    <p className="dbuyers-testimonial-company">{testimonial.company}</p>
                  </div>
                  <div className="dbuyers-testimonial-rating">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
                <div className="dbuyers-testimonial-quote">"</div>
                <p className="dbuyers-testimonial-text">{testimonial.text}</p>
                <div className="dbuyers-testimonial-date">
                  {new Date(testimonial.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="dbuyers-benefits-section">
          <h2 className="dbuyers-section-heading">Why Partner With Us?</h2>
          <div className="dbuyers-benefits-grid">
            <div className="dbuyers-benefit-card">
              <div className="dbuyers-benefit-icon">🏭</div>
              <h3>State-of-the-art Facility</h3>
              <p>Modern dyeing facility with advanced German and Japanese machinery ensuring consistent quality</p>
            </div>
            <div className="dbuyers-benefit-card">
              <div className="dbuyers-benefit-icon">🔬</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control at every stage, meeting international standards like ISO, OEKO-TEX</p>
            </div>
            <div className="dbuyers-benefit-card">
              <div className="dbuyers-benefit-icon">🌿</div>
              <h3>Sustainable Practices</h3>
              <p>Eco-friendly dyeing processes with advanced ETP and chemical management systems</p>
            </div>
            <div className="dbuyers-benefit-card">
              <div className="dbuyers-benefit-icon">🎨</div>
              <h3>Expert Color Matching</h3>
              <p>Professional color matching lab with spectrophotometer and experienced colorists</p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="dbuyers-cta-section">
          <h2>Ready to Partner With Us?</h2>
          <p>Join our growing family of satisfied dyeing buyers and experience the Convince Dyeing difference</p>
          <div className="dbuyers-cta-buttons">
            <button className="dbuyers-cta-btn dbuyers-cta-primary" onClick={handleContactClick}>
              Request a Quote
            </button>
            <button className="dbuyers-cta-btn dbuyers-cta-secondary" onClick={handleContactClick}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </Base3>
  );
};

export default DyeingBuyers;