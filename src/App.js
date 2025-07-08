import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Zap, TrendingUp, Target } from 'lucide-react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="App">
      {/* Background Gradients */}
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>

      {/* Navigation */}
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
            <button className="btn-secondary">Sign In</button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="badge">
              <Star size={16} />
              <span>Revolutionary Ad Platform</span>
            </div>
            
            <h1 className="hero-title">
              Create, Launch and Optimize Ads in 1 click
            </h1>
            
            <p className="hero-subtitle">
              The future of advertising is here. adsperform combines AI-powered optimization, 
              real-time analytics, and seamless campaign management in one powerful platform.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10x</span>
                <span className="stat-label">Faster Setup</span>
              </div>
              <div className="stat">
                <span className="stat-number">50%</span>
                <span className="stat-label">Cost Reduction</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
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
                    <div className="metric-icon">📈</div>
                    <div className="metric-text">
                      <div className="metric-value">+247%</div>
                      <div className="metric-label">ROAS</div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-icon">🎯</div>
                    <div className="metric-text">
                      <div className="metric-value">1.2M</div>
                      <div className="metric-label">Impressions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <motion.div 
            className="features-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose adsperform?</h2>
            <p>Built for modern advertisers who demand results</p>
          </motion.div>

          <div className="features-grid">
            {[
              {
                icon: <Zap size={32} />,
                title: "Lightning Fast",
                description: "Create and launch campaigns in under 60 seconds with our streamlined interface."
              },
              {
                icon: <Target size={32} />,
                title: "AI-Powered Targeting",
                description: "Advanced algorithms that automatically find and target your ideal audience."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Real-Time Optimization",
                description: "Continuous monitoring and automatic adjustments to maximize your ROI."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="waitlist">
        <div className="waitlist-container">
          <motion.div 
            className="waitlist-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join the Future of Advertising</h2>
            <p>Be among the first to experience the next generation of ad management. 
               Early access coming soon.</p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="waitlist-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button type="submit" className="btn-primary">
                    Join Waitlist
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Check size={24} />
                <span>You're on the list! We'll notify you when we launch.</span>
              </motion.div>
            )}


          </motion.div>
        </div>
      </section>

      {/* Footer */}
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

export default App; 