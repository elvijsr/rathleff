import { Activity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-slate-600" />
          <span className="text-slate-300 font-semibold">Plantarly.com</span>
        </div>
        <div className="text-sm text-center md:text-left">
          <p>© 2025 Plantarly. For informational and educational purposes only.</p>
          <p className="text-xs mt-1 text-slate-600">This app is a fitness tracking tool. Consult appropriate professionals before starting any new exercise program.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
