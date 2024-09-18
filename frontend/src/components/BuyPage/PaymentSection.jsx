// src/components/BuyPage/PaymentSection.js
import React from 'react';
import './BuyPage.css';

function PaymentSection() {
  return (
    <section className="payment-section">
      <h2>Kauf abschließen</h2>
      <form className="payment-form">
        <label>
          Kartenname:
          <input type="text" name="name" placeholder="Dein Name" required />
        </label>
        <label>
          Kartennummer:
          <input type="text" name="cardnumber" placeholder="Deine Nummer" required />
        </label>
        <label>
          Ablaufdatum:
          <input type="text" name="expiration" placeholder="MM/JJ" required />
        </label>
        <label>
          CVC:
          <input type="text" name="cvc" placeholder="CVC" required />
        </label>
        
      </form>
      <button type="submit" className="submit-button">Jetzt kaufen</button>
    </section>
  );
}

export default PaymentSection;
