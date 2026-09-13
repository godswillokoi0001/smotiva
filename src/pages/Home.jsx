// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import InsideSmotivaSection from '../components/home/InsideSmotivaSection';
import ProblemSection from '../components/home/ProblemSection';
import BrandRealityGallery from '../components/home/BrandRealityGallery';
import ApproachSection from '../components/home/ApproachSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import SelectedWorkSection from '../components/home/SelectedWorkSection';
import WhoWeHelpSection from '../components/home/WhoWeHelpSection';
import WhySmotivaSection from '../components/home/WhySmotivaSection';
import BrandStatementSection from '../components/home/BrandStatementSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Home({ onOpenProjectModal }) {
  const navigate = useNavigate();

  const handleExploreWork = () => {
    navigate('/projects');
  };

  const handleExploreApproach = () => {
    navigate('/approach');
  };

  return (
    <div className="min-h-screen bg-[#FAF8EF] text-smotiva-carbon selection:bg-smotiva-coral selection:text-white">
      {/* 01. Hero Section with The Visual Hook & Brand Diagnostic Cockpit */}
      <HeroSection 
        onStartProject={onOpenProjectModal} 
        onExploreWork={handleExploreWork} 
      />

      {/* 02. Inside Smotiva: Philosophy & 5 Core Design Principles (Direct from Brand Book) */}
      <InsideSmotivaSection onExploreApproach={handleExploreApproach} />

      {/* 03. The Problem: "Your brand shouldn't feel like five different businesses." */}
      <ProblemSection onStartProject={onOpenProjectModal} />

      {/* 04. Real-World Brand Execution & Tangible Lookbook Gallery */}
      <BrandRealityGallery />

      {/* 05. The Approach: "We don't start with design." */}
      <ApproachSection onStartProject={onOpenProjectModal} />

      {/* 06. The Services: 4-Pillar Unified Brand System */}
      <ServicesSection onStartProject={onOpenProjectModal} />

      {/* 07. The Process: Understand, Define, Build, Connect, Grow */}
      <ProcessSection onStartProject={onOpenProjectModal} />

      {/* 08. Selected Work: Editorial Case Studies with Real Project Imagery */}
      <SelectedWorkSection onStartProject={onOpenProjectModal} />

      {/* 09. Who We Help: The 4 Target Archetypes */}
      <WhoWeHelpSection onStartProject={onOpenProjectModal} />

      {/* 10. Why Smotiva: The Systemic Difference */}
      <WhySmotivaSection onStartProject={onOpenProjectModal} />

      {/* 11. Brand Statement: THINK CLEARLY. KNOW YOUR REASON. EXECUTE CREATIVELY. */}
      <BrandStatementSection />

      {/* 12. Final Decisive Call to Action */}
      <FinalCtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
