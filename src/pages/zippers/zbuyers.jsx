import React, { useEffect, useState } from 'react';
import Base2 from './base2.jsx';
import './zbuyers.css';

const Buyers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  
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
      '.buyers-container .buyers-section-heading, .buyers-container .buyers-card, .buyers-container .buyers-testimonial-card, .buyers-container .buyers-stat-card, .buyers-container .buyers-partner-card'
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

  // Hero Slider Images
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/1.jpg', title: 'Our Valued Buyers', subtitle: 'Trusted by leading fashion brands worldwide' },
    { url: process.env.PUBLIC_URL + '/images/2.jpg', title: 'Global Partnerships', subtitle: 'Building lasting relationships across continents' },
    { url: process.env.PUBLIC_URL + '/images/3.jpg', title: 'Quality Commitment', subtitle: 'Delivering excellence to our global partners' },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Buyers/Clients Data
  const buyers = [
    { 
      id: 1,
      name: "ATLAS", 
      logo: process.env.PUBLIC_URL + '/images/atlas.png', 
      country: "Spain",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2015",
      description: "Leading fashion retailer in Europe",
      products: "Zippers, Elastic, Thread"
    },
    { 
      id: 2,
      name: "BONPRIX", 
      logo: process.env.PUBLIC_URL + '/images/BONPRIX.png', 
      country: "Sweden",
      region: "Europe",
      category: "retail",
      partnershipYear: "2016",
      description: "Scandinavian retail giant",
      products: "Full range of accessories"
    },
    { 
      id: 3,
      name: "FIFTY FACTORY", 
      logo: process.env.PUBLIC_URL + '/images/FIFTY FACTORY.JPG', 
      country: "Japan",
      region: "Asia",
      category: "manufacturing",
      partnershipYear: "2018",
      description: "Japanese manufacturing excellence",
      products: "Metal Zippers, PVC Sheets"
    },
    { 
      id: 4,
      name: "LA REDOUTE", 
      logo: process.env.PUBLIC_URL + '/images/la.png', 
      country: "USA",
      region: "North America",
      category: "fashion",
      partnershipYear: "2014",
      description: "American fashion house",
      products: "Nylon Zippers, Elastic"
    },
    { 
      id: 5,
      name: "LONSDALE", 
      logo: process.env.PUBLIC_URL + '/images/londsale.png',
      country: "USA",
      region: "North America",
      category: "sports",
      partnershipYear: "2017",
      description: "Sportswear brand",
      products: "Vislon Zippers, Draw Cord"
    },
    { 
      id: 6,
      name: "SMYK", 
      logo: process.env.PUBLIC_URL + '/images/smyk.png', 
      country: "USA",
      region: "North America",
      category: "retail",
      partnershipYear: "2019",
      description: "Retail chain",
      products: "Poly Bags, Thread"
    },
    { 
      id: 7,
      name: "SPRING FIELD", 
      logo: process.env.PUBLIC_URL + '/images/springfield.jpg', 
      country: "Germany",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2013",
      description: "German fashion brand",
      products: "All zipper types"
    },
    { 
      id: 8,
      name: "SERGENT MAJOR", 
      logo: process.env.PUBLIC_URL + '/images/sergentmajor.png', 
      country: "USA",
      region: "North America",
      category: "apparel",
      partnershipYear: "2020",
      description: "Apparel manufacturer",
      products: "Tapes, Elastic, Zippers"
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Procurement Director",
      company: "ATLAS",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Convince Zipper has been our trusted manufacturing partner for over a decade. Their attention to detail and commitment to quality is unmatched in the industry. They consistently deliver on time and exceed our expectations.",
      rating: 5,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Head of Production",
      company: "SMYK",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The level of professionalism and quality assurance at Convince Zipper exceeds our expectations. They're not just a vendor, but a true partner in our success. Their technical expertise is invaluable.",
      rating: 5,
      date: "2024-02-20"
    },
    {
      id: 3,
      name: "David Miller",
      designation: "Operations Manager",
      company: "SPRING FIELD",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Working with Convince Zipper has transformed our supply chain. Their innovation and reliability are second to none. The quality of their products has helped us maintain our brand reputation.",
      rating: 4,
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "Emma Watson",
      designation: "Sourcing Manager",
      company: "SERGENT MAJOR",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      text: "Excellent communication and product quality. Convince Zipper understands our needs perfectly and always provides solutions that work for our fast-paced environment.",
      rating: 5,
      date: "2024-02-05"
    },
    {
      id: 5,
      name: "James Wilson",
      designation: "Supply Chain Director",
      company: "LONSDALE",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: "A reliable partner with consistent quality. Their ability to handle large orders while maintaining quality standards is impressive. Highly recommended!",
      rating: 5,
      date: "2024-01-28"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      designation: "Quality Assurance Head",
      company: "LA REDOUTE",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      text: "The best in the business! Their commitment to quality control and international standards makes them our preferred supplier for critical components.",
      rating: 5,
      date: "2024-02-12"
    }
  ];

  // Filter buyers based on region
  const getFilteredBuyers = () => {
    if (activeTab === 'all') return buyers;
    return buyers.filter(buyer => buyer.region === activeTab);
  };

  const filteredBuyers = getFilteredBuyers();

  // Statistics Data
  const statistics = [
    { number: "8+", label: "Global Buyers", icon: "🌍" },
    { number: "25+", label: "Countries Served", icon: "📍" },
    { number: "25+", label: "Years of Trust", icon: "⭐" },
    { number: "99%", label: "Client Satisfaction", icon: "😊" },
    { number: "100%", label: "Quality Compliance", icon: "✅" },
  ];

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 150, height = 80) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Get unique regions for filters
  const regions = ['all', 'Europe', 'North America', 'Asia'];

  return (
    <Base2>
      <div className="buyers-container">
        {/* Hero Slider Section 
        <div className='buyers-hero-wrapper'>
          <div className="buyers-hero-slider-section">
            <div className="buyers-slider-container buyers-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`buyers-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="buyers-slide-overlay"></div>
                  <div className="buyers-slide-caption">
                    <h1 className="buyers-hero-title">{image.title}</h1>
                    <p className="buyers-hero-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <button className="buyers-slider-arrow buyers-prev" onClick={prevSlide}>❮</button>
              <button className="buyers-slider-arrow buyers-next" onClick={nextSlide}>❯</button>
              
              <div className="buyers-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`buyers-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>*/}

        {/* Introduction Section */}
        <div className="buyers-intro-section">
          <h1 className="buyers-main-title">Our Global Buyers</h1>
          <p className="buyers-main-subtitle">
            We take pride in serving some of the world's most prestigious fashion brands and retailers. 
            Our commitment to quality, reliability, and innovation has earned us the trust of industry leaders across the globe.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="buyers-stats-section">
          <div className="buyers-stats-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="buyers-stat-card">
                <div className="buyers-stat-icon">{stat.icon}</div>
                <h3 className="buyers-stat-number">{stat.number}</h3>
                <p className="buyers-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buyers Filter Section */}
        <div className="buyers-filter-section">
          <h2 className="buyers-section-heading">Our Valued Partners</h2>
          <div className="buyers-region-filters">
            {regions.map((region) => (
              <button
                key={region}
                className={`buyers-filter-btn ${activeTab === region ? 'active' : ''}`}
                onClick={() => setActiveTab(region)}
              >
                {region === 'all' ? 'All Regions' : region}
              </button>
            ))}
          </div>
        </div>

        {/* Buyers Grid Section */}
        <div className="buyers-grid-section">
          <div className="buyers-grid">
            {filteredBuyers.map((buyer) => (
              <div key={buyer.id} className="buyers-card">
                <div className="buyers-card-logo">
                  <img 
                    src={buyer.logo} 
                    alt={buyer.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(buyer.name, 200, 120);
                    }}
                  />
                </div>
                <div className="buyers-card-content">
                  <h3 className="buyers-name">{buyer.name}</h3>
                  <p className="buyers-country">{buyer.country}</p>
                  <p className="buyers-description">{buyer.description}</p>
                  <div className="buyers-details">
                    <span className="buyers-detail-item">
                      <strong>Partner Since:</strong> {buyer.partnershipYear}
                    </span>
                    <span className="buyers-detail-item">
                      <strong>Products:</strong> {buyer.products}
                    </span>
                  </div>
                  <div className="buyers-badge">{buyer.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="buyers-testimonials-section">
          <h2 className="buyers-section-heading">What Our Buyers Say</h2>
          <p className="buyers-testimonials-subtitle">Real experiences from our valued partners</p>
          
          <div className="buyers-testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="buyers-testimonial-card">
                <div className="buyers-testimonial-header">
                  <div className="buyers-testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="buyers-testimonial-info">
                    <h4 className="buyers-testimonial-name">{testimonial.name}</h4>
                    <p className="buyers-testimonial-designation">{testimonial.designation}</p>
                    <p className="buyers-testimonial-company">{testimonial.company}</p>
                  </div>
                  <div className="buyers-testimonial-rating">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
                <div className="buyers-testimonial-quote">"</div>
                <p className="buyers-testimonial-text">{testimonial.text}</p>
                <div className="buyers-testimonial-date">
                  {new Date(testimonial.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="buyers-benefits-section">
          <h2 className="buyers-section-heading">Why Partner With Us?</h2>
          <div className="buyers-benefits-grid">
            <div className="buyers-benefit-card">
              <div className="buyers-benefit-icon">🏭</div>
              <h3>State-of-the-art Manufacturing</h3>
              <p>Modern facilities with advanced machinery ensuring consistent quality and timely delivery</p>
            </div>
            <div className="buyers-benefit-card">
              <div className="buyers-benefit-icon">🔬</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control at every stage, meeting international standards</p>
            </div>
            <div className="buyers-benefit-card">
              <div className="buyers-benefit-icon">💡</div>
              <h3>Innovation & R&D</h3>
              <p>Continuous investment in research and development for better products</p>
            </div>
            <div className="buyers-benefit-card">
              <div className="buyers-benefit-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Environmentally responsible manufacturing processes</p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="buyers-cta-section">
          <h2>Become Our Partner</h2>
          <p>Join our growing family of satisfied buyers and experience the Convince Zipper difference</p>
<div className="buyers-cta-buttons">
  <button 
    className="buyers-cta-btn buyers-cta-primary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Quote%20Request&body=Hello,%20I%20would%20like%20to%20request%20a%20quote%20for:%0A%0AProduct:%20%0AQuantity:%20%0ARequirements:%20", "_blank")}
  >
    Request a Quote
  </button>
  <button 
    className="buyers-cta-btn buyers-cta-secondary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Sales%20Inquiry&body=Hi,%20I'm%20interested%20in%20your%20products.%20Please%20contact%20me%20about:%0A%0A%0ABest%20regards,%0A%5BYour%20Name%5D", "_blank")}
  >
    Contact Sales
  </button>
</div>
        </div>
      </div>
    </Base2>
  );
};

export default Buyers;