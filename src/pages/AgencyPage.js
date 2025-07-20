import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck2, Rocket, BarChart3, Repeat2, ArrowRight } from 'lucide-react';
import '../App.css';

function AgencyPage() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-text">adsperform</span>
          </motion.div>
          <motion.div 
            className="nav-cta"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/product" className="btn-secondary">Product</a>
          </motion.div>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="badge">
              <Rocket size={16} />
              <span>AI Analysis & Consultancy</span>
            </div>
            <h1 className="hero-title">
              Unlocking AI for Your Brand
            </h1>
            <p className="hero-subtitle">
              We analyse how your brand can best leverage AI. Our team tests the latest AI products in the context of your brand, always with performance and business KPIs in mind. From GEO to AI creative generation and automation, we help you unlock the true value of AI for your business.
            </p>
            <a href="mailto:antoine.levy27@gmail.com?subject=adsperform%20Agency%20Enquiry" className="btn-primary" style={{ textDecoration: 'none', marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Contact Us <ArrowRight size={20} />
            </a>
          </motion.div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-chart">
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                  <div className="chart-line"></div>
                </div>
                <div className="mockup-metrics">
                  <div className="metric">
                    <div className="metric-icon">💡</div>
                    <div className="metric-text">
                      <div className="metric-value">Strategy</div>
                      <div className="metric-label">Expertise</div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-icon">🚀</div>
                    <div className="metric-text">
                      <div className="metric-value">Growth</div>
                      <div className="metric-label">Activation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agency Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>How We Help Brands Win with AI</h2>
            <p>Our proven process for unlocking real value from AI in your marketing</p>
          </div>
          <div className="features-grid agency-features-grid">
            <div className="feature-card">
              <div className="feature-icon"><CalendarCheck2 size={32} /></div>
              <h3>AI Opportunity Analysis</h3>
              <p>We assess your business and identify the most impactful AI opportunities, tailored to your brand and market.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Rocket size={32} /></div>
              <h3>Brand Context Testing</h3>
              <p>We rigorously test AI products—GEO, AI creative generation, automation, and more—within your brand’s real-world context.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BarChart3 size={32} /></div>
              <h3>Performance & KPI Focus</h3>
              <p>All recommendations and implementations are measured against your business KPIs and performance goals.</p>
            </div>
            <div className="feature-card wide-feature">
              <div className="feature-icon"><Repeat2 size={32} /></div>
              <h3>Activation & Optimisation</h3>
              <p>We help you activate, integrate, and continuously optimise the right AI solutions for your business growth.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">adsperform</span>
              <p>The future of advertising</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 adsperform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AgencyPage; 