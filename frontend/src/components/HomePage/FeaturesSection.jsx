
import React from 'react';
import './HomePage.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src="../../../pictures/Flexibel.png" alt="Flexibel"/>
          <h3>Flexibel</h3>
          <p>Bei MediaFlow sind Sie vollkommen flexibel: Passen Sie Ihren Tarif jederzeit an - ganz nach ihren individuellen Bedürfnissen.</p>
        </div>
        <div className="feature-card">
          <img src="Individuell.jpg" alt="Individuell" />
          <h3>Individuell</h3>
          <p>MediaFlow richtet sich exakt nach Ihren Anforderungen - maßgeschneidert auf Ihr Unternehmen und spezifischen Zielen.</p>
        </div>
        <div className="feature-card">
          <img src="Effektiv.jpg" alt="Effektiv" />
          <h3>Effektiv</h3>
          <p>Mit MediaFlow arbeiten Sie effizient und zielgerichtet. Dank unseres Fachwissens sind unsere Strategien so optimiert, dass Sie Ihre Ziele möglich schnell und effektiv erreichen.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
