import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.17, 0.55, 0.55, 1]
      } 
    },
  };

  return (
    <section className="relative pt-32 pb-24 bg-white min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={item}
            className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black text-neutral-dark leading-none tracking-tight"
          >
            We fix how businesses show up online.
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl sm:text-2xl text-neutral-gray font-body max-w-3xl mx-auto leading-relaxed"
          >
            Smotiva builds structured brand systems that align identity, messaging, design, and websites into one cohesive direction—eliminating inconsistency and driving clarity.
          </motion.p>

          <motion.div
            variants={item}
            className="pt-8"
          >
            <NavLink
              to="/contact"
              className="inline-block bg-accent-teal hover:bg-opacity-90 text-white font-heading font-bold py-4 px-10 rounded-lg transition duration-300 text-xl"
            >
              Start Brand Audit
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}