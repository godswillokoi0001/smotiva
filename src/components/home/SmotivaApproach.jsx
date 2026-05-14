import React from 'react';
import { motion } from 'framer-motion';

export default function SmotivaApproach() {
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
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6
      } 
    },
  };

  const steps = [
    {
      number: "01",
      title: "Understand brand direction and goals",
      description: "We start by clarifying your business objectives, target audience, and market position to establish a solid foundation."
    },
    {
      number: "02",
      title: "Define identity system",
      description: "Beyond logos, we create comprehensive visual guidelines that ensure consistency across all touchpoints."
    },
    {
      number: "03",
      title: "Align messaging and visuals",
      description: "We craft clear, compelling narratives that work in harmony with your visual identity."
    },
    {
      number: "04",
      title: "Build website structure and content flow",
      description: "Your website becomes a strategic tool that guides visitors through your value proposition."
    },
    {
      number: "05",
      title: "Ensure consistency across all platforms",
      description: "We implement systems that maintain brand integrity everywhere your audience encounters you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            The Smotiva Framework
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            A structured process that transforms fragmented brand efforts into cohesive systems that drive results.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex items-start space-x-12 border-b border-neutral-gray/20 pb-12 last:border-b-0"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl font-heading font-black text-accent-teal">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-neutral-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-neutral-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}