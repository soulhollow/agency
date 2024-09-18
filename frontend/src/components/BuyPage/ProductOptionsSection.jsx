// src/components/BuyPage/ProductOptionsSection.js
import React from 'react';
import './BuyPage.css';

function ProductOptionsSection() {
  return (
    <section className="product-options-section">
      <h2>Wähle einen passenden Tarif</h2>
      <div className="pricing-table">
        <div className="option-card">
          <h3>Basic</h3>
          <p className="price">19.99€/Monat</p>
          <ul className="features-list">
            <li>Zeitplanung</li>
            <li>Content-Planung</li>
          </ul>
          <button className="buy-button">Jetzt kaufen!</button>
        </div>
        <div className="option-card">
          <h3>Pro</h3>
          <p className="price">49.99€/Monat</p>
          <ul className="features-list">
            <li>Zeitplanung</li>
            <li>Content-Planung</li>
            <li>Performance-Tracking & Analyse</li>
            <li>Feature 4</li>
          </ul>
          <button className="buy-button">Jetzt kaufen!</button>
        </div>
        <div className="option-card">
          <h3>Enterprise</h3>
          <p className="price">Kontaktieren Sie uns</p>
          <ul className="features-list">
            <li>Zeitplanung</li>
            <li>Content-Planung</li>
            <li>Performance-Tracking & Analyse</li>
            <li>24/7 Beratung</li>
          </ul>
          <button className="buy-button">Sales kontaktieren</button>
        </div>
      </div>
    </section>
  );
}

export default ProductOptionsSection;
