import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when editing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message cannot be empty';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

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
            Get In Touch
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
            Have a project in mind, an opportunity, or just want to say hi? Write to me!
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Info Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-sans">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Feel free to email me directly or reach out through my social channels. I am generally responsive and look forward to collaborating.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 shadow-sm">
                <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</h4>
                  <a href="mailto:sujit2223@gmail.com" className="text-slate-850 dark:text-slate-200 font-semibold hover:underline">
                    sujitghadge2223@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 shadow-sm">
                <div className="p-3 rounded-lg bg-accent-purple/10 text-accent-purple">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</h4>
                  <p className="text-slate-850 dark:text-slate-200 font-semibold">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-850 dark:text-slate-200">Connect with me:</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sujitpatil2223"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl glass border border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujit-ghadge-a76a053a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl glass border border-white/10 text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl space-y-6 text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-sans border-b border-slate-100 dark:border-white/5 pb-4">
                Send a Message
              </h3>

              {/* Success Notification */}
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm"
                >
                  <CheckCircle size={18} />
                  <span>Your message has been sent successfully! I will get back to you soon.</span>
                </motion.div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900 border ${
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-accent-cyan'
                  } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all font-sans`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900 border ${
                    errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-accent-cyan'
                  } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all font-sans`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900 border ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-accent-cyan'
                  } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all font-sans resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 rounded-xl bg-gradient-to-r from-accent-cyan to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 text-white font-bold flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 disabled:pointer-events-none transition-all"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
