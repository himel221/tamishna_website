import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Base from '../base.jsx';
import './filament.css';

const Filament = () => {
  const location = useLocation();
  const passedProduct = location.state?.selectedProduct;

  // Filament & Specialty Threads Products Data with detailed specifications
  const productsData = [
    {
      id: 1,
      name: "FLAME RETARDANT THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/fr.jpg',
      description: "Specialty flame-retardant thread for protective clothing and safety applications. Self-extinguishing properties.",
      rawMaterial: {
        title: "Raw Material",
        content: "FR-treated polyester or aramid blend. Inherent flame-retardant properties without chemical coating.",
        specifications: [
          "Material: FR Polyester / Aramid",
          "FR Rating: UL 94 V-0",
          "LOI Value: >28%",
          "Certification: NFPA 701",
          "Self-extinguishing: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Core-spun or multi-filament construction with FR treatment integrated into fiber.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Twist Level: 14-16 TPI",
          "Ply: 2-ply / 3-ply",
          "Construction: Core Spun",
          "Treatment: Integrated FR"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Self-extinguishing, no afterglow, maintains FR properties after washing, high heat resistance.",
        specifications: [
          "Tensile Strength: 2500-3500 cN",
          "LOI Value: 28-32%",
          "Heat Resistance: Up to 260°C",
          "Wash Cycles: 50+",
          "Color Availability: Limited",
          "Applications: Protective Wear"
        ]
      }
    },
    {
      id: 2,
      name: "UV RESISTANT THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/uv.jpg',
      description: "UV-stabilized thread for outdoor and marine applications with excellent weather resistance.",
      rawMaterial: {
        title: "Raw Material",
        content: "UV-stabilized polyester with anti-UV additives. Special formulation for extended outdoor life.",
        specifications: [
          "Material: UV Stabilized Polyester",
          "UV Protection: UPF 50+",
          "Color: Various",
          "Weather Resistance: Excellent",
          "Anti-UV Additives: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Special UV-protected multi-filament construction with dual-layer protection.",
        specifications: [
          "Denier Range: 150D/2 to 600D/3",
          "Twist Level: 10-14 TPI",
          "Ply: 2-ply / 3-ply",
          "Coating: UV Protective",
          "Construction: Multi-filament"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Excellent UV resistance, colorfast, long outdoor life, maintains strength after sun exposure.",
        specifications: [
          "Tensile Strength: 3500-4500 cN",
          "UV Resistance: 500+ hours",
          "Color Fastness: Grade 4-5",
          "Outdoor Life: 5+ years",
          "Salt Water Resistant: Yes",
          "Applications: Outdoor Gear"
        ]
      }
    },
    {
      id: 3,
      name: "ANTISTATIC THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/an.jpg',
      description: "Antistatic thread for electronic and cleanroom applications prevents static discharge.",
      rawMaterial: {
        title: "Raw Material",
        content: "Carbon-infused or conductive fiber blend. Engineered for static dissipative properties.",
        specifications: [
          "Material: Carbon-infused Polyester",
          "Surface Resistance: 10^6-10^9 Ω",
          "Carbon Content: 3-5%",
          "Cleanroom Compatible: Yes",
          "Conductive: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Core-sheath with conductive carbon core. Specialized construction for consistent conductivity.",
        specifications: [
          "Yarn Count: 30/2 to 50/2 Ne",
          "Twist Level: 16-18 TPI",
          "Construction: Core-spun",
          "Conductive Core: Carbon",
          "Sheath: Polyester"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Static dissipative, prevents spark discharge, cleanroom safe, consistent conductivity.",
        specifications: [
          "Static Decay: < 0.5 seconds",
          "Charge Generation: Minimal",
          "Cleanroom Class: Class 100",
          "Washable: Yes",
          "ESD Safe: Yes",
          "Applications: Electronics"
        ]
      }
    },
    {
      id: 4,
      name: "WATER RESISTANT THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/wr.jpg',
      description: "Water-repellent thread for outdoor and marine gear keeps seams dry and protected.",
      rawMaterial: {
        title: "Raw Material",
        content: "Water-resistant treated polyester with hydrophobic properties.",
        specifications: [
          "Material: Hydrophobic Polyester",
          "Water Repellency: Grade 100",
          "Treatment: C6 Fluorocarbon",
          "Eco-friendly: Yes",
          "Hydrophobic: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Special water-repellent coating application. Dual-layer protection for maximum water resistance.",
        specifications: [
          "Denier Range: 200D/2 to 800D/3",
          "Twist Level: 12-16 TPI",
          "Coating: Water-repellent",
          "Ply: 2-ply / 3-ply",
          "Construction: Multi-filament"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Hydrophobic, resists moisture wicking, quick drying, maintains strength when wet.",
        specifications: [
          "Water Absorption: < 1%",
          "Drying Time: Fast",
          "Wet Strength: 95% retention",
          "Marine Grade: Yes",
          "Mildew Resistant: Yes",
          "Applications: Marine Gear"
        ]
      }
    },
    {
      id: 5,
      name: "CONDUCTIVE THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/conductive.jpg',
      description: "Highly conductive thread for smart textiles and electronic applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "Silver-plated nylon or copper blend with high conductivity.",
        specifications: [
          "Material: Silver-plated Nylon",
          "Resistance: < 10 Ω/cm",
          "Conductivity: Very High",
          "Flexibility: Excellent",
          "Corrosion Resistant: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Multi-filament construction with continuous conductive path.",
        specifications: [
          "Denier Range: 150D/2 to 400D/2",
          "Twist Level: 8-12 TPI",
          "Ply: 2-ply",
          "Construction: Multi-filament",
          "Plating: Silver"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High conductivity, flexible, sewable, maintains conductivity after washing.",
        specifications: [
          "Conductivity: Excellent",
          "Resistance: 5-10 Ω/cm",
          "Washable: Yes (Limited)",
          "Flexibility: High",
          "Applications: Smart Textiles",
          "EMI Shielding: Yes"
        ]
      }
    },
    {
      id: 6,
      name: "KEVLAR THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/kevlar.jpg',
      description: "Ultra-high strength Kevlar thread for ballistic and cut-resistant applications.",
      rawMaterial: {
        title: "Raw Material",
        content: "Para-aramid (Kevlar) fibers with exceptional tensile strength.",
        specifications: [
          "Material: Kevlar / Aramid",
          "Tenacity: 22-25 g/den",
          "Heat Resistance: Up to 450°C",
          "Cut Resistant: Excellent",
          "Ballistic Rating: Level IIIA"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Multi-filament twisted construction for maximum strength.",
        specifications: [
          "Denier Range: 200D/2 to 1000D/3",
          "Twist Level: 6-10 TPI",
          "Ply: 2-ply / 3-ply",
          "Construction: Multi-filament",
          "Color: Yellow/Natural"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Ultra-high strength, cut resistant, heat resistant, flame resistant.",
        specifications: [
          "Tensile Strength: 15000-25000 cN",
          "Elongation: 2.5-4%",
          "Cut Resistance: Level 5",
          "Heat Resistance: 450°C",
          "Applications: Ballistic Gear",
          "UV Sensitivity: Moderate"
        ]
      }
    },
    {
      id: 7,
      name: "NYLON MONOFILAMENT",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/nylon-mono.jpg',
      description: "Clear monofilament nylon thread invisible on fabrics for professional finishing.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% Nylon 6 or Nylon 6,6. Clear transparent polymer.",
        specifications: [
          "Material: Nylon Monofilament",
          "Diameter Range: 0.08-0.30mm",
          "Transparency: Clear",
          "UV Resistant: Yes",
          "Elasticity: Good"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Single continuous filament extrusion. No twist for maximum clarity.",
        specifications: [
          "Diameter: 0.08-0.30mm",
          "Construction: Monofilament",
          "Twist: Zero",
          "Finish: Smooth/Clear",
          "Profile: Round"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Invisible on fabrics, good strength, elastic, clear finish.",
        specifications: [
          "Tensile Strength: 800-2000 cN",
          "Elongation: 20-30%",
          "Visibility: Invisible",
          "Applications: Hemming, Quilting",
          "Needle Size: Small",
          "UV Resistance: Good"
        ]
      }
    },
    {
      id: 8,
      name: "PTFE THREAD",
      category: "FILAMENT & SPECIALTY THREADS",
      heroImage: process.env.PUBLIC_URL + '/images/ptfe.jpg',
      description: "PTFE (Teflon) thread with extremely low friction and high chemical resistance.",
      rawMaterial: {
        title: "Raw Material",
        content: "100% PTFE (Polytetrafluoroethylene). Extremely low coefficient of friction.",
        specifications: [
          "Material: PTFE",
          "Friction: Extremely Low",
          "Chemical Resistance: Excellent",
          "Temperature Range: -200°C to +260°C",
          "Non-stick: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Expanded PTFE multi-filament or monofilament construction.",
        specifications: [
          "Denier Range: 200D to 1200D",
          "Construction: Multi-filament",
          "Twist Level: 4-8 TPI",
          "Finish: Smooth/Teflon",
          "Ply: 2-ply"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Extremely low friction, chemical inert, wide temperature range, non-stick surface.",
        specifications: [
          "Tensile Strength: 2000-4000 cN",
          "Friction: Very Low",
          "Chemical Resistance: Excellent",
          "Temperature Range: -200 to +260°C",
          "Applications: Chemical Plants",
          "Non-stick: Yes"
        ]
      }
    },
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
      '.flt-details-page .flt-hero-section, .flt-details-page .flt-info-card, .flt-details-page .flt-raw-card, .flt-details-page .flt-construction-card, .flt-details-page .flt-properties-card, .flt-details-page .flt-specs-table'
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
    const detailSection = document.querySelector('.flt-detail-section');
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
      return <tr><td colSpan="2">No specifications available</td></tr>;
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
      <div className="flt-details-page">
        {/* Hero Section - Filament Specific with Image */}
        <section className="flt-hero-section">
          <div className="flt-hero-background">
            <div className="flt-hero-image-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/images/filament.jpg'} 
                alt="Filament & Specialty Threads" 
                className="flt-hero-background-image"

              />
            </div>
          </div>
          <div className="flt-hero-overlay"></div>
          <div className="flt-hero-content">
            <h1 className="flt-hero-title animate-text">Filament & Specialty Threads</h1>
            <p className="flt-hero-subtitle animate-text-delay">
              High Performance | Specialty Applications | Technical Excellence
            </p>
            <div className="flt-hero-badges">
              <span className="flt-hero-badge">Flame Retardant</span>
              <span className="flt-hero-badge">UV Resistant</span>
              <span className="flt-hero-badge">Antistatic</span>
              <span className="flt-hero-badge">Water Resistant</span>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="flt-products-section">
          <div className="flt-section-header">
            <h2 className="flt-section-title">Specialty Thread Collection</h2>
            <div className="flt-section-divider">
              <span className="flt-divider-line"></span>
              <span className="flt-divider-icon">⚡</span>
              <span className="flt-divider-line"></span>
            </div>
            <p className="flt-section-subtitle">High-performance threads for specialized industrial applications</p>
          </div>

          <div className="flt-products-grid">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`flt-product-card ${safeProduct.id === product.id ? 'active' : ''}`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="flt-product-image">
                  <img src={product.heroImage} alt={product.name} />
                  <div className="flt-product-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="flt-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="flt-detail-section">
          <div className="flt-detail-container">
            <div className="flt-detail-hero">
              <div className="flt-detail-image-wrapper">
                <img 
                  src={safeProduct.heroImage} 
                  alt={safeProduct.name}
                  className="flt-detail-image"
                />
                <div className="flt-detail-badge">
                  <span>Specialty Thread</span>
                </div>
              </div>
              <div className="flt-detail-intro">
                <h2>{safeProduct.name}</h2>
                <p className="flt-detail-category">{safeProduct.category}</p>
                <p className="flt-detail-description">{safeProduct.description}</p>
              </div>
            </div>

            <div className="flt-tabs">
              <button 
                className={`flt-tab-btn ${activeTab === 'raw' ? 'active' : ''}`}
                onClick={() => setActiveTab('raw')}
              >
                <i className="fas fa-microscope"></i> Raw Material
              </button>
              <button 
                className={`flt-tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
                onClick={() => setActiveTab('construction')}
              >
                <i className="fas fa-industry"></i> Construction Type
              </button>
              <button 
                className={`flt-tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
                onClick={() => setActiveTab('properties')}
              >
                <i className="fas fa-chart-line"></i> Product Properties
              </button>
            </div>

            <div className="flt-tab-content">
              {activeTab === 'raw' && (
                <div className="flt-info-card flt-raw-card">
                  <div className="flt-info-icon">
                    <span>🔬</span>
                  </div>
                  <h3>{safeProduct.rawMaterial?.title || "Raw Material"}</h3>
                  <p className="flt-info-description">{safeProduct.rawMaterial?.content || "Premium quality raw materials"}</p>
                  <div className="flt-specs-table">
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
                <div className="flt-info-card flt-construction-card">
                  <div className="flt-info-icon">
                    <span>⚙️</span>
                  </div>
                  <h3>{safeProduct.construction?.title || "Construction Type"}</h3>
                  <p className="flt-info-description">{safeProduct.construction?.content || "Advanced construction process"}</p>
                  <div className="flt-specs-table">
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
                <div className="flt-info-card flt-properties-card">
                  <div className="flt-info-icon">
                    <span>📊</span>
                  </div>
                  <h3>{safeProduct.properties?.title || "Product Properties"}</h3>
                  <p className="flt-info-description">{safeProduct.properties?.content || "High quality properties"}</p>
                  <div className="flt-specs-table">
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

            <div className="flt-cta-section">
              <button className="flt-cta-btn primary" onClick={handleRequestSample}>
                Request a Sample <span>→</span>
              </button>
              <button className="flt-cta-btn secondary" onClick={() => window.print()}>
                Download Technical Datasheet <span>↓</span>
              </button>
            </div>
          </div>
        </section>

        {/* Application Section - Filament Specific */}
        <section className="flt-application-section">
          <div className="flt-section-header">
            <h2 className="flt-section-title">Specialty Applications</h2>
            <div className="flt-section-divider">
              <span className="flt-divider-line"></span>
              <span className="flt-divider-icon">⚡</span>
              <span className="flt-divider-line"></span>
            </div>
          </div>
          <div className="flt-applications-grid">
            <div className="flt-app-card">
              <div className="flt-app-icon">🛡️</div>
              <h3>Protective Wear</h3>
              <p>Firefighter Gear, PPE, Safety Vests</p>
            </div>
            <div className="flt-app-card">
              <div className="flt-app-icon">🏕️</div>
              <h3>Outdoor Gear</h3>
              <p>Tents, Backpacks, Marine Covers</p>
            </div>
            <div className="flt-app-card">
              <div className="flt-app-icon">⚡</div>
              <h3>Electronics</h3>
              <p>Smart Textiles, ESD Garments</p>
            </div>
            <div className="flt-app-card">
              <div className="flt-app-icon">🛡️</div>
              <h3>Ballistic Protection</h3>
              <p>Body Armor, Cut-resistant Gloves</p>
            </div>
            <div className="flt-app-card">
              <div className="flt-app-icon">🏭</div>
              <h3>Industrial</h3>
              <p>Chemical Plants, High-temp Sealing</p>
            </div>
            <div className="flt-app-card">
              <div className="flt-app-icon">🚑</div>
              <h3>Medical</h3>
              <p>Surgical Sutures, Medical Textiles</p>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Filament;
