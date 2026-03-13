import { motion } from 'motion/react';
import { Zap, Shield, Phone, BarChart } from 'lucide-react';

const stats = [
  {
    value: "₹X+",
    label: "Value Delivered",
    description: "Real business impact delivered to our local partners through technical intent.",
    tab: "sticky-tab-blue",
    rotation: "rotate-[-2deg]"
  },
  {
    value: "100%",
    label: "Intent-Driven",
    description: "Every pixel and line of code is architected with a specific business goal.",
    tab: "sticky-tab-magenta",
    rotation: "rotate-[1deg]"
  },
  {
    value: "SEO+",
    label: "Search Dominance",
    description: "Built-in search engine optimization that puts you ahead of the competition.",
    tab: "sticky-tab-orange",
    rotation: "rotate-[-1deg]"
  },
  {
    value: "24/7",
    label: "Founder Support",
    description: "Direct access to the founders for strategic alignment and peace of mind.",
    tab: "sticky-tab-lime",
    rotation: "rotate-[2deg]"
  }
];

export default function WhyUs() {
  return (
    <section className="py-32 px-4 overflow-hidden bg-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:sticky md:top-40"
        >
          <div className="zine-box-lime text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 rotate-[-2deg] inline-block">
            why us?
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
            We don't just build websites; we build high-performance digital assets that drive real business results.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white text-brand-bg p-8 shadow-2xl w-full relative ${stat.rotation} hover:rotate-0 transition-all duration-500`}
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%)' }}
            >
              <div className={stat.tab} />
              <div>
                <div className="text-5xl font-black mb-1 tracking-tighter">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-widest mb-3 text-brand-teal">{stat.label}</div>
                <p className="text-sm font-bold opacity-70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
