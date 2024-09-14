// src/components/BuyPage/CustomerReviewsSection.js
import React from 'react';
import './BuyPage.css';

function CustomerReviewsSection() {
  return (
    <section className="customer-reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="review-carousel">
        <div className="review-card">
          <p className="customer-name">Alice Johnson</p>
          <p className="review-text">This AI agent transformed our business operations!</p>
          <p className="rating">★★★★★</p>
        </div>
        <div className="review-card">
          <p className="customer-name">Bob Smith</p>
          <p className="review-text">Great product with excellent customer support.</p>
          <p className="rating">★★★★☆</p>
        </div>
        {/* Add more reviews as needed */}
      </div>
    </section>
  );
}

export default CustomerReviewsSection;
