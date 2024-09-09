
import React from 'react';
import './AboutPage.css';
import OverviewSection from './OverviewSection';
import TechSpecsSection from './TechSpecsSection';
import HowItWorksSection from './HowItWorksSection';
import TeamSection from './TeamSection';

function AboutPage() {
  return (
    <div className="about-page">
      <OverviewSection />
      <TechSpecsSection />
      <HowItWorksSection />
      <TeamSection />
    </div>
  );
}

export default AboutPage;
