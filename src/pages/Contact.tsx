import { motion } from 'motion/react';
import { MessageCircle, Mail, Phone, Pin } from 'lucide-react';

export default function Contact() {
  const actions = [
    {
      name: "WhatsApp",
      label: "Chat on WhatsApp",
      description: "For quick queries and instant updates.",
      icon: MessageCircle,
      color: "bg-[#25D366]",
      link: "https://wa.me/#",
      rotation: "rotate-[-2deg]"
    },
    {
      name: "Email",
      label: "Send a Brief",
      description: "Detailed project discussions and proposals.",
      icon: Mail,
      color: "bg-white",
      link: "mailto:hello@bond.agency",
      rotation: "rotate-[1deg]"
    },
    {
      name: "Call",
      label: "Direct Line",
      description: "Speak directly with our technical team.",
      icon: Phone,
      color: "bg-brand-lime",
      link: "tel:#",
      rotation: "rotate-[-1deg]"
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <div className="zine-box-lime text-xl md:text-2xl mb-8 inline-block px-8 py-2">say hello.</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
            /let's build <br />
            <span className="text-brand-teal">something real.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto px-4">
            Direct communication channels for local legends and global startups. No gatekeepers, just growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${action.color} p-8 shadow-2xl ${action.rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 group flex flex-col items-center text-center`}
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)' }}
            >
              <div className="absolute top-4 right-4 text-brand-bg/20">
                <Pin size={20} className="rotate-45" />
              </div>
              
              <div className="mb-6 text-brand-bg">
                <action.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-brand-bg text-xl font-black uppercase tracking-tighter mb-2">
                {action.name}
              </h3>
              
              <div className="text-brand-bg font-black text-sm mb-4">
                [ {action.label} ]
              </div>
              
              <p className="text-brand-bg/60 text-xs font-bold leading-relaxed">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-32 text-center">
          <div className="text-xs font-mono text-white/20 uppercase tracking-[0.5em] mb-8">
            Global Design Standards / Local Legends
          </div>
          <div className="flex justify-center gap-12">
            <div className="w-1 h-20 bg-brand-teal/20 rotate-12"></div>
            <div className="w-1 h-20 bg-brand-lime/20 -rotate-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
