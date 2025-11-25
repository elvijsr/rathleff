import { ChevronRight, FileText } from 'lucide-react';

interface HeroProps {
  onOpenPdf: () => void;
}

export const Hero = ({ onOpenPdf }: HeroProps) => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Coming soon to iOS
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Strengthen Your Foundation with <br className="hidden md:block" />
            <span className="gradient-text">Evidence-based load management.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            The first dedicated iOS app for the <strong>Rathleff Protocol</strong>. 
            Guided high-load strength training that targets load capacity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <a href="#waitlist" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Early Access
              <ChevronRight className="w-5 h-5" />
            </a>
            <button onClick={onOpenPdf} className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-slate-500" />
              Read the Protocol
            </button>
          </div>
          
          <p className="mt-6 text-sm text-slate-500 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Based on the seminal 2014 RCT by Michael Rathleff.
          </p>
        </div>
      </div>
    </header>
  );
};
