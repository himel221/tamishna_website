import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Base from '../base.jsx';
import './cotton.css';

const Cotton = () => {
  const location = useLocation();
  const passedProduct = location.state?.selectedProduct;

  // Cotton Products Data with detailed specifications
  const productsData = [
    {
      id: 1,
      name: "100% COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/100.jpg',
      description: "Premium quality 100% cotton sewing thread ideal for natural fiber garments. Provides excellent stitch formation and minimal shrinkage.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Premium Grade Cotton fibers sourced from certified sustainable farms. Long staple Egyptian cotton blended with finest Indian cotton.",
        specifications: [
          "Fiber Length: 35-40mm",
          "Fiber Fineness: 3.5-4.5 micronaire",
          "Color: Natural White / Ecru",
          "Moisture Regain: 8.5%"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun and compact spinning technology for enhanced strength. Double-ply twisted with Z-twist direction for optimal performance.",
        specifications: [
          "Yarn Count Range: 20/2 to 80/2 Ne",
          "Twist Level: 15-20 TPI",
          "Ply: 2-ply or 3-ply available",
          "Construction: Ring Spun / Compact"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High tensile strength, excellent abrasion resistance, low linting, and colorfastness. Perfect for high-speed industrial sewing machines.",
        specifications: [
          "Tensile Strength: 2500-3500 cN",
          "Elongation: 8-12%",
          "Abrasion Resistance: 3000+ cycles",
          "Color Fastness: Grade 4-5",
          "Lint Generation: Minimal",
          "Heat Resistance: Up to 180°C"
        ]
      }
    },
    {
      id: 2,
      name: "ORGANIC COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/oc.jpg',
      description: "Eco-friendly organic cotton thread certified by GOTS. Perfect for sustainable and organic garment manufacturing.",
      rawMaterial: {
        title: "Raw Material",
        content: "GOTS certified organic cotton grown without synthetic pesticides or fertilizers. Non-GMO seeds and sustainable farming practices.",
        specifications: [
          "Fiber Length: 30-35mm",
          "Certification: GOTS, OEKO-TEX",
          "Color: Natural Cream",
          "Biodegradable: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun construction with mercerization option. Available in both carded and combed variations.",
        specifications: [
          "Yarn Count Range: 20/2 to 60/2 Ne",
          "Twist Level: 16-18 TPI",
          "Ply: 2-ply standard",
          "Construction: Ring Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Skin-friendly, hypoallergenic, excellent breathability. Ideal for baby wear and sensitive skin applications.",
        specifications: [
          "Tensile Strength: 2000-2800 cN",
          "Elongation: 10-14%",
          "pH Value: 6.5-7.0",
          "OEKO-TEX Class: I",
          "Shrinkage: < 3%"
        ]
      }
    },
    {
      id: 3,
      name: "MERCERIZED COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/mc.jpg',
      description: "Superior mercerized cotton thread with enhanced luster and strength. Ideal for premium garment finishing.",
      rawMaterial: {
        title: "Raw Material",
        content: "High-grade long staple cotton treated with caustic soda mercerization process. Enhanced dye uptake and silk-like appearance.",
        specifications: [
          "Fiber Length: 40-45mm",
          "Mercerization: Yes",
          "Luster: High",
          "Dye Absorption: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Combed ring-spun construction with mercerization. Gassed for smooth surface and reduced lint.",
        specifications: [
          "Yarn Count Range: 40/2 to 100/2 Ne",
          "Twist Level: 18-22 TPI",
          "Ply: 2-ply / 3-ply",
          "Gassed: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High luster, excellent color vibrancy, enhanced strength, smooth surface, and reduced friction.",
        specifications: [
          "Tensile Strength: 3000-4000 cN",
          "Elongation: 7-10%",
          "Luster Grade: Very High",
          "Surface Friction: Low",
          "Color Retention: Excellent"
        ]
      }
    },
    {
      id: 4,
      name: "COMBED COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/cc.jpg',
      description: "Superior quality combed cotton thread with enhanced smoothness and strength for premium garment manufacturing.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Combed Premium Cotton. Short fibers removed for enhanced quality and consistency.",
        specifications: [
          "Fiber Length: 35-38mm",
          "Fiber Quality: Combed",
          "Color: Natural White",
          "Uniformity: High"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Combed ring-spun construction with double gassing for ultra-smooth finish.",
        specifications: [
          "Yarn Count Range: 30/2 to 70/2 Ne",
          "Twist Level: 16-18 TPI",
          "Ply: 2-ply / 3-ply",
          "Gassed: Double Gassed"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Ultra-smooth surface, high strength, excellent stitch formation, minimal linting.",
        specifications: [
          "Tensile Strength: 2800-3600 cN",
          "Elongation: 9-11%",
          "Surface: Very Smooth",
          "Lint Level: Very Low",
          "Sewability: Excellent"
        ]
      }
    },
    {
      id: 5,
      name: "CARDED COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/carded-cotton.jpg',
      description: "Economical yet high-quality carded cotton thread suitable for general sewing applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Carded Cotton fibers. Carding process removes major impurities while maintaining affordability.",
        specifications: [
          "Fiber Length: 28-32mm",
          "Fiber Quality: Carded",
          "Color: Natural",
          "Economical: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Carded ring-spun construction. Standard twist for general purpose applications.",
        specifications: [
          "Yarn Count Range: 20/2 to 50/2 Ne",
          "Twist Level: 14-16 TPI",
          "Ply: 2-ply",
          "Construction: Carded"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Good strength, economical pricing, suitable for general sewing applications.",
        specifications: [
          "Tensile Strength: 2000-2800 cN",
          "Elongation: 8-10%",
          "Abrasion: Good",
          "Cost: Economical",
          "Applications: General"
        ]
      }
    },
    {
      id: 6,
      name: "GASSED COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/gassed-cotton.jpg',
      description: "Super smooth gassed cotton thread with zero lint for high-speed industrial applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "Premium long-staple cotton with double gassing process. Removes all protruding fibers.",
        specifications: [
          "Fiber Length: 38-42mm",
          "Gassing: Double Gassed",
          "Lint Level: Zero",
          "Finish: Ultra Smooth"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Combed ring-spun with double gassing and mercerization for premium finish.",
        specifications: [
          "Yarn Count Range: 40/2 to 80/2 Ne",
          "Twist Level: 18-20 TPI",
          "Ply: 2-ply / 3-ply",
          "Gassed: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Zero lint, ultra-smooth surface, excellent for high-speed machines, premium finish.",
        specifications: [
          "Tensile Strength: 3200-4200 cN",
          "Elongation: 8-11%",
          "Lint: Zero",
          "Speed Compatibility: High",
          "Finish: Premium"
        ]
      }
    },
    {
      id: 7,
      name: "SOFT COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/sc.jpg',
      description: "Ultra-soft cotton thread for delicate fabrics and premium garments requiring gentle handling.",
      rawMaterial: {
        title: "Raw Material",
        content: "Extra-long staple cotton with special softening treatment. Enhanced fiber softness.",
        specifications: [
          "Fiber Length: 36-40mm",
          "Softness: Enhanced",
          "Fiber Type: ELS Cotton",
          "Treatment: Special Soft"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Compact spinning with special softening technology for luxurious feel.",
        specifications: [
          "Yarn Count Range: 30/2 to 60/2 Ne",
          "Twist Level: 14-15 TPI",
          "Ply: 2-ply",
          "Technology: Compact"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Ultra-soft feel, gentle on fabrics, minimal friction, excellent drape quality.",
        specifications: [
          "Tensile Strength: 2200-3000 cN",
          "Elongation: 10-13%",
          "Softness Grade: Excellent",
          "Fabric Friendly: Yes",
          "Drape Quality: Superior"
        ]
      }
    },
    {
      id: 8,
      name: "EGYPTIAN COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/egyptian-cotton.jpg',
      description: "Luxury Egyptian cotton thread with exceptional strength and silky texture for high-end garments.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Giza Egyptian Cotton. World's finest cotton with extra-long staple length.",
        specifications: [
          "Fiber Length: 45-50mm",
          "Origin: Egypt-Giza",
          "Quality: Extra Long Staple",
          "Luster: Natural High"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Premium compact spinning with mercerization for silk-like appearance.",
        specifications: [
          "Yarn Count Range: 50/2 to 100/2 Ne",
          "Twist Level: 18-22 TPI",
          "Ply: 2-ply / 3-ply",
          "Construction: Compact"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Exceptional strength, silk-like luster, luxurious feel, premium quality.",
        specifications: [
          "Tensile Strength: 3500-4500 cN",
          "Elongation: 7-9%",
          "Luster: Very High",
          "Quality: Luxury",
          "Applications: Premium Garments"
        ]
      }
    },
    {
      id: 9,
      name: "PIMA COTTON THREAD",
      category: "COTTON SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/pima-cotton.jpg',
      description: "Premium Pima cotton thread known for exceptional strength and softness. Ideal for luxury apparel.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% American Pima Cotton. Premium extra-long staple cotton from USA.",
        specifications: [
          "Fiber Length: 42-48mm",
          "Origin: USA-Pima",
          "Quality: Extra Long Staple",
          "Tenacity: High"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Advanced compact spinning with mercerization for enhanced performance.",
        specifications: [
          "Yarn Count Range: 40/2 to 80/2 Ne",
          "Twist Level: 16-20 TPI",
          "Ply: 2-ply / 3-ply",
          "Construction: Compact Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High strength, excellent softness, superior color retention, premium quality finish.",
        specifications: [
          "Tensile Strength: 3300-4300 cN",
          "Elongation: 8-10%",
          "Softness: Excellent",
          "Color Retention: Superior",
          "Quality: Premium"
        ]
      }
    }
  ];

  // Find matching product from passed data or use default
  const getInitialProduct = () => {
    if (passedProduct && passedProduct.name) {
      const matchedProduct = productsData.find(
        p => p.name.toLowerCase() === passedProduct.name.toLowerCase()
      );
      if (matchedProduct) {
        return matchedProduct;
      }
      return productsData[0];
    }
    return productsData[0];
  };

  const [selectedProduct, setSelectedProduct] = useState(getInitialProduct());
  const [activeTab, setActiveTab] = useState('raw');

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
      '.ct-hero-section, .ct-info-card, .ct-raw-card, .ct-construction-card, .ct-properties-card, .ct-specs-table'
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

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setActiveTab('raw');
    const detailSection = document.querySelector('.ct-detail-section');
    if (detailSection) {
      window.scrollTo({ top: detailSection.offsetTop - 100, behavior: 'smooth' });
    }
  };

  // Function to open Gmail with pre-filled email
  const handleRequestSample = () => {
    const companyEmail = "sales@etafilbd.com";
    const productName = selectedProduct.name;
    const productCategory = selectedProduct.category;
    
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const subject = `Sample Request: ${productName} - ${productCategory}`;
    
    const body = `Dear Etafil (Bangladesh) Ltd. Team,

I would like to request a sample of the following product for evaluation:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product Name: ${productName}
Category: ${productCategory}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intended Use: [Please specify your application]
Expected Monthly Quantity: [Please specify quantity]
Required Specifications: [Any special requirements]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: [Your Company Name]
Contact Person: [Your Name]
Designation: [Your Position]
Phone Number: [Your Phone Number]
Shipping Address: [Complete address for sample delivery]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Please add any additional requirements or questions here]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request Date: ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your prompt attention to this request. I look forward to your positive response.

Best regards,
[Your Name]
[Your Signature]`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  // Safe render helper
  const renderSpecifications = (specifications) => {
    if (!specifications || !Array.isArray(specifications)) {
      return <td><td colSpan="2">No specifications available</td></td>;
    }
    
    return specifications.map((spec, idx) => {
      const colonIndex = spec.indexOf(':');
      if (colonIndex !== -1) {
        return (
          <tr key={idx}>
            <td>{spec.substring(0, colonIndex)}</td>
            <td>{spec.substring(colonIndex + 1)}</td>
          </tr>
        );
      }
      return (
        <tr key={idx}>
          <td colSpan="2">{spec}</td>
        </tr>
      );
    });
  };

  // Ensure selectedProduct has required properties
  const safeProduct = {
    ...productsData[0],
    ...selectedProduct,
    rawMaterial: selectedProduct?.rawMaterial || productsData[0].rawMaterial,
    construction: selectedProduct?.construction || productsData[0].construction,
    properties: selectedProduct?.properties || productsData[0].properties
  };

  return (
    <Base>
      <div className="ct-page">
        {/* Hero Section with Background Image */}
        <section className="ct-hero-section">
          <div className="ct-hero-bg">
            <img 
              src={process.env.PUBLIC_URL + '/images/100.jpg'} 
              alt="Cotton Field"
              className="ct-hero-bg-image"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="ct-hero-overlay"></div>
          </div>
          <div className="ct-hero-content">
            <h1 className="ct-hero-title animate-text">Premium Cotton Sewing Threads</h1>
            <p className="ct-hero-subtitle animate-text-delay">
              100% Natural | Pure Comfort | Superior Quality
            </p>
            <div className="ct-hero-badges">
              <span className="ct-hero-badge">100% Cotton</span>
              <span className="ct-hero-badge">OEKO-TEX Certified</span>
              <span className="ct-hero-badge">GOTS Available</span>
              <span className="ct-hero-badge">Natural Fiber</span>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="ct-products-grid-section">
          <div className="ct-section-header">
            <h2 className="ct-section-title">Our Cotton Thread Collection</h2>
            <div className="ct-section-divider">
              <span className="ct-divider-line"></span>
              <span className="ct-divider-icon">🌾</span>
              <span className="ct-divider-line"></span>
            </div>
            <p className="ct-section-subtitle">Discover our premium range of 100% cotton sewing threads for every application</p>
          </div>

          <div className="ct-products-filter-grid">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`ct-product-filter-card ${safeProduct.id === product.id ? 'active' : ''}`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="ct-product-filter-image">
                  <img src={product.heroImage} alt={product.name} />
                  <div className="ct-product-filter-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="ct-product-filter-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="ct-detail-section">
          <div className="ct-detail-container">
            <div className="ct-detail-hero">
              <div className="ct-detail-image-wrapper">
                <img 
                  src={safeProduct.heroImage} 
                  alt={safeProduct.name}
                  className="ct-detail-image"
                />
                <div className="ct-detail-badge">
                  <span>100% Cotton</span>
                </div>
              </div>
              <div className="ct-detail-intro">
                <h2>{safeProduct.name}</h2>
                <p className="ct-detail-category">{safeProduct.category}</p>
                <p className="ct-detail-description">{safeProduct.description}</p>
              </div>
            </div>

            <div className="ct-tabs">
              <button 
                className={`ct-tab-btn ${activeTab === 'raw' ? 'active' : ''}`}
                onClick={() => setActiveTab('raw')}
              >
                <i className="fas fa-leaf"></i> Raw Material
              </button>
              <button 
                className={`ct-tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
                onClick={() => setActiveTab('construction')}
              >
                <i className="fas fa-industry"></i> Construction Type
              </button>
              <button 
                className={`ct-tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
                onClick={() => setActiveTab('properties')}
              >
                <i className="fas fa-chart-line"></i> Product Properties
              </button>
            </div>

            <div className="ct-tab-content">
              {activeTab === 'raw' && (
                <div className="ct-info-card ct-raw-card">
                  <div className="ct-info-card-icon">
                    <span>🌾</span>
                  </div>
                  <h3>{safeProduct.rawMaterial?.title || "Raw Material"}</h3>
                  <p className="ct-info-description">{safeProduct.rawMaterial?.content || "Premium quality raw materials"}</p>
                  <div className="ct-specs-table">
                    <h4>Technical Specifications</h4>
                    <table>
                      <tbody>
                        {renderSpecifications(safeProduct.rawMaterial?.specifications)}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'construction' && (
                <div className="ct-info-card ct-construction-card">
                  <div className="ct-info-card-icon">
                    <span>🏭</span>
                  </div>
                  <h3>{safeProduct.construction?.title || "Construction Type"}</h3>
                  <p className="ct-info-description">{safeProduct.construction?.content || "Advanced construction process"}</p>
                  <div className="ct-specs-table">
                    <h4>Construction Specifications</h4>
                    <table>
                      <tbody>
                        {renderSpecifications(safeProduct.construction?.specifications)}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'properties' && (
                <div className="ct-info-card ct-properties-card">
                  <div className="ct-info-card-icon">
                    <span>⚡</span>
                  </div>
                  <h3>{safeProduct.properties?.title || "Product Properties"}</h3>
                  <p className="ct-info-description">{safeProduct.properties?.content || "High quality properties"}</p>
                  <div className="ct-specs-table">
                    <h4>Performance Properties</h4>
                    <table>
                      <tbody>
                        {renderSpecifications(safeProduct.properties?.specifications)}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="ct-cta-section">
              <button className="ct-cta-btn primary" onClick={handleRequestSample}>
                Request a Sample <span>→</span>
              </button>
              <button className="ct-cta-btn secondary" onClick={() => window.print()}>
                Download Technical Datasheet <span>↓</span>
              </button>
            </div>
          </div>
        </section>

        {/* Application Section - Cotton Specific */}
        <section className="ct-application-section">
          <div className="ct-section-header">
            <h2 className="ct-section-title">Cotton Thread Applications</h2>
            <div className="ct-section-divider">
              <span className="ct-divider-line"></span>
              <span className="ct-divider-icon">🌾</span>
              <span className="ct-divider-line"></span>
            </div>
          </div>
          <div className="ct-applications-grid">
            <div className="ct-application-card">
              <div className="ct-app-icon">👕</div>
              <h3>Cotton Garments</h3>
              <p>T-shirts, Shirts, Underwear</p>
            </div>
            <div className="ct-application-card">
              <div className="ct-app-icon">👗</div>
              <h3>Fashion Apparel</h3>
              <p>Dresses, Blouses, Skirts</p>
            </div>
            <div className="ct-application-card">
              <div className="ct-app-icon">🛋️</div>
              <h3>Home Textiles</h3>
              <p>Bedding, Towels, Curtains</p>
            </div>
            <div className="ct-application-card">
              <div className="ct-app-icon">👶</div>
              <h3>Baby Products</h3>
              <p>Baby Wear, Soft Toys</p>
            </div>
            <div className="ct-application-card">
              <div className="ct-app-icon">🩺</div>
              <h3>Medical Textiles</h3>
              <p>Surgical Garments, Masks</p>
            </div>
            <div className="ct-application-card">
              <div className="ct-app-icon">🧵</div>
              <h3>Quilting & Craft</h3>
              <p>Quilts, Embroidery, Crafts</p>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Cotton;
