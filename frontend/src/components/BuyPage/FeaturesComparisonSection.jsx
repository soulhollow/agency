// src/components/BuyPage/FeaturesComparisonSection.js
import React from 'react';
import './BuyPage.css';

function FeaturesComparisonSection() {
  return (
    <section className="features-comparison-section">
      <h2>Features vergleichen</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zeitplanung</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>Content-Planung</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>Performance-Tracking & Analyse</td>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>24/7 Beratung</td>
            <td>❌</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default FeaturesComparisonSection;
