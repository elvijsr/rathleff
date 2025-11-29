import { FileText, Activity, X } from 'lucide-react';

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfPreviewModal = ({ isOpen, onClose }: PdfPreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-lg text-red-600">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Rathleff Protocol: Protocol Summary</h3>
              <p className="text-xs text-slate-500">Based on Published Research • 2025</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Content Area */}
        <div className="overflow-y-auto p-8 pdf-scroll bg-white text-slate-700 leading-relaxed">
          <div className="prose max-w-none">
            <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Core Principle: High-Load Strength Training
              </h4>
              <p className="text-sm text-blue-800">
                Unlike traditional stretching which often only treats symptoms, the Rathleff Protocol uses progressive loading to stimulate collagen synthesis and improve tissue load capacity.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">The Exercise Execution</h3>
            <p className="mb-4">
              The protocol utilizes the <strong>Windlass Mechanism</strong>. By placing a rolled towel under the toes during heel raises, the fascia is tightened around the metatarsal heads, maximizing load distribution.
            </p>
            <ul className="space-y-3 mb-6 list-disc pl-5">
              <li><strong>Position:</strong> Stand on a step, towel under toes to force dorsiflexion.</li>
              <li><strong>Tempo (Critical):</strong> 3 seconds up (concentric), 2 seconds hold (isometric), 3 seconds down (eccentric).</li>
              <li><strong>Frequency:</strong> Every second day (48hr rest period is mandatory).</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">The 12-Week Progression</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse mb-6">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-3 rounded-tl-lg">Phase</th>
                    <th className="p-3">Timeline</th>
                    <th className="p-3">Volume</th>
                    <th className="p-3 rounded-tr-lg">Load</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 font-semibold">Phase 1</td>
                    <td className="p-3">Weeks 1-2</td>
                    <td className="p-3">3 sets, 12 reps</td>
                    <td className="p-3">Bodyweight Only</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 font-semibold">Phase 2</td>
                    <td className="p-3">Weeks 3-4</td>
                    <td className="p-3">3 sets, 10 reps</td>
                    <td className="p-3">Add External Weight (e.g., Backpack)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Phase 3</td>
                    <td className="p-3">Weeks 5+</td>
                    <td className="p-3">5 sets, 8 reps</td>
                    <td className="p-3">Heavy Load (Max Strength)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Pain Monitoring (Silbernagel Model)</h3>
            <p className="mb-4">
              Pain is allowed during exercise if it remains <strong>tolerable (≤ 5/10)</strong> and subsides by the next morning. If morning pain exceeds baseline, load must be reduced.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">Want this protocol in an easy-to-use app?</p>
          <a href="#waitlist" onClick={onClose} className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center">
            Join App Waitlist to Keep Reading
          </a>
        </div>
      </div>
    </div>
  );
};
