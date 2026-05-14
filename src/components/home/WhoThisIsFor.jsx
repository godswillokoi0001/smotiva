import React from 'react';
import { motion } from 'framer-motion';

export default function WhoThisIsFor() {
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

  const audiences = [
    {
      title: "Startups building from scratch",
      description: "You have a great idea and product, but your online presence doesn't reflect the professionalism and clarity needed to attract investors and customers."
    },
    {
      title: "Small businesses leveling up",
      description: "You're established but your digital footprint is holding you back from reaching the next level of growth and market presence."
    },
    {
      title: "Personal brands trying to look professional",
      description: "You know you're an expert, but your online presence doesn't communicate that authority and credibility to your audience."
    },
    {
      title: "Businesses already operating but lacking structure",
      description: "You have something working, but inconsistency across your digital channels is limiting your potential and confusing your customers."
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
            Who This Is For
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto mb-8">
            They already have something working. The problem is clarity.
          </p>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            Businesses ready to transform fragmented digital efforts into structured brand systems that drive growth.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-neutral-light p-8 rounded-lg border border-neutral-gray/20"
            >
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                {audience.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}