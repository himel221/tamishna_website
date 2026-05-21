import React, { useState, useEffect } from 'react';
import PDFService from '../services/pdfService';

const CatalogPDFDownload = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Etafil (Bangladesh) Ltd',
    logo: '/images/ebl.jpg',
    tagline: 'Premium Sewing Thread Solutions',
    address: 'House No. 65, Shah Maghdum Avenue Sector-12, Uttara, Dhaka-1230, Bangladesh',
    phone: '(880-2) 55085783, 55087270 – 76',
    email: 'info@etafilbd.com, info@tamishna.com',
    website: 'www.etafilbd.com'
  });

  // Fetch products from your API or state
  useEffect(() => {
    // এখানে আপনার প্রোডাক্ট ডাটা fetch করুন
    const fetchProducts = async () => {
      // Example: Fetch from API
      // const response = await fetch('/api/products');
      // const data = await response.json();
      // setProducts(data);
      
      // Temporary static data
      const staticProducts = [
        {
          id: 1,
          name: 'Cotton Sewing Threads',
          description: '100% premium cotton threads for high-quality garments',
          specifications: 'Count: 20/2 to 80/3, Strength: High tensile',
          applications: 'Shirts, T-shirts, Denim, Casual wear'
        },
        {
          id: 2,
          name: 'Polyester Sewing Threads',
          description: 'High-strength polyester threads for durability',
          specifications: 'Denier: 150D to 1200D, Color: All shades available',
          applications: 'Sportswear, Uniforms, Industrial garments'
        },
        {
          id: 3,
          name: 'Filament Threads',
          description: 'Smooth and strong filament threads',
          specifications: 'Type: Nylon, Polyester, Color: Custom',
          applications: 'Embroidery, Decorative stitching'
        }
      ];
      setProducts(staticProducts);
    };
    
    fetchProducts();
  }, []);

  const handleDownloadCatalog = async () => {
    setLoading(true);
    try {
      await PDFService.generateProductCatalog(products, companyInfo);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to generate catalog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadShadeCard = async () => {
    setLoading(true);
    try {
      // Example colors data
      const colors = [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#FF0000' },
        { name: 'Blue', code: '#0000FF' },
        { name: 'Green', code: '#00FF00' },
        { name: 'Yellow', code: '#FFFF00' }
      ];
      await PDFService.generateShadeCard(colors, 'Sewing Threads');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to generate shade card. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pdf-download-section">
      <h3>Download Center</h3>
      <div className="pdf-buttons">
        <button 
          onClick={handleDownloadCatalog} 
          className="pdf-btn catalog-btn"
          disabled={loading}
        >
          {loading ? (
            <><i className="fas fa-spinner fa-spin"></i> Generating...</>
          ) : (
            <><i className="fas fa-file-pdf"></i> Download Product Catalog</>
          )}
        </button>
        
        <button 
          onClick={handleDownloadShadeCard} 
          className="pdf-btn shade-btn"
          disabled={loading}
        >
          <i className="fas fa-palette"></i> Download Shade Card
        </button>
      </div>
    </div>
  );
};

export default CatalogPDFDownload;
