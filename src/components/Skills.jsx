import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, GitBranch, Shield, Zap, Globe, FileJson } from 'lucide-react';

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M12.002 2c-5.522 0-5.002 4.75-5.002 4.75h1.996s-.066-2.75 3.006-2.75c3.07 0 2.996 2.5 2.996 2.5H10.01s-4.008.452-4.008 4c0 3.548 3.5 3.75 3.5 3.75h1.498v-2.25s-.084-2.5 2.5-2.5h4.5s2.5-.23 2.5-3.25C20.5 4.168 17.525 2 12.002 2zm-2.006 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM6.502 8.75c-2.975 0-3.002 3.02-3.002 3.02 0 3.02 2.502 3.23 2.502 3.23h1.996V12.75s-.07-2.5 2.5-2.5h4.5s2.5.02 2.5-3.5c0-3.52-4.01-4-4.01-4h-1.498v2.25s-.168 2.5-2.5 2.5h-2.986zm5.5 11.25c3.07 0 2.996-2.5 2.996-2.5h-1.996s.066 2.75-3.006 2.75c-3.07 0-2.996-2.5-2.996-2.5H13.99s4.008-.452 4.008-4c0-3.548-3.5-3.75-3.5-3.75h-1.498v2.25s.084 2.5-2.5 2.5h-4.5s-2.5.23-2.5 3.25c0 3.082 2.975 5.25 8.498 5.25zm2.006-2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M12 2C6.477 2 2 4.239 2 7s4.477 5 10 5 10-2.239 10-5-4.477-5-10-5zm0 13c-2.456 0-4.726-.445-6.326-1.196L5 15.658c1.62.903 4.148 1.342 7 1.342s5.38-.439 7-1.342l-.674-1.854C16.726 14.555 14.456 15 12 15zm0 5c-2.456 0-4.726-.445-6.326-1.196L5 20.658C6.62 21.561 9.148 22 12 22s5.38-.439 7-1.342l-.674-1.854C16.726 19.555 14.456 20 12 20z" />
  </svg>
);

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 90, icon: <PythonIcon />, color: 'glow-cyan', textClass: 'text-cyan-500' },
      { name: 'JavaScript', level: 80, icon: <Zap className="w-6 h-6" />, color: 'glow-purple', textClass: 'text-purple-500' },
      { name: 'HTML5', level: 95, icon: <Globe className="w-6 h-6" />, color: 'glow-emerald', textClass: 'text-emerald-500' },
      { name: 'CSS3', level: 90, icon: <Layout className="w-6 h-6" />, color: 'glow-cyan', textClass: 'text-cyan-400' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'MySQL', level: 85, icon: <MySQLIcon />, color: 'glow-purple', textClass: 'text-purple-400' },
      { name: 'Flask / Django', level: 85, icon: <Server className="w-6 h-6" />, color: 'glow-emerald', textClass: 'text-emerald-400' },
      { name: 'REST APIs', level: 90, icon: <FileJson className="w-6 h-6" />, color: 'glow-cyan', textClass: 'text-cyan-500' },
      { name: 'Full Stack Python', level: 88, icon: <Database className="w-6 h-6" />, color: 'glow-purple', textClass: 'text-purple-500' },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: <GitBranch className="w-6 h-6" />, color: 'glow-emerald', textClass: 'text-emerald-500' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
      {/* Visual backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      
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
            Technical Skills
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
            A breakdown of my technical stack and proficiency levels.
          </motion.p>
        </div>

        {/* Skill Category Sections */}
        <div className="space-y-12">
          {skillsData.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-accent-cyan pl-3 font-sans"
              >
                {group.category}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIdx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`glass-card p-5 rounded-2xl border border-white/10 dark:border-slate-800 hover:bg-white/5 shadow-md flex items-center gap-5 ${skill.color}`}
                  >
                    {/* Skill Icon */}
                    <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 ${skill.textClass} flex items-center justify-center`}>
                      {skill.icon}
                    </div>

                    {/* Skill Progress info */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-950 dark:text-white text-base sm:text-lg">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-slate-800/80 ${skill.textClass}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            skill.color.includes('cyan')
                              ? 'from-accent-cyan to-blue-500'
                              : skill.color.includes('purple')
                              ? 'from-accent-purple to-pink-500'
                              : 'from-emerald-400 to-teal-500'
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
