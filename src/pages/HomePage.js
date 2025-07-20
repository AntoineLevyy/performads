import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, BarChart3, Link2, Star } from 'lucide-react';
import '../App.css';

function HomePage() {
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
        <div className="hero-container" style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
          <motion.div 
            className="hero-content"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="badge">
              <Sparkles size={16} />
              <span>Performance marketing agency for the AI era</span>
            </div>
            <h1 className="hero-title">
              Helping performace marketers navigate the AI era
            </h1>
            <p className="hero-subtitle">
              Next-generation performance marketing agency leveraging AI to transform how brands grow online. From AI-generated Ads to AI automation and SEO in AI (GEO), we help you stay ahead in the digital era.
            </p>
            <div className="hero-stats" style={{ justifyContent: 'center' }}>
              <div className="stat">
                <span className="stat-number">AI</span>
                <span className="stat-label">Generated Ads</span>
              </div>
              <div className="stat">
                <span className="stat-number">GEO</span>
                <span className="stat-label">SEO in AI</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Automation</span>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="/agency" className="btn-primary" style={{ textDecoration: 'none' }}>
                Agency Services <ArrowRight size={20} />
              </a>
              <a href="/product" className="btn-secondary" style={{ textDecoration: 'none' }}>
                Our Product <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agency & Product Feature Snippets */}
      <section className="features" style={{ paddingTop: 0 }}>
        <div className="features-container">
          <div className="features-header" style={{ marginBottom: '2.5rem' }}>
            <h2>What We Offer</h2>
            <p>Explore our agency services and our innovative product</p>
          </div>
          <div className="features-grid">
            {/* Agency Snippet */}
            <div className="feature-card">
              <div className="feature-icon"><Sparkles size={32} /></div>
              <h3>Agency: AI for Your Brand</h3>
              <p>We analyse how your brand can best leverage AI. Our team tests cutting-edge AI products in the context of your brand, always with performance and business KPIs in mind.</p>
              <ul style={{ textAlign: 'left', margin: '1.5rem 0 1rem 0', paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                <li><b>AI Analysis</b>: Discover the best AI tools for your business</li>
                <li><b>Brand Context Testing</b>: We test GEO, AI creative generation, AI automation, and more</li>
                <li><b>Performance Focus</b>: All recommendations are tied to your business KPIs</li>
                <li><b>Implementation</b>: We help you activate and optimise the right AI solutions</li>
              </ul>
              <a href="/agency" className="btn-secondary" style={{ textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>Learn more</a>
            </div>
            {/* Product Snippet */}
            <div className="feature-card">
              <div className="feature-icon"><Star size={32} /></div>
              <h3>Our Product</h3>
              <p>All-in-one platform to create, launch, and optimise ads in 1 click. AI-powered, fast, and built for results.</p>
              <ul style={{ textAlign: 'left', margin: '1.5rem 0 1rem 0', paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                <li><b>Lightning Fast</b>: Launch campaigns in under 60 seconds</li>
                <li><b>AI-Powered Targeting</b>: Find your ideal audience automatically</li>
                <li><b>Real-Time Optimization</b>: Maximise ROI with continuous improvements</li>
              </ul>
              <a href="/product" className="btn-secondary" style={{ textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>Learn more</a>
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

export default HomePage; 