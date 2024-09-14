// src/components/BuyPage/FeaturesComparisonSection.js
import React from 'react';
import './BuyPage.css';

function FeaturesComparisonSection() {
  return (
    <section className="features-comparison-section">
      <h2>Compare Features</h2>
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
            <td>Automation</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>Scalability</td>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>24/7 Support</td>
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
