import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const HtmlToPDF = ({ elementId, fileName = 'catalog.pdf' }) => {
  
  const generatePDF = async () => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found');
      return;
    }

    try {
      // Show loading indicator
      const loadingToast = document.createElement('div');
      loadingToast.innerHTML = 'Generating PDF... Please wait';
      loadingToast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #1B0088;
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        z-index: 9999;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      `;
      document.body.appendChild(loadingToast);

      // Capture the element as canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Better quality
        useCORS: true, // Allow cross-origin images
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      // Add more pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Save the PDF
      pdf.save(fileName);
      
      // Remove loading indicator
      document.body.removeChild(loadingToast);
      
      // Show success message
      alert('PDF generated successfully!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
      const loadingToast = document.querySelector('div[style*="position: fixed"]');
      if (loadingToast) document.body.removeChild(loadingToast);
    }
  };
  
  return (
    <button onClick={generatePDF} className="pdf-download-btn">
      <i className="fas fa-file-pdf"></i> Download PDF Catalog
    </button>
  );
};

export default HtmlToPDF;