// src/components/HomePage/OverviewVideo.js
import React from 'react';
import './HomePage.css';

function OverviewVideo() {
  return (
    <section className="overview-video">
      <h2>See Our AI Agent in Action</h2>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <p>Learn how our AI agent can revolutionize your business operations.</p>
    </section>
  );
}

export default OverviewVideo
