import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base3 from './base3.jsx';
import './dyeing.css';

const Dyeing = () => {
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
      '.dyeing-container .dyeing-section-heading, .dyeing-container .dyeing-client-card, .dyeing-container .dyeing-product-card, .dyeing-container .dyeing-about-heading, .dyeing-container .dyeing-about-paragraph, .dyeing-container .dyeing-stat-card, .dyeing-container .dyeing-about-image, .dyeing-container .dyeing-testimonial-card, .dyeing-container .dyeing-hero-slide, .dyeing-container .dyeing-capacity-card, .dyeing-container .dyeing-director-card'
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

  // Navigation handlers
  const handleProductsClick = () => {
    navigate('/dproducts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClientsClick = () => {
    navigate('/dbuyers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Board of Directors Data
  const directors = [
    {
      name: "Mr. Rafez Alam Chowdhury",
      designation: "Chairman & Managing Director",
      image: process.env.PUBLIC_URL + '/images/rafez.jpg',
      description: "With over 30 years of experience in the textile dyeing industry, leading the company with vision and innovation towards sustainable excellence."
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

  // Production Capacity Data for Dyeing
  const productionCapacity = [
    { product: "Fabric Dyeing", capacity: "50,000 kg/day", icon: "🎨" },
    { product: "Yarn Dyeing", capacity: "30,000 kg/day", icon: "🧵" },
    { product: "Garment Dyeing", capacity: "20,000 pcs/day", icon: "👕" },
    { product: "Reactive Dyeing", capacity: "40,000 kg/day", icon: "🌈" },
    { product: "Disperse Dyeing", capacity: "35,000 kg/day", icon: "✨" },
    { product: "Pigment Dyeing", capacity: "25,000 kg/day", icon: "🎨" },
    { product: "Sulfur Dyeing", capacity: "15,000 kg/day", icon: "⚫" },
    { product: "Fabric Finishing", capacity: "60,000 mtr/day", icon: "✨" },
    { product: "Quality Testing", capacity: "100% inspection", icon: "🔬" },
  ];

  // Hero Slider Images for Dyeing
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/dyeing.jpg' },
    { url: process.env.PUBLIC_URL + '/images/DYEING!.jpg' },
    { url: process.env.PUBLIC_URL + '/images/Dyeing1.jpg' },
    { url: process.env.PUBLIC_URL + '/images/dyeingfebric.jpg' },
    { url: process.env.PUBLIC_URL + '/images/sulfur-dyeing.jpg' },
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

  // Product Data for Dyeing
  const productCategories = [
    {
      name: "DYEING SERVICES",
      images: [
        { url: process.env.PUBLIC_URL + '/images/dyeingfebric.png', name: 'FABRIC DYEING' },
        { url: process.env.PUBLIC_URL + '/images/yarn.webp', name: 'YARN DYEING' },
        { url: process.env.PUBLIC_URL + '/images/disperse-dyeing.webp', name: 'DISPERSE DYEING' },
        { url: process.env.PUBLIC_URL + '/images/pigment-dyeing.webp', name: 'PIGMENT DYEING' },
        { url: process.env.PUBLIC_URL + '/images/germentsdyeing.webp', name: 'GARMENT DYEING' },
        { url: process.env.PUBLIC_URL + '/images/reactivedyeing.jpg', name: 'REACTIVE DYEING' },
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

  // Clients Data for Dyeing
  const clients = [
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

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 300, height = 240) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  return (
    <Base3>
      <div className="dyeing-container">
        {/* Hero Slider Section 
        <div className='dyeing-hero-wrapper'>
          <div className="dyeing-hero-slider-section">
            <div className="dyeing-slider-container dyeing-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`dyeing-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="dyeing-slide-overlay"></div>
                  <div className="dyeing-slide-caption">
                    <h1 className="dyeing-hero-title">Welcome to Convince Dyeing Industries Ltd.</h1>
                    <p className="dyeing-hero-subtitle">Premium Quality Dyeing & Finishing Services for Global Textile Leaders</p>
                  </div>
                </div>
              ))}
              
              <button className="dyeing-slider-arrow dyeing-prev" onClick={prevSlide}>❮</button>
              <button className="dyeing-slider-arrow dyeing-next" onClick={nextSlide}>❯</button>
              
              <div className="dyeing-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`dyeing-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>*/}

        {/* About Section - Dyeing Specific */}
        <section className="dyeing-about-section">
          <h2 className="dyeing-section-heading">About</h2>
          <div className="dyeing-about-content">
            <div className="dyeing-about-row">
              <div className="dyeing-about-text">
                <h3 className="dyeing-about-heading">Leading the Way in Textile Dyeing & Finishing</h3>
                <p className="dyeing-about-paragraph">
                  Convince Dyeing Industries Ltd. is a state-of-the-art textile dyeing and finishing facility 
                  equipped with the latest German and Japanese technology. We specialize in high-quality fabric 
                  dyeing, yarn dyeing, garment dyeing, and advanced printing services. Our commitment to 
                  color consistency, eco-friendly processes, and timely delivery has made us a preferred 
                  partner for leading fashion brands worldwide.
                </p>
                <p className="dyeing-about-paragraph">
                  With a focus on sustainability and innovation, we utilize advanced water treatment plants, 
                  energy-efficient machinery, and eco-friendly dyes to minimize our environmental footprint. 
                  Our laboratory is equipped with cutting-edge testing equipment to ensure every batch meets 
                  international quality standards including ISO, OEKO-TEX, and GOTS certifications.
                </p>
                <div className="dyeing-stats-container">
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">20+</h4>
                    <p className="dyeing-stat-label">Years of Excellence</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">500+</h4>
                    <p className="dyeing-stat-label">Skilled Technicians</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">100+</h4>
                    <p className="dyeing-stat-label">Global Clients</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">150K+</h4>
                    <p className="dyeing-stat-label">Daily Capacity (kg)</p>
                  </div>
                </div>
              </div>
              <div className="dyeing-about-image">
                <img src={process.env.PUBLIC_URL + '/images/Dyeing1.jpg'} alt="Convince Dyeing Factory" className="dyeing-factory-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Dyeing Products - Clickable */}
        <section className="dyeing-products-section">
          <h2 className="dyeing-section-heading">Our Services</h2>
          <div className="dyeing-slider-container">
            <div className="dyeing-slider-track">
              {allProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="dyeing-product-card"
                  onClick={handleProductsClick}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="dyeing-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="dyeing-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="dyeing-product-info">
                    <h3 className="dyeing-product-name">{product.name}</h3>
                    <p className="dyeing-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
              
              {allProducts.map((product, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="dyeing-product-card"
                  onClick={handleProductsClick}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="dyeing-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="dyeing-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="dyeing-product-info">
                    <h3 className="dyeing-product-name">{product.name}</h3>
                    <p className="dyeing-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Capacity Section */}
        <section className="dyeing-capacity-section">
          <h2 className="dyeing-section-heading">Production Capacity</h2>
          <p className="dyeing-capacity-subtitle">Our daily manufacturing capabilities</p>
          
          <div className="dyeing-capacity-grid">
            {productionCapacity.map((item, index) => (
              <div key={index} className="dyeing-capacity-card">
                <div className="dyeing-capacity-icon">{item.icon}</div>
                <div className="dyeing-capacity-content">
                  <h3 className="dyeing-capacity-product">{item.product}</h3>
                  <p className="dyeing-capacity-value">{item.capacity}</p>
                </div>
                <div className="dyeing-capacity-badge">Per Day</div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section - Clickable */}
        <section className="dyeing-clients-section">
          <h2 className="dyeing-section-heading">Our Clients</h2>
          <p className="dyeing-clients-subtitle">Trusted by leading fashion brands worldwide</p>
          
          <div className="dyeing-clients-grid">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="dyeing-client-card"
                onClick={handleClientsClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="dyeing-client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-client-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
                <h4 className="dyeing-client-name">{client.name}</h4>
                <p className="dyeing-client-country">{client.country}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="dyeing-testimonials-section">
            <h3 className="dyeing-testimonials-heading">What Our Clients Say</h3>
            <div className="dyeing-testimonials-grid">
              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  Convince Dyeing has exceptional color matching capabilities. Their consistency and quality 
                  control are unmatched in the industry. A truly reliable partner for our premium collections.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>Maria Garcia</strong>
                  <span>Quality Director, ZARA</span>
                </div>
              </div>

              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  Their eco-friendly dyeing process and commitment to sustainability align perfectly with our 
                  brand values. The team is professional and always meets our tight deadlines.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>James Wilson</strong>
                  <span>Sourcing Manager, H&M</span>
                </div>
              </div>

              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  The advanced technology and technical expertise at Convince Dyeing ensures perfect results 
                  every time. Highly recommended for high-end fashion requirements.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>Yuki Tanaka</strong>
                  <span>Production Head, UNIQLO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Marquee */}
          <div className="dyeing-logo-marquee">
            <div className="dyeing-marquee-wrapper">
              {clients.map((client, index) => (
                <div key={index} className="dyeing-marquee-item">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-marquee-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="dyeing-marquee-item">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-marquee-img"
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

        {/* Board of Directors Section */}
        <section className="dyeing-directors-section">
          <h2 className="dyeing-section-heading">Board of Directors</h2>
          <p className="dyeing-directors-subtitle">Meet the visionary leaders behind Convince Dyeing Industries Ltd.</p>
          
          <div className="dyeing-directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="dyeing-director-card">
                <div className="dyeing-director-image-wrapper">
                  <div className="dyeing-director-image">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="dyeing-director-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&size=200&background=7c3aed&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>
                <div className="dyeing-director-info">
                  <h3 className="dyeing-director-name">{director.name}</h3>
                  <p className="dyeing-director-designation">{director.designation}</p>
                  <p className="dyeing-director-description">{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Base3>
  );
};

export default Dyeing;