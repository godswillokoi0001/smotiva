import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6
      } 
    },
  };

  const problems = [
    {
      title: "Inconsistent branding across platforms",
      description: "Your logo looks different on social media, your website colors don't match your business cards, and your messaging varies from channel to channel."
    },
    {
      title: "Websites that don't communicate value",
      description: "Your site has pretty graphics but fails to clearly explain what you do, who you serve, or why anyone should choose you."
    },
    {
      title: "Social media presence lacking direction",
      description: "Posts feel random and disconnected, failing to build a cohesive narrative or drive meaningful engagement."
    },
    {
      title: "Design that looks good but doesn't align",
      description: "Visuals are polished but don't support your core message, leaving audiences confused about your true value proposition."
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            The Cost of Brand Inconsistency
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Most businesses suffer from disconnected digital elements that dilute their impact and confuse their audience.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-8 rounded-lg border border-neutral-gray/20"
            >
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}