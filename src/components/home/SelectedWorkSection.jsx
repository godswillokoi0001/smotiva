// src/components/home/SelectedWorkSection.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Layers, CheckCircle2, TrendingUp } from 'lucide-react';
import { caseStudies } from '../../data/brandData';
import CaseStudyModal from '../common/CaseStudyModal';

export default function SelectedWorkSection({ onStartProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8EF] border-t border-b border-[#E8E3D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#E8E3D5]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
              <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
              <span>Evidence of Systemic Craft</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-smotiva-carbon tracking-tight leading-tight">
              Selected Case Studies
            </h2>

            <p className="font-body text-neutral-600 text-lg leading-relaxed">
              We do not present static screenshots. We present the commercial barrier, 
              the diagnostic thinking, and the verifiable business outcome.
            </p>
          </div>

          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-smotiva-blue hover:text-smotiva-coral transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Case Studies List with Real Photography */}
        <div className="mt-14 space-y-12">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl border border-[#E8E3D5] bg-white hover:border-smotiva-blue hover:shadow-brand-card transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Imagery Frame (Lg: 5 Cols) */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-smotiva-carbon overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smotiva-carbon/80 via-smotiva-carbon/20 to-transparent" />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-white/95 text-smotiva-carbon shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Client & Year Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                      {project.industry}
                    </div>
                    <div className="font-heading text-lg font-bold">
                      {project.client}
                    </div>
                  </div>
                </div>

                {/* Narrative & Metrics Column (Lg: 7 Cols) */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500 font-medium">
                        Case Study • {project.year}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-smotiva-blue group-hover:text-smotiva-coral transition-colors">
                        <span>Inspect Architecture</span>
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-smotiva-carbon group-hover:text-smotiva-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-heading text-base sm:text-lg text-neutral-600 font-medium leading-snug">
                      {project.tagline}
                    </p>

                    <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Challenge & Result Preview */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] text-xs">
                      <div className="font-heading font-bold uppercase tracking-wider text-smotiva-coral mb-1">
                        The Challenge:
                      </div>
                      <p className="font-body text-neutral-700 line-clamp-3">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8EF] border border-[#E8E3D5] text-xs">
                      <div className="font-heading font-bold uppercase tracking-wider text-smotiva-blue mb-1 flex items-center gap-1">
                        <TrendingUp size={12} />
                        The Result:
                      </div>
                      <p className="font-body text-neutral-800 font-medium line-clamp-3">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="pt-4 border-t border-[#E8E3D5] flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-heading text-xl font-bold text-smotiva-blue">
                            {m.value}
                          </div>
                          <div className="text-[10px] uppercase font-body text-neutral-500 tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-xl bg-smotiva-carbon text-white text-xs font-heading font-bold hover:bg-smotiva-blue transition-colors"
                    >
                      Read Full Case Study
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
}
