import { CheckCircle2, Play } from 'lucide-react';

interface ProtocolBreakdownProps {
  onOpenPdf: () => void;
}

export const ProtocolBreakdown = ({ onOpenPdf }: ProtocolBreakdownProps) => {
  return (
    <section id="protocol" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why the "Towel Trick" Changed Everything</h2>
            <div className="prose text-slate-600 mb-8">
              <p className="mb-4">
                In 2014, researchers discovered that traditional stretching wasn't enough. The plantar fascia needs <strong>load</strong> to remodel collagen.
              </p>
              <p className="mb-4">
                The Rathleff Protocol introduces a simple but critical modification: placing a towel under the toes activates the <em>Windlass Mechanism</em>, tightening the fascia during the lift to maximize effectiveness.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Faster Progress:</strong> Significant improvement in 3 months vs 12 months for stretching.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Only 3x Per Week:</strong> Requires 48 hours of rest between sessions for collagen synthesis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>High Compliance:</strong> Short duration, high impact exercises.</span>
                </li>
              </ul>
            </div>
            <button onClick={onOpenPdf} className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
              Read the full Protocol Summary
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Abstract visual of the exercise */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <span className="text-sm font-medium">Instructional Video Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900">Heel Raise with Toe Support</h4>
                  <p className="text-sm text-slate-500">The core movement of the protocol</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-blue-600">3s</span>
                  <span className="text-xs text-slate-400 uppercase">Concentric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
