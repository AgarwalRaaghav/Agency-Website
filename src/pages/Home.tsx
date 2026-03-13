import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import OurWork from '../components/OurWork';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <Hero />
      <WhyUs />
      <OurWork />
    </motion.main>
  );
}
