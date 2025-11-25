import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProtocolBreakdown } from './components/ProtocolBreakdown';
import { AppShowcase } from './components/AppShowcase';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { PdfPreviewModal } from './components/PdfPreviewModal';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  const handleOpenPdf = () => {
    setIsPdfOpen(true);
    trackEvent('pdf_open');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation />
      <main>
        <Hero onOpenPdf={handleOpenPdf} />
        <ProtocolBreakdown onOpenPdf={handleOpenPdf} />
        <AppShowcase />
        <Waitlist onOpenPdf={handleOpenPdf} />
      </main>
      <Footer />
      
      <PdfPreviewModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />
    </div>
  );
}

export default App;