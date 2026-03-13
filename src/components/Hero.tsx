import { motion } from 'motion/react';
import { Pin, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 text-brand-teal opacity-20 animate-pulse">
        <Zap size={120} strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-brand-lime opacity-20 animate-bounce">
        <Zap size={80} strokeWidth={1} />
      </div>
      
      {/* Grid Dots */}
      <div className="absolute inset-0 pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(circle, #14EBC7 1px, transparent 1px)', 
        backgroundSize: '30px 30px',
        opacity: 0.1
      }} />

      <div className="max-w-5xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tight mb-8">
            /real websites for — <br className="hidden sm:block" />
            <span className="zine-box-teal mx-1 sm:mx-2">local.</span>
            <span className="zine-box-lime mx-1 sm:mx-2">startups.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed px-4">
            Bringing global design standards to local legends. 
            High-performance web architecture built with technical intent.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="sticky-note group flex items-center gap-3 text-lg font-bold hover:rotate-0">
              Start a Project
              <Pin className="rotate-45 group-hover:rotate-0 transition-transform" size={20} />
            </button>
            
            <div className="text-xs font-mono text-white/40 mt-4 uppercase tracking-widest">
              Let's start discussing your project
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Accents from Image */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-40 right-[15%] hidden lg:block"
      >
        <div className="w-12 h-1 bg-brand-teal/30 rotate-12 mb-2"></div>
        <div className="w-16 h-1 bg-brand-teal/30 -rotate-12"></div>
      </motion.div>
    </section>
  );
}
