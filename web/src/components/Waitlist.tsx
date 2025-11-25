import { useState } from 'react';
import { CheckCircle2, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAnalytics } from '../hooks/useAnalytics';

interface WaitlistProps {
  onOpenPdf: () => void;
}

export const Waitlist = ({ onOpenPdf }: WaitlistProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // Capture UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            email, 
            source: 'plantarly_landing',
            utm_source: utmSource,
            utm_medium: utmMedium,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus('success');
      trackEvent('waitlist_submit', { email_domain: email.split('@')[1] });
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      // Fallback for demo/dev if Supabase isn't configured yet
      if (import.meta.env.DEV) {
         setStatus('success'); // Fake success for demo
      } else {
         setStatus('error');
      }
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Recovery Today</h2>
          <p className="text-slate-300 text-lg mb-10">
            Join the waitlist for the iOS app and we'll send you the <strong>Complete Rathleff Protocol PDF</strong> and a printable tracking sheet immediately for free.
          </p>

          {status === 'success' ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-8 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-slate-300 mb-6">Check your inbox for the Protocol Guide.</p>
              <button onClick={onOpenPdf} className="text-white underline hover:text-blue-300 transition-colors">
                Or view the summary here now
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Join & Get PDF <Download className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
          
          {status === 'error' && <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>}

          <p className="mt-6 text-sm text-slate-500">
            We respect your inbox. No spam, just rehab science.
          </p>
        </div>
      </div>
    </section>
  );
};
