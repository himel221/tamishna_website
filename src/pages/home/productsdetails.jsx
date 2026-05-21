import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './productsdetails.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Picture data from the provided list
const productsList = [
    { name: "Etafil Classic(Spun Polyester)", category: "Spun Polyester", image: "/images/classic.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Comfort(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/comfort.jpeg", description: "Long continuous filament threads for ultra-smooth finish. Zero lint for clean sewing operations.", isBestSeller: false },
    { name: "Etafil Shield(Spun Polyester)", category: "Spun Polyester", image: "/images/shield.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Shield Plus(Spun Polyester)", category: "Spun Polyester", image: "/images/shield+.jpeg", description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.", isBestSeller: true },
    { name: "Etafil Legend(Poly Poly Core Spun Polyester)", category: "Poly Poly Core Spun Polyester", image: "/images/legend.jpeg", description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.", isBestSeller: false },
    { name: "Etafil Legend Plus(Poly Poly Core Spun Polyester)", category: "Poly Poly Core Spun Polyester", image: "/images/legend+.jpeg", description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.", isBestSeller: false },
    { name: "Etafil Eco Classic(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoclassic.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Comfort(Recycled Continuous Filament Polyester)", category: "Recycled Continuous Filament Polyester", image: "/images/ecocomfort.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Shield(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoshield.jpeg", description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.", isBestSeller: false },
    { name: "Etafil Eco Shield Plus(Recycled Spun Polyester)", category: "Recycled Spun Polyester", image: "/images/ecoshield+.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Eta Cotton(100% Cotton)", category: "100% Cotton", image: "/images/etacotton.jpeg", description: "Premium threads for decorative stitching and embroidery work. High sheen and vibrant color options.", isBestSeller: false },
    { name: "Etafil Emb(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/embroidery.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Etaflex(Stretch Polyester)", category: "Stretch Polyester", image: "/images/etaflex.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Etagral(Continuous Filament Polyester)", category: "Continuous Filament Polyester", image: "/images/etagral.jpeg", description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.", isBestSeller: false },
    { name: "Eta PVA(Staple Spun PVA)", category: "Staple Spun PVA", image: "/images/etapva.jpeg", description: "Dissolvable threads for temporary stitching and basting. Perfect for basting, quilting, and embroidery stabilization.", isBestSeller: false },
    { name: "Eta Nylon(Continuous Filament Nylon)", category: "Continuous Filament Nylon", image: "/images/etanylon.jpeg", description: "Textured nylon threads with excellent stretch and recovery. Ideal for stretchable fabrics and activewear.", isBestSeller: false }
];

const ProductsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const detailSectionRef = useRef(null);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const passedProduct = location.state?.selectedProduct;

  // Complete Product Data with detailed specification tables - updated with images from productsList
  const productsData = useMemo(() => {
    // Create a map for quick image lookup by product name
    const imageMap = new Map();
    productsList.forEach(item => {
      // Extract base name without parentheses part for matching
      const baseName = item.name.split('(')[0].trim();
      imageMap.set(baseName, item.image);
      imageMap.set(item.name.toLowerCase(), item.image);
    });

    const getProductImage = (productName) => {
      // Try exact match first
      if (imageMap.has(productName)) return process.env.PUBLIC_URL + imageMap.get(productName);
      // Try base name match
      const baseName = productName.split('(')[0].trim();
      if (imageMap.has(baseName)) return process.env.PUBLIC_URL + imageMap.get(baseName);
      // Fallback to default
      return process.env.PUBLIC_URL + '/images/spun-polyester.jpg';
    };

    return [
      {
        id: 1,
        name: "Etafil Classic",
        category: "Spun Polyester",
        heroImage: getProductImage("Etafil Classic"),
        description: "ETAFIL ClASSIC staple spun polyester sewing thread.With significantly higher sewing performance when compared with regular sewing thread . It is a sewing threads which dependable sewing perfomance where cost matter.Good sewing ability with low cost.",
        isBestSeller: true,
        mainUses: "Knitwear Garments, Shirts, Jackets, Light Fabrics Sewing",
        specifications: [
          { "Count (Ne)": "50/2", "Tex size": "24", "Ticket No": "130", "Length (m)": "4000", "Avg-Strength (cN)": "850", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "9" },
          { "Count (Ne)": "60/2", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "650", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "7" }
        ]
      },
      {
        id: 2,
        name: "Etafil Comfort",
        category: "Continuous Filament Polyester",
        heroImage: getProductImage("Etafil Comfort"),
        description: "ETAFIL COMFORT Continous filament polyester sewing thread. It is soft sewing thread. Use for over lock,flat lock sewing thread & Tipping.",
        isBestSeller: false,
        mainUses: "Knitwear, Baby Wear, House Hold Textile",
        specifications: [
          { "Count (Ne)": "150D SIM", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "660", "Elongation % (min-max)": "20-32", "Recommended Needle Size": "8" },
          { "Count (Ne)": "150D NIM", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "650", "Elongation % (min-max)": "20-32", "Recommended Needle Size": "8" }
        ]
      },
      {
        id: 3,
        name: "Etafil Shield",
        category: "Spun Polyester",
        heroImage: getProductImage("Etafil Shield"),
        description: "ETAFIL SHIELD staple spun polyester sewing thread.With significantly higher sewing performance when compared with regular sewing thread . It Is a sewing threads which dependable sewing perfomance where cost matter.Good sewing ability with low cost.",
        isBestSeller: false,
        mainUses: "Knitwear, Woven, Work Wear, Denim, Medium And Heavy Fabric Sewing Use",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "980", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "60/3", "Tex size": "29", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1050", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1650", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "30/2", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1490", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "30/3", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2190", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "3200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "20" },
          { "Count (Ne)": "20/4", "Tex size": "120", "Ticket No": "25", "Length (m)": "1500", "Avg-Strength (cN)": "4550", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "22" },
          { "Count (Ne)": "12/3", "Tex size": "150", "Ticket No": "20", "Length (m)": "1000", "Avg-Strength (cN)": "5230", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "24" },
          { "Count (Ne)": "20/6", "Tex size": "180", "Ticket No": "15", "Length (m)": "1000", "Avg-Strength (cN)": "7200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "24" },
          { "Count (Ne)": "20/9", "Tex size": "270", "Ticket No": "10", "Length (m)": "500", "Avg-Strength (cN)": "9890", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "26" }
        ]
      },
      {
        id: 4,
        name: "Etafil Shield Plus",
        category: "Spun Polyester",
        heroImage: getProductImage("Etafil Shield Plus"),
        description: "ETAFIL SHIELD PLUS 100 % staple spun polyester sewing thread. Specially engineerd for bleach wash process.SHIELD PLUS is a part of shield thread range and is specialy engineered for particularly demanding denim bleach wash process.",
        isBestSeller: true,
        mainUses: "Denims Jeans, Denim Shirts, Denim Skirts, Classic Jeans, Outdoor Wear",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "980", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "60/3", "Tex size": "29", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1050", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1650", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "30/2", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1490", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "30/3", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2190", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "3200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "20" },
          { "Count (Ne)": "20/4", "Tex size": "120", "Ticket No": "25", "Length (m)": "1500", "Avg-Strength (cN)": "4550", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "22" },
          { "Count (Ne)": "12/3", "Tex size": "150", "Ticket No": "20", "Length (m)": "1000", "Avg-Strength (cN)": "5230", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "24" },
          { "Count (Ne)": "20/6", "Tex size": "180", "Ticket No": "15", "Length (m)": "1000", "Avg-Strength (cN)": "7200", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "24" },
          { "Count (Ne)": "20/9", "Tex size": "270", "Ticket No": "10", "Length (m)": "500", "Avg-Strength (cN)": "9890", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "26" }
        ]
      },
      {
        id: 5,
        name: "Etafil Legend",
        category: "Poly Poly Core Spun Polyester",
        heroImage: getProductImage("Etafil Legend"),
        description: "ETAFIL LEGEND Is 100 % poly poly core spun thread. High quality polyester corespun that is percisely engineered to create durable. Attractive seams on a wide range of fabrics across many applications. Choosing to use ETAFIL LEGEND will not only enhance the appearance of sewn products but can greatly improve the productivity and performance of a sewing production line. Finished with a specially formulated lubricant it delivers excellent sewing performance at low tension under the most demanding of conditions.",
        isBestSeller: false,
        mainUses: "Fashion Apparels, Blouses & Shirts, Jackets And Dress Slacks, Lingerie and Swimsuits, Uniforms And Workwear, Jeanswear, Leather Product",
        specifications: [
          { "Count (Ne)": "60/2", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "930", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "7" },
          { "Count (Ne)": "50/2", "Tex size": "24", "Ticket No": "130", "Length (m)": "4000", "Avg-Strength (cN)": "1100", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "9" },
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1350", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "11" },
          { "Count (Ne)": "60/3", "Tex size": "29", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1380", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "2100", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "14" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "3100", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "4550", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "20" },
          { "Count (Ne)": "20/4", "Tex size": "120", "Ticket No": "25", "Length (m)": "1500", "Avg-Strength (cN)": "5950", "Elongation % (min-max)": "18-27", "Recommended Needle Size": "22" }
        ]
      },
      {
        id: 6,
        name: "Etafil Legend Plus",
        category: "Poly Poly Core Spun Polyester",
        heroImage: getProductImage("Etafil Legend Plus"),
        description: "ETAFIL LEGEND Plus is 100 % poly poly core spun thread. When you choose thread, you can confident of higher productivity increase on your sewing line and all important denim wash processes reduced thread damage and reduced thread breakage at the industrial wash process. ETAFIL LEGEND PLUS is for denim sewing. It has superior properties of legend and in addition ,its particularly resistent to harsh wash process containing bleach.",
        mainUses: "Denim, Jeans, Outdoor Wear, Medium & Heavy Fabric Sewing",
        specifications: [
          { "Count (Ne)": "60/2", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "930", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "7" },
          { "Count (Ne)": "50/2", "Tex size": "24", "Ticket No": "130", "Length (m)": "4000", "Avg-Strength (cN)": "1100", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "9" },
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1350", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "11" },
          { "Count (Ne)": "60/3", "Tex size": "29", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "1380", "Elongation % (min-max)": "17-22", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "2100", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "14" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "3100", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "4550", "Elongation % (min-max)": "18-25", "Recommended Needle Size": "20" },
          { "Count (Ne)": "20/4", "Tex size": "120", "Ticket No": "25", "Length (m)": "1500", "Avg-Strength (cN)": "5950", "Elongation % (min-max)": "18-27", "Recommended Needle Size": "22" }
        ]
      },
      {
        id: 7,
        name: "Etafil Eco Classic",
        category: "Recycled Spun Polyester",
        heroImage: getProductImage("Etafil Eco Classic"),
        description: "ETAFIL ECO CLASSIC recycled staple spun polyester sewing thread across a wide range of recycled fabrics and materials. It is an exceptional thread of its type with dependable sewing performance where cost matter. It is sustainable eco friendly thread.",
        isBestSeller: false,
        mainUses: "Knitwear Garments, Shirts, Jackets, Light Fabrics Sewing",
        specifications: [
          { "Count (Ne)": "50/2", "Tex size": "24", "Ticket No": "130", "Length (m)": "4000", "Avg-Strength (cN)": "810", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "9" }
        ]
      },
      {
        id: 8,
        name: "Etafil Eco Comfort",
        category: "Recycled Continuous Filament Polyester",
        heroImage: getProductImage("Etafil Eco Comfort"),
        description: "ETAFIL ECO COMFORT Recycled contnous filament polyester sewing thread.It is sustainable eco friendly thread. It is soft sewing thread. Use for over lock,flat lock sewing thread & tipping.",
        isBestSeller: false,
        mainUses: "Knitwear, Baby Wear, House Hold Textile",
        specifications: [
          { "Count (Ne)": "150D SIM", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "640", "Elongation % (min-max)": "20-32", "Recommended Needle Size": "8" }
        ]
      },
      {
        id: 9,
        name: "Etafil Eco Shield",
        category: "Recycled Spun Polyester",
        heroImage: getProductImage("Etafil Eco Shield"),
        description: "Etafil ECO SHIELD Recycled staple spun polyester sewing thread.It is sustainable eco friendly sewing thread. With significantly higher sewing performance .When compared with regular sewing thread . It Is a sewing threads which dependable sewing perfomance where cost matter. Good sewing ability with low cost.",
        isBestSeller: false,
        mainUses: "Knitwear, Woven, Work Wear, Denim, Medium And Heavy Fabric Sewing Use",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "810", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1480", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2050", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "3090", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "20" }
        ]
      },
      {
        id: 10,
        name: "Etafil Eco Shield Plus",
        category: "Recycled Spun Polyester",
        heroImage: getProductImage("Etafil Eco Shield Plus"),
        description: "ECO SHIELD PLUS is a 100 % recycled staple spun polyester thread for denim sewing. It is particularly resistant to harsh wash process containing bleach.",
        isBestSeller: false,
        mainUses: "Knitwear, Denim & Jeans, Resisting Industrial Wash Process Needed, Outdoor Wear",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "810", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1480", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "14" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "2050", "Elongation % (min-max)": "13-20", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "3090", "Elongation % (min-max)": "15-22", "Recommended Needle Size": "20" }
        ]
      },
      {
        id: 11,
        name: "Eta Cotton",
        category: "100% Cotton",
        heroImage: getProductImage("Eta Cotton"),
        description: "ETACOTTON is the americas brand for high quality ,pima long staple cotton sewing thread . ETACOTTON is 100 % cotton and is specialy treated under tension to provide greater lustre and higher strength. Suitable for specialised applications where a natural , biodegrable thread is required,such as food filters.",
        isBestSeller: false,
        mainUses: "Post Dyed Garments, Light to Medium Apparel, Shirts",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "900", "Elongation % (min-max)": "5-8", "Recommended Needle Size": "11" },
          { "Count (Ne)": "40/3", "Tex size": "40", "Ticket No": "75", "Length (m)": "3000", "Avg-Strength (cN)": "1300", "Elongation % (min-max)": "7-10", "Recommended Needle Size": "14" },
          { "Count (Ne)": "20/2", "Tex size": "60", "Ticket No": "50", "Length (m)": "3000", "Avg-Strength (cN)": "1600", "Elongation % (min-max)": "7-10", "Recommended Needle Size": "18" },
          { "Count (Ne)": "20/3", "Tex size": "80", "Ticket No": "30", "Length (m)": "2000", "Avg-Strength (cN)": "2300", "Elongation % (min-max)": "7-10", "Recommended Needle Size": "20" },
          { "Count (Ne)": "20/4", "Tex size": "120", "Ticket No": "25", "Length (m)": "1500", "Avg-Strength (cN)": "2500", "Elongation % (min-max)": "9-12", "Recommended Needle Size": "22" },
          { "Count (Ne)": "20/6", "Tex size": "180", "Ticket No": "15", "Length (m)": "1000", "Avg-Strength (cN)": "4400", "Elongation % (min-max)": "9-12", "Recommended Needle Size": "24" },
          { "Count (Ne)": "20/9", "Tex size": "270", "Ticket No": "10", "Length (m)": "500", "Avg-Strength (cN)": "4800", "Elongation % (min-max)": "9-12", "Recommended Needle Size": "26" }
        ]
      },
      {
        id: 12,
        name: "Etafil Embroidery",
        category: "Continuous Filament Polyester",
        heroImage: getProductImage("Etafil Emb"),
        description: "ETAFIL EMB is a highly engineered composite thread for machine embroidery and decorative sewing. its Superior Lustre and trouble - free operation makes popular choice amongst the world,s best embroiders seeking outstanding performance and luxurious embelishment.",
        isBestSeller: false,
        mainUses: "Embroidery Works",
        specifications: [
          { "Count (Ne)": "120/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "3000", "Avg-Strength (cN)": "9", "Elongation % (min-max)": "18-22", "Recommended Needle Size": "11" }
        ]
      },
      {
        id: 13,
        name: "Etaflex",
        category: "Stretch Polyester",
        heroImage: getProductImage("Etaflex"),
        description: "ETAFLEX is an innovative performance stretch sewing thread for high extension ,stretch seams. It has good tenacity ,high extension properties and excelent sewability.ETAFLEX is a great option for soft and secure stretch seams for performance sportswear.",
        isBestSeller: false,
        mainUses: "For stretch seams in performance sportswear and activewear, Stretch jeans and jeggings, Underwear, Childrenwear",
        specifications: [
          { "Count (Ne)": "150D/2", "Tex size": "30", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "950", "Elongation % (min-max)": "40-80", "Recommended Needle Size": "11" }
        ]
      },
      {
        id: 14,
        name: "Etagral",
        category: "Continuous Filament Polyester",
        heroImage: getProductImage("Etagral"),
        description: "ETAGRAL is a continous filament polyester thread made from pre- stabilised high tenacity polyester and is the thread of choice for multiple end-uses. The soft finish with superior low friction lubrication reduces the effects of needle heat and abrasion.",
        isBestSeller: false,
        mainUses: "Blind stitching & hemming, High speed multi head quilting operations",
        specifications: [
          { "Count (Ne)": "50D/2", "Tex size": "10", "Ticket No": "300", "Length (m)": "4000", "Avg-Strength (cN)": "690", "Elongation % (min-max)": "16-22", "Recommended Needle Size": "9" },
          { "Count (Ne)": "50D/3", "Tex size": "15", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "1050", "Elongation % (min-max)": "16-22", "Recommended Needle Size": "9" }
        ]
      },
      {
        id: 15,
        name: "Eta PVA",
        category: "Staple Spun PVA",
        heroImage: getProductImage("Eta PVA"),
        description: "ETAPVA is a 100 % water soluble thread that dissolves when immersed or sprayed with cold water and Its used as an alternative to conventional sewing threads for temporary stitching application in denim ,knitted, woven garments.",
        isBestSeller: false,
        mainUses: "Basting waistband, Neckline and armhole gathering stitch, Line matching stitch,Ladies top, Skirts, Dress and Trousers",
        specifications: [
          { "Count (Ne)": "40/2", "Tex size": "27", "Ticket No": "120", "Length (m)": "4000", "Avg-Strength (cN)": "660", "Elongation % (min-max)": "14-23", "Recommended Needle Size": "11" }
        ]
      },
      {
        id: 16,
        name: "Eta Nylon",
        category: "Continuous Filament Nylon",
        heroImage: getProductImage("Eta Nylon"),
        description: "ETANYLON Continous filament nylon sewing thread. It Is soft sewing thread. Use for over lock , flat lock sewing thread.",
        isBestSeller: false,
        mainUses: "Knitwear, Baby Wear, House Hold Textile",
        specifications: [
          { "Count (Ne)": "70D/2", "Tex size": "18", "Ticket No": "180", "Length (m)": "4000", "Avg-Strength (cN)": "690", "Elongation % (min-max)": "20-32", "Recommended Needle Size": "9" }
        ]
      }
    ];
  }, []);

  // Find matching product from passed data or use default
  const getInitialProduct = () => {
    if (passedProduct && passedProduct.name) {
      const normalizedPassedName = passedProduct.name.toLowerCase().trim();
      const passedBaseName = normalizedPassedName.split('(')[0].trim();

      const matchedProduct = productsData.find(
        p => p.name.toLowerCase() === normalizedPassedName
      ) || productsData.find(
        p => p.name.toLowerCase().split('(')[0].trim() === passedBaseName
      );

      if (matchedProduct) {
        return matchedProduct;
      }
      return productsData[0];
    }
    return productsData[0];
  };

  const [selectedProduct, setSelectedProduct] = useState(getInitialProduct());
  // Define safeProduct
  const safeProduct = selectedProduct || productsData[0];

  // Scroll to detail section when coming from Products page with scrollToDetail flag
  useEffect(() => {
    // Check if we should scroll to details
    if (!passedProduct?.scrollToDetail) return;

    // Scroll to detail section with longer delay to ensure page is fully rendered
    const scrollToDetails = () => {
      if (detailSectionRef.current) {
        const headerOffset = 100;
        const elementPosition = detailSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Use a longer delay to ensure page content is fully rendered
    const timeoutId = setTimeout(scrollToDetails, 200);

    return () => clearTimeout(timeoutId);
  }, [passedProduct?.scrollToDetail]);


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
      '.pd-hero-section, .pd-info-card, .spec-table-container, .product-applications'
    );
    
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selectedProduct]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setTimeout(() => {
      if (detailSectionRef.current) {
        const headerOffset = 80;
        const elementPosition = detailSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  // Function to open Gmail with pre-filled email for sample request
  const handleRequestSample = () => {
    const companyEmail = "habib@etafil.com";
    const productName = safeProduct.name;
    const productCategory = safeProduct.category;
    
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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: [Your Company Name]
Contact Person: [Your Name]
Phone Number: [Your Phone Number]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request Date: ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your prompt attention.

Best regards,
[Your Name]`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle Request Quote
  const handleRequestQuote = () => {
    const companyEmail = "habib@etafil.com";
    const subject = `Quote Request: ${safeProduct.name}`;
    const body = `Dear Team,

I would like to request a quote for:

Product: ${safeProduct.name}
Category: ${safeProduct.category}

Please provide:
- Price per unit
- MOQ
- Available specifications
- Delivery timeline

Best regards,
[Your Name]
[Your Company]
[Your Contact]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Download Technical Sheet as PDF
  const downloadTechnicalSheet = async () => {
    setIsPdfGenerating(true);
    
    const loadingToast = document.createElement('div');
    loadingToast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #1e293b;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    loadingToast.innerHTML = '📄 Generating PDF, please wait...';
    document.body.appendChild(loadingToast);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const getColor = (category) => {
        const colors = {
          'Spun Polyester': '#2563eb',
          'Continuous Filament Polyester': '#06b6d4',
          'Poly Poly Core Spun Polyester': '#8b5cf6',
          'Recycled Spun Polyester': '#10b981',
          'Recycled Continuous Filament Polyester': '#34d399',
          '100% Cotton': '#059669',
          'Stretch Polyester': '#f59e0b',
          'Staple Spun PVA': '#ec4899',
          'Continuous Filament Nylon': '#7c3aed'
        };
        return colors[category] || '#64748b';
      };
      
      const escapeHtml = (text) => {
        if (!text) return '';
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      };
      
      let tableHtml = '';
      if (safeProduct.specifications && safeProduct.specifications.length > 0) {
        const headers = Object.keys(safeProduct.specifications[0]);
        tableHtml = `
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background: #f1f5f9;">
                ${headers.map(h => `<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${safeProduct.specifications.map(row => `
                <tr>
                  ${headers.map(h => `<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(row[h])}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
      
      const pdfContent = `
        <div style="font-family: Arial, sans-serif; max-width: 750px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; border-bottom: 3px solid ${getColor(safeProduct.category)}; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #1e293b; margin: 0;">Etafil (Bangladesh) Ltd.</h1>
            <h2 style="color: ${getColor(safeProduct.category)}; margin: 10px 0 0 0;">Technical Data Sheet</h2>
          </div>
          
          <div style="margin: 20px 0; background: #f8fafc; padding: 15px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Product Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; width: 30%;">Product Name:</td><td style="padding: 8px;">${escapeHtml(safeProduct.name)}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Category:</td><td style="padding: 8px;">${escapeHtml(safeProduct.category)}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Main Uses:</td><td style="padding: 8px;">${escapeHtml(safeProduct.mainUses || 'Contact for details')}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Packaging:</td><td style="padding: 8px;">${escapeHtml(safeProduct.count || 'Contact for details')}</td></tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e293b;">Product Specifications</h3>
            <p>${escapeHtml(safeProduct.description || '')}</p>
            ${tableHtml}
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 11px; color: #666;">
            <p>For more information, please contact: habib@etafil.com</p>
            <p>© ${new Date().getFullYear()} Etafil (Bangladesh) Ltd. All rights reserved.</p>
          </div>
        </div>
      `;
      
      await pdf.html(pdfContent, {
        callback: function(pdf) {
          pdf.save(`${safeProduct.name.replace(/[^a-zA-Z0-9]/g, '_')}_Technical_Sheet.pdf`);
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 800,
        autoPaging: 'text'
      });
      
      loadingToast.innerHTML = '✅ PDF downloaded successfully!';
      loadingToast.style.background = '#10b981';
      setTimeout(() => loadingToast.remove(), 2000);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      loadingToast.innerHTML = '❌ Error generating PDF. Please try again.';
      loadingToast.style.background = '#dc2626';
      setTimeout(() => loadingToast.remove(), 3000);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Spun Polyester': '#2563eb',
      'Continuous Filament Polyester': '#06b6d4',
      'Poly Poly Core Spun Polyester': '#8b5cf6',
      'Recycled Spun Polyester': '#10b981',
      'Recycled Continuous Filament Polyester': '#34d399',
      '100% Cotton': '#059669',
      'Stretch Polyester': '#f59e0b',
      'Staple Spun PVA': '#ec4899',
      'Continuous Filament Nylon': '#7c3aed'
    };
    return colors[category] || '#64748b';
  };

  return (
    <Base>
      <div className="pd-page">
        {/* Hero Section */}
        <section className="pd-hero-section">
          <div className="pd-hero-bg">
            <img 
              src={process.env.PUBLIC_URL + '/images/pst.jpg'} 
              alt="Premium Sewing Threads"
              className="pd-hero-bg-image"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="pd-hero-overlay"></div>
          </div>
          <div className="pd-hero-content">
            <h1 className="pd-hero-title animate-text">Premium Sewing Threads</h1>
            <p className="pd-hero-subtitle animate-text-delay">
              Engineered for Excellence | Designed for Perfection
            </p>
            <div className="pd-hero-badges">
              <span className="pd-hero-badge">GRS</span>
              <span className="pd-hero-badge">OEKO-TEX Certified</span>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="pd-products-grid-section">
          <div className="pd-section-header">
            <h2 className="pd-section-title">Our Premium Products</h2>
            <div className="pd-section-divider">
              <span className="pd-divider-line"></span>
              <span className="pd-divider-icon">✦</span>
              <span className="pd-divider-line"></span>
            </div>
            <p className="pd-section-subtitle">Discover our range of high-quality sewing threads for every application</p>
          </div>

          <div className="pd-products-filter-grid">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`pd-product-filter-card ${safeProduct.id === product.id ? 'active' : ''} ${product.isBestSeller ? 'bestseller' : ''}`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="pd-product-filter-image">
                  <img src={product.heroImage} alt={product.name} onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                  }}/>
                  <div className="pd-product-filter-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="pd-product-filter-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

                    {/* Specification Tabs */}
            <div className="spec-tabs-wrapper">
              <div className="spec-tabs">
                {productsData.map((product) => (
                  <button 
                    key={product.id}
                    className={`spec-tab-btn ${safeProduct.id === product.id ? 'active' : ''}`}
                    onClick={() => handleProductSelect(product)}
                  >
                    <span className="tab-icon">
                      {product.name === "Etafil Classic" && "🧵"}
                      {product.name === "Etafil Comfort" && "✨"}
                      {product.name === "Etafil Shield" && "🛡️"}
                      {product.name === "Etafil Shield Plus" && "⭐"}
                      {product.name === "Etafil Legend" && "🏆"}
                      {product.name === "Etafil Legend Plus" && "💎"}
                      {product.name === "Etafil Eco Classic" && "♻️"}
                      {product.name === "Etafil Eco Comfort" && "🌿"}
                      {product.name === "Etafil Eco Shield" && "🛡️♻️"}
                      {product.name === "Etafil Eco Shield Plus" && "⭐♻️"}
                      {product.name === "Eta Cotton" && "🌾"}
                      {product.name === "Etafil Embroidery" && "🎨"}
                      {product.name === "Etaflex" && "💪"}
                      {product.name === "Etagral" && "🔗"}
                      {product.name === "Eta PVA" && "💧"}
                      {product.name === "Eta Nylon" && "🪢"}
                    </span>
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

        {/* Product Detail Section */}
        <section ref={detailSectionRef} className="pd-detail-section">
          <div className="pd-detail-container">
            {/* Product Hero */}
            <div className="pd-detail-hero">
              <div className="pd-detail-image-wrapper">
                <img 
                  src={safeProduct.heroImage} 
                  alt={safeProduct.name}
                  className="pd-detail-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <div className="pd-detail-badge" style={{ background: getCategoryColor(safeProduct.category) }}>
                  <span>{safeProduct.category}</span>
                </div>
              </div>
              <div className="pd-detail-intro">
                <h2>{safeProduct.name}</h2>
                <p className="pd-detail-description">{safeProduct.description}</p>
                <div className="pd-detail-actions">
                  <button className="pd-action-btn primary" onClick={handleRequestSample}>
                    Request Sample
                  </button>
                  <button className="pd-action-btn secondary" onClick={handleRequestQuote}>
                    Get Quote
                  </button>
                  <button className="pd-action-btn download" onClick={downloadTechnicalSheet} disabled={isPdfGenerating}>
                    {isPdfGenerating ? 'Generating...' : 'Download Technical Sheet ↓'}
                  </button>
                </div>
              </div>
            </div>

            {/* Main Uses Section - Product Specific Applications */}
            <div className="product-applications">
              <div className="applications-header">
                <div className="applications-icon">🎯</div>
                <h3>Main Uses & Applications</h3>
              </div>
              <div className="applications-content">
                <div className="applications-tags">
                  {safeProduct.mainUses && safeProduct.mainUses.split(',').map((use, idx) => (
                    <span key={idx} className="application-tag">
                      {use.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>



            {/* Specification Table */}
            <div className="spec-table-container active">
              <div className="table-responsive">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Count (Ne)</th>
                      <th>Tex size</th>
                      <th>Ticket No</th>
                      <th>Length (m)</th>
                      <th>Avg-Strength (cN)</th>
                      <th>Elongation % (min-max)</th>
                      <th>Recommended Needle Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {safeProduct.specifications && safeProduct.specifications.map((spec, idx) => (
                      <tr key={idx}>
                        <td>{spec["Count (Ne)"]}</td>
                        <td>{spec["Tex size"]}</td>
                        <td>{spec["Ticket No"]}</td>
                        <td>{spec["Length (m)"]}</td>
                        <td>{spec["Avg-Strength (cN)"]}</td>
                        <td>{spec["Elongation % (min-max)"]}</td>
                        <td>{spec["Recommended Needle Size"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Products Button */}
        <div className="pd-back-button">
          <button onClick={() => navigate('/products')} className="back-to-products">
            ← Back to All Products
          </button>
        </div>
      </div>
    </Base>
  );
};

export default ProductsDetail;