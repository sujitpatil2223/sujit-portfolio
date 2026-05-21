import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mic, Cpu, Database, Eye, CreditCard } from 'lucide-react';

const Github = ({ size = 14, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: 'JARVIS-X AI Voice Assistant',
    description: 'An AI-powered desktop voice assistant that executes system automation, responds to queries, controls applications, and pulls real-time weather/news data via voice instructions.',
    tech: ['Python', 'Speech Recognition', 'Pyttsx3', 'APIs', 'Automation'],
    category: 'python',
    github: 'https://github.com',
    demo: '#',
    visual: (
      <div className="w-full h-48 bg-gradient-to-br from-cyan-900/60 to-slate-900 flex items-center justify-center relative overflow-hidden border-b border-white/5">
        {/* Animated Cyber Circles */}
        <div className="absolute w-32 h-32 rounded-full border border-cyan-500/20 animate-ping duration-3000" />
        <div className="absolute w-24 h-24 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute w-16 h-16 rounded-full border border-dashed border-purple-500/40 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
        <div className="z-10 p-4 rounded-full bg-slate-950/80 border border-cyan-500/30 text-cyan-400">
          <Mic size={32} className="animate-pulse" />
        </div>
        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-400/60">SYSTEM: ACTIVE</span>
      </div>
    )
  },
  {
    id: 2,
    title: 'Restaurant Management System',
    description: 'A database-driven application for restaurant administration. It manages menu selections, tracks user orders, logs relational transactions, and computes sales billing reports.',
    tech: ['Python', 'MySQL', 'Relational DB', 'SQL Queries', 'Tkinter'],
    category: 'python',
    github: 'https://github.com',
    demo: '#',
    visual: (
      <div className="w-full h-48 bg-gradient-to-br from-purple-900/60 to-slate-900 flex items-center justify-center relative overflow-hidden border-b border-white/5">
        {/* Relational Table Mockup */}
        <div className="absolute inset-x-8 top-8 bottom-8 rounded-lg bg-slate-950/80 border border-purple-500/20 p-3 font-mono text-[9px] text-purple-400 flex flex-col justify-between">
          <div className="border-b border-purple-500/20 pb-1.5 flex justify-between items-center text-slate-400">
            <span>TABLE: orders</span>
            <Database size={10} className="text-purple-400" />
          </div>
          <div className="space-y-1 text-slate-500">
            <div><span className="text-pink-400">id</span> INT PRIMARY KEY</div>
            <div><span className="text-pink-400">item_name</span> VARCHAR(100)</div>
            <div><span className="text-pink-400">quantity</span> INT</div>
            <div><span className="text-pink-400">total_price</span> DECIMAL(10,2)</div>
          </div>
          <div className="border-t border-purple-500/20 pt-1 text-[8px] text-emerald-400/80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Connected to MySQL
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'A highly interactive, mobile-first, and responsive portfolio designed to showcase projects, experience, services, and educational background with advanced micro-interactions.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'SEO Optimized'],
    category: 'web',
    github: 'https://github.com',
    demo: '#',
    visual: (
      <div className="w-full h-48 bg-gradient-to-br from-emerald-950/60 to-slate-900 flex items-center justify-center relative overflow-hidden border-b border-white/5">
        {/* Interface Mockup */}
        <div className="absolute inset-x-10 top-10 bottom-0 rounded-t-lg bg-slate-950/90 border-t border-x border-emerald-500/30 p-2.5 space-y-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <div className="h-2 w-24 rounded bg-slate-800" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-emerald-400">
              <Eye size={12} />
            </div>
            <div className="h-10 rounded bg-slate-900 border border-white/5" />
            <div className="h-10 rounded bg-slate-900 border border-white/5" />
          </div>
          <div className="h-4 rounded bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20" />
        </div>
      </div>
    )
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white"
          >
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 mt-4 text-lg"
          >
            A compilation of project showcases, backend applications, and frontend development works.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-3 md:gap-4 mb-12">
          {['all', 'python', 'web'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold capitalize transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-accent-cyan to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'glass text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat === 'python' ? 'Python / Backend' : 'Full Stack / Web'}
            </button>
          ))}
        </div>

        {/* Grid Project Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group glass-card rounded-2xl border border-white/10 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-accent-cyan/30 flex flex-col h-full glow-cyan"
              >
                {/* Project Visual mockup */}
                {project.visual}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-blue-600 hover:shadow-lg text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
