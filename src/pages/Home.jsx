// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SelectedWork from '../components/home/SelectedWork';
import ServicesOverview from '../components/home/ServicesOverview';
import WhySmotiva from '../components/home/WhySmotiva';
import ProcessOverview from '../components/home/ProcessOverview';
import AboutSection from '../components/home/AboutSection';
import CtaSection from '../components/home/CtaSection';

export default function Home({ onOpenProjectModal }) {
  const handleScrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* 01. Hero */}
      <HeroSection 
        onStartProject={onOpenProjectModal} 
        onExploreWork={handleScrollToWork} 
      />

      {/* 02. Selected Work */}
      <SelectedWork 
        onStartProject={onOpenProjectModal} 
      />

      {/* 03. Services */}
      <ServicesOverview 
        onStartProject={onOpenProjectModal} 
      />

      {/* 04. Why Smotiva / Positioning */}
      <WhySmotiva />

      {/* 05. Process */}
      <ProcessOverview />

      {/* 06. About */}
      <AboutSection />

      {/* 07. Final CTA */}
      <CtaSection 
        onStartProject={onOpenProjectModal} 
      />
    </div>
  );
}
