// src/components/BuyPage/ProductOptionsSection.js
import React from 'react';
import './BuyPage.css';

function ProductOptionsSection() {
  return (
    <section className="product-options-section">
      <h2>Choose Your AI Agent Plan</h2>
      <div className="pricing-table">
        <div className="option-card">
          <h3>Basic</h3>
          <p className="price">$19.99/month</p>
          <ul className="features-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="option-card">
          <h3>Pro</h3>
          <p className="price">$49.99/month</p>
          <ul className="features-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="option-card">
          <h3>Enterprise</h3>
          <p className="price">Contact Us</p>
          <ul className="features-list">
            <li>All features</li>
            <li>Priority support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="buy-button">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default ProductOptionsSection;
