import React, { useEffect, useState, useRef } from 'react';
import Base from './base1.jsx';
import './apparels.css';

const Apparels = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  
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
      '.apparel-container .apparel-section-heading, .apparel-container .apparel-client-card, .apparel-container .apparel-product-card, .apparel-container .apparel-about-heading, .apparel-container .apparel-about-paragraph, .apparel-container .apparel-stat-card, .apparel-container .apparel-about-image, .apparel-container .apparel-testimonial-card, .apparel-container .apparel-director-card, .apparel-container .apparel-vision-card, .apparel-container .apparel-mission-card, .apparel-container .apparel-value-card, .apparel-container .apparel-certificate-card, .apparel-container .apparel-certificates-subtitle, .apparel-container .apparel-ethics-card, .apparel-container .apparel-ethics-subtitle, .apparel-container .apparel-export-stat-card, .apparel-container .apparel-4r-card, .apparel-container .apparel-merchandising-title, .apparel-container .apparel-merchandising-subtitle, .apparel-container .apparel-team-card, .apparel-container .apparel-export-subtitle'
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

  // Video error handling
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('error', () => {
        console.error('Video failed to load');
        setVideoError(true);
      });
      
      video.addEventListener('canplay', () => {
        console.log('Video loaded successfully');
        setVideoError(false);
      });
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Auto-play prevented:', error);
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 300, height = 240) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Navigation handlers with direct page navigation (no React Router)
  const handleProductClick = (productName, productCategory) => {
    // Save clicked product info to sessionStorage
    sessionStorage.setItem('selectedProduct', JSON.stringify({
      name: productName,
      category: productCategory,
      fromPage: '/apparels'
    }));
    // Navigate to products page 
    window.location.href = '/new/aproducts';
  };

  const handleClientClick = (clientName, clientCountry) => {
    // Save clicked client info to sessionStorage
    sessionStorage.setItem('selectedClient', JSON.stringify({
      name: clientName,
      country: clientCountry,
      fromPage: '/apparels'
    }));
    // Navigate to buyers page 
    window.location.href = '/new/abuyers';
  };

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
      designation: "Director",
      image: process.env.PUBLIC_URL + '/images/rashik.jpg',
      description: "rashik@tamishna.com, linkedin.com/in/rashik-chowdhury-84a5a4137"
    }
  ];

  // Vision, Mission, Values Data
  const visionMissionValues = {
    vision: {
      title: "Our Vision",
      description: "Supply sustainable fashion to the global brands around the world.",
      icon: "🚀",
      color: "#2563eb"
    },
    mission: {
      title: "Our Mission",
      description: "Lead in the RMG sector while driving economic growth in Bangladesh.",
      icon: "🎯",
      color: "#7c3aed"
    },
    values: {
      title: "Our Values",
      description: "At Convince Group, we ensure all our staff member and workers adhere to integrity, professionalism, accountability and trust.",
      icon: "⭐",
      color: "#10b981",
      points: ["Integrity", "Professionalism", "Accountability", "Trust"]
    }
  };

  // Product Data with Categories
  const productCategories = [
    {
      name: "APPAREL PRODUCTS",
      images: [
        { url: (process.env.PUBLIC_URL + '/images/vests.jpg'), name: 'VESTS' },
        { url: (process.env.PUBLIC_URL + '/images/pullovers.jpg'), name: 'PULLOVERS' },
        { url: (process.env.PUBLIC_URL + '/images/sweater.jpg'), name: 'ORIENTED SWEATERS' },
        { url: (process.env.PUBLIC_URL + '/images/Waistcoat.jpg'), name: 'WAISTCOATS' },
        { url: (process.env.PUBLIC_URL + '/images/sweater1.jpg'), name: 'SWEATERS' },
        { url: (process.env.PUBLIC_URL + '/images/sweater2.jpg'), name: 'SWEATERS' },
        { url: (process.env.PUBLIC_URL + '/images/vests1.jpg'), name: 'VESTS' },
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

  // Clients Data with working image URLs
  const clients = [
    { 
      name: "LERROS", 
      logo: (process.env.PUBLIC_URL + '/images/lerros.jpg'),
      country: "Germany",
    },
    { 
      name: "OVS", 
      logo: (process.env.PUBLIC_URL + '/images/ovs.png'),
      country: "Italy" 
    },
    { 
      name: "O'STIN", 
      logo: (process.env.PUBLIC_URL + '/images/ostin.jpg'),
      country: "Russia" 
    },
    { 
      name: "GLORIA JEANS", 
      logo: (process.env.PUBLIC_URL + '/images/gj.png'),
      country: "Russia" 
    },
    { 
      name: "JEANS FRITZ", 
      logo: (process.env.PUBLIC_URL + '/images/jf.png'),
      country: "Germany" 
    },
    { 
      name: "NEW LOOK", 
      logo: (process.env.PUBLIC_URL + '/images/newllok.jpg'),
      country: "UK" 
    },
    { 
      name: "NEXT", 
      logo: (process.env.PUBLIC_URL + '/images/next.png'),
      country: "UK"
    },
    { 
      name: "OXBOW", 
      logo: (process.env.PUBLIC_URL + '/images/oxbow.jpg'),
      country: "France" 
    },
    { 
      name: "MANGO", 
      logo: (process.env.PUBLIC_URL + '/images/mango.webp'),
      country: "Spain" 
    },
  ];

  return (
    <Base>
      <div className="apparel-container">
        <div className="apparel-hero-section">
          <h2>About</h2>
          </div>
        {/* About Section - Image on Right, Text on Left */}
        <section className="apparel-about-section">
          <div className="apparel-about-content">
            <div className="apparel-about-row">
              <div className="apparel-about-text">
                <h3 className="apparel-about-heading">Leading the Way in Fashion Manufacturing</h3>
                <p className="apparel-about-paragraph">
                  Convince Apparels Ltd. stands as a beacon of excellence in the global fashion manufacturing landscape. 
                  With state-of-the-art production facilities and a commitment to quality that knows no bounds, we have 
                  established ourselves as a trusted partner for leading fashion brands worldwide.
                </p>
                <p className="apparel-about-paragraph">
                  Our journey began with a simple vision: to create garments that not only meet but exceed the expectations 
                  of the most discerning customers. Today, that vision has evolved into a comprehensive manufacturing ecosystem 
                  that combines traditional craftsmanship with cutting-edge technology.
                </p>
                <div className="apparel-stats-container">
                  <div className="apparel-stat-card">
                    <h4 className="apparel-stat-number">25+</h4>
                    <p className="apparel-stat-label">Years of Excellence</p>
                  </div>
                  <div className="apparel-stat-card">
                    <h4 className="apparel-stat-number">5000+</h4>
                    <p className="apparel-stat-label">Skilled Workers</p>
                  </div>
                  <div className="apparel-stat-card">
                    <h4 className="apparel-stat-number">8+</h4>
                    <p className="apparel-stat-label">Global Clients</p>
                  </div>
                  <div className="apparel-stat-card">
                    <h4 className="apparel-stat-number">100K+</h4>
                    <p className="apparel-stat-label">Daily Production</p>
                  </div>
                </div>
              </div>
              
              <div className="apparel-about-image">
                <img 
                  src={process.env.PUBLIC_URL + '/images/sweater.jpg'} 
                  alt="Convince Apparels Factory" 
                  className="apparel-factory-img" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values Section */}
        <section className="apparel-vision-section">
          <div className="apparel-vision-grid">
            <div className="apparel-vision-card">
              <div className="apparel-vision-icon">{visionMissionValues.vision.icon}</div>
              <h3 className="apparel-vision-title">{visionMissionValues.vision.title}</h3>
              <p className="apparel-vision-description">{visionMissionValues.vision.description}</p>
              <div className="apparel-vision-shine"></div>
            </div>

            <div className="apparel-mission-card">
              <div className="apparel-mission-icon">{visionMissionValues.mission.icon}</div>
              <h3 className="apparel-mission-title">{visionMissionValues.mission.title}</h3>
              <p className="apparel-mission-description">{visionMissionValues.mission.description}</p>
              <div className="apparel-mission-shine"></div>
            </div>

            <div className="apparel-value-card">
              <div className="apparel-value-icon">{visionMissionValues.values.icon}</div>
              <h3 className="apparel-value-title">{visionMissionValues.values.title}</h3>
              <p className="apparel-value-description">{visionMissionValues.values.description}</p>
              <div className="apparel-value-points">
                {visionMissionValues.values.points.map((point, idx) => (
                  <span key={idx} className="apparel-value-point">✓ {point}</span>
                ))}
              </div>
              <div className="apparel-value-shine"></div>
            </div>
          </div>
        </section>

        {/* Products Section - Clickable Products */}
        <section className="apparel-products-section">
          <h2 className="apparel-section-heading">Our Products</h2>
          <div className="apparel-slider-container">
            <div className="apparel-slider-track">
              {allProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="apparel-product-card"
                  onClick={() => handleProductClick(product.name, product.category)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="apparel-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="apparel-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="apparel-product-info">
                    <h3 className="apparel-product-name">{product.name}</h3>
                    <p className="apparel-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
              
              {allProducts.map((product, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="apparel-product-card"
                  onClick={() => handleProductClick(product.name, product.category)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="apparel-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="apparel-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="apparel-product-info">
                    <h3 className="apparel-product-name">{product.name}</h3>
                    <p className="apparel-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Capacity Section */}
        <section className="apparel-capacity-section">
          <h2 className="apparel-section-heading">Production Capacity</h2>
          <p className="apparel-capacity-subtitle">Convince Apparels Ltd. - Manufacturing Excellence</p>
          
          <div className="apparel-capacity-container">
            <h3 className="apparel-capacity-table-title">Knitting Machines</h3>
            <div className="apparel-capacity-table-wrapper">
              <table className="apparel-capacity-table">
                <thead>
                  <tr>
                    <th>Machine Type</th>
                    <th>Gauge</th>
                    <th>Number of Machines</th>
                    <th>Per Day Production</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cixing</td><td>12gg (Fixed Gauge)</td><td>50 Sets</td><td>1,100 Pcs</td></tr>
                  <tr><td>Jinhao</td><td>12gg (Fixed Gauge)</td><td>50 Sets</td><td>1,100 Pcs</td></tr>
                  <tr><td>Julong</td><td>12gg (Fixed Gauge)</td><td>50 Sets</td><td>1,100 Pcs</td></tr>
                  <tr><td>Etami</td><td>12gg (Fixed Gauge)</td><td>50 Sets</td><td>1,100 Pcs</td></tr>
                  <tr className="apparel-table-total"><td><strong>Total</strong></td><td></td><td><strong>200 Sets</strong></td><td><strong>4,400 Pcs</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div className="apparel-monthly-production">
              <h3 className="apparel-capacity-table-title">Monthly Production</h3>
              <div className="apparel-monthly-grid">
                <div className="apparel-monthly-card"><div className="apparel-monthly-icon">🏭</div><div className="apparel-monthly-details"><h4>Cixing</h4><p className="apparel-monthly-number">45,000 Pcs</p></div></div>
                <div className="apparel-monthly-card"><div className="apparel-monthly-icon">⚙️</div><div className="apparel-monthly-details"><h4>Jinhao</h4><p className="apparel-monthly-number">30,000 Pcs</p></div></div>
                <div className="apparel-monthly-card"><div className="apparel-monthly-icon">🔧</div><div className="apparel-monthly-details"><h4>Julong</h4><p className="apparel-monthly-number">30,000 Pcs</p></div></div>
                <div className="apparel-monthly-card"><div className="apparel-monthly-icon">🏭</div><div className="apparel-monthly-details"><h4>Etami</h4><p className="apparel-monthly-number">30,000 Pcs</p></div></div>
                <div className="apparel-monthly-card apparel-total-card"><div className="apparel-monthly-icon">📊</div><div className="apparel-monthly-details"><h4>Total Monthly Production</h4><p className="apparel-monthly-number apparel-total-number">132,000 Pcs</p></div></div>
              </div>
            </div>

            <div className="apparel-linking-section">
              <h3 className="apparel-capacity-table-title">Linking to Packing Section</h3>
              <div className="apparel-linking-stats">
                <div className="apparel-linking-card"><div className="apparel-linking-icon">🔗</div><div className="apparel-linking-info"><span className="apparel-linking-label">Process</span><span className="apparel-linking-value">Linking to Packing</span></div></div>
                <div className="apparel-linking-card"><div className="apparel-linking-icon">📦</div><div className="apparel-linking-info"><span className="apparel-linking-label">Per Day Production</span><span className="apparel-linking-value">5,500 Pcs</span></div></div>
                <div className="apparel-linking-card"><div className="apparel-linking-icon">📅</div><div className="apparel-linking-info"><span className="apparel-linking-label">Per Month Production</span><span className="apparel-linking-value">143,000 Pcs</span></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section - Clickable Clients */}
        <section className="apparel-clients-section">
          <h2 className="apparel-section-heading">Our Clients</h2>
          <p className="apparel-clients-subtitle">Trusted by leading fashion brands worldwide</p>
          
          <div className="apparel-clients-grid">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="apparel-client-card"
                onClick={() => handleClientClick(client.name, client.country)}
                style={{ cursor: 'pointer' }}
              >
                <div className="apparel-client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="apparel-client-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
                <h4 className="apparel-client-name">{client.name}</h4>
                <p className="apparel-client-country">{client.country}</p>
              </div>
            ))}
          </div>

          <div className="apparel-testimonials-section">
            <h3 className="apparel-testimonials-heading">What Our Clients Say</h3>
            <div className="apparel-testimonials-grid">
              <div className="apparel-testimonial-card">
                <div className="apparel-quote-mark">"</div>
                <p className="apparel-testimonial-text">Convince Apparels has been our trusted manufacturing partner for over a decade. Their attention to detail and commitment to quality is unmatched in the industry.</p>
                <div className="apparel-testimonial-author"><strong>Sarah Johnson</strong><span>Procurement Director, OXBOW</span></div>
              </div>
              <div className="apparel-testimonial-card">
                <div className="apparel-quote-mark">"</div>
                <p className="apparel-testimonial-text">The level of professionalism and quality assurance at Convince Apparels exceeds our expectations. They're not just a vendor, but a true partner.</p>
                <div className="apparel-testimonial-author"><strong>Michael Chen</strong><span>Head of Production, MANGO</span></div>
              </div>
              <div className="apparel-testimonial-card">
                <div className="apparel-quote-mark">"</div>
                <p className="apparel-testimonial-text">Working with Convince Apparels has transformed our supply chain. Their innovation and reliability are second to none.</p>
                <div className="apparel-testimonial-author"><strong>David Miller</strong><span>Operations Manager, LERROS</span></div>
              </div>
            </div>
          </div>

          <div className="apparel-logo-marquee">
            <div className="apparel-marquee-wrapper">
              {clients.map((client, index) => (
                <div key={index} className="apparel-marquee-item">
                  <img src={client.logo} alt={client.name} className="apparel-marquee-img" onError={(e) => { e.target.onerror = null; e.target.src = getFallbackImage(client.name, 150, 80); }} />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="apparel-marquee-item">
                  <img src={client.logo} alt={client.name} className="apparel-marquee-img" onError={(e) => { e.target.onerror = null; e.target.src = getFallbackImage(client.name, 150, 80); }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="apparel-certificates-section">
          <h2 className="apparel-section-heading">Our Certifications</h2>
          <p className="apparel-certificates-subtitle">Recognized for Excellence & Compliance</p>
          
          <div className="apparel-certificates-grid">
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/amfori.webp'} alt="amfori BSCI" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%231E3A5F' rx='15'/%3E%3Ctext x='60' y='65' font-size='14' text-anchor='middle' fill='white' font-weight='bold'%3Eamfori%3C/text%3E%3Ctext x='60' y='85' font-size='11' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3EBSCI%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">amfori BSCI</h3><p className="apparel-certificate-description">Business Social Compliance Initiative certified for ethical manufacturing practices</p><div className="apparel-certificate-badge">Verified</div></div></div>
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/iso.jpg'} alt="ISO Certified" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%230F766E' rx='15'/%3E%3Ctext x='60' y='65' font-size='20' text-anchor='middle' fill='white' font-weight='bold'%3EISO%3C/text%3E%3Ctext x='60' y='85' font-size='10' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3ECertified%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">ISO Certified</h3><p className="apparel-certificate-description">International standards for quality management systems</p><div className="apparel-certificate-badge">Certified</div></div></div>
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/social.png'} alt="Social & Labor Convergence Program" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23B45309' rx='15'/%3E%3Ctext x='60' y='60' font-size='12' text-anchor='middle' fill='white' font-weight='bold'%3ESLCP%3C/text%3E%3Ctext x='60' y='78' font-size='9' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3ESocial%3C/text%3E%3Ctext x='60' y='90' font-size='9' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3ELabor%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">Social & Labor Convergence Program</h3><p className="apparel-certificate-description">Commitment to fair labor practices and workplace safety</p><div className="apparel-certificate-badge">Approved</div></div></div>
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/organic.png'} alt="Organic 100 Content Standard" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%231D4ED8' rx='15'/%3E%3Ctext x='60' y='60' font-size='12' text-anchor='middle' fill='white' font-weight='bold'%3EOrganic%3C/text%3E%3Ctext x='60' y='78' font-size='11' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3E100%25%3C/text%3E%3Ctext x='60' y='92' font-size='8' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3EStandard%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">Organic 100 Content Standard</h3><p className="apparel-certificate-description">Certified organic fiber content for sustainable fashion</p><div className="apparel-certificate-badge">Organic Certified</div></div></div>
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/re100.svg'} alt="Recycled 100 Claimed Standard" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%230D9488' rx='15'/%3E%3Ctext x='60' y='60' font-size='10' text-anchor='middle' fill='white' font-weight='bold'%3ERecycled%3C/text%3E%3Ctext x='60' y='78' font-size='14' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3E100%25%3C/text%3E%3Ctext x='60' y='92' font-size='8' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3EClaimed%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">Recycled 100 Claimed Standard</h3><p className="apparel-certificate-description">100% recycled content verification for eco-friendly products</p><div className="apparel-certificate-badge">Recycled Certified</div></div></div>
            <div className="apparel-certificate-card"><div className="apparel-certificate-image-wrapper"><img src={process.env.PUBLIC_URL + '/images/recycle1.png'} alt="Recycled Blended Claimed Standard" className="apparel-certificate-image" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%237C2D12' rx='15'/%3E%3Ctext x='60' y='60' font-size='10' text-anchor='middle' fill='white' font-weight='bold'%3ERecycled%3C/text%3E%3Ctext x='60' y='78' font-size='11' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3EBlended%3C/text%3E%3Ctext x='60' y='92' font-size='8' text-anchor='middle' fill='rgba(255,255,255,0.8)'%3EStandard%3C/text%3E%3C/svg%3E"; }} /></div><div className="apparel-certificate-content"><h3 className="apparel-certificate-title">Recycled Blended Claimed Standard</h3><p className="apparel-certificate-description">Certified blended recycled content for sustainable materials</p><div className="apparel-certificate-badge">Blend Certified</div></div></div>
          </div>
        </section>

        {/* Ethics & Compliance Section */}
        <section className="apparel-ethics-section">
          <h2 className="apparel-section-heading">Ethics & Compliance</h2>
          <p className="apparel-ethics-subtitle">Our Commitment to Ethical Practices & Social Responsibility</p>
          
          <div className="apparel-ethics-grid">
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">🚫</div><h3 className="apparel-ethics-title">No Child Labor or Forced Labor</h3><p className="apparel-ethics-description">We strictly prohibit child labor and forced labor in any form. All workers are of legal working age and employed voluntarily with fair wages.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">🤝</div><h3 className="apparel-ethics-title">Freedom of Association & Collective Bargaining</h3><p className="apparel-ethics-description">Workers have the right to form and join trade unions of their choice and engage in collective bargaining without fear of retaliation.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">🔥</div><h3 className="apparel-ethics-title">Ensuring Fire Safety and Childcare Facility</h3><p className="apparel-ethics-description">State-of-the-art fire safety systems, regular drills, and on-site childcare facilities for working mothers.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">⚖️</div><h3 className="apparel-ethics-title">Ensuring No Gender Discrimination</h3><p className="apparel-ethics-description">Equal opportunities for all regardless of gender. Fair hiring, promotion, and pay practices across all positions.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">🏥</div><h3 className="apparel-ethics-title">Ensuring Healthcare and Maternity Leave</h3><p className="apparel-ethics-description">Comprehensive healthcare benefits and paid maternity leave for all eligible employees as per labor laws.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
            <div className="apparel-ethics-card"><div className="apparel-ethics-icon">🧹</div><h3 className="apparel-ethics-title">Working Environment Under Hygienic Condition</h3><p className="apparel-ethics-description">Clean, safe, and hygienic working environment with proper ventilation, sanitation, and drinking water facilities.</p><div className="apparel-ethics-status">✓ Compliant</div></div>
          </div>
        </section>

        {/* Export & Merchandising Section */}
        <section className="apparel-export-section">
          <div className="apparel-export-container">
            <div className="apparel-4r-section">
              <div className="apparel-4r-header">
                <h3 className="apparel-merchandising-title">Our Merchandising Excellence</h3>
                <p className="apparel-merchandising-subtitle">Focusing on the 4R Principles for Success</p>
              </div>
              <div className="apparel-4r-grid">
                <div className="apparel-4r-card"><div className="apparel-4r-icon">📦</div><h4>Right Quantity</h4><p>To dispatch right quantity of product what buyer ordered</p><div className="apparel-4r-footer">100% Order Accuracy</div></div>
                <div className="apparel-4r-card"><div className="apparel-4r-icon">✅</div><h4>Right Quality</h4><p>Ensure right quality as accepted both parties</p><div className="apparel-4r-footer">Quality Assured</div></div>
                <div className="apparel-4r-card"><div className="apparel-4r-icon">💰</div><h4>Right Cost</h4><p>Everybody wants more from what they paid</p><div className="apparel-4r-footer">Best Value</div></div>
                <div className="apparel-4r-card"><div className="apparel-4r-icon">⏰</div><h4>Right Time</h4><p>Keeping delivery schedule is mandatory</p><div className="apparel-4r-footer">On-Time Delivery</div></div>
              </div>
            </div>

            <div className="apparel-merchandising-showcase">
              <div className="apparel-showcase-row">
                <div className="apparel-showcase-content">
                  <div className="apparel-showcase-badge">Our Team</div>
                  <h3 className="apparel-showcase-title">Strong Merchandising Department</h3>
                  <p className="apparel-showcase-description">Our merchandising teams are always concerned about the main objectives and focus on delivering excellence in every aspect of the supply chain.</p>
                  <div className="apparel-showcase-features">
                    <div className="apparel-feature"><span className="apparel-feature-icon">✓</span><span>Professional Team</span></div>
                    <div className="apparel-feature"><span className="apparel-feature-icon">✓</span><span>Buyer Focused</span></div>
                    <div className="apparel-feature"><span className="apparel-feature-icon">✓</span><span>Objective Driven</span></div>
                  </div>
                  <div className="apparel-showcase-stats">
                    <div className="apparel-stat"><span className="apparel-stat-number">20+</span><span className="apparel-stat-label">Team Members</span></div>
                    <div className="apparel-stat"><span className="apparel-stat-number">25+</span><span className="apparel-stat-label">Years Experience</span></div>
                    <div className="apparel-stat"><span className="apparel-stat-number">100%</span><span className="apparel-stat-label">Client Satisfaction</span></div>
                  </div>
                </div>
                <div className="apparel-showcase-image">
                  <div className="apparel-image-wrapper">
                    <img src={process.env.PUBLIC_URL + "/images/mar.webp"} alt="Merchandising Team" className="apparel-showcase-img" onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231E3A5F'/%3E%3Ccircle cx='250' cy='200' r='80' fill='%233B82F6'/%3E%3Ctext x='250' y='210' font-size='20' text-anchor='middle' fill='white'%3ETeam%3C/text%3E%3C/svg%3E"; }} />
                    <div className="apparel-image-overlay"><span>Dedicated to Excellence</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="apparel-directors-section">
          <h2 className="apparel-section-heading">Board of Directors</h2>
          <p className="apparel-directors-subtitle">Meet the visionary leaders behind Convince Apparels Ltd.</p>
          
          <div className="apparel-directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="apparel-director-card">
                <div className="apparel-director-image-wrapper">
                  <div className="apparel-director-image">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="apparel-director-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&size=200&background=1a3c34&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>
                <div className="apparel-director-info">
                  <h3 className="apparel-director-name">{director.name}</h3>
                  <p className="apparel-director-designation">{director.designation}</p>
                  <p className="apparel-director-description">{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Apparels;