// src/components/ContactPage/LocationInfoSection.js
import React from 'react';
import './ContactPage.css';

function LocationInfoSection() {
  return (
    <section className="location-info-section">
      <h2>Our Location</h2>
      <div className="address-block">
        <p>123 AI Street</p>
        <p>Tech City, TC 45678</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: contact@aicompany.com</p>
      </div>
      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509412!2d144.95565131548283!3d-37.81720984202179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4ab0b77%3A0x5045675218ce7e33!2z44CSMzAwMCBTYW4gRnJhbmNpc2NvLCBDQSwg77yI5p2J77yJ!5e0!3m2!1sen!2sus!4v1635301492857!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationInfoSection;
