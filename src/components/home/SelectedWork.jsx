// src/components/home/SelectedWork.jsx
import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/brandData';

export default function SelectedWork({ onStartProject }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-smotiva-border dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-smotiva-border dark:border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-blue">
              02 / Selected Case Archive
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.12]">
              Work that moves businesses forward.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
            Every project represents a commercial challenge solved with strategic clarity, disciplined typography, and high-performance engineering.
          </p>
        </div>

        {/* Projects List - Editorial Dignified Layout */}
        <div className="divide-y divide-smotiva-border dark:divide-neutral-800">
          {caseStudies.map((project, idx) => (
            <div 
              key={project.id}
              className="py-16 sm:py-20 first:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
            >
              {/* Image Preview */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-[16/10] relative shadow-xs"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/90 text-white text-xs font-heading font-medium px-4 py-2 rounded-md inline-flex items-center gap-1.5 shadow-lg">
                      View Case Details <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Text */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-heading font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {project.industry} • {project.year}
                    </span>
                  </div>
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="cursor-pointer font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white group-hover:text-smotiva-blue transition-colors"
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="text-xs font-heading font-semibold text-smotiva-coral uppercase tracking-wide">
                  {project.category}
                </div>

                <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Deliverable Tags */}
                <div className="pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                    Delivered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.slice(0, 3).map((item, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md border border-smotiva-border dark:border-neutral-800 text-smotiva-charcoal dark:text-neutral-300 bg-white dark:bg-neutral-900/50"
                      >
                        {item}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-xs px-2 py-1 text-neutral-400 font-mono">
                        +{project.deliverables.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-heading font-semibold text-smotiva-blue inline-flex items-center gap-1 hover:underline"
                  >
                    Read case study breakdown <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Archive Link */}
        <div className="mt-12 pt-8 border-t border-smotiva-border dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-body text-neutral-500 dark:text-neutral-400">
            Have a commercial challenge similar to these? We diagnose before quoting.
          </p>
          <Link
            to="/work"
            className="text-xs font-heading font-semibold text-smotiva-blue hover:underline inline-flex items-center gap-1.5"
          >
            <span>Explore all case archives</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case Study Detail Modal */}
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveModalProject(null)}
          >
            <div 
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-smotiva-border dark:border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b pb-6 border-smotiva-border dark:border-neutral-800">
                <div className="space-y-1">
                  <span className="text-xs font-heading uppercase tracking-wider text-smotiva-blue font-semibold">
                    {activeModalProject.industry} • {activeModalProject.year}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {activeModalProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-lg border border-smotiva-border dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-smotiva-border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge & Thinking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                    The Commercial Challenge
                  </h4>
                  <p className="font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                    Strategic Thinking
                  </h4>
                  <p className="font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {activeModalProject.thinking}
                  </p>
                </div>
              </div>

              {/* Deliverables Delivered */}
              <div className="space-y-3 pt-2 border-t border-smotiva-border dark:border-neutral-800">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                  Deliverables & Execution
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.work.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 size={14} className="text-smotiva-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-smotiva-border dark:border-neutral-800 flex justify-between items-center">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onStartProject();
                  }}
                  className="px-6 py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity"
                >
                  Start a project like this →
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs text-neutral-500 hover:underline font-body"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
