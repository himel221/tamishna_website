import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './products.css';

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

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to get image from productsList by product name
  const getProductImage = (productName) => {
    const found = productsList.find(item => {
      const itemBaseName = item.name.split('(')[0].trim();
      return itemBaseName === productName || item.name.toLowerCase().includes(productName.toLowerCase());
    });
    if (found) {
      return process.env.PUBLIC_URL + found.image;
    }
    return process.env.PUBLIC_URL + '/images/spun-polyester.jpg';
  };

  // Helper function to get description from productsList
  const getProductDescription = (productName) => {
    const found = productsList.find(item => {
      const itemBaseName = item.name.split('(')[0].trim();
      return itemBaseName === productName || item.name.toLowerCase().includes(productName.toLowerCase());
    });
    return found ? found.description : "";
  };

  // Helper function to get bestseller status
  const getProductBestSeller = (productName) => {
    const found = productsList.find(item => {
      const itemBaseName = item.name.split('(')[0].trim();
      return itemBaseName === productName || item.name.toLowerCase().includes(productName.toLowerCase());
    });
    return found ? found.isBestSeller : false;
  };

  // Updated Product Data based on your productsList with correct images
  const productsData = [
    {
      id: 1,
      name: "Etafil Classic",
      category: "Spun Polyester",
      heroImage: getProductImage("Etafil Classic"),
      description: getProductDescription("Etafil Classic"),
      isBestSeller: getProductBestSeller("Etafil Classic"),
      rawMaterial: {
        title: "Raw Material",
        content: "100% Virgin Polyester staple fibers. High tenacity polymer with excellent strength-to-weight ratio.",
        specifications: [
          "Fiber Type: Polyester Staple",
          "Tenacity: 5.5-6.5 g/den",
          "Fiber Length: 38-40mm",
          "Color: Natural White / Dyed"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun construction with Z-twist direction. Heat-set for reduced torque and twist liveliness.",
        specifications: [
          "Yarn Count: 20/2 to 50/2 Ne",
          "Twist Level: 14-16 TPI",
          "Ply: 2-ply / 3-ply",
          "Heat Set: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High tensile strength, excellent abrasion resistance, good elasticity, and colorfastness.",
        specifications: [
          "Tensile Strength: 2800-3800 cN",
          "Elongation: 15-20%",
          "Abrasion Resistance: Excellent",
          "Chemical Resistance: Good",
          "Melting Point: 250°C"
        ]
      }
    },
    {
      id: 2,
      name: "Etafil Comfort",
      category: "Continuous Filament Polyester",
      heroImage: getProductImage("Etafil Comfort"),
      description: getProductDescription("Etafil Comfort"),
      isBestSeller: getProductBestSeller("Etafil Comfort"),
      rawMaterial: {
        title: "Raw Material",
        content: "High-tenacity continuous polyester filament. No fiber ends for lint-free performance.",
        specifications: [
          "Filament Type: Continuous",
          "Denier: 100-1000D",
          "Tenacity: 7.0-8.5 g/den",
          "Lint Level: Zero"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Twisted multi-filament construction. Available in various deniers for different applications.",
        specifications: [
          "Denier Range: 100D/2 to 1000D/3",
          "Twist Level: 8-12 TPI",
          "Ply: 2-ply / 3-ply",
          "Lubrication: Silicone-free"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Zero lint, high seam strength, excellent chemical resistance, smooth surface.",
        specifications: [
          "Tensile Strength: 4000-6000 cN",
          "Elongation: 18-25%",
          "Abrasion Resistance: Excellent",
          "Chlorine Resistance: Good",
          "Surface: Smooth"
        ]
      }
    },
    {
      id: 3,
      name: "Etafil Shield",
      category: "Spun Polyester",
      heroImage: getProductImage("Etafil Shield"),
      description: getProductDescription("Etafil Shield"),
      isBestSeller: getProductBestSeller("Etafil Shield"),
      rawMaterial: {
        title: "Raw Material",
        content: "100% Virgin Polyester staple fibers with enhanced strength.",
        specifications: [
          "Fiber Type: Polyester Staple",
          "Tenacity: 6.0-7.0 g/den",
          "Fiber Length: 38-40mm",
          "Color: Natural White / Dyed"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun construction with enhanced twist for extra strength.",
        specifications: [
          "Yarn Count: 30/2 to 60/2 Ne",
          "Twist Level: 15-17 TPI",
          "Ply: 2-ply / 3-ply",
          "Heat Set: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Superior strength, excellent abrasion resistance, enhanced durability.",
        specifications: [
          "Tensile Strength: 3200-4200 cN",
          "Elongation: 14-18%",
          "Abrasion Resistance: Superior",
          "Chemical Resistance: Good",
          "Melting Point: 250°C"
        ]
      }
    },
    {
      id: 4,
      name: "Etafil Shield Plus",
      category: "Spun Polyester",
      heroImage: getProductImage("Etafil Shield Plus"),
      description: getProductDescription("Etafil Shield Plus"),
      isBestSeller: getProductBestSeller("Etafil Shield Plus"),
      rawMaterial: {
        title: "Raw Material",
        content: "Premium Virgin Polyester staple fibers with advanced formulation.",
        specifications: [
          "Fiber Type: Polyester Staple",
          "Tenacity: 6.5-7.5 g/den",
          "Fiber Length: 38-40mm",
          "Color: Natural White / Dyed"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Compact spun construction for maximum strength and smoothness.",
        specifications: [
          "Yarn Count: 20/2 to 50/2 Ne",
          "Twist Level: 16-18 TPI",
          "Ply: 2-ply / 3-ply",
          "Heat Set: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Maximum strength, ultra-smooth finish, superior performance.",
        specifications: [
          "Tensile Strength: 3500-4500 cN",
          "Elongation: 13-17%",
          "Abrasion Resistance: Superior",
          "Chemical Resistance: Excellent",
          "Melting Point: 250°C"
        ]
      }
    },
    {
      id: 5,
      name: "Etafil Legend",
      category: "Poly Poly Core Spun Polyester",
      heroImage: getProductImage("Etafil Legend"),
      description: getProductDescription("Etafil Legend"),
      isBestSeller: getProductBestSeller("Etafil Legend"),
      rawMaterial: {
        title: "Raw Material",
        content: "Polyester filament core with polyester/cotton wrap. Unique construction for optimal performance.",
        specifications: [
          "Core: Polyester Filament",
          "Wrap: Polyester/Cotton Blend",
          "Core Ratio: 60-70%",
          "Wrap Ratio: 30-40%"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Core-spun construction with filament core and staple wrap.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Twist Level: 16-18 TPI",
          "Core Type: Continuous Filament",
          "Construction: Core Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Exceptional strength, smooth surface, reduced fuzz, excellent seam appearance.",
        specifications: [
          "Tensile Strength: 3500-4500 cN",
          "Elongation: 12-16%",
          "Surface: Very Smooth",
          "Lint Level: Minimal",
          "Strength Retention: 95%"
        ]
      }
    },
    {
      id: 6,
      name: "Etafil Legend Plus",
      category: "Poly Poly Core Spun Polyester",
      heroImage: getProductImage("Etafil Legend Plus"),
      description: getProductDescription("Etafil Legend Plus"),
      isBestSeller: getProductBestSeller("Etafil Legend Plus"),
      rawMaterial: {
        title: "Raw Material",
        content: "Premium polyester filament core with specialized wrap for enhanced performance.",
        specifications: [
          "Core: High Tenacity Polyester",
          "Wrap: Long Staple Cotton/Poly",
          "Core Ratio: 65-75%",
          "Wrap Ratio: 25-35%"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Advanced core-spun construction for maximum durability.",
        specifications: [
          "Yarn Count: 30/2 to 50/2 Ne",
          "Twist Level: 17-19 TPI",
          "Core Type: Continuous Filament",
          "Construction: Core Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Ultimate strength, exceptional smoothness, premium seam quality.",
        specifications: [
          "Tensile Strength: 3800-4800 cN",
          "Elongation: 11-15%",
          "Surface: Ultra Smooth",
          "Lint Level: Minimal",
          "Strength Retention: 97%"
        ]
      }
    },
    {
      id: 7,
      name: "Etafil Eco Classic",
      category: "Recycled Spun Polyester",
      heroImage: getProductImage("Etafil Eco Classic"),
      description: getProductDescription("Etafil Eco Classic"),
      isBestSeller: getProductBestSeller("Etafil Eco Classic"),
      rawMaterial: {
        title: "Raw Material",
        content: "Recycled PET (rPET) from post-consumer bottles. GRS certified recycled content.",
        specifications: [
          "Material: Recycled PET",
          "Recycled Content: 100%",
          "Certification: GRS",
          "Carbon Footprint: -50%"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Ring-spun construction from recycled materials with eco-friendly processing.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Twist Level: 14-16 TPI",
          "Ply: 2-ply",
          "Construction: Ring Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Eco-friendly, sustainable, good strength, reduced environmental impact.",
        specifications: [
          "Tensile Strength: 2500-3200 cN",
          "Elongation: 15-20%",
          "Recycled Content: 100%",
          "Carbon Savings: 50%",
          "Certified: GRS"
        ]
      }
    },
    {
      id: 8,
      name: "Etafil Eco Comfort",
      category: "Recycled Continuous Filament Polyester",
      heroImage: getProductImage("Etafil Eco Comfort"),
      description: getProductDescription("Etafil Eco Comfort"),
      isBestSeller: getProductBestSeller("Etafil Eco Comfort"),
      rawMaterial: {
        title: "Raw Material",
        content: "Recycled polyester filament from ocean-bound plastics.",
        specifications: [
          "Material: Recycled PET",
          "Source: Ocean-bound Plastics",
          "Recycled Content: 100%",
          "Certification: GRS, OceanCycle"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Continuous filament construction from recycled polymer.",
        specifications: [
          "Denier: 150D to 600D",
          "Twist Level: 8-12 TPI",
          "Ply: 2-ply / 3-ply",
          "Construction: Filament"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Sustainable, zero lint, ocean plastic reduction, high performance.",
        specifications: [
          "Tensile Strength: 3500-4500 cN",
          "Elongation: 18-25%",
          "Ocean Plastic: 100%",
          "Lint Level: Zero",
          "Certified: GRS"
        ]
      }
    },
    {
      id: 9,
      name: "Etafil Eco Shield",
      category: "Recycled Spun Polyester",
      heroImage: getProductImage("Etafil Eco Shield"),
      description: getProductDescription("Etafil Eco Shield"),
      isBestSeller: getProductBestSeller("Etafil Eco Shield"),
      rawMaterial: {
        title: "Raw Material",
        content: "Premium recycled polyester from industrial waste.",
        specifications: [
          "Material: Recycled PET",
          "Source: Industrial Waste",
          "Recycled Content: 100%",
          "Certification: GRS"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Enhanced ring-spun construction for superior strength.",
        specifications: [
          "Yarn Count: 30/2 to 50/2 Ne",
          "Twist Level: 15-17 TPI",
          "Ply: 2-ply",
          "Construction: Ring Spun"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High strength recycled threads, sustainable, durable.",
        specifications: [
          "Tensile Strength: 2800-3500 cN",
          "Elongation: 14-18%",
          "Recycled Content: 100%",
          "Waste Reduction: 70%",
          "Certified: GRS"
        ]
      }
    },
    {
      id: 10,
      name: "Etafil Eco Shield Plus",
      category: "Recycled Spun Polyester",
      heroImage: getProductImage("Etafil Eco Shield Plus"),
      description: getProductDescription("Etafil Eco Shield Plus"),
      isBestSeller: getProductBestSeller("Etafil Eco Shield Plus"),
      rawMaterial: {
        title: "Raw Material",
        content: "RFD (Ready for Dyeing) recycled polyester with optimal dye absorption.",
        specifications: [
          "Material: RFD Recycled PET",
          "Treatment: RFD Processed",
          "Recycled Content: 100%",
          "Dye Absorption: Excellent"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "RFD processed construction for superior dye uptake.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Twist Level: 14-16 TPI",
          "Ply: 2-ply",
          "Dye Ready: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Excellent dye uptake, sustainable, consistent quality.",
        specifications: [
          "Tensile Strength: 2500-3200 cN",
          "Elongation: 15-20%",
          "Dye Uniformity: Excellent",
          "Recycled: 100%",
          "RFD Certified: Yes"
        ]
      }
    },
    {
      id: 11,
      name: "Eta Cotton",
      category: "100% Cotton",
      heroImage: getProductImage("Eta Cotton"),
      description: getProductDescription("Eta Cotton"),
      isBestSeller: getProductBestSeller("Eta Cotton"),
      rawMaterial: {
        title: "Raw Material",
        content: "100% Premium Cotton with mercerized finish for high sheen.",
        specifications: [
          "Material: 100% Cotton",
          "Treatment: Mercerized",
          "Sheen: High",
          "Color Range: 200+ colors"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Mercerized ring-spun construction for maximum luster.",
        specifications: [
          "Yarn Count: 20/2 to 60/2 Ne",
          "Twist Level: 16-20 TPI",
          "Ply: 2-ply / 3-ply",
          "Mercerized: Yes"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High sheen, excellent color vibrancy, smooth finish.",
        specifications: [
          "Tensile Strength: 2200-3000 cN",
          "Elongation: 8-12%",
          "Sheen Level: High",
          "Color Fastness: Grade 4-5",
          "Mercerized: Yes"
        ]
      }
    },
    {
      id: 12,
      name: "Etafil Embroidery",
      category: "Continuous Filament Polyester",
      heroImage: getProductImage("Etafil Emb"),
      description: getProductDescription("Etafil Emb"),
      isBestSeller: getProductBestSeller("Etafil Emb"),
      rawMaterial: {
        title: "Raw Material",
        content: "High-tenacity bright polyester filament for brilliant embroidery.",
        specifications: [
          "Material: Bright Polyester",
          "Luster: Ultra High",
          "Denier: 120D to 300D",
          "Color Range: 500+ colors"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Special embroidery construction for smooth running.",
        specifications: [
          "Denier: 120D/2 to 300D/2",
          "Twist Level: 10-12 TPI",
          "Ply: 2-ply",
          "Lubrication: Embroidery Grade"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Ultra high sheen, smooth running, excellent color brilliance.",
        specifications: [
          "Tensile Strength: 2800-3500 cN",
          "Elongation: 20-25%",
          "Luster: Ultra High",
          "Running Performance: Excellent",
          "Color Fastness: Grade 4-5"
        ]
      }
    },
    {
      id: 13,
      name: "Etaflex",
      category: "Stretch Polyester",
      heroImage: getProductImage("Etaflex"),
      description: getProductDescription("Etaflex"),
      isBestSeller: getProductBestSeller("Etaflex"),
      rawMaterial: {
        title: "Raw Material",
        content: "Elastic polyester with high stretch and recovery properties.",
        specifications: [
          "Material: Stretch Polyester",
          "Stretch: 30-40%",
          "Recovery: 95%",
          "Elasticity: High"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Textured construction with elastic properties.",
        specifications: [
          "Denier: 150D to 600D",
          "Twist Level: 8-10 TPI",
          "Construction: Textured",
          "Stretch Type: Elastic"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High stretch, excellent recovery, perfect for activewear.",
        specifications: [
          "Tensile Strength: 2500-3200 cN",
          "Elongation: 30-40%",
          "Recovery: 95%",
          "Stretch: Excellent",
          "Durability: High"
        ]
      }
    },
    {
      id: 14,
      name: "Etagral",
      category: "Continuous Filament Polyester",
      heroImage: getProductImage("Etagral"),
      description: getProductDescription("Etagral"),
      isBestSeller: getProductBestSeller("Etagral"),
      rawMaterial: {
        title: "Raw Material",
        content: "High-grade polyester filament with special finish.",
        specifications: [
          "Material: Polyester Filament",
          "Finish: Premium Grade",
          "Denier: 100D to 800D",
          "Tenacity: 7.5-8.5 g/den"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Multi-filament construction with special twisting pattern.",
        specifications: [
          "Denier: 100D/2 to 800D/3",
          "Twist Level: 10-14 TPI",
          "Ply: 2-ply / 3-ply",
          "Lubrication: Premium"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High strength, smooth surface, excellent performance.",
        specifications: [
          "Tensile Strength: 4000-5500 cN",
          "Elongation: 18-22%",
          "Surface: Smooth",
          "Abrasion: Excellent",
          "Quality: Premium"
        ]
      }
    },
    {
      id: 15,
      name: "Eta PVA",
      category: "Staple Spun PVA",
      heroImage: getProductImage("Eta PVA"),
      description: getProductDescription("Eta PVA"),
      isBestSeller: getProductBestSeller("Eta PVA"),
      rawMaterial: {
        title: "Raw Material",
        content: "PVOH (Polyvinyl Alcohol) water-soluble polymer.",
        specifications: [
          "Material: PVOH Polymer",
          "Dissolving Temp: 60-80°C",
          "Dissolving Time: 5-15 minutes",
          "Biodegradable: Yes"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Spun PVA construction with controlled solubility.",
        specifications: [
          "Yarn Count: 20/2 to 40/2 Ne",
          "Twist Level: 12-14 TPI",
          "Ply: 2-ply",
          "Soluble: Hot Water"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "Complete water solubility, no residue, temporary strength.",
        specifications: [
          "Tensile Strength: 1500-2000 cN",
          "Elongation: 15-20%",
          "Solubility: 100%",
          "Residue: None",
          "Eco-Friendly: Yes"
        ]
      }
    },
    {
      id: 16,
      name: "Eta Nylon",
      category: "Continuous Filament Nylon",
      heroImage: getProductImage("Eta Nylon"),
      description: getProductDescription("Eta Nylon"),
      isBestSeller: getProductBestSeller("Eta Nylon"),
      rawMaterial: {
        title: "Raw Material",
        content: "Nylon 6.6 continuous filament with high elasticity.",
        specifications: [
          "Material: Nylon 6.6",
          "Denier: 210D to 1260D",
          "Tenacity: 8.0-9.5 g/den",
          "Elasticity: High"
        ]
      },
      construction: {
        title: "Construction Type",
        content: "Twisted multi-filament nylon construction.",
        specifications: [
          "Denier Range: 210D/2 to 1260D/3",
          "Twist Level: 8-10 TPI",
          "Ply: 2-ply / 3-ply",
          "Bonded: Optional"
        ]
      },
      properties: {
        title: "Product Properties",
        content: "High elasticity, excellent recovery, superior abrasion resistance.",
        specifications: [
          "Tensile Strength: 5000-7000 cN",
          "Elongation: 25-35%",
          "Recovery: 95-98%",
          "Abrasion: Excellent",
          "UV Resistance: Moderate"
        ]
      }
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    const sections = document.querySelectorAll(
      '.products-container .product-card, ' +
      '.products-container .category-filter-btn, ' +
      '.products-container .stats-card'
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Filter products
  const getFilteredProducts = () => {
    let filtered = productsData;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    if (searchTerm.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  // Handle View Details - Navigate to product details page with all data
  const handleViewDetails = (product) => {
    navigate('/productsdetails', { 
      state: { 
        selectedProduct: {
          id: product.id,
          name: product.name,
          category: product.category,
          heroImage: product.heroImage,
          description: product.description,
          rawMaterial: product.rawMaterial,
          construction: product.construction,
          properties: product.properties,
          isBestSeller: product.isBestSeller,
          scrollToDetail: true
        }
      } 
    });
  };

  // Handle Request Quote
  const handleRequestQuote = (product) => {
    const companyEmail = "habib@etafil.com";
    const subject = `Quote Request: ${product.name}`;
    const body = `Dear Team,

I would like to request a quote for:

Product: ${product.name}
Category: ${product.category}

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

  const filteredProducts = getFilteredProducts();

  // Category colors mapping
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

  // Get bestseller count
  const bestsellerCount = productsData.filter(p => p.isBestSeller).length;

  return (
    <Base>
      <div className="products-container">
        {/* Hero Section */}
        <div className="products-hero">
          <div className="products-hero-overlay"></div>
          <div className="products-hero-content">
            <h1 className="products-hero-title">Premium Sewing Thread Solutions</h1>
            <p className="products-hero-subtitle">Discover our comprehensive range of high-quality threads for every application</p>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="products-filter">
          <div className="container">
            <div className="search-wrapper">
              <input 
                type="text" 
                className="search-input"
                placeholder="Search products by name, category, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`category-filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'all' ? 'All Products' : category}
                  {category !== 'all' && (
                    <span className="product-count">
                      {productsData.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid-section">
          <div className="container">
            <div className="products-header">
              <h2 className="section-title">
                {activeCategory === 'all' ? 'All Products' : activeCategory}
              </h2>
              <p className="section-subtitle">{filteredProducts.length} products found</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className={`product-card ${product.isBestSeller ? 'bestseller' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>

                    <div className="product-image-wrapper">
                      <img 
                        src={product.heroImage} 
                        alt={product.name}
                        className="product-image"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                      <div className="product-category-badge" style={{ background: getCategoryColor(product.category) }}>
                        {product.category}
                      </div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description.substring(0, 100)}...</p>
                      <div className="product-footer">
                        <button 
                          className="btn-details"
                          onClick={() => handleViewDetails(product)}
                        >
                          View Details
                        </button>
                        <button 
                          className="btn-quote"
                          onClick={() => handleRequestQuote(product)}
                        >
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No products found matching your search.</p>
                <button onClick={() => {setActiveCategory('all'); setSearchTerm('');}}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="products-cta">
          <div className="container">
            <h2>Need Custom Thread Solutions?</h2>
            <p>Contact our team for custom manufacturing, bulk orders, and technical specifications</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => window.location.href = 'mailto:habib@etafil.com'}>
                Request a Quote
              </button>
              <button className="cta-secondary" onClick={() => navigate('/contact')}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Products;