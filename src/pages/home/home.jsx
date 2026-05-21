import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

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
      '.about, .card-container .card, .chairman-container, .product-card-moving, .stats-card, .stats-section, .news-card, .single-company-section, .clients-section'
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

  // Scroll animation for single company section
  useEffect(() => {
    const companyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const singleCompanySection = document.querySelector('.single-company-section');
    if (singleCompanySection) {
      companyObserver.observe(singleCompanySection);
    }

    return () => {
      if (singleCompanySection) {
        companyObserver.unobserve(singleCompanySection);
      }
    };
  }, []);

  // Type Animation Effect
  const [displayText, setDisplayText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const fullCompanyName = "Etafil (Bangladesh) Ltd.";
  const fullSubtitle = "Premium Sewing Thread Solutions";

  useEffect(() => {
    let companyIndex = 0;
    let subtitleIndex = 0;

    const companyInterval = setInterval(() => {
      if (companyIndex <= fullCompanyName.length) {
        setDisplayText(fullCompanyName.substring(0, companyIndex));
        companyIndex++;
      } else {
        clearInterval(companyInterval);
        
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex <= fullSubtitle.length) {
            setSubtitleText(fullSubtitle.substring(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 50);
        
        return () => clearInterval(subtitleInterval);
      }
    }, 100);

    return () => clearInterval(companyInterval);
  }, []);

  const images = [
    { url: process.env.PUBLIC_URL + '/images/1.jpeg', title: "Premium Sewing Threads" },
    { url: process.env.PUBLIC_URL + '/images/2.jpeg', title: "Quality Manufacturing" },
    { url: process.env.PUBLIC_URL + '/images/3.jpeg', title: "Industrial Excellence" },
    { url: process.env.PUBLIC_URL + '/images/4.jpeg', title: "Advanced Production" },
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/images/1.jpeg',
      alt: "Premium Sewing Threads",
      fallback: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/images/2.jpeg',
      alt: "Thread Production Line",
      fallback: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + '/images/3.jpeg',
      alt: "Quality Control Laboratory",
      fallback: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      url: process.env.PUBLIC_URL + '/images/4.jpeg',
      alt: "Premium Thread Spools",
      fallback: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      url: process.env.PUBLIC_URL + '/images/export-shipping.jpg',
      alt: "Global Export Shipping",
      fallback: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // State for company gallery images
  const [mainImage, setMainImage] = useState({
    url: galleryImages[0].url,
    alt: galleryImages[0].alt
  });
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  // Handle thumbnail click with animation
  const handleThumbnailClick = (index) => {
    if (activeThumbnail === index) return;
    
    setIsImageChanging(true);
    setTimeout(() => {
      setMainImage({
        url: galleryImages[index].url,
        alt: galleryImages[index].alt
      });
      setActiveThumbnail(index);
      setTimeout(() => {
        setIsImageChanging(false);
      }, 100);
    }, 300);
  };

  const navigateToUrl = (url) => {
    const fullUrl = window.location.origin + url;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // Updated Products List with 16 products based on your data
  const homeProductsList = [
    { 
      name: "Etafil Classic", 
      category: "Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/classic.jpeg',
      isBestSeller: true,
      description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.",
      features: ["High Tensile", "Color Fast"]
    },
    { 
      name: "Etafil Comfort", 
      category: "Continuous Filament Polyester", 
      image: process.env.PUBLIC_URL + '/images/comfort.jpeg',
      isBestSeller: false,
      description: "Long continuous filament threads for ultra-smooth finish. Zero lint for clean sewing operations.",
      features: ["Zero Lint", "Smooth Finish"]
    },
    { 
      name: "Etafil Shield", 
      category: "Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/shield.jpeg',
      isBestSeller: true,
      description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.",
      features: ["High Strength", "Durable"]
    },
    { 
      name: "Etafil Shield Plus", 
      category: "Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/shield+.jpeg',
      isBestSeller: true,
      description: "High-quality spun polyester threads for excellent seam strength. Perfect for high-speed industrial sewing machines with minimal breakage.",
      features: ["Premium Quality", "Extra Strength"]
    },
    { 
      name: "Etafil Legend", 
      category: "Poly Poly Core Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/legend.jpeg',
      isBestSeller: false,
      description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.",
      features: ["Core Strength", "Cotton Feel"]
    },
    { 
      name: "Etafil Legend Plus", 
      category: "Poly Poly Core Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/legend+.jpeg',
      isBestSeller: false,
      description: "Core-spun threads combining polyester strength with cotton feel. Ideal for high-stress seams and premium garments.",
      features: ["Ultimate Strength", "Smooth Finish"]
    },
    { 
      name: "Etafil Eco Classic", 
      category: "Recycled Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/ecoclassic.jpeg',
      isBestSeller: false,
      description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.",
      features: ["Eco-Friendly", "Sustainable"]
    },
    { 
      name: "Etafil Eco Comfort", 
      category: "Recycled Continuous Filament Polyester", 
      image: process.env.PUBLIC_URL + '/images/ecocomfort.jpeg',
      isBestSeller: false,
      description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.",
      features: ["Zero Lint", "Eco-Friendly"]
    },
    { 
      name: "Etafil Eco Shield", 
      category: "Recycled Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/ecoshield.jpeg',
      isBestSeller: false,
      description: "Eco-friendly threads made from recycled materials. Sustainable choice for green manufacturing.",
      features: ["High Strength", "Sustainable"]
    },
    { 
      name: "Etafil Eco Shield Plus", 
      category: "Recycled Spun Polyester", 
      image: process.env.PUBLIC_URL + '/images/ecoshield+.jpeg',
      isBestSeller: false,
      description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.",
      features: ["Dye Ready", "Eco-Friendly"]
    },
    { 
      name: "Etacotton", 
      category: "100% Cotton", 
      image: process.env.PUBLIC_URL + '/images/etacotton.jpeg',
      isBestSeller: false,
      description: "Premium threads for decorative stitching and embroidery work. High sheen and vibrant color options.",
      features: ["High Sheen", "Vibrant Colors"]
    },
    { 
      name: "Etafil Embroidery", 
      category: "Continuous Filament Polyester", 
      image: process.env.PUBLIC_URL + '/images/embroidery.jpeg',
      isBestSeller: false,
      description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.",
      features: ["Embroidery Grade", "High Sheen"]
    },
    { 
      name: "Etaflex", 
      category: "Stretch Polyester", 
      image: process.env.PUBLIC_URL + '/images/etaflex.jpeg',
      isBestSeller: false,
      description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.",
      features: ["Stretchable", "Elastic Recovery"]
    },
    { 
      name: "Etagral", 
      category: "Continuous Filament Polyester", 
      image: process.env.PUBLIC_URL + '/images/etagral.jpeg',
      isBestSeller: false,
      description: "Ready for dyeing cotton threads for customized color matching. Perfect for garment dyeing applications.",
      features: ["Premium Quality", "Smooth Finish"]
    },
    { 
      name: "Eta PVA", 
      category: "Staple Spun PVA", 
      image: process.env.PUBLIC_URL + '/images/etapva.jpeg',
      isBestSeller: false,
      description: "Dissolvable threads for temporary stitching and basting. Perfect for basting, quilting, and embroidery stabilization.",
      features: ["Water Soluble", "Temporary Hold"]
    },
    { 
      name: "Eta Nylon", 
      category: "Continuous Filament Nylon", 
      image: process.env.PUBLIC_URL + '/images/etanylon.jpeg',
      isBestSeller: false,
      description: "Textured nylon threads with excellent stretch and recovery. Ideal for stretchable fabrics and activewear.",
      features: ["High Stretch", "Excellent Recovery"]
    }
  ];

  // Complete Clients Data for display (non-clickable)
  const clients = [
    { id: 1, name: "Tesco", logo: process.env.PUBLIC_URL + '/images/tesco.png', country: "UK" },
    { id: 2, name: "C & A", logo: process.env.PUBLIC_URL + '/images/ca.jpg', country: "GERMANY" },
    { id: 3, name: "Tom Tailor", logo: process.env.PUBLIC_URL + '/images/tom.png', country: "GERMANY" },
    { id: 4, name: "LC Waikiki", logo: process.env.PUBLIC_URL + '/images/lc.png', country: "Turkish" },
    { id: 5, name: "Terranova", logo: process.env.PUBLIC_URL + '/images/terranova.png', country: "Italy" },
    { id: 6, name: "Okaidi", logo: process.env.PUBLIC_URL + '/images/okaidi.png', country: "France" },
    { id: 7, name: "Petrol Industri", logo: process.env.PUBLIC_URL + '/images/pi.svg', country: "Netherlands" },
    { id: 8, name: "Kiabi", logo: process.env.PUBLIC_URL + '/images/kiabi.jpg', country: "FRANCE" },
    { id: 9, name: "Ginatricot", logo: process.env.PUBLIC_URL + '/images/gc.png', country: "Sweden" },
    { id: 10, name: "GU", logo: process.env.PUBLIC_URL + '/images/gu.png', country: "Japan" },
    { id: 11, name: "Lidl", logo: process.env.PUBLIC_URL + '/images/lidl.png', country: "GERMANY" },
    { id: 12, name: "Primark", logo: process.env.PUBLIC_URL + '/images/pri.png', country: "Ireland" },
    { id: 13, name: "Zara", logo: process.env.PUBLIC_URL + '/images/zara.png', country: "Spain" },
    { id: 14, name: "Mango", logo: process.env.PUBLIC_URL + '/images/mango.png', country: "Spain" },
    { id: 15, name: "Hurley", logo: process.env.PUBLIC_URL + '/images/hurley.png', country: "USA" },
  ];

  // Double the clients array for seamless loop
  const scrollingClients = [...clients, ...clients];

  const newsEvents = [
    {
      id: 1,
      title: "New Thread Manufacturing Facility Launch",
      image: process.env.PUBLIC_URL + '/images/growth.jpg',
      link: "/news/new-facility-2025",
    },
    {
      id: 2,
      title: "Interview with Managing Director",
      image: process.env.PUBLIC_URL + '/images/news24.jpg',
      link: "/news/md-interview",
    },
    {
      id: 3,
      title: "Industry Excellence Award 2025",
      image: process.env.PUBLIC_URL + '/images/meeting.jpg',
      link: "/news/excellence-award",
    },
    {
      id: 4,
      title: "Sustainable Thread Innovation Summit",
      image: process.env.PUBLIC_URL + '/images/tech.jpg',
      link: "/news/innovation-summit",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('exit');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationClass('enter');
      }, 500);
      
      setTimeout(() => {
        setAnimationClass('');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  const prevSlide = () => {
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  const handleNewsClick = (link) => {
    const fullUrl = window.location.origin + link;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // Handler for product click - navigates to product details page
  const handleProductClick = (product) => {
    navigate('/productsdetails', { 
      state: { 
        selectedProduct: {
          name: product.name,
          category: product.category,
          heroImage: product.image,
          description: product.description,
          scrollToDetail: true
        }
      } 
    });
  };

  return (
    <Base>
      {/* Hero Slider Section */}
      <div className='content'>
        <div className="slider-container">
          <div className="slider-wrapper">
            {images.map((item, index) => (
              <div 
                key={index} 
                className={`slide ${index === currentIndex ? 'active' : ''} 
                  ${index === currentIndex ? animationClass : ''}`}
              >
                <div className="image-wrapper">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="slide-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="slide-content">
                  <div className="hero-text-container">
                    <h1 className="company-name-animation">
                      {displayText}
                      <span className="cursor-blink"></span>
                    </h1>
                    <p className="company-subtitle-animation">
                      {subtitleText}
                      {subtitleText.length < fullSubtitle.length && <span className="cursor-blink">|</span>}
                    </p>
                    <div className="hero-cta">
                      <button className="hero-btn-primary" onClick={() => navigateToUrl('/about')}>
                        Learn About Us
                      </button>
                      <button className="hero-btn-secondary" onClick={() => navigateToUrl('/productsdetails')}>
                        View Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button className="slider-button prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="slider-button next" onClick={nextSlide}>
              &#10095;
            </button>

            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Single Company Section */}
      <div className='content'>
        <section className="single-company-section">
          <div className="single-company-container">
            {/* Left Side - Company Info with Stats */}
            <div className="company-info-card">
              <div className="company-badge">
                <span className="badge-text">Est. 1994</span>
              </div>
              <h2 className="company-info-title">Etafil (Bangladesh) Ltd.</h2>
              <h3 className="company-info-subtitle">Premium Sewing Thread Manufacturer</h3>
              
              <div className="company-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">✦</span>
                <span className="divider-line"></span>
              </div>
              
              <p className="company-info-description">
               Etafil (Bangladesh) Ltd. started its long and prosperous journey with a rather small infrastructural support in 1994, with the goal of becoming the premier of sewing thread solution in Bangladesh. After commercial operation in 1997, it never looked back ever since and grew rather drastically to meet the Company's goal.

The Company was registered as a private Company limited under Companies Act, 1994. We started our commercial operation from the Gazipur plant in 1997.

              </p>
              
              <div className="company-mini-stats">
                <div className="mini-stat">
                  <span className="mini-stat-number">32+</span>
                  <span className="mini-stat-label1">Years of Excellence</span>
                </div>

                <div className="mini-stat">
                  <span className="mini-stat-number">220+</span>
                  <span className="mini-stat-label1">Clients</span>
                </div>
              </div>
              
              <button className="company-info-btn" onClick={() => navigateToUrl('/about')}>
                Discover Our Story
                <span className="btn-arrow">→</span>
              </button>
            </div>
            
            {/* Right Side - Animated Company Image Gallery */}
            <div className="company-image-card">
              <div className={`company-main-image-wrapper ${isImageChanging ? 'image-exit' : 'image-enter'}`}>
                <img 
                  src={mainImage.url} 
                  alt={mainImage.alt}
                  className="company-main-image"
                  onError={(e) => {
                    const currentGalleryImage = galleryImages.find(img => img.url === mainImage.url);
                    if (currentGalleryImage && currentGalleryImage.fallback) {
                      e.target.src = currentGalleryImage.fallback;
                    } else {
                      e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                    }
                  }}
                />
              </div>
              
              <div className="company-thumbnails">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`thumbnail-item ${activeThumbnail === index ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleThumbnailClick(index)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      onError={(e) => {
                        e.target.src = image.fallback;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Products Section - Updated with 16 products */}
      <div className='content'>
        <section className="home-products-section">
          <h2 className="about">Our Products</h2>
          <div className="home-products-slider-container">
            <div className="home-products-track">
              {/* First set of products */}
              {homeProductsList.map((product, index) => (
                <div 
                  key={index} 
                  className="home-product-card"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="home-product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="home-product-image"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />

                    <div className="home-product-overlay">
                      <span>View Details →</span>
                    </div>
                  </div>
                  <div className="home-product-info">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <div className="home-product-features">
                      {product.features.map((feature, idx) => (
                        <span key={idx}>✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {homeProductsList.map((product, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="home-product-card"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="home-product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="home-product-image"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />

                    <div className="home-product-overlay">
                      <span>View Details →</span>
                    </div>
                  </div>
                  <div className="home-product-info">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <div className="home-product-features">
                      {product.features.map((feature, idx) => (
                        <span key={idx}>✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Our Valuable Clients Section - NON-CLICKABLE */}
      <div className='content'>
        <section className="home-clients-section">
          <div className="section-header">
            <h2 className="about">Our Valuable Buyers</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">🤝</span>
              <span className="divider-line"></span>
            </div>
            <p className="section-subtitle">Trusted by leading brands worldwide</p>
          </div>
          
          <div className="home-clients-slider-container">
            <div className="home-clients-track">
              {scrollingClients.map((client, index) => (
                <div 
                  key={index} 
                  className="home-client-logo-card"
                  style={{ cursor: 'default' }}
                >
                  <div className="home-client-logo-wrapper">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="home-client-logo"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/150x80/1e293b/ffffff?text=${client.name.substring(0, 3)}`;
                      }}
                    />
                  </div>
                  <p className="home-client-name">{client.name}</p>
                  <span className="home-client-country">{client.country}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <div className='content'>
        <h2 className="about">At A Glance</h2>
        <div className="stats-gridd">
          <div className="stats-card">
            <div className="stats-icon">🏆</div>
            <div className="stats-number">32+</div>
            <div className="stats-label">YEARS OF EXCELLENCE</div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">🧵</div>
            <div className="stats-number">35M+</div>
            <div className="stats-label">Cons ANNUALLY</div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">👥</div>
            <div className="stats-number">450+</div>
            <div className="stats-label">SKILLED EMPLOYEES</div>
          </div>
        </div>
      </div>

      {/* Chairman Section */}
      <div className='content'>
        <h2 className="about">Message from Managing Director</h2>
        <div className="chairman-container">
          <div className="chairman-card">
            <img 
              src={process.env.PUBLIC_URL + '/images/md.png'}
              alt="Managing Director" 
              className="chairman-image"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
              }}
            />
            <h3>Gulzar Alam Chowdhury</h3>
            <div className="chairman-title">Managing Director</div>
          </div>

          <div className="chairman-message-card">
            <div className="quote-icon">"</div>
            <div className="message-content">
              <p className="message-text">
                At Etafil (Bangladesh) Ltd., our commitment to excellence in sewing thread manufacturing 
                remains unwavering. We believe that true success comes from delivering premium quality 
                products that empower the global RMG industry and create lasting value for our clients.
              </p>
              <p className="message-text">
                Our journey has been remarkable, marked by continuous innovation, state-of-the-art 
                technology adoption, and the trust of our valued partners worldwide. I am immensely 
                proud of our team's dedication and the quality standards we've achieved. As we look 
                to the future, we remain committed to pushing boundaries and setting new benchmarks 
                in thread manufacturing.
              </p>
              <div className="message-footer">
                <div className="signature">GULZAR ALAM CHOWDHURY</div>
                <div className="signature-title">Managing Director, Etafil (Bangladesh) Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Card Section */}
      <div className='content'>
        <section className="sustainability-section">
          <div className="sustainability-card">
            <div className="sustainability-card-image">
              <img
                src={process.env.PUBLIC_URL + '/images/sustainability.jpg'}
                alt="Sustainability"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Sustainability';
                }}
              />
            </div>
            <div className="sustainability-card-content">
              <h2>Sustainability</h2>
              <p>
                Explore our commitment to eco-friendly manufacturing, worker welfare, and responsible supply chain practices at Etafil (Bangladesh) Ltd.
              </p>
              <button className="sustainability-card-button" onClick={() => navigate('/sustainability')}>
                Explore More
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* News Section */}
      <div className='content'>
        <h2 className="about">News & Events</h2>
        
        <div className="news-section">
          <div className="news-slider-container">
            <div className="news-grid-moving">
              {newsEvents.map((news) => (
                <div 
                  key={news.id} 
                  className="news-card"
                  onClick={() => handleNewsClick(news.link)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleNewsClick(news.link)}
                >
                  <div className="news-image-wrapper">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="news-image"
                    />
                    <div className="news-overlay">
                      <span className="news-read-more">Read More →</span>
                    </div>
                  </div>
                  <div className="news-info">
                    <h3 className="news-title">{news.title}</h3>
                  </div>
                </div>
              ))}
              
              {newsEvents.map((news) => (
                <div 
                  key={`duplicate-${news.id}`} 
                  className="news-card"
                  onClick={() => handleNewsClick(news.link)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleNewsClick(news.link)}
                >
                  <div className="news-image-wrapper">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="news-image"
                    />
                    <div className="news-overlay">
                      <span className="news-read-more">Read More →</span>
                    </div>
                  </div>
                  <div className="news-info">
                    <h3 className="news-title">{news.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;