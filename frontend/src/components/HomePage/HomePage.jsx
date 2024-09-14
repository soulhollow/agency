
import React from 'react';
import './HomePage.css';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import OverviewVideo from './OverviewVideo';

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesSection />
      <OverviewVideo />
    </div>
  );
}

export default HomePage;
