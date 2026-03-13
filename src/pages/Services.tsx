import { motion } from 'motion/react';
import { Globe, Zap, Shield, Rocket, Layout, Code } from 'lucide-react';

const services = [
  {
    title: "Local Business Essentials",
    description: "Fast, SEO-ready sites for shops and individuals. Get your business online with a professional presence that converts local traffic.",
    icon: Globe,
    features: ["SEO Optimization", "Mobile Responsive", "Google Maps Integration"],
    rotation: "rotate-[-1deg]"
  },
  {
    title: "Startup Launchpads",
    description: "High-performance, investor-ready sites for new ventures. Built with modern tech stacks to scale as your startup grows.",
    icon: Rocket,
    features: ["Custom UI/UX", "Analytics Integration", "Fast Loading Speeds"],
    rotation: "rotate-[2deg]"
  },
  {
    title: "Custom Architecture",
    description: "Complex integrations and scalable web products. For businesses that need more than just a website.",
    icon: Code,
    features: ["API Integrations", "Database Design", "Scalable Infrastructure"],
    rotation: "rotate-[-2deg]"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 }
};

export default function Services() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6">
            /our <span className="zine-box-lime">services.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Not what we make, but your satisfaction matters. High-impact digital solutions for every stage of growth.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`torn-paper ${service.rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 group`}
            >
              <div className="mb-6 text-brand-teal group-hover:scale-110 transition-transform">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-brand-bg/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm font-bold text-brand-bg/50">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
