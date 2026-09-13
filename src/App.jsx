// src/App.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProjectIntakeModal from './components/common/ProjectIntakeModal';

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Approach = lazy(() => import('./pages/Approach'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleOpenProjectModal = () => {
    setProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setProjectModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF8EF] dark:bg-[#121212] text-smotiva-carbon dark:text-neutral-100 font-body flex flex-col selection:bg-smotiva-coral selection:text-white transition-colors duration-200">
        <ScrollToTop />
        
        {/* Global Header */}
        <Header onOpenProjectModal={handleOpenProjectModal} />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-smotiva-blue border-t-smotiva-coral animate-spin" />
                <span className="text-xs font-heading font-bold text-neutral-500 tracking-wider uppercase">
                  Loading Smotiva System...
                </span>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/about" element={<About onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/services" element={<Services onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/projects" element={<Projects onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/work" element={<Projects onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/approach" element={<Approach onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onOpenProjectModal={handleOpenProjectModal} />

        {/* Global Project Intake Modal */}
        <ProjectIntakeModal
          isOpen={projectModalOpen}
          onClose={handleCloseProjectModal}
        />
      </div>
    </ThemeProvider>
  );
}
