import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="text-accent-cyan" size={24} />,
      title: 'Python Development',
      desc: 'Writing clean, efficient, and PEP-8 compliant Python code for backend applications, utility scripting, and microservices.',
    },
    {
      icon: <Database className="text-accent-purple" size={24} />,
      title: 'Database Management',
      desc: 'Designing relational databases, optimizing complex SQL queries, and managing MySQL schemas for reliable data persistence.',
    },
    {
      icon: <Globe className="text-emerald-500" size={24} />,
      title: 'Web Technologies',
      desc: 'Developing full stack web architectures with robust frameworks like Django/Flask and modern responsive layouts using React and Tailwind.',
    },
    {
      icon: <Brain className="text-accent-cyan" size={24} />,
      title: 'AI & Automation',
      desc: 'Building smart systems such as the JARVIS-X voice assistant, leveraging APIs, speech processing, and automation scripts.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            About Me
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
            A look into who I am, my core focus areas, and what drives my passion for development.
          </motion.p>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Glow backdrop behind avatar */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
              
              {/* Profile Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-white/20 dark:border-slate-800 bg-slate-900 shadow-2xl flex items-center justify-center">
                <img 
                  src="/sujit-portfolio/avatar.png"
                  alt="Sujit Vijay Ghadge Avatar" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to stylized SVG in case image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback SVG */}
                <div className="hidden absolute inset-0 w-full h-full bg-slate-950 items-center justify-center flex-col text-slate-400">
                  <Code size={48} className="text-accent-cyan animate-pulse" />
                  <span className="text-xs mt-2">SVG FALLBACK</span>
                </div>
              </div>

              {/* Float badges */}
              <div className="absolute -top-2 -right-4 glass px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-1.5 animate-bounce">
                <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Creative Dev</span>
              </div>
            </div>
          </motion.div>

          {/* Description & Focus Areas Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              I am a Python & Full Stack Developer based in India
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              My journey in software development is centered around problem-solving and building robust, automated solutions. I love exploring the intersections of backend programming with database optimization and web technology.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              Whether designing clean database schemas in MySQL, crafting secure and fast REST APIs, or creating intuitive frontends, I strive for efficiency, maintainability, and clean architecture.
            </p>

            {/* Key Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl glass-card border border-white/10 dark:border-slate-800/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/50">
                      {card.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
