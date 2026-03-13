import { motion } from 'motion/react';
import { Pin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PixelCraft Studios",
    category: "Local Boutique",
    description: "Curated Digital Storefront.",
    imageSeed: "craft-store",
    rotation: "rotate-[-2deg]",
    tab: "sticky-tab-magenta"
  },
  {
    title: "VibeCheck AI",
    category: "Tech Startup",
    description: "Investor-Ready Platform.",
    imageSeed: "ai-tech",
    rotation: "rotate-[1deg]",
    tab: "sticky-tab-orange"
  },
  {
    title: "Global Legal Partners",
    category: "Professional Service",
    description: "High-Trust Corporate Hub.",
    imageSeed: "modern-office",
    rotation: "rotate-[-1deg]",
    tab: "sticky-tab-blue"
  }
];

export default function Work() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            /our <span className="zine-box-teal">work.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Bringing global design standards to local legends. High-performance web architecture built with technical intent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white text-brand-bg p-4 shadow-2xl ${project.rotation} hover:rotate-0 transition-all duration-500 group`}
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%)' }}
            >
              <div className={project.tab} />
              
              <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden mb-6">
                <img 
                  src={`https://picsum.photos/seed/${project.imageSeed}/600/800`} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-xl">
                    <ExternalLink size={24} className="text-brand-bg" />
                  </div>
                </div>
              </div>

              <div className="px-2 pb-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-1">
                  {project.category}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-bold opacity-60 italic">
                  "{project.description}"
                </p>
              </div>

              <div className="absolute bottom-4 right-4 text-brand-bg/10">
                <Pin size={24} className="rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button className="sticky-note group flex items-center gap-3 text-lg font-bold hover:rotate-0">
            View All Projects
            <Pin className="rotate-45 group-hover:rotate-0 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
