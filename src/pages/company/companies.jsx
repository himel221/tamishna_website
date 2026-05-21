import React, { useEffect, useRef } from 'react';
import Base from '../base.jsx';
import './companies.css';

const Companies = () => {
  // Refs for scroll animation sections
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const companiesRef = useRef(null);
  const clientsRef = useRef(null);
  const overviewRef = useRef(null);
  const integrationRef = useRef(null);
  const ctaRef = useRef(null);

  // Companies data with enhanced professional details
  const companies = [
    {
      id: 1,
      name: 'CONVINCE APPARELS LTD.',
      shortName: 'APPARELS',
      fullDescription: 'Fully automated Jacquard based ready-made garments manufacturing unit producing 100% export-oriented sweaters, pullovers, zipper/button cardigans, ponchos, and vests.',
      description: 'State-of-the-art RMG manufacturing facility with advanced automation and export-focused production capabilities.',
      specialties: ['Sweaters', 'Cardigans', 'Pullovers', 'Ponchos', 'Vests'],
      established: '1988',
      employees: '3,500+',
      capacity: '1.5M units/month',
      image: 'https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs',
      gradient: 'linear-gradient(135deg, #0a2472, #0e4b8f)',
      icon: '🏭',
      color: '#0a2472',
      link: '/new/apparels' // Add link for each company
    },
    {
      id: 2,
      name: 'CONVINCE ZIPPER & ACCESSORIES LTD.',
      shortName: 'ZIPPER',
      fullDescription: 'Vertically integrated Zipper Manufacturing unit producing vislon, nylon, and metal zippers certified by top testing institutions such as SGS and Oeko Tex Bangladesh.',
      description: 'Vertically integrated zipper manufacturing with international certifications and global quality standards.',
      specialties: ['Vislon Zippers', 'Nylon Zippers', 'Metal Zippers', 'Garments Accessories'],
      established: '1988',
      employees: '900+',
      capacity: '5M pcs/month',
      image: 'https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs',
      gradient: 'linear-gradient(135deg, #4a1d96, #6d28d9)',
      icon: '⚙️',
      color: '#4a1d96',
      link: '/new/zippers'
    },
    {
      id: 3,
      name: 'CONVINCE DYEING INDUSTRIES LTD.',
      shortName: 'DYEING',
      fullDescription: 'Acrylic Yarn Dyeing unit equipped with modern laboratory facilities, having dyeing capacity of 40,000lbs per day with precision color matching and eco-friendly processes.',
      description: 'Advanced acrylic yarn dyeing facility with precision color matching and eco-friendly processes.',
      specialties: ['Acrylic Yarn Dyeing', 'Color Matching', 'Lab Testing', 'Bulk Dyeing'],
      established: '1988',
      employees: '600+',
      capacity: '40,000 lbs/day',
      image: 'https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs',
      gradient: 'linear-gradient(135deg, #b45309, #d97706)',
      icon: '🎯',
      color: '#b45309',
      link: '/new/dyeing'
    },
    {
      id: 4,
      name: 'CONVINCE COMPUTER LTD.',
      shortName: 'COMPUTER',
      fullDescription: 'Multifaceted Custom Software development firm with a focus on developing Enterprise Resources Planning (ERP) systems for all types of businesses and digital transformation.',
      description: 'Enterprise software development firm specializing in ERP solutions and digital transformation.',
      specialties: ['ERP Systems', 'Web Development', 'Mobile Apps', 'IT Consultancy', 'Cloud Solutions'],
      established: '2000',
      employees: '100+',
      capacity: '100+ projects delivered',
      image: 'https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs',
      gradient: 'linear-gradient(135deg, #047857, #059669)',
      icon: '💻',
      color: '#047857',
      link: 'https://www.convincebd.com/'
    }
  ];

  // Professional group statistics
  const groupStats = [
    { label: 'Total Employees', value: '4,100+', subtext: 'Skilled Workforce', icon: '👥' },
    { label: 'Group Companies', value: '4', subtext: 'Integrated Units', icon: '🏢' },
    { label: 'Established', value: '1988', subtext: 'Years of Excellence', icon: '📅' },
    { label: 'Export Markets', value: '25+', subtext: 'Global Presence', icon: '🌍' }
  ];

  // Function to handle view details click - opens in new tab
  const handleViewDetails = (link) => {
    // Construct full URL using current origin
    const fullUrl = window.location.origin + link;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // Scroll animation effect with Intersection Observer
  useEffect(() => {
    // Options for Intersection Observer
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    // Callback for Intersection Observer
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe main sections
    const sections = [
      statsRef.current,
      companiesRef.current,
      clientsRef.current,
      overviewRef.current,
      integrationRef.current,
      ctaRef.current
    ].filter(ref => ref);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Observe cards for animations
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => observer.observe(card));

    const companyCards = document.querySelectorAll('.company-card');
    companyCards.forEach(card => observer.observe(card));

    const clientItems = document.querySelectorAll('.client-item');
    clientItems.forEach(item => observer.observe(item));

    const capabilityItems = document.querySelectorAll('.capability-item');
    capabilityItems.forEach(item => observer.observe(item));

    const showcaseItems = document.querySelectorAll('.showcase-item');
    showcaseItems.forEach(item => observer.observe(item));

    const flowNodes = document.querySelectorAll('.flow-node');
    flowNodes.forEach(node => observer.observe(node));

    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => observer.observe(card));



    // Scroll progress handler
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressElement = document.getElementById('scrollProgress');
      if (progressElement) {
        progressElement.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      const progressElement = document.getElementById('scrollProgress');
      if (progressElement && progressElement.parentNode) {
        progressElement.parentNode.removeChild(progressElement);
      }
    };
  }, []);

  return (
    <Base>
      {/* Scroll Progress Indicator */}
      <div id="scrollProgress" className="scroll-progress"></div>

      {/* Hero Section */}
      <section className="companies-hero" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-subtitle">CONVINCE GROUP</span>
            <h1>Our Companies</h1>
            <p className="hero-description">Driving excellence across textiles, accessories, dyeing, and technology through vertical integration and innovation since 1988.</p>
            <div className="hero-stats-mini">
              <div className="mini-stat">
                <span className="mini-stat-value">35+</span>
                <span className="mini-stat-label">Years of Excellence</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-value">4</span>
                <span className="mini-stat-label">Strategic Units</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-value">25+</span>
                <span className="mini-stat-label">Export Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Stats Section */}
      <section className="group-stats section-fade-in" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {groupStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <span className="stat-icon">{stat.icon}</span>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-subtext">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid Section */}
      <section className="companies-grid-section section-fade-in" ref={companiesRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Strategic Business Units</h2>
            <p className="section-subtitle">Integrated operations delivering excellence across the value chain</p>
          </div>
          
          <div className="companies-grid">
            {companies.map((company) => (
              <div key={company.id} className="company-card">
                <div className="card-header" style={{ background: company.gradient }}>
                  <div className="company-icon-large">{company.icon}</div>
                  <div className="company-code">{company.shortName}</div>
                </div>
                
                <div className="card-body">
                  <h4 className="company-nam">{company.name}</h4>
                  <p className="company-desc">{company.description}</p>
                  
                  <div className="company-metrics">
                    <div className="metric">
                      <span className="metric-label">Est.</span>
                      <span className="metric-value">{company.established}</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric">
                      <span className="metric-label">Employees</span>
                      <span className="metric-value">{company.employees}</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric">
                      <span className="metric-label">Capacity</span>
                      <span className="metric-value">{company.capacity}</span>
                    </div>
                  </div>

                  <div className="specialties">
                    <h5>Key Specialties</h5>
                    <div className="specialty-tags">
                      {company.specialties.slice(0, 3).map((specialty, idx) => (
                        <span key={idx} className="specialty-tag">{specialty}</span>
                      ))}
                      {company.specialties.length > 3 && (
                        <span className="specialty-tag more">+{company.specialties.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <button 
                    className="view-details-btn"
                    onClick={() => handleViewDetails(company.link)}
                  >
                    View Details
                    <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Overview Section */}
      <section className="group-overview section-fade-in" ref={overviewRef}>
        <div className="container">
          <div className="overview-wrapper">
            <div className="overview-content">
              <div className="overview-header">
                <span className="overview-badge">About Us</span>
                <h2 className="overview-title">Convince Group</h2>
                <p className="overview-subtitle">A diversified industrial conglomerate driving Bangladesh's manufacturing and technology sectors</p>
              </div>

              <div className="overview-text">
                <p className="overview-paragraph">Founded in 1988, Convince Group has evolved into a vertically integrated industrial powerhouse, with strategic investments across ready-made garments (RMG), garments accessories, yarn dyeing, and information technology. Our four specialized business units work in synergy to deliver comprehensive solutions to global markets.</p>
                
                <div className="capability-grid">
                  <div className="capability-item">
                    <div className="capability-icon">🏭</div>
                    <div className="capability-content">
                      <h4>Manufacturing Excellence</h4>
                      <p>State-of-the-art facilities with combined 4,100+ skilled workforce</p>
                    </div>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">🔗</div>
                    <div className="capability-content">
                      <h4>Vertical Integration</h4>
                      <p>End-to-end control from raw materials to finished products</p>
                    </div>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">🌐</div>
                    <div className="capability-content">
                      <h4>Global Reach</h4>
                      <p>Exporting to 25+ countries across Asia, Europe, and North America</p>
                    </div>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">✓</div>
                    <div className="capability-content">
                      <h4>Certified Quality</h4>
                      <p>ISO, Oeko-Tex, and SGS certified processes and products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview-sidebar">
              <div className="company-showcase">
                {companies.map((company) => (
                  <div key={company.id} className="showcase-item" style={{ borderLeftColor: company.color }}>
                    <span className="showcase-icon">{company.icon}</span>
                    <div className="showcase-info">
                      <h4>{company.shortName}</h4>
                      <p>{company.employees} employees</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section section-fade-in" ref={integrationRef}>
        <div className="container">
          <div className="integration-header">
            <h2 className="section-title">Vertical Integration Model</h2>
            <p className="integration-description">Seamless coordination across our business units creates unmatched efficiency and quality control</p>
          </div>
          
          <div className="integration-diagram">
            <div className="flow-container">
              {companies.map((company) => (
                <div key={company.id} className="flow-node" style={{ borderColor: company.color }}>
                  <div className="flow-icon-wrapper" style={{ background: company.gradient }}>
                    {company.icon}
                  </div>
                  <div className="flow-label">{company.shortName}</div>
                  <div className="flow-desc">{company.employees} employees</div>
                </div>
              ))}
            </div>

            <div className="integration-benefits">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4>Streamlined Operations</h4>
                <p>Reduced lead times through coordinated production scheduling</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h4>Quality Assurance</h4>
                <p>End-to-end quality control at every stage</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h4>Cost Efficiency</h4>
                <p>Optimized resource utilization across the value chain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="companies-cta section-fade-in" ref={ctaRef}>
        <div className="container">
          <div className="cta-content">
            <h2>Partner with Convince Group</h2>
            <p>Leverage our integrated capabilities for your next project</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => window.location.href = '/new/contact'}>Contact Our Team</button>
              <button className="cta-secondary">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Companies;