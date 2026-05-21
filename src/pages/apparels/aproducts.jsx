// apparels-products.jsx - Apparel Products Showcase Component (Fully Fixed Filters)
import React, { useEffect, useState, useMemo } from 'react';
import Base from './base1.jsx';
import './aproducts.css';

const ApparelsProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Apparel Product Data with Categories (All unique category names)
  const productCategories = [
    {
      id: 'sweaters',
      name: "Sweaters",
      description: "Premium quality sweaters for all seasons",
      icon: "🧥",
      bgColor: "#f0f7ff",
      products: [
        { 
          id: 1,
          name: 'Classic Crew Neck', 
          code: 'SW-001',
          image: process.env.PUBLIC_URL + '/images/crewneck.jpg', 
          description: 'Timeless crew neck sweater made from premium cotton blend for everyday comfort.',
          specifications: ['Fabric: Cotton-Polyester Blend', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },
        { 
          id: 2,
          name: 'V-Neck Pullover', 
          code: 'SW-002',
          image: process.env.PUBLIC_URL + '/images/vneck.jpg', 
          description: 'Elegant V-neck pullover perfect for casual and semi-formal occasions.',
          specifications: ['Fabric: Merino Wool Blend', 'Sizes: S-XXL', 'Colors: 8+ options', 'Weight: 260 GSM']
        },
        { 
          id: 3,
          name: 'Cardigan', 
          code: 'SW-003',
          image: process.env.PUBLIC_URL + '/images/cardigan.jpg', 
          description: 'Versatile cardigan with button closure, ideal for layering.',
          specifications: ['Fabric: Acrylic-Wool Blend', 'Sizes: S-XXL', 'Colors: 12+ options', 'Features: Button closure']
        },
        { 
          id: 6,
          name: 'Button Sweater', 
          code: 'SW-006',
          image: process.env.PUBLIC_URL + '/images/Buttonsweater.jpg', 
          description: 'Classic sweater with button closure for a sophisticated look.',
          specifications: ['Fabric: 80% Cotton, 20% Polyester', 'Sizes: S-XXL', 'Colors: 12+ options', 'Weight: 300 GSM']
        },
        { 
          id: 7,
          name: 'Fair Isle Sweater', 
          code: 'SW-007',
          image: process.env.PUBLIC_URL + '/images/Fairsweater.jpg', 
          description: 'Traditional Fair Isle patterned sweater with colorful designs.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },
        { 
          id: 8,
          name: 'Versatile Sweater', 
          code: 'SW-008',
          image: process.env.PUBLIC_URL + '/images/VersatileSweater.jpg', 
          description: 'Versatile sweater suitable for both casual and formal occasions.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },
        { 
          id: 9,
          name: 'Striped Pattern Sweater', 
          code: 'SW-009',
          image: process.env.PUBLIC_URL + '/images/StripedSweater.jpg', 
          description: 'Stylish striped pattern sweater for a trendy look.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        }
      ]
    },
    {
      id: 'vests',
      name: "Vests",
      description: "Stylish and functional vests",
      icon: "👕",
      bgColor: "#f0fff4",
      products: [
        { 
          id: 4,
          name: 'Waistcoat Vest', 
          code: 'VS-004',
          image: process.env.PUBLIC_URL + '/images/Waistcoat.jpg', 
          description: 'Elegant waistcoat vest perfect for formal and semi-formal occasions.',
          specifications: ['Fabric: Polyester Blend', 'Sizes: S-XXL', 'Colors: 6+ options', 'Features: Button closure']
        },
        { 
          id: 5,
          name: 'Knit Vest', 
          code: 'VS-005',
          image: process.env.PUBLIC_URL + '/images/KnitVests.jpg', 
          description: 'Comfortable knit vest with classic pattern for a sophisticated look.',
          specifications: ['Fabric: Acrylic Blend', 'Sizes: S-XXL', 'Colors: 5+ options', 'Features: V-neck design']
        }
      ]
    },
    {
      id: 'knitwear',
      name: "Knitwear",
      description: "Fine knitwear collection",
      icon: "🧶",
      bgColor: "#f0f0ff",
      products: [
        { 
          id: 12,
          name: 'Fine Gauge Knit', 
          code: 'KW-012',
          image: process.env.PUBLIC_URL + '/images/fineknit.jpg', 
          description: 'Elegant fine gauge knit sweater with intricate pattern details.',
          specifications: ['Fabric: 100% Merino Wool', 'Sizes: S-XXL', 'Colors: 10+ options', 'Gauge: 12gg']
        },
        { 
          id: 13,
          name: 'Chunky Knit', 
          code: 'KW-013',
          image: process.env.PUBLIC_URL + '/images/chunkyknit.jpg', 
          description: 'Heavyweight chunky knit sweater for maximum warmth and style.',
          specifications: ['Fabric: Acrylic Blend', 'Sizes: S-XXL', 'Colors: 8+ options', 'Gauge: 3gg']
        },
        { 
          id: 14,
          name: 'Cable Knit', 
          code: 'KW-014',
          image: process.env.PUBLIC_URL + '/images/cableknit.jpg', 
          description: 'Classic cable knit sweater with timeless design elements.',
          specifications: ['Fabric: Cotton-Acrylic Blend', 'Sizes: S-XXL', 'Colors: 6+ options', 'Pattern: Cable design']
        }
      ]
    }
  ];

  // Get all products and add category info using useMemo to prevent unnecessary recalculations
  const allProducts = useMemo(() => {
    let products = [];
    productCategories.forEach(category => {
      category.products.forEach(product => {
        products.push({
          ...product,
          categoryName: category.name,
          categoryIcon: category.icon,
          categoryId: category.id
        });
      });
    });
    return products;
  }, []);

  // Filter products based on category and search using useMemo
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeCategory, searchTerm, allProducts]);

  // Handler for category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Reset search term when changing category (optional)
    // setSearchTerm('');
  };

  // Handler for search change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler for clear filters
  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
  };

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
      '.apparels-products-container .apparels-section-heading, .apparels-products-container .apparels-card, .apparels-products-container .apparels-category-card, .apparels-products-container .capability-card'
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [filteredProducts]); // Re-run when filtered products change

  // Handle Request Quote - Opens Gmail compose window directly
  const handleRequestQuote = (productName, productCode, categoryName) => {
    const companyEmail = "cal@convincebd.biz";
    const subject = `Quote Request: ${productName} (${productCode})`;
    const body = `Dear Convince Group Team,

I would like to request a quote for the following product:

Product Name: ${productName}
Product Code: ${productCode}
Category: ${categoryName}

Please provide me with the following details:
- Price per unit
- Minimum Order Quantity (MOQ)
- Available colors/sizes
- Delivery timeline
- Shipping terms

Looking forward to your response.

Best regards,
[Your Name]
[Your Company Name]
[Your Contact Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle general contact click
  const handleContactClick = () => {
    const companyEmail = "cal@convincebd.biz";
    const subject = "Product Inquiry - Convince Apparels";
    const body = `Dear Convince Apparels Team,

I am interested in your apparel products and would like to get more information.

Please contact me with details about:
- Product catalog
- Pricing
- Minimum Order Quantities
- Sample policy

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 350, height = 280) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-size='16' fill='%2364748b' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Hero Slider Images for Apparel Products page
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/sweater.jpg', title: 'Premium Knitwear Collection', subtitle: 'Crafted with excellence for global fashion brands' },
    { url: process.env.PUBLIC_URL + '/images/vests1.jpg', title: 'Quality Vests & Outerwear', subtitle: 'Superior craftsmanship for every season' },
    { url: process.env.PUBLIC_URL + '/images/sweater1.jpg', title: 'Custom Manufacturing', subtitle: 'Tailored solutions for your unique requirements' },
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
    <Base>
      <div className="apparels-products-container">
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

        {/* Products Header */}
        <div className="apparels-header-section">
          <h1 className="apparels-main-title">Our Apparel Collection</h1>
          <p className="apparels-main-subtitle">
            Discover our comprehensive range of high-quality knitwear, sweaters, vests, and garment accessories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="apparels-filter-section">
          <div className="apparels-search-bar">
            <input 
              type="text" 
              placeholder="Search products by name, code, or description..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="apparels-search-input"
            />
            <span className="apparels-search-icon">🔍</span>
          </div>
          
          <div className="apparels-category-filters">
            <button 
              className={`apparels-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button 
                key={category.id}
                className={`apparels-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
          
        </div>

        {/* Products Grid */}
        <div className="apparels-grid-section">
          {filteredProducts.length > 0 ? (
            <>

              <div className="apparels-grid">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="apparels-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="apparels-card-image">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getFallbackImage(product.name, 350, 280);
                        }}
                      />
                      <span className="apparels-card-code">{product.code}</span>
                      <div className="apparels-card-category-badge">
                        {product.categoryIcon} {product.categoryName}
                      </div>
                    </div>
                    <div className="apparels-card-content">
                      <h3 className="apparels-card-title">{product.name}</h3>
                      <p className="apparels-card-description">{product.description}</p>
                      
                      <div className="apparels-specs">
                        <h4>Specifications:</h4>
                        <ul>
                          {product.specifications.map((spec, idx) => (
                            <li key={idx}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button 
                        className="apparels-inquiry-btn"
                        onClick={() => handleRequestQuote(product.name, product.code, product.categoryName)}
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="apparels-no-results">
              <p>No products found matching your search criteria.</p>
              <button onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Manufacturing Capabilities */}
        <div className="apparels-capabilities-section">
          <div className="capabilities-container">
            <h2 className="apparels-section-heading">Manufacturing Capabilities</h2>
            <div className="apparels-capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🏭</div>
                </div>
                <h3>State-of-the-art Facility</h3>
                <p>Modern manufacturing unit with advanced machinery and quality control systems</p>
                <div className="capability-features">
                  <span>✓ 50,000+ sq ft</span>
                  <span>✓ 200+ knitting machines</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🔬</div>
                </div>
                <h3>Quality Testing Lab</h3>
                <p>In-house testing facility ensuring all products meet international standards</p>
                <div className="capability-features">
                  <span>✓ ISO Certified</span>
                  <span>✓ 100+ tests daily</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🎨</div>
                </div>
                <h3>Custom Solutions</h3>
                <p>Custom colors, sizes, and designs to meet your unique requirements</p>
                <div className="capability-features">
                  <span>✓ Any color</span>
                  <span>✓ Any size</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Capacity Highlight */}
        <div className="apparels-capacity-highlight">
          <div className="capacity-highlight-container">
            <h2>Production Excellence</h2>
            <div className="capacity-stats">
              <div className="capacity-stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Knitting Machines</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">4,400+</span>
                <span className="stat-label">Pieces/Day</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">132K+</span>
                <span className="stat-label">Pieces/Month</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Global Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="apparels-cta-section">
          <h2>Ready to Source Premium Apparel?</h2>
          <p>Contact our sales team for quotes, samples, and technical specifications</p>
          <button className="apparels-cta-btn" onClick={handleContactClick}>
            Contact Us Today
          </button>
        </div>
      </div>
    </Base>
  );
};

export default ApparelsProducts;