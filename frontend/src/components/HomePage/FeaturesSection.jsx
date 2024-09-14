
import React from 'react';
import './HomePage.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src="/path-to-icon1.png" alt="Feature 1" />
          <h3>Automation</h3>
          <p>Automate your tasks effortlessly.</p>
        </div>
        <div className="feature-card">
          <img src="/path-to-icon2.png" alt="Feature 2" />
          <h3>Scalability</h3>
          <p>Easily scale with your business needs.</p>
        </div>
        <div className="feature-card">
          <img src="/path-to-icon3.png" alt="Feature 3" />
          <h3>24/7 Support</h3>
          <p>Get support whenever you need it.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
