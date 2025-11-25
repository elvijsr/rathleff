import { Clock, TrendingUp, ShieldAlert } from 'lucide-react';

export const AppShowcase = () => {
  return (
    <section id="app-features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The Smart Timer for Rehab</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The protocol works, but adhering to it is hard. The app removes the guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Pacer</h3>
            <p className="text-slate-600 leading-relaxed">
              The 3-2-3 tempo is mentally exhausting to count. Our audio-visual pacer guides every rep so you get maximum <strong>Time Under Tension</strong>.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Progressive Overload</h3>
            <p className="text-slate-600 leading-relaxed">
              Tracks your sets, reps, and weight. The algorithm tells you exactly when to increase the load based on your pain feedback.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pain Monitoring</h3>
            <p className="text-slate-600 leading-relaxed">
              Based on the <strong>Silbernagel Model</strong>. Log pain scores post-exercise and next morning. The app adjusts your next session automatically.
            </p>
          </div>
        </div>

        {/* App Mockup Visualization */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden mx-auto max-w-[300px] border-[8px] border-slate-800">
            {/* Fake Phone Screen */}
            <div className="bg-slate-950 h-[600px] w-full rounded-[1.5rem] relative overflow-hidden flex flex-col items-center justify-between py-10">
              {/* Top UI */}
              <div className="w-full px-6">
                <div className="flex justify-between text-slate-400 text-xs mb-8">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-white text-2xl font-bold mb-1">Session 12</h4>
                <p className="text-blue-400 text-sm font-medium">Phase 2: Add Weight</p>
              </div>

              {/* Center UI (The Ring) */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-blue-500" strokeDasharray="552" strokeDashoffset="100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-white">3</span>
                  <span className="text-sm text-slate-400 uppercase tracking-widest mt-1">Lower</span>
                </div>
              </div>

              {/* Bottom UI */}
              <div className="w-full px-6">
                <div className="bg-slate-800/50 rounded-xl p-4 flex justify-between items-center mb-4">
                  <div>
                    <p className="text-slate-400 text-xs">Current Load</p>
                    <p className="text-white font-bold">BW + 5kg</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs text-right">Reps</p>
                    <p className="text-white font-bold text-right">8 / 10</p>
                  </div>
                </div>
                <button className="w-full py-4 bg-blue-600 rounded-xl text-white font-bold">Pause</button>
              </div>
            </div>
          </div>
          
          {/* Decorative blobs behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
