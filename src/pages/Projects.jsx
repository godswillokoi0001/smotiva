// src/components/projects/ProjectsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

// ... (projectsData remains the same)
const projectsData = [
  { id: 1, title: 'TopTier Homes & Properties Ltd', category: 'Web App & Branding', link: '#' },
  { id: 2, title: 'Discreet Technology', category: 'Software Development', link: '#' },
  { id: 3, title: 'CloudMedia', category: 'Visual Identity', link: '#' },
  { id: 4, title: 'Power Solutions', category: 'E-commerce Platform', link: '#' },
  { id: 5, title: 'The Alchemist', category: 'Content Strategy', link: '#' },
  { id: 6, title: 'EcoPilot', category: 'Mobile UI/UX', link: '#' },
  { id: 7, title: 'Smotiva Creative Launch', category: 'Marketing Campaign', link: '#' },
  { id: 8, title: 'Church Element Tutorials', category: 'Educational Portal', link: '#' },
  { id: 9, title: 'Inspire Transformation', category: 'Leadership Branding', link: '#' },
  { id: 10, title: 'The School of Prophets', category: 'Custom CMS', link: '#' },
];

// ... (Framer Motion Variants remain the same for staggered reveal)
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05, }, }, };
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 10, },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants} 
      // HIGH CONTRAST FIX: Use solid secondary-dark background and strong border/shadow
      className="block p-6 rounded-xl bg-secondary-dark text-white shadow-2xl transition-all duration-300 hover:shadow-primary-dark/50 hover:border-accent-teal border-b-4 border-transparent group"
    >
      <div className="h-28 mb-4 flex items-end justify-between">
          <div className="space-y-1">
              {/* HIGH CONTRAST FIX: Use pure white for the title for better contrast */}
              <h3 className="text-xl font-heading font-bold mb-1 text-white group-hover:text-accent-teal transition duration-300">
                  {project.title}
              </h3>
              {/* HIGH CONTRAST FIX: Use neutral-gray which is a medium gray for better readability than lighter opacity */}
              <p className="text-sm font-body text-neutral-gray">
                  {project.category}
              </p>
          </div>
          {/* Accent icon should pop */}
          <ArrowUpRight size={24} className="text-accent-cyan transition duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      {/* Visual Placeholder Enhancement: Use primary-dark background with a bright accent pulse on hover */}
      <div className="bg-primary-dark h-32 rounded-lg flex items-center justify-center border-2 border-primary-dark group-hover:border-accent-teal transition duration-300">
          <span className="text-base font-body text-neutral-gray/70">Visual Preview</span>
      </div>
    </motion.a>
  );
};


export default function ProjectsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const gridProjects = projectsData.slice(0, 9);
  const finalProject = projectsData[9];

  return (
    // Section uses light background (neutral-light) to further contrast the dark cards
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-center text-2xl font-heading font-bold text-primary-dark mb-8">
            Featured Projects
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* First 9 Projects */}
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Tenth Project - Unique Layout */}
          <div className="lg:col-span-3 flex justify-center mt-4">
              <div className="w-full max-w-sm">
                 <ProjectCard project={finalProject} />
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}