import React from 'react';
import Base from '../base.jsx';
import './sustainability.css';

const Sustainability = () => {
  const sustainabilityStats = [
    {
      stat: "60%",
      description: "Less water used in dyeing process compared to conventional methods.",
      image: process.env.PUBLIC_URL + '/images/dyeingwater.jpg',
      icon: "💧",
      title: "Water Conservation"
    },
    {
      stat: "70%",
      description: "Recycled polyester used in thread production.",
      image: process.env.PUBLIC_URL + '/images/pr.jpg',
      icon: "♻️",
      title: "Recycled Materials"
    },
    {
      stat: "0%",
      description: "No harmful dyes used (AZO-free dyeing).",
      image: process.env.PUBLIC_URL + '/images/chemical.webp',
      icon: "🎨",
      title: "Eco-Friendly Dyeing"
    },
    {
      stat: "20T",
      description: "Textile waste converted into thread annually",
      image: process.env.PUBLIC_URL + '/images/waste.webp',
      icon: "🏭",
      title: "Waste Reduction"
    },
  ];
  
  const csrInitiatives = [
    {
      title: "Healthcare",
      description: "Free treatment by professional doctors were provided for local residents and workers of Tamishna Group.",
      image: process.env.PUBLIC_URL + '/images/healthcare.jpg',
      icon: "🏥",
      stat: "5000+",
      statLabel: "Patients Treated"
    },
    {
      title: "Donations",
      description: "Every year, Tamishna Group undertakes a blanket distribution program during the cold winter months. Last year we distributed over 3000 blankets to workers and local residents in need.",
      image: process.env.PUBLIC_URL + '/images/donation.webp',
      icon: "🎁",
      stat: "3000+",
      statLabel: "Blankets Distributed"
    },
    {
      title: "Education",
      description: "Since 2008, we have been providing free education for Class I to Class V students who are children of workers of Tamishna Group. In 2016, we acquired a large piece of land to undertake our most ambitious project to date – a 1200 student educational institution that will accommodate students of all ages, from primary to high school degree.",
      image: process.env.PUBLIC_URL + '/images/school1.png',
      icon: "📚",
      stat: "1200",
      statLabel: "Students Capacity"
    }
  ];

  return (
    <Base>
      <div className="sustainable-page">
        {/* Hero Section */}
        <section className="sustainable-hero">
          <div className="hero-background">
            <img 
              src={process.env.PUBLIC_URL + '/images/sustain.jpg'} 
              alt="Sustainable thread manufacturing with wind turbines" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
              }}
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <span className="hero-badge">Conscious Craftsmanship</span>
            <h1 className="hero-title">
              Threads that <span className="highlight">don't cost the earth</span>
            </h1>
            <p className="hero-description">
              Every spool tells a story of responsibility. From raw material to finished product,
              we're redefining what it means to sew sustainably — without compromising on strength,
              color, or quality.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Carbon Neutral</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Zero</span>
                <span className="stat-label">Waste to Landfill</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Closed-loop</span>
                <span className="stat-label">Water System</span>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section id="environment-section" className="environment-section">
          <div className="container">
            <div className="section-header center-align">
              <h2>Environment</h2>
              <p>We believe in the integration of Technology, Sustainability, and Business in order to protect our Planet.</p>
            </div>
          </div>

          {/* Production & Ethics Section */}
          <section className="ethics-production">
            <div className="container split-layout">
              <div className="split-content">
                <h2>Reduce CO2 emissions</h2>
                <p>
                  Over the last 6 years, we have succeeded in reducing the group's CO2 emissions by a calculated average of 4% by introducing and installing exhaust gas boilers, chillers, and wastewater heat recovery equipment. We have been awarded substantial grants by USAID against the execution of these projects.
                </p>
                <ul className="ethics-list">
                  <li>✔ Carbon Footprint Reduction</li>
                  <li>✔ Clean Technology Investment</li>
                  <li>✔ International Recognition</li>
                  <li>✔ Sustainable Manufacturing</li>
                </ul>
              </div>
              <div className="split-image">
                <img 
                  src={process.env.PUBLIC_URL + '/images/co2.jpg'} 
                  alt="Solar panels on factory roof with sewing machines inside"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </div>
          </section>

                    {/* Waste Water Recycling Section - NEW (Image Left, Text Right) */}
          <section className="ethics-production wastewater-recycling">
            <div className="container split-layout">
              <div className="split-image">
                <img 
                  src={process.env.PUBLIC_URL + '/images/water.jpeg'} 
                  alt="Wastewater Recycling Plant"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581092335871-4a5e7c8c5b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="image-caption">Advanced Wastewater Recycling Facility</div>
              </div>
              <div className="split-content">
                <h2>Waste Water Recycling Plant</h2>
                <p>
                  We are installing a wastewater recycling plant in our facility with a treatment capacity of 3,600 m³/day.
                  This initiative is part of our sustainability commitment to reduce freshwater consumption and improve water resource management. 
                  The recycling plant will help us reuse treated wastewater in our production processes, thereby reducing groundwater extraction 
                  and minimizing environmental impact.
                </p>
                <p className="highlight-text">
                  This project will also support our efforts toward sustainable manufacturing, environmental compliance, and efficient water utilization.
                </p>
                <div className="recycling-stats">
                  <div className="recycling-stat">
                    <span className="stat-number">3,600</span>
                    <span className="stat-unit">m³/day</span>
                    <span className="stat-label">Treatment Capacity</span>
                  </div>
                  <div className="recycling-stat">
                    <span className="stat-number">50%+</span>
                    <span className="stat-unit">Reduction</span>
                    <span className="stat-label">Freshwater Usage</span>
                  </div>
                  <div className="recycling-stat">
                    <span className="stat-number">2025</span>
                    <span className="stat-unit">Launch</span>
                    <span className="stat-label">Expected Completion</span>
                  </div>
                </div>
                <ul className="ethics-list">
                  <li>✔ Reduce Freshwater Consumption</li>
                  <li>✔ Improve Water Resource Management</li>
                  <li>✔ Minimize Environmental Impact</li>
                  <li>✔ Sustainable Manufacturing</li>
                </ul>
              </div>
            </div>
          </section>
                    {/* Reuse & Recycling waste Section */}
          <section className="ethics-production">
            <div className="container split-layout">
              <div className="split-content">
                <h2>Reuse & Recycling waste</h2>
                <p>
                  We collect waste materials containing Polyprepene (PP) and feed them to our recently installed plastic recycling unit by converting the waste materials to PP granules. These PP granules are then used to make poly bags, yarn cones and blister packs.
                </p>
              </div>
              <div className="split-image">
                <img 
                  src={process.env.PUBLIC_URL + '/images/reuse.jpeg'} 
                  alt="Plastic recycling process"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="community-section">
            <div className="container full-width-image-grid">
              <div className="community-image">
                <img 
                  src={process.env.PUBLIC_URL + '/images/wwt.jpeg'} 
                  alt="Wastewater treatment plant"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="community-text">
                <h2>Improving wastewater quality</h2>
                <p>
                  ETP Plant is using MBR technology and equipment imported from GE Water at a total cost of 4 million USD.We have the second largest CETP plant in Bangladesh, looking to establish Zero Discharge of Hazardous Chemicals to become more sustainable with a capacity of 7,200 m³/day, plays a vital role in our production process by treating wastewater before releasing into the environment. Our advanced treatment systems effectively remove harmful chemicals, dyes, and toxins, ensuring the protection of local water sources and ecosystems. As we continue to adopt cutting-edge technologies, we are not only meeting environmental regulations but also strengthening our commitment to sustainability, demonstrating our increasing dedication to environmental stewardship.
                </p>
              </div>
            </div>
          </section>

        </section>

        {/* CSR Section - Professional Design with Healthcare, Donations, Education */}
        <section id="csr-section" className="csr-section">
          <div className="container">
            <div className="section-header center-align">
              <h2>Corporate Social Responsibility of EBL</h2>
              <div className="philosophy-quote">
                <p className="philosophy-text">
                  Since our commencement, Etafil (Bangladesh) Ltd. has been dedicated in making the lives of our workers and employees better. Take a peek at our most important initiatives below.
                </p>
              </div>
            </div>

            {/* CSR Initiatives - Matching Environment Section Design */}
            <div className="csr-initiatives">
              {csrInitiatives.map((initiative, idx) => (
                <div className="csr-initiative-item" key={idx}>
                  <div className="csr-initiative-image">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      onError={(e) => {
                        const fallbackImages = [
                          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        ];
                        e.target.src = fallbackImages[idx];
                      }}
                    />
                    <div className="csr-image-overlay">
                      <div className="csr-icon-large">{initiative.icon}</div>
                    </div>
                  </div>
                  <div className="csr-initiative-content">
                    <div className="csr-stat-badge">
                      <span className="csr-stat-number">{initiative.stat}</span>
                      <span className="csr-stat-label">{initiative.statLabel}</span>
                    </div>
                    <h3>{initiative.title}</h3>
                    <p>{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Summary */}
            <div className="csr-impact-summary">
              <div className="impact-box">
                <div className="impact-icon">💚</div>
                <div className="impact-text">
                  <h4>15+ Years of Service</h4>
                  <p>Since 2008, Tamishna Group has been committed to community welfare and sustainable development.</p>
                </div>
              </div>
              <div className="impact-box">
                <div className="impact-icon">🤝</div>
                <div className="impact-text">
                  <h4>Community First Approach</h4>
                  <p>Our CSR initiatives are designed to create lasting positive impact on our workers and local residents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="sustainability-cta">
          <div className="container">
            <h2>Join the movement for responsible sewing</h2>
            <p>Every stitch you make with our threads supports a cleaner, fairer world.</p>
            <div className="cta-buttons">
              <button className="primary-button" onClick={() => window.location.href = '/products'}>
                Shop sustainable threads
              </button>
              <button className="outline-button" onClick={() => window.location.href = '/contact'}>
                Learn about our circular program
              </button>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Sustainability;
