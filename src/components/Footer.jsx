import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Github = ({ size = 18, className }) => (
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

const Linkedin = ({ size = 18, className }) => (
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-1.5">
            <span className="text-lg font-bold font-sans bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Sujit Vijay Ghadge
            </span>
            <p className="text-xs text-slate-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Socials & Credit */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sujitpatil2223"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-accent-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sujit-ghadge-a76a053a1/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-accent-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sujitghadge2223@gmail.com"
                className="text-slate-500 hover:text-accent-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <p className="text-xs text-slate-500 font-medium">
              Designed & Developed by{' '}
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                Sujit Vijay Ghadge
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
