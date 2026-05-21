import React, { useEffect, useState } from 'react';
import Base2 from './base3.jsx';
import './dproducts.css'; 

const DyeingProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
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
      '.dyeing-products-container .dyeing-section-heading, .dyeing-products-container .dyeing-card, .dyeing-products-container .dyeing-category-card, .dyeing-products-container .dyeing-capability-card, .dyeing-products-container .dyeing-capacity-stat'
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

  // Handle Request Quote - Opens Gmail compose window directly
  const handleRequestQuote = (productName, productCode, categoryName) => {
    const companyEmail = "cal@convincebd.biz";
    const subject = `Quote Request: ${productName} (${productCode})`;
    const body = `Dear Convince Group Team,

I would like to request a quote for the following dyeing service:

Service Name: ${productName}
Service Code: ${productCode}
Category: ${categoryName}

Please provide me with the following details:
- Price per kg/yard
- Minimum Order Quantity (MOQ)
- Available colors/finishes
- Delivery timeline
- Quality certifications

Looking forward to your response.

Best regards,
[Your Name]
[Your Company Name]
[Your Contact Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle general contact click for CTA button
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
- Quality certifications (OEKO-TEX, etc.)

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Dyeing Product Data with Categories
  const productCategories = [
    {
      name: "Yarn Dyeing",
      description: "Premium yarn dyeing services for all fiber types",
      icon: "🧵",
      bgColor: "#f0f7ff",
      products: [
        { 
          id: 1,
          name: 'Cotton Yarn Dyeing', 
          code: 'YD-001',
          image: process.env.PUBLIC_URL + '/images/yarn.jpg', 
          description: 'High-quality cotton yarn dyeing with excellent color fastness and uniformity.',
          specifications: ['Fiber: 100% Cotton', 'Colors: 500+ shades', 'Batch Size: 50kg - 5000kg', 'Fastness: Grade 4-5']
        },
        { 
          id: 2,
          name: 'Polyester Yarn Dyeing', 
          code: 'YD-002',
          image: process.env.PUBLIC_URL + '/images/polyester-yarn-dyeing.jpg', 
          description: 'Professional polyester yarn dyeing using high-temperature dispersion process.',
          specifications: ['Fiber: Polyester', 'Colors: All colors available', 'Batch Size: 100kg - 10000kg', 'Process: High-temperature']
        },
        { 
          id: 3,
          name: 'Blended Yarn Dyeing', 
          code: 'YD-003',
          image: process.env.PUBLIC_URL + '/images/blended-yarn-dyeing.webp', 
          description: 'Expert dyeing for cotton-polyester and other blended yarns.',
          specifications: ['Fiber: CVC, PC blends', 'Custom colors', 'Batch Size: Customizable', 'Uniform dye uptake']
        }
      ]
    },
    {
      name: "Fabric Dyeing",
      description: "Bulk fabric dyeing for woven and knit fabrics",
      icon: "📏",
      bgColor: "#f0fff4",
      products: [
        { 
          id: 4,
          name: 'Cotton Fabric Dyeing', 
          code: 'FD-004',
          image: process.env.PUBLIC_URL + '/images/cotton-fabric-dyeing.jpg', 
          description: 'Premium cotton fabric dyeing for all types of woven and knit cotton fabrics.',
          specifications: ['Fabric: 100% Cotton', 'Width: Up to 72"', 'Batch Size: 500-20000 meters', 'Color fastness: Grade 4+']
        },
        { 
          id: 5,
          name: 'Polyester Fabric Dyeing', 
          code: 'FD-005',
          image: process.env.PUBLIC_URL + '/images/polyester-fabric-dyeing.webp', 
          description: 'Professional polyester fabric dyeing with excellent sublimation fastness.',
          specifications: ['Fabric: 100% Polyester', 'Width: Up to 80"', 'Batch Size: 500-15000 meters', 'Process: High-temperature']
        },
        { 
          id: 6,
          name: 'Blended Fabric Dyeing', 
          code: 'FD-006',
          image: process.env.PUBLIC_URL + '/images/blended-fabric-dyeing.jpg', 
          description: 'Expert dyeing for cotton-polyester and other blended fabrics.',
          specifications: ['Fabric: CVC, TC blends', 'Custom colors', 'Batch Size: Customizable', 'Two-bath process available']
        }
      ]
    },
    {
      name: "Garments Dyeing",
      description: "Complete garment dyeing solutions",
      icon: "👕",
      bgColor: "#fff8f0",
      products: [
        { 
          id: 7,
          name: 'Reactive Garments Dyeing', 
          code: 'GD-007',
          image: process.env.PUBLIC_URL + '/images/reactivedyeing.jpg', 
          description: 'Premium reactive dyeing for cotton and cellulosic garments with excellent color fastness.',
          specifications: ['Garment Type: T-shirts, Polo, Hoodies', 'Colors: 300+ shades', 'Capacity: 500-10000 pcs/day', 'Fastness: Grade 4-5']
        },
        { 
          id: 8,
          name: 'Pigment Garments Dyeing', 
          code: 'GD-008',
          image: process.env.PUBLIC_URL + '/images/pigment-dyeing.webp', 
          description: 'Versatile pigment dyeing for unique vintage and washed effects.',
          specifications: ['Garment Type: All garment types', 'Effects: Vintage, Washed', 'Soft hand feel', 'Eco-friendly process']
        },
        { 
          id: 9,
          name: 'Enzyme Wash Dyeing', 
          code: 'GD-009',
          image: process.env.PUBLIC_URL + '/images/enzyme-wash.webp', 
          description: 'Special enzyme wash dyeing for soft hand feel and faded effects.',
          specifications: ['Garment Type: Denim, Casual wear', 'Effects: Faded, Worn look', 'Soft finish', 'Eco-friendly enzymes']
        }
      ]
    },
    {
      name: "Specialty Dyeing",
      description: "Advanced dyeing techniques for special effects",
      icon: "🎨",
      bgColor: "#f0f0ff",
      products: [
        { 
          id: 10,
          name: 'Disperse Dyeing', 
          code: 'SD-010',
          image: process.env.PUBLIC_URL + '/images/disperse-dyeing.webp', 
          description: 'High-quality disperse dyeing for polyester and synthetic materials.',
          specifications: ['Material: Polyester, Nylon', 'Temperature: 130°C', 'Excellent sublimation', 'Wide color range']
        },
        { 
          id: 11,
          name: 'Vat Dyeing', 
          code: 'SD-011',
          image: process.env.PUBLIC_URL + '/images/vat-dyeing.webp', 
          description: 'Premium vat dyeing for excellent light and wash fastness.',
          specifications: ['Material: Cotton, Linen', 'Excellent fastness', 'Bright shades', 'UV resistant']
        },
        { 
          id: 12,
          name: 'Sulfur Dyeing', 
          code: 'SD-012',
          image: process.env.PUBLIC_URL + '/images/Sulfur Dyeing.jpg', 
          description: 'Cost-effective sulfur dyeing for dark shades on cotton materials.',
          specifications: ['Material: Cotton', 'Dark shades', 'Good wash fastness', 'Cost-effective']
        }
      ]
    }
  ];

  // Get all products for search
  const getAllProducts = () => {
    let allProducts = [];
    productCategories.forEach(category => {
      category.products.forEach(product => {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryIcon: category.icon
        });
      });
    });
    return allProducts;
  };

  // Filter products based on category and search
  const getFilteredProducts = () => {
    let filtered = getAllProducts();
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryName === activeCategory);
    }
    
    if (searchTerm.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 350, height = 280) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-size='16' fill='%2364748b' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Hero Slider Images for Dyeing Products page
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/dyeing-hero-1.jpg', title: 'Professional Dyeing Solutions', subtitle: 'Premium quality dyeing for all textile needs' },
    { url: process.env.PUBLIC_URL + '/images/dyeing-hero-2.jpg', title: 'Advanced Color Technology', subtitle: 'State-of-the-art dyeing facilities' },
    { url: process.env.PUBLIC_URL + '/images/dyeing-hero-3.jpg', title: 'Eco-Friendly Processes', subtitle: 'Sustainable dyeing solutions' },
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

  return (
    <Base2>
      <div className="dyeing-products-container">
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
                    <h1 className="dyeing-hero-title">{image.title}</h1>
                    <p className="dyeing-hero-subtitle">{image.subtitle}</p>
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

        {/* Products Header */}
        <div className="dyeing-header-section">
          <h1 className="dyeing-main-title">Our Dyeing Services</h1>
          <p className="dyeing-main-subtitle">
            Professional dyeing solutions for yarn, fabric, and garments with eco-friendly processes
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="dyeing-filter-section">
          <div className="dyeing-search-bar">
            <input 
              type="text" 
              placeholder="Search services by name, code, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dyeing-search-input"
            />
            <span className="dyeing-search-icon">🔍</span>
          </div>
          
          <div className="dyeing-category-filters">
            <button 
              className={`dyeing-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services
            </button>
            {productCategories.map((category, index) => (
              <button 
                key={index}
                className={`dyeing-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="dyeing-grid-section">
          {filteredProducts.length > 0 ? (
            <div className="dyeing-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="dyeing-card">
                  <div className="dyeing-card-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 350, 280);
                      }}
                    />
                    <span className="dyeing-card-code">{product.code}</span>
                    <div className="dyeing-card-category-badge">
                      {product.categoryIcon} {product.categoryName}
                    </div>
                  </div>
                  <div className="dyeing-card-content">
                    <h3 className="dyeing-card-title">{product.name}</h3>
                    <p className="dyeing-card-description">{product.description}</p>
                    
                    <div className="dyeing-specs">
                      <h4>Specifications:</h4>
                      <ul>
                        {product.specifications.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      className="dyeing-inquiry-btn"
                      onClick={() => handleRequestQuote(product.name, product.code, product.categoryName)}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="dyeing-no-results">
              <p>No services found matching your search criteria.</p>
              <button onClick={() => {setActiveCategory('all'); setSearchTerm('');}}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Manufacturing Capabilities */}
        <div className="dyeing-capabilities-section">
          <div className="capabilities-container">
            <h2 className="dyeing-section-heading">Our Dyeing Capabilities</h2>
            <div className="dyeing-capabilities-grid">
              <div className="dyeing-capability-card">
                <div className="dyeing-capability-icon">🏭</div>
                <h3>State-of-the-art Facility</h3>
                <p>Modern dyeing unit with advanced machinery and quality control systems</p>
                <div className="dyeing-capability-features">
                  <span>✓ 100,000+ sq ft</span>
                  <span>✓ 50+ dyeing machines</span>
                </div>
              </div>
              <div className="dyeing-capability-card">
                <div className="dyeing-capability-icon">🔬</div>
                <h3>Quality Testing Lab</h3>
                <p>In-house testing facility ensuring all dyed materials meet international standards</p>
                <div className="dyeing-capability-features">
                  <span>✓ ISO Certified</span>
                  <span>✓ OEKO-TEX Certified</span>
                </div>
              </div>
              <div className="dyeing-capability-card">
                <div className="dyeing-capability-icon">🎨</div>
                <h3>Custom Color Matching</h3>
                <p>Expert color matching for any shade with consistent quality</p>
                <div className="dyeing-capability-features">
                  <span>✓ 1000+ colors</span>
                  <span>✓ Pantone matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Capacity Highlight - Dyeing Excellence Section - FIXED */}
        <div className="dyeing-capacity-highlight">
          <div className="dyeing-capacity-highlight-container">
            <h2>Dyeing Excellence</h2>
            <div className="dyeing-capacity-stats">
              <div className="dyeing-capacity-stat">
                <span className="dyeing-stat-number">50+</span>
                <span className="dyeing-stat-label">Dyeing Machines</span>
              </div>
              <div className="dyeing-capacity-stat">
                <span className="dyeing-stat-number">50,000+</span>
                <span className="dyeing-stat-label">KG/Day Capacity</span>
              </div>
              <div className="dyeing-capacity-stat">
                <span className="dyeing-stat-number">1000+</span>
                <span className="dyeing-stat-label">Color Shades</span>
              </div>
              <div className="dyeing-capacity-stat">
                <span className="dyeing-stat-number">25+</span>
                <span className="dyeing-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="dyeing-cta-section">
          <h2>Need Professional Dyeing Services?</h2>
          <p>Contact our team for quotes, color matching, and technical specifications</p>
          <button className="dyeing-cta-btn" onClick={handleContactClick}>
            Contact Us Today
          </button>
        </div>
      </div>
    </Base2>
  );
};

export default DyeingProducts;