import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './about.css';

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const currentTimeout = useRef(null);
  const [showFullInfo, setShowFullInfo] = useState(false);

  const publicUrl = process.env.PUBLIC_URL || '';

  // Improved hash based scrolling - More reliable
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      
      if (currentTimeout.current) {
        clearTimeout(currentTimeout.current);
      }
      
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        
        if (element) {
          isScrolling.current = true;
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
          
          setTimeout(() => {
            if (window.location.hash === location.hash) {
              window.history.replaceState(null, null, window.location.pathname);
            }
          }, 100);
        } else {
          currentTimeout.current = setTimeout(scrollToElement, 150);
        }
      };
      
      currentTimeout.current = setTimeout(scrollToElement, 100);
    }
    
    return () => {
      if (currentTimeout.current) {
        clearTimeout(currentTimeout.current);
      }
    };
  }, [location.hash]);

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
      '.about-ebl-section, .mission-vision-section, .facts-section, .clients-section, .board-section, .certificates-section, .code-of-conduct-section, .core-objectives-section, .products-section'
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

  // Thread Specification Tab Functionality - Updated for product names
  useEffect(() => {
    const tabBtns = document.querySelectorAll('.spec-tab-btn');
    const tabContainers = document.querySelectorAll('.spec-table-container');

    const activateTab = (tabId) => {
      // Hide all tab containers
      tabContainers.forEach(container => {
        container.classList.remove('active');
      });
      
      // Remove active class from all buttons
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Show selected tab container
      const selectedContainer = document.getElementById(`tab-${tabId}`);
      if (selectedContainer) {
        selectedContainer.classList.add('active');
      }
      
      // Add active class to clicked button
      const clickedBtn = document.querySelector(`.spec-tab-btn[data-tab="${tabId}"]`);
      if (clickedBtn) {
        clickedBtn.classList.add('active');
      }
    };

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        activateTab(tabId);
      });
    });

    // Activate first tab by default
    activateTab('classic');
  }, []);

  const toggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
    setTimeout(() => {
      const element = document.getElementById('additional-info');
      if (element && !showFullInfo) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle product click - Navigate to ProductsDetails page
  const handleProductClick = (product) => {
    const productName = product.name.split('(')[0].trim();
    navigate('/productsdetails', { 
      state: { 
        selectedProduct: {
          name: productName,
          category: product.category,
          image: product.image,
          description: product.description,
          scrollToDetail: true
        }
      } 
    });
  };

  // Core Objectives Data
  const coreObjectives = [
    {
      id: 1,
      title: "Backward Linkage Integration",
      description: "High-value addition within the group by leveraging our own backward linkage units.",
      icon: "🔗",
      color: "#1B0088"
    },
    {
      id: 2,
      title: "Competitive Excellence",
      description: "Offering competitive prices and the shortest possible lead times with the best quality products.",
      icon: "⚡",
      color: "#2840db"
    },
    {
      id: 3,
      title: "Social Empowerment",
      description: "Creation of employment opportunities by setting up labor-intensive industries, with a focus on human capital growth and women's empowerment.",
      icon: "👥",
      color: "#1a5f7a"
    },
    {
      id: 4,
      title: "Environmental Sustainability",
      description: "High-value priority on eco-friendly Production. We have the second largest ETP plant in Bangladesh with the capacity of 7300 m³, looking to establish Zero Discharge of Hazardous Chemicals to become more sustainable.",
      icon: "🌿",
      color: "#0d9488"
    }
  ];

  // Board of Directors Data - Image paths fixed
  const boardMembers = [
    {
      id: 1,
      name: "Gulzar Alam Chowdhury",
      position: "Managing Director",
      image: `${publicUrl}/images/md.png`,
    },

    {
      id: 2,
      name: "Mr. Naweed Alam Chowdhury",
      position: "Director",
      image: `${publicUrl}/images/nabid.jpeg`,
    },
    {
      id: 3,
      name: "Moushumi Mirza",
      position: "Director",
      image: `${publicUrl}/images/mousumi.jpg`,
    },
    {
      id: 4,
      name: "Rashik Chowdhury",
      position: "Executive Director",
      image: `${publicUrl}/images/rashik.jpeg`,
    }
  ];

  // Certificates Data
  const certificates = [
    {
      id: 1,
      name: "GRS Certified",
      issuer: "Global Recycled Standard",
      description: "GRS Certified for Sustainable & Recycled Manufacturing Excellence",
      icon: "♻️",
      year: "2025"
    },
    {
      id: 2,
      name: "OEKO-TEX Standard 100",
      issuer: "OEKO-TEX Association",
      description: "Product safety and harmful substance testing certification",
      icon: "🌿",
      year: "2024"
    }
  ];

  // Facts and Figures Data
  const factsFigures = [
    {
      id: 1,
      number: "32+",
      label: "Years of Excellence",
      icon: "🏆"
    },
    {
      id: 2,
      number: "500+",
      label: "Skilled Employees",
      icon: "👥"
    },
    {
      id: 4,
      number: "220+",
      label: "Happy Clients",
      icon: "😊"
    },
    {
      id: 5,
      number: "100%",
      label: "Quality Commitment",
      icon: "⭐"
    }
  ];

  // Clients Data
  const clients = [
    { id: 1, name: "Tesco", logo: `${publicUrl}/images/tesco.png`, country: "UK", industry: "Fashion Retail", founded: "1919", website: "www.tesco.com", description: "British retail and lifestyle brand offering fashion, grocery, and everyday products.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
    { id: 2, name: "C & A", logo: `${publicUrl}/images/ca.jpg`, country: "GERMANY", industry: "Fashion Retail", founded: "1841", website: "www.c-and-a.com", description: "European fashion retailer offering sustainable and affordable clothing.", partnershipSince: "2011", productsUsed: ["Organic Cotton", "Cotton Threads"], testimonial: "Etafil's commitment to sustainability aligns perfectly with our values." },
    { id: 3, name: "Tom Tailor", logo: `${publicUrl}/images/tom.png`, country: "GERMANY", industry: "Fashion Retail", founded: "1962", website: "www.tom-tailor.com", description: "German casual and leisurewear brand for men, women, and children.", partnershipSince: "2013", productsUsed: ["Cotton Threads", "Polyester Filament"], testimonial: "Quality and consistency make Etafil a trusted partner for Tom Tailor." },
    { id: 4, name: "LC Waikiki", logo: `${publicUrl}/images/lc.png`, country: "Turkish", industry: "Fashion Retail", founded: "1997", website: "www.lcwaikiki.com", description: "Leading fashion retail brand specializing in trendy apparel, lifestyle products, and modern clothing solutions for men, women, and children.", partnershipSince: "2018", productsUsed: ["Cotton Threads", "Polyester Threads"], testimonial: "Etafil's thread quality has been exceptional for our gaming apparel line." },
    { id: 5, name: "Terranova", logo: `${publicUrl}/images/terranova.png`, country: "Italy", industry: "Fashion Retail", founded: "1978", website: "www.terranova.com", description: "Italian fashion brand offering trendy clothing for men across Europe and worldwide.", partnershipSince: "2015", productsUsed: ["Cotton Threads", "Mercerized Cotton"], testimonial: "The quality of Etafil's threads perfectly matches our premium fashion standards." },
    { id: 6, name: "Okaidi", logo: `${publicUrl}/images/okaidi.png`, country: "France", industry: "Retail", founded: "1900", website: "www.okaidi.com", description: "One of France's largest retail chains offering quality products at affordable prices.", partnershipSince: "2010", productsUsed: ["Cotton Threads", "Polyester Spun", "Filament Threads"], testimonial: "Etafil has been a reliable partner for our private label apparel manufacturing." },
    { id: 7, name: "Petrol Industri", logo: `${publicUrl}/images/pi.svg`, country: "Netherlands", industry: "Fashion Retail", founded: "1989", website: "www.pi.com", description: "Global fashion brand known for offering affordable and sustainable fashion.", partnershipSince: "2012", productsUsed: ["Organic Cotton", "Cotton Threads", "Polyester Threads"], testimonial: "Etafil's organic cotton threads help us achieve our sustainability goals." },
    { id: 8, name: "Kiabi", logo: `${publicUrl}/images/kiabi.jpg`, country: "FRANCE", industry: "Fashion Retail", founded: "1978", website: "www.kiabi.com", description: "French fashion retailer offering affordable clothing for the whole family.", partnershipSince: "2016", productsUsed: ["Cotton Threads", "Soft Cotton Threads"], testimonial: "The softness and durability of Etafil threads are outstanding." },
    { id: 9, name: "Ginatricot", logo: `${publicUrl}/images/gc.png`, country: "Sweden", industry: "Fashion Retail", founded: "1997", website: "www.ginatricot.com", description: "Sweden's fashion brand inspired by street style and youth culture.", partnershipSince: "2014", productsUsed: ["Cotton Threads", "Textured Polyester"], testimonial: "Etafil understands our fast-fashion requirements perfectly." },
    { id: 10, name: "GU", logo: `${publicUrl}/images/gu.png`, country: "Japan", industry: "Fashion Retail", founded: "2006", website: "www.gu.com", description: "Trendy fashion brand targeting young women with the latest styles.", partnershipSince: "2015", productsUsed: ["Mercerized Cotton", "Cotton Threads"], testimonial: "The colorfastness of Etafil threads is exceptional for our vibrant collections." },
    { id: 11, name: "Lidl", logo: `${publicUrl}/images/lidl.png`, country: "GERMANY", industry: "Fashion Retail", founded: "1930", website: "www.lidl.com", description: "German discount retail chain offering a wide range of products.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
    { id: 12, name: "Primark", logo: `${publicUrl}/images/pri.png`, country: "Ireland", industry: "Fashion Retail", founded: "1969", website: "www.primark.com", description: "Irish fashion retailer offering affordable clothing for the whole family.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
    { id: 13, name: "Zara", logo: `${publicUrl}/images/zara.png`, country: "Spain", industry: "Fashion Retail", founded: "1974", website: "www.zara.com", description: "Spanish fashion retailer offering trendy clothing for men and women.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
    { id: 14, name: "Mango", logo: `${publicUrl}/images/mango.png`, country: "Spain", industry: "Fashion Retail", founded: "1984", website: "www.mango.com", description: "Spanish fashion retailer offering affordable clothing for the whole family.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
    { id: 15, name: "Hurley", logo: `${publicUrl}/images/hurley.png`, country: "USA", industry: "Fashion Retail", founded: "1999", website: "www.hurley.com", description: "USA's casual fashion brand for men and women.", partnershipSince: "2017", productsUsed: ["Cotton Threads", "Polyester Spun"], testimonial: "Excellent product quality and reliable delivery every time." },
  ];

  const scrollingClients = [...clients, ...clients];

  // Code of Conduct Points
  const codeOfConduct = [
    {
      id: 1,
      title: "Integrity & Honesty",
      description: "We conduct our business with the highest standards of integrity, honesty, and transparency in all dealings.",
      icon: "🤝"
    },
    {
      id: 2,
      title: "Quality Commitment",
      description: "We are committed to delivering products that meet or exceed international quality standards.",
      icon: "⭐"
    },
    {
      id: 3,
      title: "Fair Business Practices",
      description: "We engage in fair competition, avoid conflicts of interest, and maintain transparent business relationships.",
      icon: "⚖️"
    },
    {
      id: 4,
      title: "Customer Focus",
      description: "We prioritize customer satisfaction through responsive service and continuous improvement.",
      icon: "🎯"
    },
    {
      id: 5,
      title: "Employee Welfare",
      description: "We ensure a safe, respectful, and inclusive workplace that values diversity and promotes growth.",
      icon: "👥"
    },
    {
      id: 6,
      title: "Environmental Responsibility",
      description: "We minimize our environmental impact through sustainable practices and responsible resource use.",
      icon: "🌱"
    }
  ];

  // Products Data for mapping
  const productsList = [
    { name: "Etafil Classic(Spun Polyester)", category: "Spun Polyester", image: "/images/classic.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Comfort(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/comfort.jpeg", description: "Long continuous filament threads for ultra-smooth finish. Zero lint for clean sewing operations.", isBestSeller: false },
    { name: "Etafil Shield(Spun Polyester)", category: "Spun Polyester", image: "/images/shield.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Shield Plus(Spun Polyester)", category: "Spun Polyester", image: "/images/shield+.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Legend(Poly Poly Core Spun Polyester)", category: "Poly Poly Core Spun Polyester", image: "/images/legend.jpeg", description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.", isBestSeller: false },
    { name: "Etafil Legend Plus(Poly Poly Core Spun Polyester)", category: "Poly Poly Core Spun Polyester", image: "/images/legend+.jpeg", description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.", isBestSeller: false },
    { name: "Etafil Eco Classic(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoclassic.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Comfort(Recycled Continuous Filament Polyester)", category: "Recycled Continuous Filament Polyester", image: "/images/ecocomfort.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Shield(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoshield.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Shield Plus(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoshield+.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Eta Cotton(100% Cotton)", category: "100% Cotton", image: "/images/etacotton.jpeg", description: "Premium threads for decorative stitching and embroidery work. High sheen and vibrant color options.", isBestSeller: false },
    { name: "Etafil Emb(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/embroidery.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Etaflex(Stretch Polyester)", category: "Stretch Polyester", image: "/images/etaflex.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Etagral(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/etagral.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Eta PVA(Staple Spun PVA)", category: "Staple Spun PVA", image: "/images/etapva.jpeg", description: "Dissolvable threads for temporary stitching and basting. Perfect for basting, quilting, and embroidery stabilization.", isBestSeller: false },
    { name: "Eta Nylon(Continuous Filament Nylon)", category: "Continuous Filament Nylon", image: "/images/etanylon.jpeg", description: "Textured nylon threads with excellent stretch and recovery. Ideal for stretchable fabrics and activewear.", isBestSeller: false }
  ];

  return (
    <Base>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-image-wrapper">
          <img 
            src={`${publicUrl}/images/eta.png`} 
            alt="Etafil (Bangladesh) Ltd. Manufacturing Facility"
            className="about-hero-bg-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
            }}
          />
        </div>
      </section>

      {/* About EBL Section */}
      <section id="about-ebl-section" className="about-ebl-section">
        <div className="container">
          <div className="about-ebl-wrapper">
            {/* Left Side - Content Card */}
            <div className="about-ebl-content-card">
              <div className="about-ebl-header">
                <h1 className="about-ebl-title">Etafil (Bangladesh) Ltd.</h1>
                <p className="about-ebl-subtitle">Premium Sewing Threads Manufacturer</p>
              </div>
              <div className="about-ebl-description">
                <p>Etafil (Bangladesh) Ltd. started its long and prosperous journey with a rather small infrastructural support in <span className="highlight-year">1994</span>, with the goal of becoming the premier of sewing thread solution in Bangladesh. After commercial operation in <span className="highlight-year">1997</span>, it never looked back ever since and grew rather drastically to meet the Company's goal.</p>
                
                <div className="info-highlight-box">
                  <div className="highlight-item">
                    <span className="highlight-icon">📅</span>
                    <div>
                      <strong>Established:</strong> 1994
                      <small>Commercial Operation: 1997</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏭</span>
                    <div>
                      <strong>Registration:</strong> Companies Act, 1994
                      <small>Private Company Limited</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📍</span>
                    <div>
                      <strong>Plant Location:</strong> Gazipur
                      <small>State-of-the-art facility</small>
                    </div>
                  </div>
                </div>

                <p>The Company was registered as a private Company limited under Companies Act, 1994. We started our commercial operation from the Gazipur plant in 1997.</p>
                
                {/* Learn More Button */}
                <div className="learn-more-container">
                  <button 
                    className={`learn-more-btn ${showFullInfo ? 'active' : ''}`}
                    onClick={toggleFullInfo}
                  >
                    <span className="btn-text">{showFullInfo ? 'Show Less' : 'Learn More'}</span>
                    <span className="btn-icon">{showFullInfo ? '−' : '+'}</span>
                  </button>
                </div>

                {/* Additional Info */}
                <div id="additional-info" className={`additional-info ${showFullInfo ? 'show' : ''}`}>
                  <div className="achievement-box">
                    <h4>🌟 Key Achievements</h4>
                    <ul>
                      <li>Leading manufacturer & supplier of high-quality Sewing Thread products</li>
                      <li>100% export oriented sewing thread of Spun Polyester</li>
                      <li>Continuous advancement in workers' rights and benefits</li>
                      <li>Industry leader in compliance and customer service</li>
                      <li>State-of-the-art manufacturing facility with modern equipment</li>
                      <li>ISO certified quality management system</li>
                    </ul>
                  </div>

                  <p>Etafil (Bangladesh) Ltd is a leading manufacturer & supplier of high-quality Sewing Thread products to apparel industries in Bangladesh. The principal activities of the company include dyeing and finishing of different types of sewing thread yarn. The company has earned fames and laurels in respect of proper management and volume export and established itself as an innovative leader of 100% export oriented sewing thread of Spun Polyester with continuous advancement in workers' rights and benefits, compliance, customer service, competitive pricing, quality product, technical support, and research & developments.</p>
                  
                  <div className="vision-mission-mini">
                    <div className="mini-card">
                      <h4>🎯 Our Commitment</h4>
                      <p>To deliver products that meet international quality standards while ensuring environmental sustainability and social responsibility.</p>
                    </div>
                    <div className="mini-card">
                      <h4>🏆 Quality Policy</h4>
                      <p>We are committed to continuous improvement, innovation, and customer satisfaction through our quality management system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Card */}
            <div className="about-ebl-image-card">
              <div className="image-card-inner">
                <div className="image-wrapper-card">
                  <img 
                    src={`${publicUrl}/images/ebl1.jpg`} 
                    alt="Etafil Bangladesh Factory"
                    className="company-image-card"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="image-overlay-card">
                    <div className="overlay-content-card">
                      <span className="overlay-icon-card">🏭</span>
                      <h3>Etafil (Bangladesh) Ltd.</h3>
                      <p>Modern manufacturing unit with advanced machinery</p>
                    </div>
                  </div>
                </div>
                <div className="image-card-footer">
                  <div className="footer-icon">📍</div>
                  <div className="footer-text">
                    <h4>Our Manufacturing Facility</h4>
                    <p>Gazipur, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <div className="box-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>To create the market needs and wants through efficient quality manufacturing processes and premium customer service.</p>
              <div className="mission-points">
                <span>✓ Quality First</span>
                <span>✓ Innovation Driven</span>
                <span>✓ Customer Focused</span>
              </div>
            </div>
            <div className="vision-box">
              <div className="box-icon">💡</div>
              <h2>Our Vision</h2>
              <p>Here at the Tamishna Group we give critical priority in infusing innovation in all thought processes, approaches and strategies. We believe in crafting excellence. Our goal is simple we want to be a one-stop solution for a value-added product of superior quality that has a minimal impact on the environment. We are always seeking to have maximum value addition within the group so as to control quality and deliver in the shortest possible lead times.</p>
              <div className="vision-points">
                <span>✓ Global Leadership</span>
                <span>✓ Sustainable Growth</span>
                <span>✓ Excellence Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section id="objective" className="core-objectives-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Objectives</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Strategic priorities driving our growth and excellence</p>
          </div>
          <div className="core-objectives-grid">
            {coreObjectives.map((objective) => (
              <div key={objective.id} className="core-objective-card">
                <div className="core-objective-icon" style={{ background: objective.color }}>
                  <span>{objective.icon}</span>
                </div>
                <div className="core-objective-content">
                  <h3>{objective.title}</h3>
                  <p>{objective.description}</p>
                </div>
                <div className="core-objective-number">
                  <span>0{objective.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts & Figures Section */}
      <section id="facts-section" className="facts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Facts & Figures</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Etafil (Bangladesh) Ltd. by the numbers</p>
          </div>
          <div className="facts-grid">
            {factsFigures.map((fact) => (
              <div key={fact.id} className="fact-card">
                <div className="fact-icon">{fact.icon}</div>
                <div className="fact-number">{fact.number}</div>
                <div className="fact-label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Category Section */}
      <section id="products-category" className="products-section about-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Premium thread collections for every application and production capacity of 15-20 MT per day/4.0-5.0 million cones per Day</p>
          </div>
          
          <div className="products-slider-container">
            <div className="products-track">
              {productsList.map((product, idx) => (
                <div 
                  key={idx} 
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="product-image">
                    <img 
                      src={product.image.startsWith('http') ? product.image : `${publicUrl}${product.image}`} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div className="product-overlay"></div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description ? product.description.substring(0, 80) : 'Premium quality sewing thread for industrial applications'}...</p>
                    <div className="product-features">
                      <span>✓ High Quality</span>
                      <span>✓ Premium Finish</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {productsList.map((product, idx) => (
                <div 
                  key={`duplicate-${idx}`} 
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="product-image">
                    <img 
                      src={product.image.startsWith('http') ? product.image : `${publicUrl}${product.image}`} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div className="product-overlay"></div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description ? product.description.substring(0, 80) : 'Premium quality sewing thread for industrial applications'}...</p>
                    <div className="product-features">
                      <span>✓ High Quality</span>
                      <span>✓ Premium Finish</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Section */}
      <section id="production-capacity" className="production-capacity-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Production Capacity</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">State-of-the-art manufacturing capabilities. Monthly Production Capacity 400 Ton/Month</p>
          </div>

          <div className="capacity-summary-bar">
            <div className="summary-item">
              <span className="summary-icon">🏭</span>
              <span className="summary-label">Total Machines</span>
              <span className="summary-value">216+</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <span className="summary-icon">📦</span>
              <span className="summary-label">Total Monthly Capacity</span>
              <span className="summary-value">35M+ Cons Annually</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <span className="summary-icon">⭐</span>
              <span className="summary-label">Overall Efficiency</span>
              <span className="summary-value">95%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thread Specification Section - Keep as is, it's very long but working */}
      <section id="thread-specification" className="thread-specification">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Thread Specification</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Technical specifications of our premium thread collections</p>
          </div>

          <div className="spec-tabs">
            <button className="spec-tab-btn active" data-tab="classic"><span>🧵</span> Etafil Classic</button>
            <button className="spec-tab-btn" data-tab="comfort"><span>✨</span> Etafil Comfort</button>
            <button className="spec-tab-btn" data-tab="shield"><span>🛡️</span> Etafil Shield</button>
            <button className="spec-tab-btn" data-tab="shield-plus"><span>⭐</span> Etafil Shield Plus</button>
            <button className="spec-tab-btn" data-tab="legend"><span>🏆</span> Etafil Legend</button>
            <button className="spec-tab-btn" data-tab="legend-plus"><span>💎</span> Etafil Legend Plus</button>
            <button className="spec-tab-btn" data-tab="eco-classic"><span>♻️</span> Etafil Eco Classic</button>
            <button className="spec-tab-btn" data-tab="eco-comfort"><span>🌿</span> Etafil Eco Comfort</button>
            <button className="spec-tab-btn" data-tab="eco-shield"><span>🛡️♻️</span> Etafil Eco Shield</button>
            <button className="spec-tab-btn" data-tab="eco-shield-plus"><span>⭐♻️</span> Etafil Eco Shield Plus</button>
            <button className="spec-tab-btn" data-tab="etacotton"><span>🌾</span> Eta Cotton</button>
            <button className="spec-tab-btn" data-tab="embroidery"><span>🎨</span> Etafil Emb</button>
            <button className="spec-tab-btn" data-tab="etaflex"><span>💪</span> Etaflex</button>
            <button className="spec-tab-btn" data-tab="etagral"><span>🔗</span> Etagral</button>
            <button className="spec-tab-btn" data-tab="pva"><span>💧</span> Eta PVA</button>
            <button className="spec-tab-btn" data-tab="nylon"><span>🪢</span> Eta Nylon</button>
          </div>

          {/* All table containers remain the same */}
          <div className="spec-table-container active" id="tab-classic">
            <div className="table-responsive">
              <table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>50/2</td><td>24</td><td>130</td><td>4000</td><td>850</td><td>13-20</td><td>9</td></tr><tr><td>60/2</td><td>18</td><td>180</td><td>4000</td><td>650</td><td>13-20</td><td>7</td></tr></tbody></table>
            </div>
          </div>

          {/* Add remaining tables as they were - keeping them short for brevity */}
          <div className="spec-table-container" id="tab-comfort"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>150D SIM</td><td>18</td><td>180</td><td>4000</td><td>660</td><td>20-32</td><td>8</td></tr><tr><td>150D NIM</td><td>18</td><td>180</td><td>4000</td><td>650</td><td>20-32</td><td>8</td></tr></tbody></table></div></div>
          
          {/* Add all other tables - keeping existing structure */}
          <div className="spec-table-container" id="tab-shield"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>980</td><td>13-20</td><td>11</td></tr><tr><td>60/3</td><td>29</td><td>120</td><td>4000</td><td>1050</td><td>13-20</td><td>11</td></tr><tr><td>40/3</td><td>40</td><td>75</td><td>3000</td><td>1650</td><td>13-20</td><td>14</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-shield-plus"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>980</td><td>13-20</td><td>11</td></tr><tr><td>60/3</td><td>29</td><td>120</td><td>4000</td><td>1050</td><td>13-20</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-legend"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>60/2</td><td>18</td><td>180</td><td>4000</td><td>930</td><td>17-22</td><td>7</td></tr><tr><td>50/2</td><td>24</td><td>130</td><td>4000</td><td>1100</td><td>17-22</td><td>9</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-legend-plus"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>60/2</td><td>18</td><td>180</td><td>4000</td><td>930</td><td>17-22</td><td>7</td></tr><tr><td>50/2</td><td>24</td><td>130</td><td>4000</td><td>1100</td><td>17-22</td><td>9</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-eco-classic"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>50/2</td><td>24</td><td>130</td><td>4000</td><td>810</td><td>13-20</td><td>9</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-eco-comfort"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>150D SIM</td><td>18</td><td>180</td><td>4000</td><td>640</td><td>20-32</td><td>8</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-eco-shield"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>810</td><td>13-20</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-eco-shield-plus"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>810</td><td>13-20</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-etacotton"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>900</td><td>5-8</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-embroidery"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>120/2</td><td>27</td><td>120</td><td>3000</td><td>9</td><td>18-22</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-etaflex"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>150D/2</td><td>30</td><td>120</td><td>4000</td><td>950</td><td>40-80</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-etagral"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>50D/2</td><td>10</td><td>300</td><td>4000</td><td>690</td><td>16-22</td><td>9</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-pva"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>40/2</td><td>27</td><td>120</td><td>4000</td><td>660</td><td>14-23</td><td>11</td></tr></tbody></table></div></div>
          
          <div className="spec-table-container" id="tab-nylon"><div className="table-responsive"><table className="spec-table"><thead><tr><th>Count (Ne)</th><th>Tex size</th><th>Ticket No</th><th>Length (m)</th><th>Avg-Strength (cN)</th><th>Elongation % (min-max)</th><th>Recommended Needle Size</th></tr></thead><tbody><tr><td>70D/2</td><td>18</td><td>180</td><td>4000</td><td>690</td><td>20-32</td><td>9</td></tr></tbody></table></div></div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section id="quality-assurance" className="quality-assurance-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quality Assurance</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Our commitment to excellence</p>
          </div>
          
          <div className="quality-assurance-content">
            <div className="quality-text-content">
              <h3 className="quality-title">
                State-of-the-Art <span className="highlight">High-Tech Laboratory</span>
              </h3>
              <div className="quality-description">
                <p className="quality-paragraph">
                  To ensure safe and consumer friendly fabric, <strong>Etafil (Bangladesh) Ltd.</strong> has its own high-tech laboratory.
                </p>
                <p className="quality-paragraph">
                  The Lab is fully equipped with modern testing equipment's and machines enabling us to check the 
                  fabric, yarn, dyes & chemicals at all stages for required testing parameters and performance.
                </p>
              </div>
              <div className="quality-stats">
                <div className="quality-stat-item">
                  <div className="stat-number3">100%</div>
                  <div className="stat-label3">Quality Checked</div>
                </div>
                <div className="quality-stat-item">
                  <div className="stat-number3">24/7</div>
                  <div className="stat-label3">Lab Operations</div>
                </div>
              </div>
              <div className="testing-parameters">
                <h4 className="parameters-title">Testing Parameters:</h4>
                <div className="parameters-grid">
                  <span className="parameter-tag">🧪 Color Fastness</span>
                  <span className="parameter-tag">💪 Tensile Strength</span>
                  <span className="parameter-tag">🎨 Dye Consistency</span>
                  <span className="parameter-tag">🔬 Chemical Analysis</span>
                  <span className="parameter-tag">📏 Dimensional Stability</span>
                  <span className="parameter-tag">🌡️ Heat Resistance</span>
                </div>
              </div>
            </div>
            
            <div className="quality-image-content">
              <div className="quality-image-wrapper">
                <img 
                  src={`${publicUrl}/images/lab.jpg`}
                  alt="Etafil High-Tech Laboratory"
                  className="quality-main-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                  }}
                />
                <div className="floating-badge lab-badge-1">
                  <span className="badge-icon">🔬</span>
                  <span className="badge-text">Modern Equipment</span>
                </div>
                <div className="floating-badge lab-badge-2">
                  <span className="badge-icon">🧪</span>
                  <span className="badge-text">Chemical Testing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="equipment-grid">
            <div className="equipment-card"><div className="equipment-icon">🔬</div><h4>Spectrophotometer</h4><p>Color matching & analysis</p></div>
            <div className="equipment-card"><div className="equipment-icon">💪</div><h4>Tensile Tester</h4><p>Strength & durability</p></div>
            <div className="equipment-card"><div className="equipment-icon">🌡️</div><h4>Weather-Ometer</h4><p>Light & weather fastness</p></div>
            <div className="equipment-card"><div className="equipment-icon">📊</div><h4>Data Analysis</h4><p>Real-time monitoring</p></div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries-served" className="industries-served">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industries Served</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Serving diverse industries worldwide with premium thread solutions</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card"><div className="industry-icon">👕</div><h3>Apparel & Garments</h3><p>Denim, shirts, trousers, innerwear, suits, jackets and fashion wear</p><div className="industry-hover-effect"></div></div>
            <div className="industry-card"><div className="industry-icon">🛋️</div><h3>Home Textiles</h3><p>Bedding, curtains, upholstery, cushions, towels and home furnishings</p><div className="industry-hover-effect"></div></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates-section" className="certificates-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications & Compliance</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Quality and compliance certifications we proudly hold</p>
          </div>
          <div className="certificates-grid">
            <div className="certificate-card">
              <div className="certificate-image-wrapper">
                <img src={`${publicUrl}/images/grs.jpg`} alt="GRS Certificate" className="certificate-image" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'; }} />
              </div>
              <div className="certificate-info"><div className="certificate-icon">📋</div><h3>GRS Certified</h3><p className="cert-issuer1">Global Recycled Standard (GRS)</p><p className="cert-description">GRS Certified for Sustainable & Recycled Manufacturing Excellence</p><div className="cert-footer"><span className="cert-status active">Active</span></div></div>
            </div>
            <div className="certificate-card">
              <div className="certificate-image-wrapper">
                <img src={`${publicUrl}/images/oeko.webp`} alt="Oeko-Tex Standard 100" className="certificate-image" onError={(e) => { e.target.src = `${publicUrl}/images/eta.png`; }} />
              </div>
              <div className="certificate-info"><div className="certificate-icon">🌿</div><h3>Oeko-Tex Standard 100</h3><p className="cert-issuer">Oeko-Tex Association</p><p className="cert-description">Product safety and harmful substance testing certification</p><div className="cert-footer"><span className="cert-status active">Active</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section id="trusted-clients" className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Trusted Buyers</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Proudly serving leading brands worldwide</p>
          </div>
          <div className="clients-slider-container">
            <div className="clients-track">
              {scrollingClients.map((client, index) => (
                <div key={index} className="client-logo-card">
                  <div className="client-logo-wrapper">
                    <img src={client.logo} alt={client.name} className="client-logo" onError={(e) => { e.target.src = `https://placehold.co/150x80/1e293b/ffffff?text=${client.name.substring(0, 3)}`; }} />
                  </div>
                  <p className="client-name">{client.name}</p>
                  <span className="client-country">{client.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Board of Directors Section - FIXED MD IMAGE */}
      <section id="board-section" className="board-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Board of Directors</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Meet our esteemed leadership team</p>
          </div>
          
          <div className="board-layout">
            {/* Managing Director - Featured (Top) */}
            {boardMembers.length > 0 && (
              <div className="board-featured">
                <div className="featured-card">
                  <div className="featured-image">
                    <img 
                      src={boardMembers[0].image}
                      alt={boardMembers[0].name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onLoad={() => console.log('MD image loaded successfully:', boardMembers[0].image)}
                      onError={(e) => {
                        console.error('MD image failed to load:', boardMembers[0].image);
                        e.target.onerror = null;
                        e.target.src = `${publicUrl}/images/eta.png`;
                      }}
                    />
                  </div>
                  <h3>{boardMembers[0].name}</h3>
                  <p className="board-position">{boardMembers[0].position}</p>
                  <div className="board-quote">"Leadership is not about being in charge. It's about taking care of those in your charge."</div>
                </div>
              </div>
            )}
            
            {/* Directors Grid */}
            <div className="board-directors">
              <div className="board-grid-3col">
                {boardMembers.slice(1, 4).map((member) => (
                  <div key={member.id} className="board-card">
                    <div className="board-image">
                      <img 
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          console.error(`${member.name} image failed to load:`, member.image);
                          e.target.onerror = null;
                          e.target.src = `${publicUrl}/images/eta.png`;
                        }}
                      />
                    </div>
                    <h3>{member.name}</h3>
                    <p className="board-position">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact & Inquiry Section */}
      <section id="contact-inquiry" className="code-of-conduct-section1">
        <div className="container">
          <div className="section-header3">
            <h2 className="section-title1">Contact & Inquiry</h2>
            <div className="section-divider"></div>
          </div>
          <div className="conduct-grid">
            <div className="conduct-card"><div className="conduct-icon">📧</div><h3>Email Us</h3><p>habib@etafil.com<br />showkat@etafil.com</p></div>
            <div className="conduct-card"><div className="conduct-icon">📞</div><h3>Call Us</h3><p>01713-046911<br />01713-046908</p></div>
            <div className="conduct-card"><div className="conduct-icon">📍</div><h3>Visit Us</h3><p>House 65, Shah Maghdum Avenue, Sector-12, Uttara, Dhaka-1230</p></div>
          </div>
        </div>
      </section>

     
      {/* Code of Conduct Section */}
      <section id="code-conduct" className="code-of-conduct-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Code of Conduct</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Our commitment to ethical business practices</p>
          </div>
          <div className="conduct-grid">
            {codeOfConduct.map((item) => (
              <div key={item.id} className="conduct-card">
                <div className="conduct-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </Base>
  );
};

export default About;