import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base2 from './base2.jsx';
import './zippers.css';

const Zippers = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      '.zipper-container .zipper-section-heading, .zipper-container .zipper-client-card, .zipper-container .zipper-product-card, .zipper-container .zipper-about-heading, .zipper-container .zipper-about-paragraph, .zipper-container .zipper-stat-card, .zipper-container .zipper-about-image, .zipper-container .zipper-testimonial-card, .zipper-container .zipper-hero-slide, .zipper-container .zipper-capacity-card'
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

  // Board of Directors Data
  const directors = [
    {
      name: "Mr. Rafez Alam Chowdhury",
      designation: "Chairman & Managing Director",
      image: process.env.PUBLIC_URL + '/images/rafez.jpg',
      description: "With over 30 years of experience in the garment accessories industry, leading the company with vision and innovation."
    },
    {
      name: "Mr. Farzhad Ahmed",
      designation: "Executive Director",
      image: process.env.PUBLIC_URL + '/images/farzad.jpg',
      description: "czal@convincebd.biz, farzhad@convincebd.biz"
    },
    {
      name: "Mr. Rashik Alam Chowdhury",
      designation: "Executive Director",
      image: process.env.PUBLIC_URL + '/images/rashik.jpg',
      description: "rashik@tamishna.com, linkedin.com/in/rashik-chowdhury-84a5a4137"
    }
  ];

  // Production Capacity Data
  const productionCapacity = [
    { product: "Vislon/Plastic Zipper", capacity: "4000 dz", icon: "🔗" },
    { product: "Nylon Zipper", capacity: "8000 dz", icon: "⚡" },
    { product: "Metal Zipper", capacity: "8000 dz", icon: "⚙️" },
    { product: "Gum Tape", capacity: "5000 roll", icon: "📦" },
    { product: "Elastic", capacity: "1400 roll", icon: "🔄" },
    { product: "Draw String", capacity: "55,000 mtr", icon: "🧵" },
    { product: "Draw Cord", capacity: "30,000 mtr", icon: "🔌" },
    { product: "Inter Lining", capacity: "100,000 yds", icon: "📏" },
    { product: "PVC Sheet", capacity: "1.50 mt", icon: "📜" },
    { product: "Poly Bag", capacity: "6800 lbs", icon: "🛍️" },
    { product: "Metal (zinc/Copper)", capacity: "161 mt", icon: "🏭" },
    { product: "Sewing Thread", capacity: "6000 cone", icon: "🧶" },
  ];

  // Hero Slider Images
  const heroImages = [
    { url: (process.env.PUBLIC_URL + '/images/6.jpg' )},
    { url: (process.env.PUBLIC_URL + '/images/2.jpg') },
    { url: (process.env.PUBLIC_URL + '/images/3.jpg') },
    { url: (process.env.PUBLIC_URL + '/images/5.jpg') },
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

  // Product Data with Categories
  const productCategories = [
    {
      name: "Zipper PRODUCTS",
      images: [
        { url: (process.env.PUBLIC_URL + '/images/nylon.jpg'), name: 'NYLON' },
        { url: (process.env.PUBLIC_URL + '/images/zipper.jpg'), name: 'VISLON' },
        { url: (process.env.PUBLIC_URL + '/images/metal.jpg'), name: 'METAL ZIPPER' },
        { url: (process.env.PUBLIC_URL + '/images/elastic.jpg'), name: 'ELASTIC' },
        { url: (process.env.PUBLIC_URL + '/images/tap.jpg'), name: 'GUM TAPE' },
        { url: (process.env.PUBLIC_URL + '/images/twill.jpg'), name: 'TWILL TAPE' },
        { url: (process.env.PUBLIC_URL + '/images/Draw.jpg'), name: 'DRAW STRING' },
      ]
    },
  ];

  // Function to get all products
  const getAllProducts = () => {
    let allProducts = [];
    productCategories.forEach(category => {
      category.images.forEach(product => {
        allProducts.push({
          ...product,
          category: category.name
        });
      });
    });
    return allProducts;
  };

  const allProducts = getAllProducts();

  // Handle product click navigation - with scroll to top
  const handleProductClick = (productName) => {
    navigate('/zproducts', { state: { selectedProduct: productName } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle client click navigation - with scroll to top
  const handleClientClick = (clientName, clientCountry) => {
    navigate('/zbuyers', { state: { selectedClient: clientName } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clients Data with working image URLs
  const clients = [
    { 
      name: "ATLAS", 
      logo: (process.env.PUBLIC_URL + '/images/atlas.png'), 
      country: "Spain",
    },
    { 
      name: "BONPRIX", 
      logo: (process.env.PUBLIC_URL + '/images/BONPRIX.png'), 
      country: "Sweden" 
    },
    { 
      name: "FIFTY FACTORY", 
      logo: (process.env.PUBLIC_URL + '/images/FIFTY FACTORY.JPG'), 
      country: "Japan" 
    },
    { 
      name: "LA REDOUTE", 
      logo: (process.env.PUBLIC_URL + '/images/la.png'), 
      country: "USA" 
    },
    { 
      name: "LONSDALE", 
      logo: (process.env.PUBLIC_URL + '/images/londsale.png'),
      country: "USA"
    },
    { 
      name: "SMYK", 
      logo: (process.env.PUBLIC_URL + '/images/smyk.png'), 
      country: "USA" 
    },
    { 
      name: "SPRING FIELD", 
      logo: (process.env.PUBLIC_URL + '/images/springfield.jpg'), 
      country: "Germany" 
    },
    { 
      name: "SERGENT MAJOR", 
      logo: (process.env.PUBLIC_URL + '/images/sergentmajor.png'), 
      country: "USA" 
    },
  ];

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 300, height = 240) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  return (
    <Base2>
      <div className="zipper-container">
          <div className="zipper-hero-section">
          <h2>About</h2>
          </div>
        {/* Hero Slider Section 
        <div className='zipper-hero-wrapper'>
          <div className="zipper-hero-slider-section">
            <div className="zipper-slider-container zipper-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`zipper-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="zipper-slide-overlay"></div>
                  <div className="zipper-slide-caption">
                    <h1 className="zipper-hero-title">Welcome to Convince Zipper & Accessories Ltd.</h1>
                    <p className="zipper-hero-subtitle">Premium Quality Zippers & Garment Accessories for Global Fashion Leaders</p>
                  </div>
                </div>
              ))}
              
              
              <button className="zipper-slider-arrow zipper-prev" onClick={prevSlide}>❮</button>
              <button className="zipper-slider-arrow zipper-next" onClick={nextSlide}>❯</button>
              
              <div className="zipper-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`zipper-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>*/}



        {/* About Section - Reduced padding */}
        <section className="zipper-about-section">
          <div className="zipper-about-content">
            <div className="zipper-about-row">
              <div className="zipper-about-text">
                <h3 className="zipper-about-heading">Leading the Way in Zipper & Accessories Manufacturing</h3>
                <p className="zipper-about-paragraph">
                  Convince Zipper & Accessories Ltd. was established in 2001 at its own multi-plan building with all
                  modern facilities based on buyer's requirements. The company's one and only mission are to manufacture
                  and export different types of quality Zipper, (Vislon ,Nylon, Metal) Elastic, Gum tape , Twill tape, 
                  Draw String, Draw Cord as per Buyer's requirements.<br></br>
                  It stands as a beacon of excellence in the global fashion manufacturing landscape. 
                  With state-of-the-art production facilities and a commitment to quality that knows no bounds, we have 
                  established ourselves as a trusted partner for leading fashion brands worldwide.
                </p>
                <p className="zipper-about-paragraph">
                  Our journey began with a simple vision: to create garments that not only meet but exceed the expectations 
                  of the most discerning customers. Today, that vision has evolved into a comprehensive manufacturing ecosystem 
                  that combines traditional craftsmanship with cutting-edge technology.
                </p>
                <div className="zipper-stats-container">
                  <div className="zipper-stat-card">
                    <h4 className="zipper-stat-number">25+</h4>
                    <p className="zipper-stat-label">Years of Excellence</p>
                  </div>
                  <div className="zipper-stat-card">
                    <h4 className="zipper-stat-number">150+</h4>
                    <p className="zipper-stat-label">Skilled Workers</p>
                  </div>
                  <div className="zipper-stat-card">
                    <h4 className="zipper-stat-number">8+</h4>
                    <p className="zipper-stat-label">Global Clients</p>
                  </div>
                  <div className="zipper-stat-card">
                    <h4 className="zipper-stat-number">10K+</h4>
                    <p className="zipper-stat-label">Daily Production</p>
                  </div>
                </div>
              </div>
              <div className="zipper-about-image">
                <img src={process.env.PUBLIC_URL + '/images/zipper.jpg'} alt="Convince Zipper Factory" className="zipper-factory-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Reduced padding */}
        <section className="zipper-products-section">
          <h2 className="zipper-section-heading">Our Products</h2>
          <div className="zipper-slider-container">
            <div className="zipper-slider-track">
              {/* First set - all products */}
              {allProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="zipper-product-card"
                  onClick={() => handleProductClick(product.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="zipper-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="zipper-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="zipper-product-info">
                    <h3 className="zipper-product-name">{product.name}</h3>
                    <p className="zipper-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {allProducts.map((product, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="zipper-product-card"
                  onClick={() => handleProductClick(product.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="zipper-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="zipper-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="zipper-product-info">
                    <h3 className="zipper-product-name">{product.name}</h3>
                    <p className="zipper-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Capacity Section - Reduced padding */}
        <section className="zipper-capacity-section">
          <h2 className="zipper-section-heading">Production Capacity</h2>
          <p className="zipper-capacity-subtitle">Our daily manufacturing capabilities</p>
          
          <div className="zipper-capacity-grid">
            {productionCapacity.map((item, index) => (
              <div key={index} className="zipper-capacity-card">
                <div className="zipper-capacity-icon">{item.icon}</div>
                <div className="zipper-capacity-content">
                  <h3 className="zipper-capacity-product">{item.product}</h3>
                  <p className="zipper-capacity-value">{item.capacity}</p>
                </div>
                <div className="zipper-capacity-badge">Per Day</div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section - Reduced padding */}
        <section className="zipper-clients-section">
          <h2 className="zipper-section-heading">Our Clients</h2>
          <p className="zipper-clients-subtitle">Trusted by leading fashion brands worldwide</p>
          
          <div className="zipper-clients-grid">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="zipper-client-card"
                onClick={() => handleClientClick(client.name, client.country)}
                style={{ cursor: 'pointer' }}
              >
                <div className="zipper-client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="zipper-client-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
                <h4 className="zipper-client-name">{client.name}</h4>
                <p className="zipper-client-country">{client.country}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="zipper-testimonials-section">
            <h3 className="zipper-testimonials-heading">What Our Clients Say</h3>
            <div className="zipper-testimonials-grid">
              <div className="zipper-testimonial-card">
                <div className="zipper-quote-mark">"</div>
                <p className="zipper-testimonial-text">
                  Convince Zipper has been our trusted manufacturing partner for over a decade. 
                  Their attention to detail and commitment to quality is unmatched in the industry.
                </p>
                <div className="zipper-testimonial-author">
                  <strong>Sarah Johnson</strong>
                  <span>Procurement Director, ATLAS</span>
                </div>
              </div>

              <div className="zipper-testimonial-card">
                <div className="zipper-quote-mark">"</div>
                <p className="zipper-testimonial-text">
                  The level of professionalism and quality assurance at Convince Zipper
                  exceeds our expectations. They're not just a vendor, but a true partner.
                </p>
                <div className="zipper-testimonial-author">
                  <strong>Michael Chen</strong>
                  <span>Head of Production, SMYK</span>
                </div>
              </div>

              <div className="zipper-testimonial-card">
                <div className="zipper-quote-mark">"</div>
                <p className="zipper-testimonial-text">
                  Working with Convince Zipper has transformed our supply chain. 
                  Their innovation and reliability are second to none.
                </p>
                <div className="zipper-testimonial-author">
                  <strong>David Miller</strong>
                  <span>Operations Manager, FIFTY FIELD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Marquee - Also made clickable */}
          <div className="zipper-logo-marquee">
            <div className="zipper-marquee-wrapper">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="zipper-marquee-item"
                  onClick={() => handleClientClick(client.name, client.country)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="zipper-marquee-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="zipper-marquee-item"
                  onClick={() => handleClientClick(client.name, client.country)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="zipper-marquee-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors Section - Reduced padding */}
        <section className="zipper-directors-section">
          <h2 className="zipper-section-heading">Board of Directors</h2>
          <p className="zipper-directors-subtitle">Meet the visionary leaders behind Convince Zipper & Accessories Ltd.</p>
          
          <div className="zipper-directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="zipper-director-card">
                <div className="zipper-director-image-wrapper">
                  <div className="zipper-director-image">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="zipper-director-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&size=200&background=1a3c34&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>
                <div className="zipper-director-info">
                  <h3 className="zipper-director-name">{director.name}</h3>
                  <p className="zipper-director-designation">{director.designation}</p>
                  <p className="zipper-director-description">{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Base2>
  );
};

export default Zippers;