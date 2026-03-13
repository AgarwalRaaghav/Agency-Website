import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[95%] md:top-0 md:left-0 md:translate-x-0 md:w-full">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between glass-nav rounded-full md:rounded-none md:border-x-0 md:border-t-0 md:px-12 md:py-5"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8">
            <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-white shrink-0">
              BOND<span className="text-brand-lime">.</span>
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                    location.pathname === link.path 
                      ? 'text-brand-lime scale-110' 
                      : 'text-white/60 hover:text-white hover:scale-105'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link 
                to="/contact"
                className="hidden sm:flex items-center gap-2 bg-brand-lime text-brand-bg px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Start a Project
                <Zap size={14} fill="currentColor" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button 
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-white p-1 hover:text-brand-lime transition-colors"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg/90 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2 hover:rotate-90 transition-transform"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl sm:text-4xl font-black uppercase tracking-tighter transition-all ${
                      location.pathname === link.path ? 'text-brand-lime' : 'text-white/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 bg-brand-lime text-brand-bg px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest"
                >
                  Start a Project
                  <Zap size={18} fill="currentColor" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
