import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../App.css';

const AboutPage = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              className="h-16 w-auto max-w-none"
              src="/logo/logo.png"
              alt="AdsPerform"
              style={{ maxHeight: '64px', width: 'auto' }}
            />
            <span className="ml-4 text-6xl font-black" style={{ 
              background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '900'
            }}>AdsPerform</span>
          </Link>
          
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#374151',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1rem',
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="about-content" style={{
        padding: '8rem 2rem 6rem 2rem',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, Georgia, serif',
              letterSpacing: '-0.01em'
            }}>
              About AdsPerform
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              We're on a mission to simplify performance marketing for DTC brands.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'left' }}
          >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '2rem',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Our Story
              </h2>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Founded in 2024, AdsPerform was born from the frustration of managing complex advertising campaigns across multiple platforms. We saw that DTC brands were spending more time on manual tasks and less time on what matters most - growing their business and serving their customers.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Our platform streamlines the entire performance marketing workflow, from creative insights and campaign launch to optimization and reporting. We believe that with the right tools, every brand can achieve exceptional advertising performance without the complexity.
              </p>
              
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '2rem',
                marginTop: '3rem',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Our Mission
              </h2>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#4b5563',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                To democratize performance marketing by making it accessible, efficient, and profitable for DTC brands of all sizes. We're building the tools that will help brands focus on what they do best - creating amazing products and experiences for their customers.
              </p>
              
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '2rem',
                marginTop: '3rem',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Our Values
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '1rem'
                  }}>
                    Simplicity
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    We believe the best tools are the ones you don't have to think about. Our platform is designed to be intuitive and efficient.
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '1rem'
                  }}>
                    Performance
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    Everything we build is focused on driving real results. We measure success by your success.
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '1rem'
                  }}>
                    Innovation
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    We're constantly exploring new technologies and approaches to stay ahead of the curve.
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '1rem'
                  }}>
                    Partnership
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    We succeed when our customers succeed. We're here to be your long-term partner in growth.
                  </p>
                </div>
              </div>
          </motion.div>
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
                    📷
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578346028005" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    📘
                  </a>
                  <a href="#" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    𝕏
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    💼
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

export default AboutPage; 