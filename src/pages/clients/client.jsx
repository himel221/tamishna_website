import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './client.css';

const Client = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passedClient = location.state?.selectedClient;

  // Complete Clients Data (আপডেটেড ডাটা)
  const allClientsData = [
    { 
      id: 1, 
      name: "Tesco", 
      logo: process.env.PUBLIC_URL + '/images/tesco.png', 
      country: "UK", 
      industry: "Fashion Retail", 
      founded: "1919", 
      website: "www.tesco.com", 
      description: "British retail and lifestyle brand offering fashion, grocery, and everyday products.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    },
    { 
      id: 2, 
      name: "C & A", 
      logo: process.env.PUBLIC_URL + '/images/ca.jpg', 
      country: "GERMANY", 
      industry: "Fashion Retail", 
      founded: "1841", 
      website: "www.c-and-a.com", 
      description: "European fashion retailer offering sustainable and affordable clothing.", 
      partnershipSince: "2011", 
      productsUsed: ["Organic Cotton", "Cotton Threads"], 
      testimonial: "Etafil's commitment to sustainability aligns perfectly with our values." 
    },
    { 
      id: 3, 
      name: "Tom Tailor", 
      logo: process.env.PUBLIC_URL + '/images/tom.png', 
      country: "GERMANY", 
      industry: "Fashion Retail", 
      founded: "1962", 
      website: "www.tom-tailor.com", 
      description: "German casual and leisurewear brand for men, women, and children.", 
      partnershipSince: "2013", 
      productsUsed: ["Cotton Threads", "Polyester Filament"], 
      testimonial: "Quality and consistency make Etafil a trusted partner for Tom Tailor." 
    },
    { 
      id: 4, 
      name: "LC Waikiki", 
      logo: process.env.PUBLIC_URL + '/images/lc.png', 
      country: "Turkish", 
      industry: "Fashion Retail", 
      founded: "1997", 
      website: "www.lcwaikiki.com", 
      description: "Leading fashion retail brand specializing in trendy apparel, lifestyle products, and modern clothing solutions for men, women, and children.", 
      partnershipSince: "2018", 
      productsUsed: ["Cotton Threads", "Polyester Threads"], 
      testimonial: "Etafil's thread quality has been exceptional for our gaming apparel line." 
    },
    { 
      id: 5, 
      name: "Terranova", 
      logo: process.env.PUBLIC_URL + '/images/terranova.png', 
      country: "Italy", 
      industry: "Fashion Retail", 
      founded: "1978", 
      website: "www.terranova.com", 
      description: "Italian fashion brand offering trendy clothing for men across Europe and worldwide.", 
      partnershipSince: "2015", 
      productsUsed: ["Cotton Threads", "Mercerized Cotton"], 
      testimonial: "The quality of Etafil's threads perfectly matches our premium fashion standards." 
    },
    { 
      id: 6, 
      name: "Okaidi", 
      logo: process.env.PUBLIC_URL + '/images/okaidi.png', 
      country: "France", 
      industry: "Retail", 
      founded: "1900", 
      website: "www.okaidi.com", 
      description: "One of France's largest retail chains offering quality products at affordable prices.", 
      partnershipSince: "2010", 
      productsUsed: ["Cotton Threads", "Polyester Spun", "Filament Threads"], 
      testimonial: "Etafil has been a reliable partner for our private label apparel manufacturing." 
    },
    { 
      id: 7, 
      name: "Petrol Industri", 
      logo: process.env.PUBLIC_URL + '/images/pi.svg', 
      country: "Netherlands", 
      industry: "Fashion Retail", 
      founded: "1989", 
      website: "www.pi.com", 
      description: "Global fashion brand known for offering affordable and sustainable fashion.", 
      partnershipSince: "2012", 
      productsUsed: ["Organic Cotton", "Cotton Threads", "Polyester Threads"], 
      testimonial: "Etafil's organic cotton threads help us achieve our sustainability goals." 
    },
    { 
      id: 8, 
      name: "Kiabi", 
      logo: process.env.PUBLIC_URL + '/images/kiabi.jpg', 
      country: "FRANCE", 
      industry: "Fashion Retail", 
      founded: "1978", 
      website: "www.kiabi.com", 
      description: "French fashion retailer offering affordable clothing for the whole family.", 
      partnershipSince: "2016", 
      productsUsed: ["Cotton Threads", "Soft Cotton Threads"], 
      testimonial: "The softness and durability of Etafil threads are outstanding." 
    },
    { 
      id: 9, 
      name: "Ginatricot", 
      logo: process.env.PUBLIC_URL + '/images/gc.png', 
      country: "Sweden", 
      industry: "Fashion Retail", 
      founded: "1997", 
      website: "www.ginatricot.com", 
      description: "Sweden's fashion brand inspired by street style and youth culture.", 
      partnershipSince: "2014", 
      productsUsed: ["Cotton Threads", "Textured Polyester"], 
      testimonial: "Etafil understands our fast-fashion requirements perfectly." 
    },
    { 
      id: 10, 
      name: "GU", 
      logo: process.env.PUBLIC_URL + '/images/gu.png', 
      country: "Japan", 
      industry: "Fashion Retail", 
      founded: "2006", 
      website: "www.gu.com", 
      description: "Trendy fashion brand targeting young women with the latest styles.", 
      partnershipSince: "2015", 
      productsUsed: ["Mercerized Cotton", "Cotton Threads"], 
      testimonial: "The colorfastness of Etafil threads is exceptional for our vibrant collections." 
    },
    { 
      id: 11, 
      name: "Lidl", 
      logo: process.env.PUBLIC_URL + '/images/lidl.png', 
      country: "GERMANY", 
      industry: "Fashion Retail", 
      founded: "1930", 
      website: "www.lidl.com", 
      description: "German discount retail chain offering a wide range of products.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    },
    { 
      id: 12, 
      name: "Primark", 
      logo: process.env.PUBLIC_URL + '/images/pri.png', 
      country: "Ireland", 
      industry: "Fashion Retail", 
      founded: "1969", 
      website: "www.primark.com", 
      description: "Irish fashion retailer offering affordable clothing for the whole family.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    },
    { 
      id: 13, 
      name: "Zara", 
      logo: process.env.PUBLIC_URL + '/images/zara.png', 
      country: "Spain", 
      industry: "Fashion Retail", 
      founded: "1974", 
      website: "www.zara.com", 
      description: "Spanish fashion retailer offering trendy clothing for men and women.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    },
    { 
      id: 14, 
      name: "Mango", 
      logo: process.env.PUBLIC_URL + '/images/mango.png', 
      country: "Spain", 
      industry: "Fashion Retail", 
      founded: "1984", 
      website: "www.mango.com", 
      description: "Spanish fashion retailer offering affordable clothing for the whole family.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    },
    { 
      id: 15, 
      name: "Hurley", 
      logo: process.env.PUBLIC_URL + '/images/hurley.png', 
      country: "USA", 
      industry: "Fashion Retail", 
      founded: "1999", 
      website: "www.hurley.com", 
      description: "USA's casual fashion brand for men and women.", 
      partnershipSince: "2017", 
      productsUsed: ["Cotton Threads", "Polyester Spun"], 
      testimonial: "Excellent product quality and reliable delivery every time." 
    }
  ];

  // Get initial client from passed data or default to first client
  const getInitialClient = () => {
    if (passedClient && passedClient.name) {
      const matchedClient = allClientsData.find(
        c => c.name.toLowerCase() === passedClient.name.toLowerCase()
      );
      if (matchedClient) {
        return matchedClient;
      }
      return { ...allClientsData[0], ...passedClient };
    }
    return allClientsData[0];
  };

  const [selectedClient, setSelectedClient] = useState(getInitialClient());
  const [activeClientId, setActiveClientId] = useState(selectedClient.id);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Scroll to top when component mounts from home page click
  useEffect(() => {
    if (passedClient && passedClient.name) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageLoaded(true);
    } else {
      setIsPageLoaded(true);
    }
  }, [passedClient]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = document.querySelectorAll(
      '.client-hero-section, .client-detail-section, .client-testimonial-section, .clients-grid-section'
    );
    
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setActiveClientId(client.id);
    const detailSection = document.querySelector('.client-detail-section');
    if (detailSection) {
      window.scrollTo({ top: detailSection.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Group clients by country for statistics
  const uniqueCountries = [...new Set(allClientsData.map(c => c.country))];
  const totalPartners = allClientsData.length;

  return (
    <Base>
      <div className="clients-page">
        {/* Hero Section */}
        <section className="client-hero-section">
          <div className="client-hero-overlay"></div>
          <div className="client-hero-content">
            <h1 className="client-hero-title animate-text">Our Valued Partners</h1>
            <p className="client-hero-subtitle animate-text-delay">
              Trusted by Leading Brands Worldwide
            </p>
            <div className="client-hero-badges">
              <span className="client-hero-badge">{totalPartners}+ Global Partners</span>
              <span className="client-hero-badge">{uniqueCountries.length}+ Countries</span>
              <span className="client-hero-badge">Since 2005</span>
            </div>
          </div>
        </section>

        {/* Clients Grid Section */}
        <section className="clients-grid-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Trusted Clients</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">🤝</span>
                <span className="divider-line"></span>
              </div>
              <p className="section-subtitle">Click on any client to view detailed information</p>
            </div>

            <div className="clients-grid">
              {allClientsData.map((client) => (
                <div 
                  key={client.id}
                  className={`client-grid-card ${activeClientId === client.id ? 'active' : ''}`}
                  onClick={() => handleClientSelect(client)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleClientSelect(client)}
                >
                  <div className="client-grid-logo">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      onError={(e) => {
                        e.target.src = `https://placehold.co/100x100/1e293b/ffffff?text=${client.name.substring(0, 3)}`;
                      }}
                    />
                  </div>
                  <h3>{client.name}</h3>
                  <p>{client.country}</p>
                  <span className="client-industry-badge">{client.industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Detail Section */}
        <section className="client-detail-section">
          <div className="container">
            <div className="client-detail-container">
              <div className="client-detail-header">
                <div className="client-detail-logo">
                  <img 
                    src={selectedClient.logo} 
                    alt={selectedClient.name}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/150x150/1e293b/ffffff?text=${selectedClient.name.substring(0, 3)}`;
                    }}
                  />
                </div>
                <div className="client-detail-info">
                  <h2>{selectedClient.name}</h2>
                  <div className="client-meta">
                    <span className="client-country-badge">
                      <i className="fas fa-map-marker-alt"></i> {selectedClient.country}
                    </span>
                    <span className="client-industry-badge-detail">
                      <i className="fas fa-briefcase"></i> {selectedClient.industry}
                    </span>
                    <span className="client-founded-badge">
                      <i className="fas fa-calendar"></i> Founded: {selectedClient.founded}
                    </span>
                  </div>
                  <p className="client-description">{selectedClient.description}</p>
                </div>
              </div>

              <div className="client-detail-grid">
                <div className="detail-card">
                  <div className="detail-icon">🤝</div>
                  <h3>Partnership Since</h3>
                  <p>{selectedClient.partnershipSince}</p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🌐</div>
                  <h3>Website</h3>
                  <a href={`https://${selectedClient.website}`} target="_blank" rel="noopener noreferrer">
                    {selectedClient.website}
                  </a>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🧵</div>
                  <h3>Products Used</h3>
                  <div className="products-used">
                    {selectedClient.productsUsed && selectedClient.productsUsed.map((product, idx) => (
                      <span key={idx} className="product-tag">{product}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="client-testimonial-section">
          <div className="container">
            <div className="testimonial-container">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{selectedClient.testimonial}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{selectedClient.name}</h4>
                  <p>Valued Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Client;