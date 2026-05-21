import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFService {
  // Generate product catalog PDF
  static async generateProductCatalog(products, companyInfo) {
    const catalogHTML = this.createCatalogHTML(products, companyInfo);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = catalogHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    document.body.appendChild(tempDiv);
    
    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('product-catalog.pdf');
      
      document.body.removeChild(tempDiv);
      return true;
    } catch (error) {
      console.error('PDF generation failed:', error);
      document.body.removeChild(tempDiv);
      return false;
    }
  }
  
  // Create HTML for catalog
  static createCatalogHTML(products, companyInfo) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #1B0088;
            padding-bottom: 20px;
          }
          .logo {
            width: 100px;
            height: auto;
          }
          h1 {
            color: #1B0088;
            margin: 10px 0;
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 30px 0;
          }
          .product-card {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            page-break-inside: avoid;
          }
          .product-name {
            color: #1B0088;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .product-specs {
            font-size: 12px;
            color: #666;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
          }
          .contact-info {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin-top: 30px;
          }
          @media print {
            .product-card {
              break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${companyInfo.logo}" class="logo" alt="Logo"/>
          <h1>${companyInfo.name}</h1>
          <p>${companyInfo.tagline}</p>
        </div>
        
        <h2>Product Catalog ${new Date().getFullYear()}</h2>
        
        <div class="product-grid">
          ${products.map(product => `
            <div class="product-card">
              <div class="product-name">${product.name}</div>
              <p>${product.description || 'Premium quality sewing thread'}</p>
              <div class="product-specs">
                <strong>Specifications:</strong> ${product.specifications || 'Contact for details'}<br>
                <strong>Applications:</strong> ${product.applications || 'Garments, Textile, Industrial'}
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>${companyInfo.address}</p>
          <p>Phone: ${companyInfo.phone}</p>
          <p>Email: ${companyInfo.email}</p>
          <p>Website: ${companyInfo.website}</p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.</p>
          <p>Premium Sewing Thread Solutions</p>
        </div>
      </body>
      </html>
    `;
  }
  
  // Generate shade card PDF
  static async generateShadeCard(colors, productName) {
    const shadeCardHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
          }
          h1 {
            color: #1B0088;
            text-align: center;
          }
          .shade-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
          }
          .shade-item {
            text-align: center;
            page-break-inside: avoid;
          }
          .color-box {
            width: 100%;
            height: 80px;
            border-radius: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
          }
          .color-code {
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>${productName} - Shade Card</h1>
        <div class="shade-grid">
          ${colors.map(color => `
            <div class="shade-item">
              <div class="color-box" style="background-color: ${color.code}"></div>
              <div class="color-code">${color.name}</div>
              <div class="color-code">${color.code}</div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;
    
    // Similar PDF generation logic
    await this.convertHTMLToPDF(shadeCardHTML, 'shade-card.pdf');
  }
  
  static async convertHTMLToPDF(html, filename) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);
    
    try {
      const canvas = await html2canvas(tempDiv, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(filename);
      
      document.body.removeChild(tempDiv);
      return true;
    } catch (error) {
      console.error('PDF generation failed:', error);
      document.body.removeChild(tempDiv);
      return false;
    }
  }
}

export default PDFService;