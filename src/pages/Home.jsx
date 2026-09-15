// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DisciplinesShowcase from '../components/home/DisciplinesShowcase';
import SelectedWork from '../components/home/SelectedWork';
import ProblemSection from '../components/home/ProblemSection';
import ProjectDiagnostic from '../components/home/ProjectDiagnostic';
import ClientFeedback from '../components/home/ClientFeedback';
import InsideSmotivaSection from '../components/home/InsideSmotivaSection';
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
      {/* 01. Editorial Hero with Live Studio Status in Abuja */}
      <HeroSection 
        onStartProject={onOpenProjectModal} 
        onExploreWork={handleScrollToWork} 
      />

      {/* 02. Core Capabilities & Real Discipline Visual Showcase */}
      <DisciplinesShowcase 
        onStartProject={onOpenProjectModal} 
      />

      {/* 03. Selected Case Archive */}
      <SelectedWork 
        onStartProject={onOpenProjectModal} 
      />

      {/* 04. The Diagnostic Reality (Fragmented vs Coherent) */}
      <ProblemSection 
        onStartProject={onOpenProjectModal} 
      />

      {/* 05. Interactive Scope & Bottleneck Diagnostic */}
      <ProjectDiagnostic 
        onStartProject={onOpenProjectModal} 
      />

      {/* 06. Verified Client Results & Commercial Metrics */}
      <ClientFeedback />

      {/* 07. Inside Smotiva Studio Philosophy & Principles */}
      <InsideSmotivaSection />

      {/* 08. High-Impact Closing CTA */}
      <CtaSection 
        onStartProject={onOpenProjectModal} 
      />
    </div>
  );
}
