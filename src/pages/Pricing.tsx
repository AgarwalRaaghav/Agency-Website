import { motion } from 'motion/react';
import { Check, Pin } from 'lucide-react';

const tiers = [
  {
    name: "The Essential",
    price: "₹X,XXX",
    description: "Focused on local visibility and clean professional presence.",
    features: [
      "3-Page Responsive Site",
      "Google Maps Integration",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "1 Month Support"
    ],
    color: "bg-white",
    textColor: "text-brand-bg",
    tab: "sticky-tab-blue",
    rotation: "rotate-[-2deg]"
  },
  {
    name: "The Growth",
    price: "₹XX,XXX",
    description: "Most popular for startups. High-performance and investor-ready.",
    features: [
      "Up to 8 Custom Pages",
      "Advanced UI/UX Design",
      "Next.js Deployment",
      "CMS Integration",
      "Analytics Dashboard",
      "3 Months Support"
    ],
    color: "bg-brand-lime",
    textColor: "text-brand-bg",
    tab: "sticky-tab-magenta",
    rotation: "rotate-[1deg]",
    popular: true
  },
  {
    name: "The Custom",
    price: "Contact Us",
    description: "For enterprise-level needs and complex web products.",
    features: [
      "Unlimited Pages",
      "Custom API Integrations",
      "Database Architecture",
      "Scalable Cloud Hosting",
      "Priority 24/7 Support",
      "Strategic Consulting"
    ],
    color: "bg-brand-teal",
    textColor: "text-brand-bg",
    tab: "sticky-tab-orange",
    rotation: "rotate-[-1deg]"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6">
            /pricing <span className="zine-box-teal">plans.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Transparent pricing for businesses at every stage. No hidden fees, just high-performance results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${tier.color} ${tier.textColor} p-8 shadow-2xl ${tier.rotation} hover:rotate-0 transition-all duration-500 flex flex-col`}
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%)' }}
            >
              <div className={tier.tab} />
              
              {tier.popular && (
                <div className="absolute top-6 right-6 zine-box-teal text-[10px] py-0.5 px-2 -rotate-12">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{tier.name}</h3>
                <div className="text-4xl font-black mb-4">{tier.price}</div>
                <p className="text-sm font-bold opacity-70 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-bold">
                    <Check size={18} className="mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-black uppercase tracking-widest border-2 border-brand-bg hover:bg-brand-bg hover:text-white transition-colors flex items-center justify-center gap-2`}>
                Select Plan
                <Pin size={16} className="rotate-45" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
