import { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#protocol", label: "The Protocol" },
    { href: "#app-features", label: "App Features" },
    { href: "#science", label: "The Science" },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Plantarly<span className="text-blue-600">.com</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#waitlist" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Join Beta Waitlist
          </a>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-600">
           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} 
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-slate-600 font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};
