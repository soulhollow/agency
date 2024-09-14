// src/components/ContactPage/FAQSection.js
import React from 'react';
import './ContactPage.css';

function FAQSection() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How can I purchase the AI agent?</h3>
          <p>You can purchase the AI agent directly from our Buy page by selecting a plan that suits your needs.</p>
        </div>
        <div className="faq-item">
          <h3>What support options are available?</h3>
          <p>We offer 24/7 customer support for all plans, with priority support for Enterprise customers.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
