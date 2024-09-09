// src/components/ContactPage/ContactFormSection.js
import React from 'react';
import './ContactPage.css';

function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" placeholder="Subject" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" required></textarea>
        </label>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default ContactFormSection;
