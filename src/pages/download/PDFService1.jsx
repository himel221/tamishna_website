import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PDFService from '../services/pdfService';
import './DownloadCenter.css';

const DownloadCenter = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [downloadStatus, setDownloadStatus] = useState(null);

  // Company Information
  const companyInfo = {
    name: 'Etafil (Bangladesh) Ltd',
    logo: process.env.PUBLIC_URL + '/images/ebl.jpg',
    tagline: 'Premium Sewing Thread Solutions',
    address: 'House No. 65, Shah Maghdum Avenue Sector-12, Uttara, Dhaka-1230, Bangladesh',
    phone: '(880-2) 55085783, 55087270 – 76',
    email: 'info@etafilbd.com, info@tamishna.com',
    website: 'www.etafilbd.com',
    established: '2005',
    employees: '500+',
    productionCapacity: '50,000+ kg/month',
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'OEKO-TEX Standard 100']
  };

  // Product Data
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productData = [
      {
        id: 1,
        name: 'Cotton Sewing Threads',
        description: '100% premium Egyptian cotton threads for high-quality garments',
        specifications: 'Count: 20/2, 30/2, 40/2, 50/3, 60/3, 80/3\nStrength: High tensile strength\nColor: All standard shades available',
        applications: 'Shirts, T-shirts, Denim, Casual wear, Formal wear'
      },
      {
        id: 2,
        name: 'Polyester Sewing Threads',
        description: 'High-strength polyester threads for superior durability',
        specifications: 'Denier: 150D to 1200D\nType: Spun, Filament, Core-spun\nColor: All shades available',
        applications: 'Sportswear, Uniforms, Industrial garments, Jeans'
      },
      {
        id: 3,
        name: 'Filament Threads',
        description: 'Smooth and strong filament threads for premium finish',
        specifications: 'Material: Nylon 6, Nylon 66, Polyester\nDenier: 70D to 2000D',
        applications: 'Embroidery, Decorative stitching, Shoe manufacturing'
      },
      {
        id: 4,
        name: 'Fire Retardant Threads',
        description: 'Specialized threads with fire-resistant properties',
        specifications: 'Material: Meta-aramid, Para-aramid\nTemperature rating: Up to 400°C',
        applications: 'Protective clothing, Firefighter gear, Military uniforms'
      },
      {
        id: 5,
        name: 'UV Resistant Threads',
        description: 'Threads with high UV resistance for outdoor applications',
        specifications: 'Material: Polyester with UV stabilizers\nUV resistance: 500+ hours',
        applications: 'Outdoor furniture, Awnings, Marine products'
      }
    ];
    setProducts(productData);
  };

  // শুধু মাত্র টাইপ চেক করে সরাসরি ডাউনলোড
  useEffect(() => {
    if (type) {
      handleDirectDownload(type);
    }
  }, [type]);

  const handleDirectDownload = async (downloadType) => {
    setLoading(true);
    setDownloadStatus('generating');
    
    try {
      switch(downloadType) {
        case 'catalog':
          await PDFService.generateProductCatalog(products, companyInfo);
          break;
        case 'shade-card':
          const colors = [
            { name: 'White', code: '#FFFFFF', number: '001' },
            { name: 'Black', code: '#000000', number: '002' },
            { name: 'Red', code: '#FF0000', number: '003' },
            { name: 'Blue', code: '#0000FF', number: '004' },
            { name: 'Green', code: '#00FF00', number: '005' },
            { name: 'Yellow', code: '#FFFF00', number: '006' },
            { name: 'Orange', code: '#FFA500', number: '007' },
            { name: 'Purple', code: '#800080', number: '008' },
            { name: 'Pink', code: '#FFC0CB', number: '009' },
            { name: 'Brown', code: '#8B4513', number: '010' }
          ];
          await PDFService.generateShadeCard(colors, 'Etafil Sewing Threads');
          break;
        case 'technical-datasheet':
          const technicalData = {
            productName: 'Premium Sewing Threads',
            specifications: {
              'Material': '100% Polyester / Cotton',
              'Count Range': '20/2 - 80/3',
              'Strength': '> 3000 cN',
              'Elongation': '18-25%',
              'Color Fastness': '4-5 Grade'
            },
            testResults: {
              'Tensile Strength': 'Pass',
              'Abrasion Resistance': 'Excellent',
              'Color Fastness to Washing': 'Grade 4-5',
              'pH Value': '6.5-7.0'
            }
          };
          await PDFService.generateTechnicalDatasheet(technicalData, companyInfo);
          break;
        case 'company-profile':
          await PDFService.generateCompanyProfile(companyInfo, products);
          break;
        default:
          console.log('Unknown download type');
      }
      
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="download-center-page">
      <div className="download-header">
        <h1>Download Center</h1>
        <p>Click any button below to download PDF directly</p>
      </div>

      {downloadStatus && (
        <div className={`download-status ${downloadStatus}`}>
          {downloadStatus === 'generating' && (
            <><i className="fas fa-spinner fa-spin"></i> Generating PDF, please wait...</>
          )}
          {downloadStatus === 'success' && (
            <><i className="fas fa-check-circle"></i> PDF downloaded successfully!</>
          )}
          {downloadStatus === 'error' && (
            <><i className="fas fa-exclamation-circle"></i> Failed to generate PDF. Please try again.</>
          )}
        </div>
      )}

      <div className="download-grid">
        {/* Product Catalog Card */}
        <div className="download-card">
          <div className="card-icon catalog-icon">
            <i className="fas fa-file-pdf"></i>
          </div>
          <h3>Product Catalog</h3>
          <p>Complete product catalog with specifications and applications</p>
          <button 
            onClick={() => handleDirectDownload('catalog')} 
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
          <p>Complete color reference guide with all available shades</p>
          <button 
            onClick={() => handleDirectDownload('shade-card')} 
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
          <p>Technical specifications, test results, and performance data</p>
          <button 
            onClick={() => handleDirectDownload('technical-datasheet')} 
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
          <p>Company overview, history, facilities, and capabilities</p>
          <button 
            onClick={() => handleDirectDownload('company-profile')} 
            className="download-btn profile-btn"
            disabled={loading}
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadCenter;
