import { motion } from 'motion/react';
import { Pin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PixelCraft Studios",
    category: "Local Retail/Boutique",
    description: "A curated digital storefront for high-end artisanal goods.",
    imageSeed: "craft-store",
    rotation: "rotate-[-2deg]",
    tab: "sticky-tab-magenta"
  },
  {
    title: "VibeCheck AI",
    category: "Tech Startup",
    description: "Investor-ready landing page for a next-gen AI platform.",
    imageSeed: "ai-tech",
    rotation: "rotate-[1deg]",
    tab: "sticky-tab-orange"
  },
  {
    title: "Elena Rossi",
    category: "Individual Portfolio/CV",
    description: "High-trust professional hub for a creative director.",
    imageSeed: "creative-portfolio",
    rotation: "rotate-[-1deg]",
    tab: "sticky-tab-blue"
  }
];

export default function OurWork() {
  return (
    <section className="py-32 px-4 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="zine-box-lime text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 rotate-[1deg] inline-block">
            our work
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Bringing global design standards to local legends. High-performance web architecture built with technical intent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white text-brand-bg p-4 shadow-2xl ${project.rotation} hover:rotate-0 transition-all duration-500 group relative`}
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
                <p className="text-xs font-bold opacity-60 italic mb-6">
                  "{project.description}"
                </p>

                <button className="w-full py-3 border-2 border-brand-bg font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-bg hover:text-white transition-all">
                  View Project
                  <Pin size={14} className="rotate-45" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
