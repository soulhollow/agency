// src/components/BuyPage/PaymentSection.js
import React from 'react';
import './BuyPage.css';

function PaymentSection() {
  return (
    <section className="payment-section">
      <h2>Complete Your Purchase</h2>
      <form className="payment-form">
        <label>
          Name on Card:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Card Number:
          <input type="text" name="cardnumber" placeholder="Card Number" required />
        </label>
        <label>
          Expiration Date:
          <input type="text" name="expiration" placeholder="MM/YY" required />
        </label>
        <label>
          CVC:
          <input type="text" name="cvc" placeholder="CVC" required />
        </label>
        <button type="submit" className="submit-button">Buy Now</button>
      </form>
    </section>
  );
}

export default PaymentSection;
