import { motion } from 'motion/react';

export default function About() {
  const founders = [
    {
      name: "Raaghav Agarwal",
      role: "The Architect",
      roleColor: "zine-box-teal",
      description: "Leading the technical frontier. Raaghav specializes in building robust web architecture, high-speed deployment, and performance optimization. He ensures every line of code translates into a seamless user experience.",
      rotation: "rotate-[-2deg]",
      imageSeed: "tech-architect"
    },
    {
      name: "Khwaeesh Lalwani",
      role: "The Visionary",
      roleColor: "zine-box-lime",
      description: "Driving market strategy and brand narrative. Khwaeesh focuses on sales, strategic marketing, and client alignment. He bridges the gap between technical excellence and business growth.",
      rotation: "rotate-[2deg]",
      imageSeed: "business-visionary"
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6">
            /the <span className="zine-box-lime">founders.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4">
            A professional duo bridging the gap between technical excellence and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`torn-paper ${founder.rotation} hover:rotate-0 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-visible`}
            >
              {/* Polaroid Photo Placeholder */}
              <div className="shrink-0 w-48 h-60 bg-gray-100 p-3 shadow-inner transform -rotate-3 hover:rotate-0 transition-transform z-0">
                <div className="w-full h-44 bg-gray-300 overflow-hidden relative">
                   <img 
                    src={`https://picsum.photos/seed/${founder.imageSeed}/400/500`} 
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-[10px] font-mono text-gray-400 uppercase tracking-widest text-center">
                  EST. 2026
                </div>
              </div>

              <div className="flex-grow relative z-10 w-full">
                <div className={`${founder.roleColor} text-[10px] md:text-xs mb-4`}>
                  [ {founder.role} ]
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter break-words text-wrap-balance leading-none">
                  {founder.name}
                </h2>
                <p className="text-brand-bg/80 font-bold leading-relaxed text-sm md:text-base">
                  {founder.description}
                </p>
                
                <div className="mt-8 flex justify-end gap-3">
                  <div className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-bg hover:text-white transition-colors cursor-pointer">
                    <span className="text-[10px] font-black">IN</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-bg hover:text-white transition-colors cursor-pointer">
                    <span className="text-[10px] font-black">X</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
