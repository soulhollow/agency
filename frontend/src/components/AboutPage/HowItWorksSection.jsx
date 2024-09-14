
import React from 'react';
import './AboutPage.css';

function HowItWorksSection() {
  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Data Input</h3>
          <p>The AI agent begins by receiving data inputs from various sources.</p>
        </div>
        <div className="step">
          <h3>Step 2: Processing</h3>
          <p>It processes the data using advanced algorithms to generate insights.</p>
        </div>
        <div className="step">
          <h3>Step 3: Output & Action</h3>
          <p>Finally, IT provides actionable outputs that can be used to automate tasks or inform decisions.</p>
        </div>
      </div>
      <img src="/path-to-diagram.png" alt="Process Flow Diagram" />
    </section>
  );
}

export default HowItWorksSection;
