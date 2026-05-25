import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './base.css';

const Base = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(null);
  const [downloadError, setDownloadError] = useState(null);
  const basePath = process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '/'
    ? process.env.PUBLIC_URL
    : window.location.pathname.startsWith('/etafil')
      ? '/etafil'
      : '';
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== SCROLL TO TOP ON ROUTE CHANGE =====
  // Skip scroll-to-top if the page should scroll to a detail section instead
  useEffect(() => {
    const shouldSkipScroll = location.state?.selectedProduct?.scrollToDetail;
    if (shouldSkipScroll) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname, location.state]);

  // Handle hash navigation when page loads - Improved for Sustainability page
  useEffect(() => {
    // Check if there's a hash in the URL and we're on the sustainability page
    if (window.location.hash && location.pathname === '/sustainability') {
      const sectionId = window.location.hash.substring(1); // Remove the #
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500); // Increased delay for sustainability page content to load
      
      return () => clearTimeout(scrollTimer);
    }
  }, [location.pathname, location.hash]);

  const productCatalog = [
    { name: '100% Spun Polyester', category: 'POLYESTER SEWING THREADS', description: 'High-quality spun polyester threads for excellent seam strength and reliable performance across industrial sewing applications.', packaging: 'Cone, King Tube, Spool' },
    { name: 'Poly Poly Core Spun', category: 'POLYESTER SEWING THREADS', description: 'Core-spun threads with superior strength and premium finish. Ideal for high-stress seams and premium garments.', packaging: 'Cone, King Tube' },
    { name: 'Embroidery Thread', category: 'SPECIALTY THREADS', description: 'Premium decorative thread with high sheen and color stability for embroidery and embellishment work.', packaging: 'Spool, Cone' },
    { name: 'Texture Polyester', category: 'POLYESTER SEWING THREADS', description: 'Textured polyester with stretch and comfort for knitwear and activewear seams.', packaging: 'Cone, King Tube' },
    { name: 'Water Soluble Thread', category: 'SPECIALTY THREADS', description: 'Dissolvable temporary thread designed for basting, quilting and embroidery stabilisation.', packaging: 'Spool' },
    { name: 'Continuous Filament Thread', category: 'FILAMENT THREADS', description: 'Ultra-smooth filament thread engineered for zero lint and clean sewing operations.', packaging: 'Cone, King Spool' },
    { name: 'Continuous Filament Nylon', category: 'NYLON THREADS', description: 'High-tenacity nylon thread with excellent elasticity and abrasion resistance.', packaging: 'Cone, King Tube' },
    { name: 'RFD Cotton', category: 'COTTON SEWING THREADS', description: 'Ready-for-dyeing cotton thread with consistent dye uptake and premium finish.', packaging: 'Cone, Spool' },
    { name: 'Cotton Raw White', category: 'COTTON SEWING THREADS', description: 'Natural raw white cotton thread for eco-friendly and biodegradable applications.', packaging: 'Cone, Hanks' },
    { name: 'Textured Nylon', category: 'NYLON THREADS', description: 'Textured nylon for stretchable garments and activewear with excellent recovery.', packaging: 'Cone' },
    { name: 'Recycled Thread', category: 'SUSTAINABLE THREADS', description: 'Eco-friendly recycled polyester thread for sustainable manufacturing.', packaging: 'Cone, Eco Pack' }
  ];

  const shadeCardEntries = [
    { shade: 'Snow White', code: 'S001' },
    { shade: 'Cream', code: 'S010' },
    { shade: 'Sky Blue', code: 'S020' },
    { shade: 'Royal Blue', code: 'S030' },
    { shade: 'Emerald Green', code: 'S045' },
    { shade: 'Sunset Red', code: 'S060' },
    { shade: 'Charcoal', code: 'S075' },
    { shade: 'Black', code: 'S090' },
    { shade: 'Mustard', code: 'S105' },
    { shade: 'Soft Pink', code: 'S120' }
  ];

  const technicalDatasheet = [
    { product: '100% Spun Polyester', tensile: '2800-3800 cN', elongation: '15-20%', finish: 'Smooth, low lint' },
    { product: 'Poly Poly Core Spun', tensile: '3500-4500 cN', elongation: '12-16%', finish: 'High strength, premium feel' },
    { product: 'Embroidery Thread', tensile: '2000-2800 cN', elongation: '20-25%', finish: 'High sheen, low fuzz' },
    { product: 'Continuous Filament Thread', tensile: '4000-6000 cN', elongation: '18-25%', finish: 'Zero lint finish' },
    { product: 'Recycled Thread', tensile: '2500-3200 cN', elongation: '15-20%', finish: 'Eco-friendly, consistent quality' }
  ];

  const certifications = [
    { name: 'ISO 9001:2025', issuer: 'International Organization for Standardization', note: 'Quality Management System certification for manufacturing excellence.' },
    { name: 'OEKO-TEX Standard 100', issuer: 'OEKO-TEX Association', note: 'Certified for harmful substance-free textile products.' },
    { name: 'GOTS Certified', issuer: 'Global Organic Textile Standard', note: 'Certification for organic textile processing and manufacturing.' },
    { name: 'Sedex Certification', issuer: 'Sedex', note: 'Ethical supply chain management and social compliance.' },
    { name: 'WRAP Certification', issuer: 'Worldwide Responsible Accredited Production', note: 'Certified for socially responsible manufacturing practices.' }
  ];

  const companyProfile = {
    title: 'Etafil (Bangladesh) Ltd.',
    subtitle: 'Premium Sewing Thread Solutions',
    overview: 'Etafil (Bangladesh) Ltd. is a leading manufacturer of premium sewing threads, serving the global apparel industry with high-quality polyester, nylon, cotton and specialty threads.',
    mission: 'To deliver sustainable and high-performance thread solutions that exceed international quality standards while supporting social responsibility and environmental stewardship.',
    vision: 'To be the preferred global supplier for technical sewing threads through innovation, capacity, and reliable delivery.',
    highlights: [
      'State-of-the-art manufacturing facility in Bangladesh',
      '15-20 MT daily production capacity',
      'Second largest ETP plant in Bangladesh with 7300 m³ capacity',
      'ISO 9001:2025 certified quality management system',
      'Strong export presence across 50+ countries',
      'Focused on sustainable processes and worker empowerment'
    ]
  };

  const companyDetails = {
    established: '1994',
    headquarters: 'Dhaka, Bangladesh',
    website: 'www.etafilbd.com',
    email: 'info@etafilbd.com',
    phone: '+880 2 1234 5678',
    capacity: '15-20 MT daily',
    employees: '2000+ skilled workers',
    exports: '50+ countries',
    productLines: 'Polyester, cotton, nylon, filament and specialty sewing threads',
    sustainabilityFocus: 'Advanced ETP plant, sustainable dyeing and high social compliance standards'
  };

  const clients = [
    { name: 'BOYED GAMING', country: 'USA', industry: 'Gaming' },
    { name: 'Celio', country: 'France', industry: 'Fashion Retail' },
    { name: 'Target', country: 'USA', industry: 'Retail' },
    { name: 'H & M', country: 'Sweden', industry: 'Fashion Retail' },
    { name: 'Kiabi', country: 'France', industry: 'Fashion Retail' },
    { name: 'Pull & Bear', country: 'Spain', industry: 'Fashion Retail' },
    { name: 'Stradivarius', country: 'Spain', industry: 'Fashion Retail' },
    { name: 'Tom Tailor', country: 'Germany', industry: 'Fashion Retail' },
    { name: 'C & A', country: 'Germany', industry: 'Fashion Retail' },
    { name: 'Springfield', country: 'Spain', industry: 'Fashion Retail' }
  ];

  const createFileName = (type) => {
    const suffix = new Date().toISOString().slice(0, 10).replace(/-/g, '_');
    switch (type) {
      case 'catalog': return `Etafil_Product_Catalog_${suffix}.pdf`;
      case 'shade-card': return `Etafil_Shade_Card_${suffix}.pdf`;
      case 'technical-datasheet': return `Etafil_Technical_Datasheet_${suffix}.pdf`;
      case 'certifications': return `Etafil_Certifications_${suffix}.pdf`;
      case 'company-profile': return `Etafil_Company_Profile_${suffix}.pdf`;
      default: return `Etafil_Download_${suffix}.pdf`;
    }
  };

  const generatePdfDocument = (type) => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const margin = 18;
    const pageWidth = 210;
    const lineHeight = 7;
    const dateText = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor('#1B0088');
    doc.text('Etafil (Bangladesh) Ltd.', margin, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor('#334155');
    doc.text(`Generated on: ${dateText}`, margin, 32);
    doc.setTextColor('#475569');

    const renderSection = (title, text, currentY) => {
      doc.setFontSize(13);
      doc.setTextColor('#1B0088');
      doc.text(title, margin, currentY);
      currentY += lineHeight;
      doc.setFontSize(10);
      doc.setTextColor('#334155');
      const split = doc.splitTextToSize(text, pageWidth - margin * 2);
      doc.text(split, margin, currentY);
      return currentY + split.length * 5 + 4;
    };

    let currentY = 40;

    switch (type) {
      case 'catalog': {
        currentY = renderSection('Product Catalog', 'Complete product catalog with specifications, categories and packaging details for each thread line.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['#', 'Product', 'Category', 'Packaging', 'Description']],
          body: productCatalog.map((item, index) => [index + 1, item.name, item.category, item.packaging, item.description]),
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff', halign: 'center' },
          columnStyles: { 0: { halign: 'center', cellWidth: 10 }, 1: { cellWidth: 44 }, 2: { cellWidth: 40 }, 3: { cellWidth: 28 }, 4: { cellWidth: 68 } },
          theme: 'grid'
        });
        break;
      }
      case 'shade-card': {
        currentY = renderSection('Shade Card', 'A professional reference guide listing our most popular thread shades and color codes for accurate selection in production.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Shade', 'Code']],
          body: shadeCardEntries.map((item) => [item.shade, item.code]),
          styles: { fontSize: 10, cellPadding: 4 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'striped'
        });
        break;
      }
      case 'technical-datasheet': {
        currentY = renderSection('Technical Datasheet', 'Technical performance data for our key thread products, including tensile strength, elongation, and surface finish.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Product', 'Tensile Strength', 'Elongation', 'Surface Finish']],
          body: technicalDatasheet.map((item) => [item.product, item.tensile, item.elongation, item.finish]),
          styles: { fontSize: 10, cellPadding: 4 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'striped'
        });
        break;
      }
      case 'certifications': {
        currentY = renderSection('Certifications & Compliance', 'Our recognised certifications and ethical standards that demonstrate quality, sustainability, and responsible manufacturing.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Certification', 'Issued By', 'Notes']],
          body: certifications.map((item) => [item.name, item.issuer, item.note]),
          styles: { fontSize: 10, cellPadding: 4 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'striped'
        });
        break;
      }
      case 'company-profile': {
        currentY = renderSection(companyProfile.title, companyProfile.overview, currentY);
        currentY = renderSection('Mission', companyProfile.mission, currentY);
        currentY = renderSection('Vision', companyProfile.vision, currentY);

        doc.setFontSize(13);
        doc.setTextColor('#1B0088');
        doc.text('Company Details', margin, currentY);
        currentY += lineHeight;
        doc.setFontSize(10);
        doc.setTextColor('#334155');
        const detailLines = [
          `Established: ${companyDetails.established}`,
          `Headquarters: ${companyDetails.headquarters}`,
          `Website: ${companyDetails.website}`,
          `Email: ${companyDetails.email}`,
          `Phone: ${companyDetails.phone}`,
          `Production Capacity: ${companyDetails.capacity}`,
          `Workforce: ${companyDetails.employees}`,
          `Export Reach: ${companyDetails.exports}`,
          `Core Products: ${companyDetails.productLines}`
        ];
        detailLines.forEach((line) => {
          const splitLine = doc.splitTextToSize(line, pageWidth - margin * 2);
          doc.text(splitLine, margin, currentY);
          currentY += splitLine.length * 5 + 2;
        });
        currentY += 2;

        currentY = renderSection('Product Portfolio', companyDetails.productLines, currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Product', 'Category', 'Packaging']],
          body: productCatalog.map((item) => [item.name, item.category, item.packaging]),
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'grid'
        });
        currentY = doc.previousAutoTable.finalY + 10;

        currentY = renderSection('Certifications', 'Recognized certifications and standards that support our quality, sustainability and compliance commitment.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Certification', 'Issuer', 'Year']],
          body: certifications.map((item) => [item.name, item.issuer, item.year || '']),
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'striped'
        });
        currentY = doc.previousAutoTable.finalY + 10;

        currentY = renderSection('Trusted Clients', 'Global apparel and retail brands trusted by Etafil (Bangladesh) Ltd.', currentY);
        doc.autoTable({
          startY: currentY,
          head: [['Client', 'Country', 'Industry']],
          body: clients.map((client) => [client.name, client.country, client.industry]),
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: '#1B0088', textColor: '#ffffff' },
          theme: 'striped'
        });
        currentY = doc.previousAutoTable.finalY + 10;

        doc.setFontSize(13);
        doc.setTextColor('#1B0088');
        doc.text('Highlights', margin, currentY);
        currentY += lineHeight;
        doc.setFontSize(10);
        doc.setTextColor('#334155');
        companyProfile.highlights.forEach((point) => {
          const splitPoint = doc.splitTextToSize(`• ${point}`, pageWidth - margin * 2);
          doc.text(splitPoint, margin, currentY);
          currentY += splitPoint.length * 5 + 2;
        });
        break;
      }
      default: {
        currentY = renderSection('Download Document', 'This document is generated from Etafil (Bangladesh) Ltd. website data and includes the requested professional information.', currentY);
      }
    }

    doc.setFontSize(9);
    doc.setTextColor('#64748b');
    doc.text('Etafil (Bangladesh) Ltd. | www.etafilbd.com', margin, 287);
    doc.save(createFileName(type));
  };

  const handleDownload = (type) => {
    if (downloadLoading) return;
    setDownloadError(null);
    setDownloadLoading(type);
    try {
      generatePdfDocument(type);
    } catch (error) {
      console.error('PDF generation error', error);
      setDownloadError('Unable to generate PDF at this time. Please try again.');
    } finally {
      setDownloadLoading(null);
    }
  };

  return (
    <>
      {/* Header Section - Sticky */}
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo-container">
          <div className="logo-wrapper">
            <img 
              src={process.env.PUBLIC_URL + '/images/ebl.jpg'}
              alt='Etafil Bangladesh Logo'
              className='company-logo'
            />
          </div>
        </Link>

        <div className='header-menu'>
          <Link to="/home">
            <ul className={isActive('/home') ? 'active' : ''}>Home</ul>
          </Link>
          
          {/* About Dropdown - Expanded */}
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/about">
              <ul className={isActive('/about') ? 'active' : ''}>About Us</ul>
            </Link>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu dropdown-menu-wide">
                <div className="dropdown-columns">
                  <div className="dropdown-column">
                    <Link to="/about#about-ebl-section" className="dropdown-item">About EBL</Link>
                    <Link to="/about#mission-vision" className="dropdown-item">Mission & Vision</Link>
                    <Link to="/about#objective" className="dropdown-item">Core Objective</Link>
                    <Link to="/about#facts-section" className="dropdown-item">Facts & Figures</Link>
                    <Link to="/about#products-category" className="dropdown-item">Products Category</Link>
                    <Link to="/about#production-capacity" className="dropdown-item">Production Capacity</Link>
                    <Link to="/about#thread-specification" className="dropdown-item">Thread Specification</Link>
                  </div>
                  <div className="dropdown-column">
                    <Link to="/about#quality-assurance" className="dropdown-item">Quality Assurance</Link>
                    <Link to="/about#industries-served" className="dropdown-item">Industries Served</Link>
                    <Link to="/about#certificates-section" className="dropdown-item">Certifications & Compliance</Link>
                    <Link to="/about#trusted-clients" className="dropdown-item">Our Trusted Buyers</Link>
                    <Link to="/about#board-section" className="dropdown-item">Board of Directors</Link>
                    <Link to="/about#code-conduct" className="dropdown-item">Code Of Conducts</Link>
                    <Link to="/contact" className="dropdown-item">Contact & Inquiry</Link>
                  </div>
                  <div className="dropdown-column">
                    {/* Download Center with its own submenu */}
                    <div 
                      className="dropdown-submenu-item"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setActiveDropdown('download-inner');
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation();
                        setActiveDropdown('about');
                      }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Products Dropdown */}
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">
              <ul className={isActive('/products') ? 'active' : ''}>Products</ul>
            </Link>
          </div>

          {/* Sustainability Menu Item with Dropdown - Link Style exactly like About */}
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('sustainability')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/sustainability">
              <ul className={isActive('/sustainability') ? 'active' : ''}>Sustainability</ul>
            </Link>
            {activeDropdown === 'sustainability' && (
              <div className="dropdown-menu">
                <Link 
                  to="/sustainability#environment-section"
                  className="dropdown-item"
                >
                  Environment
                </Link>
                <Link 
                  to="/sustainability#csr-section"
                  className="dropdown-item"
                >
                  CSR
                </Link>
              </div>
            )}
          </div>

          {/* Downloads Dropdown with PDF Generation */}
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('download')}
            onMouseLeave={handleMouseLeave}
          >
            <ul className={activeDropdown === 'download' ? 'active' : ''}>Downloads</ul>
            {activeDropdown === 'download' && (
              <div className="dropdown-menu">
                {downloadError && (
                  <div className="dropdown-error-message" style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: '#fee2e2',
                    color: '#b91c1c',
                    fontSize: '0.92rem',
                    margin: '0 12px 8px',
                    border: '1px solid #fca5a5'
                  }}>
                    {downloadError}
                  </div>
                )}
                <button
                  type="button"
                  className="dropdown-item-button"
                  onClick={() => handleDownload('catalog')}
                  disabled={!!downloadLoading}
                >
                  <i className="fas fa-file-pdf"></i> Product Catalog PDF
                </button>
                <button
                  type="button"
                  className="dropdown-item-button"
                  onClick={() => handleDownload('shade-card')}
                  disabled={!!downloadLoading}
                >
                  <i className="fas fa-palette"></i> Shade Card
                </button>
                <button
                  type="button"
                  className="dropdown-item-button"
                  onClick={() => handleDownload('technical-datasheet')}
                  disabled={!!downloadLoading}
                >
                  <i className="fas fa-chart-line"></i> Technical Datasheet
                </button>
                <button
                  type="button"
                  className="dropdown-item-button"
                  onClick={() => handleDownload('certifications')}
                  disabled={!!downloadLoading}
                >
                  <i className="fas fa-certificate"></i> Certifications
                </button>
                <button
                  type="button"
                  className="dropdown-item-button"
                  onClick={() => handleDownload('company-profile')}
                  disabled={!!downloadLoading}
                >
                  <i className="fas fa-building"></i> Company Profile PDF
                </button>
              </div>
            )}
          </div>

          <Link to="/contact">
            <ul className={isActive('/contact') ? 'active' : ''}>Contact Us</ul>
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="header-spacer"></div>

      <div className='content'>
        {children}
      </div>

      {/* Footer Section - with Social Links */}
      <footer className='footer'>
        <div className="footer-container">
          {/* Company Info Column */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={process.env.PUBLIC_URL + '/images/ebl.jpg'}
                alt='Etafil Bangladesh'
                className='footer-logo-img'
              />
            </div>
            <p className="company-description">
              Etafil (Bangladesh) Ltd. | Premium Sewing Thread Solutions — A specialized unit of a diversified industrial group.
            </p>
            
            {/* Follow Us Section - Professional Design */}
            <div className="follow-us-section">
              <h4 className="follow-us-title">Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com/etafilbd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/etafilbd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/etafilbd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/etafilbd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/etafilbd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/company/etafil-bangladesh-ltd">Etafil (Bangladesh) Ltd</Link></li>
              <li><Link to="/company/etafil-dyeing-accessories-ltd">Etafil Dyeing & Accessories Ltd</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter - Side by Side */}
          <div className="footer-section contact-newsletter-wrapper">
            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h4>Contact Us</h4>
              <div className="contact-info">
                {/* Address */}
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>House No. 65, Shah Maghdum Avenue Sector-12, Uttara, Dhaka-1230, Bangladesh.</span>
                </div>
                
                {/* Phone */}
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div className="contact-phone">
                    <span>(880-2) 55085783</span>
                    <span>55087270 – 76</span>
                  </div>
                </div>
                
                {/* Email */}
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-email">
                    <span>habib@etafil.com</span>
                    <span>showkat@etafil.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section - Right side */}
            <div className="newsletter-wrapper">
              <h4>Newsletter</h4>
              <div className="newsletter">
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>Copyright © {new Date().getFullYear()} Etafil (Bangladesh) Ltd. All rights reserved.</p>
            <div className="footer-bottom-links">
              Developed By<Link to="https://www.convincebd.com/"> Convince Computer Ltd.</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Base;