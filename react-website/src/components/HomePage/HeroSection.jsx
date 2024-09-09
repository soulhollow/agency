
import React from 'react';
import './HomePage.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Transform Your Business with AI</h1>
        <p>Meet our powerful AI agent, designed to optimize your workflow.</p>
        <a href="/about" className="cta-button">Learn More</a>
      </div>
      <img src="/path-to-hero-image.png" alt="AI Agent" className="hero-image" />
    </section>
  );
}

export default HeroSection;
