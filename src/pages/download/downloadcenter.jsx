import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './downloadcenter.css';

const DownloadCenter = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = (type) => {
    setLoading(true);
    // এখানে আপনার PDF ডাউনলোড লজিক থাকবে
    console.log(`Downloading ${type}...`);
    setTimeout(() => {
      setLoading(false);
      alert(`${type} download started!`);
    }, 1000);
  };

  return (
    <div className="download-center">
      <div className="download-header">
        <h1>Download Center</h1>
        <p>Access our product catalogs, technical documents, and company resources</p>
      </div>

      <div className="download-grid">
        {/* Catalog PDF Card */}
        <div className="download-card">
          <div className="card-icon catalog-icon">
            <i className="fas fa-file-pdf"></i>
          </div>
          <h3>Product Catalog</h3>
          <p>Complete product catalog with all thread specifications and applications</p>
          <button 
            onClick={() => handleDownload('catalog')} 
            className="download-btn catalog-btn"
            disabled={loading}
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>

        {/* Shade Card Card */}
        <div className="download-card">
          <div className="card-icon shade-icon">
            <i className="fas fa-palette"></i>
          </div>
          <h3>Shade Card</h3>
          <p>Complete color reference guide with all available thread shades</p>
          <button 
            onClick={() => handleDownload('shade-card')} 
            className="download-btn shade-btn"
            disabled={loading}
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>

        {/* Technical Datasheet Card */}
        <div className="download-card">
          <div className="card-icon tech-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Technical Datasheet</h3>
          <p>Detailed technical specifications, test results, and performance data</p>
          <button 
            onClick={() => handleDownload('technical-datasheet')} 
            className="download-btn tech-btn"
            disabled={loading}
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>

        {/* Company Profile Card */}
        <div className="download-card">
          <div className="card-icon profile-icon">
            <i className="fas fa-building"></i>
          </div>
          <h3>Company Profile</h3>
          <p>Complete company overview, history, facilities, and capabilities</p>
          <button 
            onClick={() => handleDownload('company-profile')} 
            className="download-btn profile-btn"
            disabled={loading}
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>
      </div>

      {/* Request Custom Quote Section */}
      <div className="custom-quote-section">
        <h3>Need a Custom Catalog?</h3>
        <p>Contact us for custom catalogs tailored to your specific requirements</p>
        <Link to="/contact" className="quote-btn">
          <i className="fas fa-envelope"></i> Request Custom Quote
        </Link>
      </div>
    </div>
  );
};

export default DownloadCenter;