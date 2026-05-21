import React, { useEffect, useState } from 'react';
import Base2 from './base2.jsx';
import './zproducts.css'; 

const Products = () => {
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
      '.products-container .products-section-heading, .products-container .products-card, .products-container .products-category-card, .products-container .capability-card'
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

  // Handle general contact click for CTA button
  const handleContactClick = () => {
    const companyEmail = "cal@convincebd.biz";
    const subject = "Product Inquiry - Convince Zipper";
    const body = `Dear Convince Zipper Team,

I am interested in your zipper products and would like to get more information.

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

  // Product Data with Categories
  const productCategories = [
    {
      name: "Zipper Products",
      description: "High-quality zippers for all types of garments",
      icon: "🔗",
      bgColor: "#f0f7ff",
      products: [
        { 
          id: 1,
          name: 'Nylon Zipper', 
          code: 'NZ-001',
          image: process.env.PUBLIC_URL + '/images/nylon.jpg', 
          description: 'Smooth and durable nylon zippers ideal for lightweight garments, jackets, and bags.',
          specifications: ['Size: #3 to #10', 'Colors: Available in all colors', 'Length: Customizable', 'Material: Premium Nylon']
        },
        { 
          id: 2,
          name: 'Vislon Zipper', 
          code: 'VZ-002',
          image: process.env.PUBLIC_URL + '/images/zipper.jpg', 
          description: 'Heavy-duty plastic zippers perfect for outdoor wear, luggage, and industrial applications.',
          specifications: ['Size: #5 to #15', 'Colors: 20+ standard colors', 'Length: Customizable', 'Material: Engineered Plastic']
        },
        { 
          id: 3,
          name: 'Metal Zipper', 
          code: 'MZ-003',
          image: process.env.PUBLIC_URL + '/images/metal.jpg', 
          description: 'Premium metal zippers for denim, leather goods, and high-end fashion items.',
          specifications: ['Size: #3 to #10', 'Finishes: Brass, Copper, Nickel', 'Length: Customizable', 'Material: Zinc/Copper Alloy']
        }
      ]
    },
    {
      name: "Elastic Products",
      description: "Premium elastic bands for various applications",
      icon: "🔄",
      bgColor: "#f0fff4",
      products: [
        { 
          id: 4,
          name: 'Elastic Band', 
          code: 'EB-004',
          image: process.env.PUBLIC_URL + '/images/elastic.jpg', 
          description: 'High-quality elastic bands for waistbands, cuffs, and sportswear applications.',
          specifications: ['Width: 1/4" to 4"', 'Colors: White, Black, Beige', 'Length: 100 yards/roll', 'Material: Natural Rubber/Polyester']
        }
      ]
    },
    {
      name: "Tape Products",
      description: "Specialized tapes for garment manufacturing",
      icon: "📏",
      bgColor: "#fff8f0",
      products: [
        { 
          id: 5,
          name: 'Gum Tape', 
          code: 'GT-005',
          image: process.env.PUBLIC_URL + '/images/tap.jpg', 
          description: 'Adhesive gum tape for temporary bonding and garment assembly.',
          specifications: ['Width: 1/2" to 2"', 'Length: 50 yards/roll', 'Color: Beige', 'Adhesive: Strong temporary bond']
        },
        { 
          id: 6,
          name: 'Twill Tape', 
          code: 'TT-006',
          image: process.env.PUBLIC_URL + '/images/twill.jpg', 
          description: 'Durable twill tape for reinforcement, drawstrings, and trim applications.',
          specifications: ['Width: 1/4" to 1"', 'Colors: Multiple options', 'Length: 50 yards/roll', 'Material: Cotton/Polyester blend']
        }
      ]
    },
    {
      name: "Cord Products",
      description: "Quality cords for drawstrings and accessories",
      icon: "🧵",
      bgColor: "#fff0f7",
      products: [
        { 
          id: 7,
          name: 'Draw String', 
          code: 'DS-007',
          image: process.env.PUBLIC_URL + '/images/Draw.jpg', 
          description: 'Round and flat drawstrings for hoodies, bags, and waistbands.',
          specifications: ['Diameter: 2mm to 6mm', 'Colors: All colors available', 'Length: Customizable', 'Material: Polyester/Cotton']
        },
        { 
          id: 8,
          name: 'Draw Cord', 
          code: 'DC-008',
          image: process.env.PUBLIC_URL + '/images/drawcord.jpeg', 
          description: 'Heavy-duty draw cords for outdoor gear, backpacks, and sportswear.',
          specifications: ['Diameter: 3mm to 8mm', 'Colors: Standard colors', 'Length: Customizable', 'Material: Nylon/Polyester']
        }
      ]
    },
    {
      name: "Accessories",
      description: "Complete range of garment accessories",
      icon: "📦",
      bgColor: "#f0fff0",
      products: [
        { 
          id: 9,
          name: 'Interlining', 
          code: 'IL-009',
          image: process.env.PUBLIC_URL + '/images/interlining.webp', 
          description: 'High-quality interlining for collar, cuff, and garment structure reinforcement.',
          specifications: ['Weight: 30g to 150g', 'Width: 36" to 60"', 'Type: Woven/Non-woven', 'Finish: Fusible/Non-fusible']
        },
        { 
          id: 10,
          name: 'PVC Sheet', 
          code: 'PS-010',
          image: process.env.PUBLIC_URL + '/images/pvc.jpg', 
          description: 'Flexible PVC sheets for bags, rainwear, and industrial applications.',
          specifications: ['Thickness: 0.3mm to 2mm', 'Width: 54"', 'Colors: Clear and colors', 'Finish: Glossy/Matte']
        },
        { 
          id: 11,
          name: 'Poly Bag', 
          code: 'PB-011',
          image: process.env.PUBLIC_URL + '/images/polybag.webp', 
          description: 'Custom poly bags for garment packaging and protection.',
          specifications: ['Size: Custom sizes', 'Thickness: 40 to 200 microns', 'Type: Clear/Printed', 'Features: Resealable options']
        },
        { 
          id: 12,
          name: 'Sewing Thread', 
          code: 'ST-012',
          image: process.env.PUBLIC_URL + '/images/thread.jpg', 
          description: 'Premium quality sewing thread for all types of garments.',
          specifications: ['Count: 20/2 to 60/3', 'Colors: All colors', 'Length: 5000m/cone', 'Material: Polyester/Cotton']
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
  const getFallbackImage = (text, width = 300, height = 240) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Hero Slider Images for Products page
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/1.jpg', title: 'Premium Quality Zippers', subtitle: 'For all your garment needs' },
    { url: process.env.PUBLIC_URL + '/images/2.jpg', title: 'Complete Accessories Range', subtitle: 'One-stop solution for manufacturers' },
    { url: process.env.PUBLIC_URL + '/images/3.jpg', title: 'Custom Manufacturing', subtitle: 'Tailored to your specifications' },
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

  return (
    <Base2>
      <div className="products-container">
        {/* Hero Slider Section - Commented out */}
        {/* <div className='products-hero-wrapper'>
          <div className="products-hero-slider-section">
            <div className="products-slider-container products-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`products-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="products-slide-overlay"></div>
                  <div className="products-slide-caption">
                    <h1 className="products-hero-title">{image.title}</h1>
                    <p className="products-hero-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <button className="products-slider-arrow products-prev" onClick={prevSlide}>❮</button>
              <button className="products-slider-arrow products-next" onClick={nextSlide}>❯</button>
              
              <div className="products-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`products-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Products Header */}
        <div className="products-header-section">
          <h1 className="products-main-title">Our Products</h1>
          <p className="products-main-subtitle">
            Discover our comprehensive range of high-quality zippers and garment accessories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="products-filter-section">
          <div className="products-search-bar">
            <input 
              type="text" 
              placeholder="Search products by name, code, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="products-search-input"
            />
            <span className="products-search-icon">🔍</span>
          </div>
          
          <div className="products-category-filters">
            <button 
              className={`products-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            {productCategories.map((category, index) => (
              <button 
                key={index}
                className={`products-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid-section">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="products-card">
                  <div className="products-card-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 350, 280);
                      }}
                    />
                    <span className="products-card-code">{product.code}</span>
                    <div className="products-card-category-badge">
                      {product.categoryIcon} {product.categoryName}
                    </div>
                  </div>
                  <div className="products-card-content">
                    <h3 className="products-card-title">{product.name}</h3>
                    <p className="products-card-description">{product.description}</p>
                    
                    <div className="products-specs">
                      <h4>Specifications:</h4>
                      <ul>
                        {product.specifications.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      className="products-inquiry-btn"
                      onClick={() => handleRequestQuote(product.name, product.code, product.categoryName)}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="products-no-results">
              <p>No products found matching your search criteria.</p>
              <button onClick={() => {setActiveCategory('all'); setSearchTerm('');}}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Manufacturing Capabilities - Enhanced */}
        <div className="products-capabilities-section">
          <div className="capabilities-container">
            <h2 className="products-section-heading">Manufacturing Capabilities</h2>
            <div className="products-capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🏭</div>
                </div>
                <h3>State-of-the-art Facility</h3>
                <p>Modern manufacturing unit with advanced machinery and quality control systems</p>
                <div className="capability-features">
                  <span>✓ 50,000+ sq ft</span>
                  <span>✓ Automated systems</span>
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
                <p>Custom colors, sizes, and specifications to meet your unique requirements</p>
                <div className="capability-features">
                  <span>✓ Any color</span>
                  <span>✓ Any size</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="products-cta-section">
          <h2>Ready to Source Quality Products?</h2>
          <p>Contact our sales team for quotes, samples, and technical specifications</p>
          <button className="products-cta-btn" onClick={handleContactClick}>
            Contact Us Today
          </button>
        </div>
      </div>
    </Base2>
  );
};

export default Products;