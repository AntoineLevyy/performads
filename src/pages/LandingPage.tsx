import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import '../App.css';

const RotatingText = ({ words }: { words: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span style={{ display: 'inline-block', minWidth: '120px' }}>
      {words[currentIndex]}
    </span>
  );
};

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xyzdgagr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'AdsPerform Landing Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              className="h-16 w-auto max-w-none"
              src="/logo/logo.png"
              alt="AdsPerform"
              style={{ maxHeight: '64px', width: 'auto' }}
            />
            <span className="ml-4 text-6xl font-black" style={{ 
              color: '#1f2937',
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.01em'
            }}>AdsPerform</span>
          </motion.div>
          
          {/* Center Navigation */}
          <motion.div 
            className="nav-links"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            <a href="#features" style={{
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
              Features
            </a>
            <Link to="/about" style={{
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
              About Us
            </Link>
            <Link to="/contact" style={{
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
              Contact
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://calendly.com/antoinelevy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }}
            >
              Book Demo <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </nav>

      <section className="hero">
        <div className="hero-container" style={{ 
          gridTemplateColumns: '1fr', 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="badge">
              <Rocket size={16} />
              <span>AI-Powered Advertising Platform</span>
            </div>
            <h1 className="hero-title" style={{ 
              lineHeight: '1.1', 
              marginBottom: '2.5rem', 
              fontSize: '3.5rem',
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.01em'
            }}>
              <span style={{ 
                color: '#1f2937'
              }}>Performance Marketing</span>
              <br />
              <span style={{ 
                color: '#1f2937',
                fontWeight: '600'
              }}>for</span>{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '900'
              }}>DTC Brands</span>
            </h1>
            <p className="hero-subtitle" style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.5', 
              marginBottom: '3rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#6b7280',
              fontWeight: '400',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Streamlined and simplified{' '}
              <span style={{ 
                color: '#059669', 
                fontWeight: '600'
              }}>
                <RotatingText words={['creative', 'activation', 'optimisation']} />
              </span>
              {' '}so that you can focus on growing your product and your brand
            </p>
            
            {/* Start for Free CTA */}
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.5rem', 
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto 2rem auto'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '0.75rem', 
                width: '100%'
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    minHeight: '48px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1.5rem',
                    background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    opacity: isSubmitting ? 0.7 : 1,
                    minHeight: '48px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Start for free'}
                </button>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{
                  color: '#10b981',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}>
                  ✅ Thanks! We'll be in touch soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>All the tools you need to 10X your Brand's growth</h2>
            <p>Test with purpose. All the insights you need on what's working and simple activation.</p>
          </div>
          <div className="features-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* Feature 1: Creative Insights */}
            <div className="feature-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefcf9 50%, #f8f6f3 100%)',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>Creative Insights</h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Get inspired on what creatives to test next. Make informed decisions on what to test based on competitors, organic trends and your own performance.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" 
                       alt="Meta" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
                       alt="TikTok" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/800px-X_logo_2023_%28white%29.png" 
                       alt="X" style={{ height: '20px', width: 'auto', filter: 'brightness(0)' }} />
                </div>
              </div>
            </div>

            {/* Feature 2: Launch in one click */}
            <div className="feature-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefcf9 50%, #f8f6f3 100%)',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>Launch in one click</h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Stop wasting time uploading each creative and setting adset details one by one. Use our AI launcher to generate all settings and uploads in a minute.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" 
                       alt="Meta" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
                       alt="TikTok" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                       alt="Google" style={{ height: '20px', width: 'auto' }} />
                </div>
              </div>
            </div>

            {/* Feature 3: Optimisation */}
            <div className="feature-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefcf9 50%, #f8f6f3 100%)',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>Optimization</h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Get detailed insights on your performance, beyond what is in the platforms. Creative Analysis, Scheduled Tests and alerts to manage your account pro-actively.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" 
                       alt="Meta" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
                       alt="TikTok" style={{ height: '20px', width: 'auto' }} />
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                       alt="Google" style={{ height: '20px', width: 'auto' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="text-xl font-semibold text-white">AdsPerform</h3>
                <p className="text-gray-400 text-sm mt-2 max-w-xs">
                  Making advertising performance management simple, powerful, and profitable.
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Company</h4>
              <div className="footer-links">
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <span className="footer-link" style={{ cursor: 'default' }}>Pricing</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Legal</h4>
              <div className="footer-links">
                <span className="footer-link" style={{ cursor: 'default' }}>Terms of Service</span>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                <span className="footer-link" style={{ cursor: 'default' }}>EULA</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="text-gray-400 text-sm">
                &copy; 2025 AdsPerform Ltd. All rights reserved.
              </p>
              <div className="footer-social">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="social-links">
                  <a href="https://www.instagram.com/ads_perform/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578346028005" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 