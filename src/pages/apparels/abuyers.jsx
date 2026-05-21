// apparels-buyers.jsx - Apparel Buyers Showcase Component
import React, { useEffect, useState } from 'react';
import Base from './base1.jsx';
import './abuyers.css';

const ApparelsBuyers = () => {
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
      '.apparels-buyers-container .apparels-section-heading, .apparels-buyers-container .apparels-buyer-card, .apparels-buyers-container .apparels-testimonial-card, .apparels-buyers-container .apparels-stat-card, .apparels-buyers-container .apparels-benefit-card'
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
    { url: process.env.PUBLIC_URL + '/images/sweater.jpg', title: 'Our Valued Buyers', subtitle: 'Trusted by leading fashion brands worldwide' },
    { url: process.env.PUBLIC_URL + '/images/vests.jpg', title: 'Global Partnerships', subtitle: 'Building lasting relationships across continents' },
    { url: process.env.PUBLIC_URL + '/images/sweater1.jpg', title: 'Quality Commitment', subtitle: 'Delivering excellence to our global partners' },
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

  // Buyers/Clients Data - Apparel Focused
  const buyers = [
    { 
      id: 1,
      name: "LERROS", 
      logo: process.env.PUBLIC_URL + '/images/lerros.jpg', 
      country: "Germany",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2015",
      description: "Leading fashion retailer in Europe specializing in casual wear",
      products: "Sweaters, Vests, Knitwear"
    },
    { 
      id: 2,
      name: "OVS", 
      logo: process.env.PUBLIC_URL + '/images/ovs.png', 
      country: "Italy",
      region: "Europe",
      category: "retail",
      partnershipYear: "2016",
      description: "Italian retail giant with extensive fashion portfolio",
      products: "Full range of apparel"
    },
    { 
      id: 3,
      name: "O'STIN", 
      logo: process.env.PUBLIC_URL + '/images/ostin.jpg', 
      country: "Russia",
      region: "Europe",
      category: "manufacturing",
      partnershipYear: "2018",
      description: "Russian fashion manufacturing excellence",
      products: "Sweaters, Cardigans, Ponchos"
    },
    { 
      id: 4,
      name: "GLORIA JEANS", 
      logo: process.env.PUBLIC_URL + '/images/gj.png', 
      country: "Russia",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2014",
      description: "Denim and casual wear specialist",
      products: "Sweatshirts, Knitwear"
    },
    { 
      id: 5,
      name: "JEANS FRITZ", 
      logo: process.env.PUBLIC_URL + '/images/jf.png',
      country: "Germany",
      region: "Europe",
      category: "sports",
      partnershipYear: "2017",
      description: "German sportswear and denim brand",
      products: "Sweatshirts, Hoodies, Vests"
    },
    { 
      id: 6,
      name: "NEW LOOK", 
      logo: process.env.PUBLIC_URL + '/images/newllok.jpg', 
      country: "UK",
      region: "Europe",
      category: "retail",
      partnershipYear: "2019",
      description: "British fashion retail chain",
      products: "Full apparel collection"
    },
    { 
      id: 7,
      name: "NEXT", 
      logo: process.env.PUBLIC_URL + '/images/next.png', 
      country: "UK",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2013",
      description: "Premium British fashion retailer",
      products: "Knitwear, Sweaters, Cardigans"
    },
    { 
      id: 8,
      name: "OXBOW", 
      logo: process.env.PUBLIC_URL + '/images/oxbow.jpg', 
      country: "France",
      region: "Europe",
      category: "apparel",
      partnershipYear: "2020",
      description: "French surf and lifestyle brand",
      products: "Sweatshirts, Hoodies, Vests"
    },
    { 
      id: 9,
      name: "MANGO", 
      logo: process.env.PUBLIC_URL + '/images/mango.webp', 
      country: "Spain",
      region: "Europe",
      category: "fashion",
      partnershipYear: "2012",
      description: "Spanish fashion giant",
      products: "Full apparel range"
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Procurement Director",
      company: "LERROS",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Convince Apparels has been our trusted manufacturing partner for over a decade. Their attention to detail and commitment to quality is unmatched in the knitwear industry. They consistently deliver on time and exceed our expectations.",
      rating: 5,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Head of Production",
      company: "NEW LOOK",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The level of professionalism and quality assurance at Convince Apparels exceeds our expectations. They're not just a vendor, but a true partner in our success. Their technical expertise in sweater manufacturing is invaluable.",
      rating: 5,
      date: "2024-02-20"
    },
    {
      id: 3,
      name: "David Miller",
      designation: "Operations Manager",
      company: "NEXT",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Working with Convince Apparels has transformed our knitwear supply chain. Their innovation and reliability are second to none. The quality of their sweaters and cardigans has helped maintain our brand reputation.",
      rating: 5,
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "Emma Watson",
      designation: "Sourcing Manager",
      company: "OXBOW",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      text: "Excellent communication and product quality. Convince Apparels understands our needs perfectly and always provides solutions that work for our fast-paced environment. Their hoodies and sweatshirts are top-notch.",
      rating: 5,
      date: "2024-02-05"
    },
    {
      id: 5,
      name: "James Wilson",
      designation: "Supply Chain Director",
      company: "MANGO",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: "A reliable partner with consistent quality across all product lines. Their ability to handle large orders of knitwear while maintaining quality standards is impressive. Highly recommended for any apparel brand!",
      rating: 5,
      date: "2024-01-28"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      designation: "Quality Assurance Head",
      company: "GLORIA JEANS",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      text: "The best in the business! Their commitment to quality control and international standards makes them our preferred supplier for sweaters, vests, and all knitwear products.",
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
    { number: "15+", label: "Global Buyers", icon: "🌍" },
    { number: "10+", label: "Countries Served", icon: "📍" },
    { number: "25+", label: "Years of Trust", icon: "⭐" },
    { number: "99%", label: "Client Satisfaction", icon: "😊" },
    { number: "100%", label: "Quality Compliance", icon: "✅" },
  ];

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 200, height = 120) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-size='16' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Get unique regions for filters
  const regions = ['all', 'Europe'];

  return (
    <Base>
      <div className="apparels-buyers-container">
        {/* Hero Slider Section 
        <div className='apparels-hero-wrapper'>
          <div className="apparels-hero-slider-section">
            <div className="apparels-slider-container apparels-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`apparels-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="apparels-slide-overlay"></div>
                  <div className="apparels-slide-caption">
                    <h1 className="apparels-hero-title">{image.title}</h1>
                    <p className="apparels-hero-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <button className="apparels-slider-arrow apparels-prev" onClick={prevSlide}>❮</button>
              <button className="apparels-slider-arrow apparels-next" onClick={nextSlide}>❯</button>
              
              <div className="apparels-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`apparels-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>*/}

        {/* Introduction Section */}
        <div className="apparels-intro-section">
          <h1 className="apparels-main-title">Our Global Apparel Buyers</h1>
          <p className="apparels-main-subtitle">
            We take pride in serving some of the world's most prestigious fashion brands and retailers. 
            Our commitment to quality knitwear, reliability, and innovation has earned us the trust of 
            industry leaders across the globe.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="apparels-stats-section">
          <div className="apparels-stats-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="apparels-stat-card">
                <div className="apparels-stat-icon">{stat.icon}</div>
                <h3 className="apparels-stat-number">{stat.number}</h3>
                <p className="apparels-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buyers Filter Section */}
        <div className="apparels-filter-section">
          <h2 className="apparels-section-heading">Our Valued Partners</h2>
          <div className="apparels-region-filters">
            {regions.map((region) => (
              <button
                key={region}
                className={`apparels-filter-btn ${activeTab === region ? 'active' : ''}`}
                onClick={() => setActiveTab(region)}
              >
                {region === 'all' ? 'All Partners' : region}
              </button>
            ))}
          </div>
        </div>

        {/* Buyers Grid Section */}
        <div className="apparels-grid-section">
          <div className="apparels-buyers-grid">
            {filteredBuyers.map((buyer) => (
              <div key={buyer.id} className="apparels-buyer-card">
                <div className="apparels-buyer-logo">
                  <img 
                    src={buyer.logo} 
                    alt={buyer.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(buyer.name, 200, 120);
                    }}
                  />
                </div>
                <div className="apparels-buyer-content">
                  <h3 className="apparels-buyer-name">{buyer.name}</h3>
                  <p className="apparels-buyer-country">{buyer.country}</p>
                  <p className="apparels-buyer-description">{buyer.description}</p>
                  <div className="apparels-buyer-details">
                    <span className="apparels-detail-item">
                      <strong>Partner Since:</strong> {buyer.partnershipYear}
                    </span>
                    <span className="apparels-detail-item">
                      <strong>Products:</strong> {buyer.products}
                    </span>
                  </div>
                  <div className="apparels-buyer-badge">{buyer.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="apparels-testimonials-section">
          <h2 className="apparels-section-heading">What Our Buyers Say</h2>
          <p className="apparels-testimonials-subtitle">Real experiences from our valued partners</p>
          
          <div className="apparels-testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="apparels-testimonial-card">
                <div className="apparels-testimonial-header">
                  <div className="apparels-testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="apparels-testimonial-info">
                    <h4 className="apparels-testimonial-name">{testimonial.name}</h4>
                    <p className="apparels-testimonial-designation">{testimonial.designation}</p>
                    <p className="apparels-testimonial-company">{testimonial.company}</p>
                  </div>
                  <div className="apparels-testimonial-rating">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
                <div className="apparels-testimonial-quote">"</div>
                <p className="apparels-testimonial-text">{testimonial.text}</p>
                <div className="apparels-testimonial-date">
                  {new Date(testimonial.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="apparels-benefits-section">
          <h2 className="apparels-section-heading">Why Partner With Us?</h2>
          <div className="apparels-benefits-grid">
            <div className="apparels-benefit-card">
              <div className="apparels-benefit-icon">🏭</div>
              <h3>State-of-the-art Manufacturing</h3>
              <p>Modern facilities with 200+ advanced knitting machines ensuring consistent quality and timely delivery</p>
            </div>
            <div className="apparels-benefit-card">
              <div className="apparels-benefit-icon">🔬</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control at every stage, meeting international standards like OEKO-TEX, BSCI</p>
            </div>
            <div className="apparels-benefit-card">
              <div className="apparels-benefit-icon">💡</div>
              <h3>Innovation & R&D</h3>
              <p>Continuous investment in research and development for better knitwear products</p>
            </div>
            <div className="apparels-benefit-card">
              <div className="apparels-benefit-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Environmentally responsible manufacturing processes with recycled materials</p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="apparels-cta-section1">
          <h2>Become Our Partner</h2>
          <p>Join our growing family of satisfied apparel buyers and experience the Convince Apparels difference</p>
<div className="apparels-cta-buttons">
  <button 
    className="apparels-cta-btn apparels-cta-primary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Quote%20Request%20-%20Apparels&body=Hello,%20I%20would%20like%20to%20request%20a%20quote%20for%20apparel%20products:%0A%0AProduct%20Type:%20%0AQuantity:%20%0ASize/Color:%20%0ASpecial%20Requirements:%20%0A%0AThank%20you!", "_blank")}
  >
    Request a Quote
  </button>
  <button 
    className="apparels-cta-btn apparels-cta-secondary"
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@convincegroup.com&su=Sales%20Inquiry%20-%20Apparels&body=Hi,%20I'm%20interested%20in%20your%20apparel%20products.%20Please%20contact%20me%20about:%0A%0A%0ABest%20regards,%0A%5BYour%20Name%5D", "_blank")}
  >
    Contact Sales
  </button>
</div>
        </div>
      </div>
    </Base>
  );
};

export default ApparelsBuyers;