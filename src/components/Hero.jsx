import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Play } from 'lucide-react';

const Github = ({ size = 20, className }) => (
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

const Linkedin = ({ size = 20, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const words = [
  'Full Stack Python Developer',
  'Python Enthusiast',
  'Problem Solver',
  'Database Specialist'
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2s
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Glow Backdrop Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/15 dark:bg-accent-cyan/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/15 dark:bg-accent-purple/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Intro Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-accent-cyan font-bold tracking-wider uppercase text-sm sm:text-base font-sans glow-text-cyan">
                Welcome to my digital space
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-none">
                Hi, I'm <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-accent-cyan via-blue-500 to-accent-purple bg-clip-text text-transparent">
                  Sujit Vijay Ghadge
                </span>
              </h1>
              
              {/* Typing Tagline */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                  <span className="typing-cursor border-r-2 border-accent-cyan pr-1 text-slate-800 dark:text-slate-200">
                    {currentText}
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate Full Stack Python Developer dedicated to crafting robust backends and clean, highly responsive frontends. I specialize in backend architecture, API design, database systems, and automation tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-98 transition-all"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 dark:hover:bg-white/5 active:scale-98 transition-all"
              >
                Contact Me
              </button>

              <a
                href="#resume"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-dashed border-accent-purple/40 dark:border-accent-purple/30 text-accent-purple dark:text-purple-400 font-semibold flex items-center justify-center gap-2 hover:bg-accent-purple/5 transition-all"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass border border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan transition-all hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass border border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan transition-all hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sujit@example.com"
                className="p-3 rounded-xl glass border border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan transition-all hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Floating Visual/Terminal Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl blur-xl opacity-35 dark:opacity-40 animate-pulse-slow" />
              
              {/* Mock Code Editor / Terminal */}
              <div className="relative glass-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-left w-full">
                {/* Editor Header */}
                <div className="bg-slate-950/80 dark:bg-slate-900/60 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Terminal size={12} />
                    sujit_portfolio.py
                  </span>
                  <div className="w-4" />
                </div>
                
                {/* Editor Code Area */}
                <div className="p-5 text-xs sm:text-sm space-y-2 bg-slate-950/90 text-slate-300 min-h-[250px]">
                  <div>
                    <span className="text-pink-400">class</span>{' '}
                    <span className="text-blue-400">Developer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">def</span>{' '}
                    <span className="text-yellow-400">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.name = <span className="text-emerald-400">"Sujit Vijay Ghadge"</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.role = <span className="text-emerald-400">"Full Stack Python Developer"</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.skills = [
                  </div>
                  <div className="pl-12 text-slate-400">
                    <span className="text-emerald-400">"Python"</span>,{' '}
                    <span className="text-emerald-400">"MySQL"</span>,{' '}
                    <span className="text-emerald-400">"Django"</span>,
                  </div>
                  <div className="pl-12 text-slate-400">
                    <span className="text-emerald-400">"Flask"</span>,{' '}
                    <span className="text-emerald-400">"React"</span>,{' '}
                    <span className="text-emerald-400">"REST APIs"</span>
                  </div>
                  <div className="pl-8 text-slate-400">]</div>
                  <div className="pl-4">
                    <span className="text-pink-400">def</span>{' '}
                    <span className="text-yellow-400">create_solutions</span>(self):
                  </div>
                  <div className="pl-8 text-purple-400">
                    return <span className="text-emerald-400">"Transforming code into business value."</span>
                  </div>
                  <div className="pt-2 text-slate-500">
                    # Let's run the code
                  </div>
                  <div>
                    sujit = <span className="text-blue-400">Developer</span>()
                  </div>
                  <div>
                    print(sujit.create_solutions())
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-accent-cyan font-bold">
                    <Play size={12} className="fill-accent-cyan" />
                    <span>Output: Transforming code into business value.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
