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
const Contact = lazy(() => import('./pages/Contact'));

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
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body flex flex-col selection:bg-smotiva-navy selection:text-white dark:selection:bg-smotiva-cyan dark:selection:text-smotiva-charcoal transition-colors duration-200">
        <ScrollToTop />
        
        {/* Global Header */}
        <Header onOpenProjectModal={handleOpenProjectModal} />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-smotiva-navy dark:border-smotiva-cyan border-t-transparent animate-spin" />
                <span className="text-xs font-heading font-semibold text-neutral-400 tracking-wider uppercase">
                  Loading Smotiva...
                </span>
              </div>
            </div>
          }>
            <Routes>
              {/* Primary 4 Information Architecture Pages */}
              <Route path="/" element={<Home onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/work" element={<Projects onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/projects" element={<Navigate to="/work" replace />} />
              <Route path="/services" element={<Services onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/about" element={<About onOpenProjectModal={handleOpenProjectModal} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/approach" element={<Navigate to="/about" replace />} />
              <Route path="/blog" element={<Navigate to="/work" replace />} />
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
