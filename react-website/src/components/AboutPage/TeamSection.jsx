// src/components/AboutPage/TeamSection.js
import React from 'react';
import './AboutPage.css';

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src="/path-to-photo.jpg" alt="Alexander Ruffner" />
          <h3>Alexander Ruffner</h3>
          <p>Lead AI Manager</p>
          <p>Alexander is good ... ... bla blöa bla balo b akbkbadkbd iid  </p>
        </div>
        <div className="team-member">
          <img src="/path-to-photo.jpg" alt="Florian Ruffner" />
          <h3>Florian Ruffner</h3>
          <p>Big Titel</p>
          <p>Florian is bla . ... bla blöa bla balo b akbkbad</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
}

export default TeamSection;
