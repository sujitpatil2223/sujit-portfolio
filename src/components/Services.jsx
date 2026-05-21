import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Cpu, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    icon: <Globe className="text-cyan-400" size={32} />,
    title: 'Web Development',
    description: 'Building modern, fast, and responsive web applications using React, HTML5, CSS3, JavaScript, and Tailwind CSS, keeping usability and mobile first layouts at the center.',
    glowColor: 'glow-cyan',
  },
  {
    icon: <Server className="text-purple-400" size={32} />,
    title: 'Backend Development',
    description: 'Crafting robust APIs and server side business logic with Django and Flask. Designing RESTful architectures that are clean, performant, and secure.',
    glowColor: 'glow-purple',
  },
  {
    icon: <Database className="text-emerald-400" size={32} />,
    title: 'Database Design',
    description: 'Designing structured relational database systems with MySQL. Writing optimized SQL queries, indexing strategies, schemas, and relational integrity policies.',
    glowColor: 'glow-emerald',
  },
  {
    icon: <Cpu className="text-cyan-400" size={32} />,
    title: 'Python Automation',
    description: 'Automating repetitive workflows, web scraping, spreadsheet reporting scripts, operating system management processes, and custom AI tools.',
    glowColor: 'glow-cyan',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
      {/* Background neon blur */}
      <div className="absolute bottom-0 right-0 w-82 h-82 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      
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
            My Services
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
            Services I provide to help turn your ideas into stable, production ready digital products.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 rounded-2xl border border-white/10 dark:border-slate-800/80 shadow-lg flex flex-col items-start gap-6 hover:bg-white/5 transition-all ${service.glowColor}`}
            >
              {/* Service Icon Box */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                {service.icon}
              </div>

              {/* Title & Desc */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative CTA text */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-accent-cyan cursor-pointer hover:underline mt-auto">
                Discuss Project <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
