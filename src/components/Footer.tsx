import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <Link to="/" className="text-4xl font-black tracking-tighter text-white">
              BOND<span className="text-brand-lime">.</span>
            </Link>
            <p className="text-white/40 text-sm mt-4 max-w-xs font-medium">
              High-performance web architecture built with technical intent. 
              Global standards for local legends.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal">Navigation</span>
              <Link to="/" className="text-sm font-bold hover:text-brand-lime transition-colors">Home</Link>
              <Link to="/services" className="text-sm font-bold hover:text-brand-lime transition-colors">Services</Link>
              <Link to="/work" className="text-sm font-bold hover:text-brand-lime transition-colors">Work</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">Company</span>
              <Link to="/about" className="text-sm font-bold hover:text-brand-lime transition-colors">About Us</Link>
              <Link to="/pricing" className="text-sm font-bold hover:text-brand-lime transition-colors">Pricing</Link>
              <Link to="/contact" className="text-sm font-bold hover:text-brand-lime transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Legal</span>
              <Link to="#" className="text-sm font-bold hover:text-brand-lime transition-colors">Terms</Link>
              <Link to="#" className="text-sm font-bold hover:text-brand-lime transition-colors">Privacy</Link>
              <Link to="#" className="text-sm font-bold hover:text-brand-lime transition-colors">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 | Founded by Raaghav Agarwal & Khwaeesh Lalwani
          </div>
          <div className="flex gap-6">
            {['IN', 'X', 'IG'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-black text-white/40 hover:text-brand-lime transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
