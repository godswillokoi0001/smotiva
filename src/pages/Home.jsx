// src/pages/Home.jsx (Updated)
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SmotivaApproach from '../components/home/SmotivaApproach';
import WhatSmotivaDoes from '../components/home/WhatSmotivaDoes';
import WhoThisIsFor from '../components/home/WhoThisIsFor';
import SelectedWork from '../components/home/SelectedWork';
import HomeCta from '../components/home/HomeCta'; // NEW IMPORT

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Note: Header is rendered in App.jsx */}
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <SmotivaApproach />
      <WhatSmotivaDoes />
      <WhoThisIsFor />
      <SelectedWork />

      {/* --------------------- FINAL CTA SECTION --------------------- */}
      <HomeCta onNavigate={onNavigate} />
      {/* ------------------------------------------------------------- */}

      {/* Note: Footer is rendered in App.jsx */}
    </div>
  );
}