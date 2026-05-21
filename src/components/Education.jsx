import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    title: 'Full Stack Python Development Specialization',
    institution: '',
    period: '2026 - till now',
    location: 'Remote / India',
    description: 'Learning and focused on backend engineering with Python, relational schema designs in MySQL, and server solutions using Django, Flask, and REST architecture alongside modern frontend technologies.',
    icon: <Award className="text-accent-cyan" size={18} />,
  },
  {
    id: 2,
    title: "Bachelor's Degree in Computer Application",
    institution: 'Krishna College of Science and Commerce,Wathar(Karad)',
    period: '2022 - 2025',
    location: 'Maharashtra, India',
    description: 'Coursework in Software Engineering, Object-Oriented Programming (OOP) concepts, Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, and computer networking.',
    icon: <BookOpen className="text-accent-purple" size={18} />,
  },
  {
    id: 3,
    title: 'Higher Secondary Education (Science)',
    institution: 'Sadguru Gadage Maharaj College, Karad',
    period: '2020 - 2022',
    location: 'Maharashtra, India',
    description: 'Foundational study focusing on mathematics, statistics and physics.',
    icon: <BookOpen className="text-emerald-400" size={18} />,
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

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
            Education & Training
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
            My academic timeline and technical training records.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full bg-slate-100 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 group-hover:border-accent-cyan transition-colors flex items-center justify-center shadow-md">
                <div className="p-1 rounded-full bg-slate-200 dark:bg-slate-900">
                  {edu.icon}
                </div>
              </div>

              {/* Timeline Card */}
              <motion.div
                whileHover={{ x: 4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 dark:border-slate-800/80 hover:border-accent-cyan/20 hover:shadow-lg shadow-md transition-all space-y-3 text-left"
              >
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-bold text-accent-cyan px-2.5 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 w-fit flex items-center gap-1.5">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-sans">
                    {edu.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </h4>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pt-1.5 border-t border-slate-100 dark:border-white/5">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
