import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Base from '../base.jsx';
import './polyster.css';

const Polyester = () => {
  const location = useLocation();
  const passedProduct = location.state?.selectedProduct;

  // Polyester Products Data with detailed specifications
  const productsData = [
    {
      id: 1,
      name: "POLYESTER SPUN THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/SP.jpg',
      description: "High-strength polyester spun thread offering excellent durability and chemical resistance for industrial applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Virgin polyester staple fibers. High tenacity polymer with UV stabilization for extended life.",
        specifications: [
          "Fiber Type: Polyester Staple",
          "Denier: 1.2-1.5",
          "Tenacity: 5.5-6.5 g/den",
          "UV Stabilized: Yes",
          "Color Range: Full Spectrum"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun or open-end construction. Heat-set for reduced torque and twist liveliness.",
        specifications: [
          "Yarn Count Range: 20/2 to 50/2 Ne",
          "Twist Level: 14-16 TPI",
          "Heat Set: Yes",
          "Construction: Ring Spun",
          "Ply: 2-ply / 3-ply"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Excellent chemical resistance, high durability, good elasticity, and superior colorfastness.",
        specifications: [
          "Tensile Strength: 2800-3800 cN",
          "Elongation: 15-20%",
          "Chemical Resistance: Excellent",
          "UV Resistance: Good",
          "Melting Point: 250°C",
          "Abrasion: Very High"
        ]
      }
    },
    {
      id: 2,
      name: "POLYESTER FILAMENT THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/fp.jpg',
      description: "Continuous filament polyester thread with superior strength and smoothness for high-speed sewing.",
      rawMaterial: {
        title: "Raw Material",
        content: "High-tenacity continuous polyester filament. No fiber ends for lint-free performance.",
        specifications: [
          "Filament Type: Continuous",
          "Denier Range: 100-1000D",
          "Tenacity: 7.0-8.5 g/den",
          "Lint Level: Zero",
          "Uniformity: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Twisted multi-filament construction. Available in various deniers for different applications.",
        specifications: [
          "Denier Range: 100D/2 to 1000D/3",
          "Twist Level: 8-12 TPI",
          "Ply: 2-ply / 3-ply",
          "Lubrication: Silicone-free",
          "Finish: Smooth"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Zero lint, high seam strength, excellent chemical resistance, smooth surface finish.",
        specifications: [
          "Tensile Strength: 4000-6000 cN",
          "Elongation: 18-25%",
          "Abrasion Resistance: Excellent",
          "Chlorine Resistance: Good",
          "Surface: Smooth",
          "Lint: Zero"
        ]
      }
    },
    {
      id: 3,
      name: "HIGH TENACITY POLYESTER",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/ht.jpg',
      description: "Maximum strength polyester thread for heavy-duty applications requiring exceptional tensile strength.",
      rawMaterial: {
        title: "Raw Material",
        content: "High-tenacity polyester yarn with advanced polymer technology for superior breaking strength.",
        specifications: [
          "Material: High Tenacity Polyester",
          "Tenacity: 8.0-9.5 g/den",
          "Breaking Strength: Very High",
          "Shrinkage: < 2%",
          "Heat Resistance: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Special high-twist construction with heat setting for maximum durability.",
        specifications: [
          "Yarn Count: 30/2 to 40/3 Ne",
          "Twist Level: 18-22 TPI",
          "Ply: 2-ply / 3-ply",
          "Heat Set: Yes",
          "Construction: High Twist"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Very high tensile strength, excellent abrasion resistance, minimal stretch under load.",
        specifications: [
          "Tensile Strength: 5000-7000 cN",
          "Elongation: 12-16%",
          "Abrasion: Superior",
          "Shock Load: Excellent",
          "UV Resistance: Good",
          "Applications: Heavy Duty"
        ]
      }
    },
    {
      id: 4,
      name: "TEXTURED POLYESTER THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/PT.jpg',
      description: "Textured polyester thread with excellent elasticity and soft feel for stretch fabrics.",
      rawMaterial: {
        title: "Raw Material",
        content: "Textured polyester yarn with natural stretch characteristics. Air-jet textured for bulk and softness.",
        specifications: [
          "Material: Textured Polyester",
          "Texture Type: Air-Jet",
          "Bulk: High",
          "Softness: Excellent",
          "Stretch: Natural"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Air-textured or false-twist textured construction for maximum coverage and softness.",
        specifications: [
          "Denier Range: 150D/2 to 600D/2",
          "Twist Level: 6-10 TPI",
          "Construction: Air Textured",
          "Finish: Matt/Soft",
          "Coverage: Excellent"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Good elasticity, soft feel, excellent seam coverage, minimal seam pucker.",
        specifications: [
          "Tensile Strength: 3000-4500 cN",
          "Elongation: 25-35%",
          "Softness: Very Good",
          "Seam Coverage: Excellent",
          "Elastic Recovery: Good",
          "Applications: Stretch Fabrics"
        ]
      }
    },
    {
      id: 5,
      name: "BONDED POLYESTER THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/bonded-polyester.jpg',
      description: "Bonded polyester thread with special coating for superior abrasion resistance and UV protection.",
      rawMaterial: {
        title: "Raw Material",
        content: "High-tenacity polyester with special bonding coating. Enhanced surface protection.",
        specifications: [
          "Material: Bonded Polyester",
          "Coating: Polyurethane",
          "Abrasion: Very High",
          "UV Protection: Enhanced",
          "Chemical Resistance: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Multi-filament construction with special bonding application for durability.",
        specifications: [
          "Denier Range: 200D/3 to 1000D/3",
          "Twist Level: 10-14 TPI",
          "Coating: Bonded",
          "Ply: 3-ply",
          "Construction: Multi-filament"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Superior abrasion resistance, excellent UV protection, long outdoor life.",
        specifications: [
          "Tensile Strength: 4500-6500 cN",
          "Abrasion: Superior",
          "UV Life: 10+ years",
          "Chemical Resistance: Excellent",
          "Marine Grade: Yes",
          "Applications: Outdoor, Marine"
        ]
      }
    },
    {
      id: 6,
      name: "CORE SPUN POLYESTER",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/core-spun.jpg',
      description: "Core-spun polyester thread combining polyester core with cotton wrap for best of both worlds.",
      rawMaterial: {
        title: "Raw Material",
        content: "Polyester filament core with natural fiber wrap. Combines strength with sewability.",
        specifications: [
          "Core: Polyester Filament",
          "Wrap: Cotton/Polyester",
          "Core Ratio: 60-70%",
          "Strength: Very High",
          "Sewability: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Core-spun construction with polyester core and cotton/polyester sheath.",
        specifications: [
          "Yarn Count: 30/2 to 50/2 Ne",
          "Twist Level: 16-18 TPI",
          "Construction: Core Spun",
          "Core Percentage: 65%",
          "Balance: Optimized"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High strength with cotton-like sewability, reduced needle heat, excellent stitch formation.",
        specifications: [
          "Tensile Strength: 3500-4800 cN",
          "Elongation: 14-18%",
          "Needle Heat: Low",
          "Stitch Quality: Excellent",
          "Applications: High-speed sewing",
          "Sewability: Superior"
        ]
      }
    },
    {
      id: 7,
      name: "MICRO POLYESTER THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/micro-polyester.jpg',
      description: "Fine denier polyester thread for delicate fabrics and precision sewing applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "Micro-denier polyester fibers. Ultra-fine filaments for delicate applications.",
        specifications: [
          "Fiber Denier: 0.5-0.8",
          "Material: Micro Polyester",
          "Fineness: Very High",
          "Strength: Good",
          "Visibility: Low"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Multi-filament construction with low twist for maximum softness and low profile.",
        specifications: [
          "Denier Range: 70D/2 to 150D/2",
          "Twist Level: 6-8 TPI",
          "Ply: 2-ply",
          "Profile: Low",
          "Finish: Soft"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Low profile, excellent for fine fabrics, minimal needle penetration mark.",
        specifications: [
          "Tensile Strength: 1200-2000 cN",
          "Elongation: 20-25%",
          "Profile: Very Low",
          "Fabric Penetration: Minimal",
          "Applications: Fine Fabrics",
          "Visibility: Low"
        ]
      }
    },
    {
      id: 8,
      name: "HEAVY DUTY POLYESTER",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/heavy-duty.jpg',
      description: "Extra heavy duty polyester thread for industrial applications requiring maximum strength.",
      rawMaterial: {
        title: "Raw Material",
        content: "Extra heavy denier polyester with maximum tenacity for extreme applications.",
        specifications: [
          "Material: Heavy Duty Polyester",
          "Denier: 1000-3000D",
          "Tenacity: 7.5-8.5 g/den",
          "Abrasion: Superior",
          "Strength: Maximum"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "High twist multi-filament construction for extreme durability.",
        specifications: [
          "Denier Range: 1000D/3 to 3000D/3",
          "Twist Level: 10-12 TPI",
          "Ply: 3-ply / 4-ply",
          "Construction: Cable/Twisted",
          "Breaking Load: Very High"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Maximum strength, extreme durability, excellent for heavy materials.",
        specifications: [
          "Tensile Strength: 8000-12000 cN",
          "Elongation: 14-18%",
          "Abrasion: Superior",
          "Applications: Upholstery, Leather, Canvas",
          "Needle Size: Large",
          "Seam Strength: Maximum"
        ]
      }
    },
    {
      id: 9,
      name: "RECYCLED POLYESTER THREAD",
      category: "POLYESTER SEWING THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/recycled-polyester.jpg',
      description: "Eco-friendly recycled polyester thread made from post-consumer PET bottles. Sustainable and strong.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Recycled polyester from post-consumer PET bottles. GRS certified sustainable material.",
        specifications: [
          "Material: Recycled Polyester",
          "Source: PET Bottles",
          "Certification: GRS",
          "Carbon Footprint: Reduced",
          "Quality: Virgin Equivalent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun or filament construction using recycled raw material.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Denier Range: 150D/2 to 600D/2",
          "Twist Level: 12-16 TPI",
          "Ply: 2-ply / 3-ply",
          "Eco-Friendly: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Same performance as virgin polyester, eco-friendly, sustainable, GRS certified.",
        specifications: [
          "Tensile Strength: 3500-5000 cN",
          "Elongation: 16-22%",
          "Eco-Friendly: Yes",
          "GRS Certified: Yes",
          "Performance: Equivalent to Virgin",
          "Applications: Sustainable Fashion"
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
      '.pes-details-page .pes-hero-section, .pes-details-page .pes-info-card, .pes-details-page .pes-raw-material-card, .pes-details-page .pes-construction-card, .pes-details-page .pes-properties-card, .pes-details-page .pes-specs-table'
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
    const detailSection = document.querySelector('.pes-detail-section');
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
      return <table><td colSpan="2">No specifications available</td></table>;
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
      <div className="pes-details-page">
        {/* Hero Section - Polyester Specific with Image */}
        <section className="pes-hero-section">
          <div className="pes-hero-background">
            <div className="pes-hero-image-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/images/poly.jpg'} 
                alt="Premium Polyester Sewing Threads" 
                className="pes-hero-background-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/1920x500/1B0088/FFFFFF?text=Polyester+Sewing+Threads';
                }}
              />
            </div>
          </div>
          <div className="pes-hero-overlay"></div>
          <div className="pes-hero-content">
            <div className="pes-hero-text-container">
              <h1 className="pes-hero-title animate-text">Premium Polyester Sewing Threads</h1>
              <p className="pes-hero-subtitle animate-text-delay">
                High Strength | Excellent Durability | Chemical Resistant
              </p>
              <div className="pes-hero-badges">
                <span className="pes-hero-badge">High Tenacity</span>
                <span className="pes-hero-badge">UV Resistant</span>
                <span className="pes-hero-badge">Chemical Resistant</span>
                <span className="pes-hero-badge">Colorfast</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="pes-products-grid-section">
          <div className="pes-section-header">
            <h2 className="pes-section-title">Our Polyester Thread Collection</h2>
            <div className="pes-section-divider">
              <span className="pes-divider-line"></span>
              <span className="pes-divider-icon">🧵</span>
              <span className="pes-divider-line"></span>
            </div>
            <p className="pes-section-subtitle">Discover our premium range of high-performance polyester sewing threads</p>
          </div>

          <div className="pes-products-filter-grid">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`pes-product-filter-card ${safeProduct.id === product.id ? 'active' : ''}`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="pes-product-filter-image">
                  <img src={product.heroImage} alt={product.name} />
                  <div className="pes-product-filter-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="pes-product-filter-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="pes-detail-section">
          <div className="pes-detail-container">
            <div className="pes-detail-hero">
              <div className="pes-detail-image-wrapper">
                <img 
                  src={safeProduct.heroImage} 
                  alt={safeProduct.name}
                  className="pes-detail-image"
                />
                <div className="pes-detail-badge">
                  <span>Premium Polyester</span>
                </div>
              </div>
              <div className="pes-detail-intro">
                <h2>{safeProduct.name}</h2>
                <p className="pes-detail-category">{safeProduct.category}</p>
                <p className="pes-detail-description">{safeProduct.description}</p>
              </div>
            </div>

            <div className="pes-tabs">
              <button 
                className={`pes-tab-btn ${activeTab === 'raw' ? 'active' : ''}`}
                onClick={() => setActiveTab('raw')}
              >
                <i className="fas fa-microchip"></i> Raw Material
              </button>
              <button 
                className={`pes-tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
                onClick={() => setActiveTab('construction')}
              >
                <i className="fas fa-cogs"></i> Construction Type
              </button>
              <button 
                className={`pes-tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
                onClick={() => setActiveTab('properties')}
              >
                <i className="fas fa-chart-line"></i> Product Properties
              </button>
            </div>

            <div className="pes-tab-content">
              {activeTab === 'raw' && (
                <div className="pes-info-card pes-raw-material-card">
                  <div className="pes-info-card-icon">
                    <span>🔬</span>
                  </div>
                  <h3>{safeProduct.rawMaterial?.title || "Raw Material"}</h3>
                  <p className="pes-info-description">{safeProduct.rawMaterial?.content || "Premium quality raw materials"}</p>
                  <div className="pes-specs-table">
                    <h4>Material Specifications</h4>
                    <table>
                      <tbody>
                        {renderSpecifications(safeProduct.rawMaterial?.specifications)}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'construction' && (
                <div className="pes-info-card pes-construction-card">
                  <div className="pes-info-card-icon">
                    <span>⚙️</span>
                  </div>
                  <h3>{safeProduct.construction?.title || "Construction Type"}</h3>
                  <p className="pes-info-description">{safeProduct.construction?.content || "Advanced construction process"}</p>
                  <div className="pes-specs-table">
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
                <div className="pes-info-card pes-properties-card">
                  <div className="pes-info-card-icon">
                    <span>📊</span>
                  </div>
                  <h3>{safeProduct.properties?.title || "Product Properties"}</h3>
                  <p className="pes-info-description">{safeProduct.properties?.content || "High quality properties"}</p>
                  <div className="pes-specs-table">
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

            <div className="pes-cta-section">
              <button className="pes-cta-btn primary" onClick={handleRequestSample}>
                Request a Sample <span>→</span>
              </button>
              <button className="pes-cta-btn secondary" onClick={() => window.print()}>
                Download Technical Datasheet <span>↓</span>
              </button>
            </div>
          </div>
        </section>

        {/* Application Section - Polyester Specific */}
        <section className="pes-application-section">
          <div className="pes-section-header">
            <h2 className="pes-section-title">Polyester Thread Applications</h2>
            <div className="pes-section-divider">
              <span className="pes-divider-line"></span>
              <span className="pes-divider-icon">🧵</span>
              <span className="pes-divider-line"></span>
            </div>
          </div>
          <div className="pes-applications-grid">
            <div className="pes-application-card">
              <div className="pes-app-icon">👕</div>
              <h3>Sports Wear</h3>
              <p>Activewear, Jerseys, Sportswear</p>
            </div>
            <div className="pes-application-card">
              <div className="pes-app-icon">🧥</div>
              <h3>Outdoor Gear</h3>
              <p>Jackets, Tents, Backpacks</p>
            </div>
            <div className="pes-application-card">
              <div className="pes-app-icon">🛋️</div>
              <h3>Upholstery</h3>
              <p>Furniture, Automotive Seats</p>
            </div>
            <div className="pes-application-card">
              <div className="pes-app-icon">👟</div>
              <h3>Footwear</h3>
              <p>Sports Shoes, Leather Goods</p>
            </div>
            <div className="pes-application-card">
              <div className="pes-app-icon">🛡️</div>
              <h3>Protective Gear</h3>
              <p>Safety Harnesses, Workwear</p>
            </div>
            <div className="pes-application-card">
              <div className="pes-app-icon">🚗</div>
              <h3>Automotive</h3>
              <p>Seat Belts, Airbags, Interiors</p>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Polyester;
