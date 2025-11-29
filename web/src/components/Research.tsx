import { BookOpen, ExternalLink } from 'lucide-react';

export const Research = () => {
    return (
        <section id="research" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Disclaimer Box */}
                    <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Educational Information:</strong> This page summarizes published research for informational purposes only.
                            Consult a qualified healthcare provider for diagnosis, medical advice, or treatment recommendations.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Research Background</h2>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Rathleff Protocol Study</h3>
                        <p className="text-slate-600 mb-6">
                            In 2014, researchers Michael Rathleff, Morten Mølgaard, et al. published a randomized controlled trial
                            comparing high-load strength training versus plantar-specific stretching for individuals experiencing
                            plantar heel pain (commonly known as plantar fasciitis).
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl mb-8 border border-slate-200">
                            <p className="text-sm text-slate-600 mb-2"><strong>Study Citation:</strong></p>
                            <p className="text-sm text-slate-700 italic mb-4">
                                Rathleff MS, Mølgaard CM, Fredberg U, et al. "High-load strength training improves outcome in patients
                                with plantar fasciitis: A randomized controlled trial with 12-month follow-up."
                                Scand J Med Sci Sports. 2015;25(3):e292-e300.
                            </p>
                            <a
                                href="https://pubmed.ncbi.nlm.nih.gov/24944706/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                            >
                                View on PubMed <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Findings from Research</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="text-slate-600">
                                <strong>Participants:</strong> Adults aged 18-70 with plantar heel pain for at least 3 months
                            </li>
                            <li className="text-slate-600">
                                <strong>Intervention:</strong> High-load strength training using unilateral heel raises with a towel
                                under the toes (activating the windlass mechanism)
                            </li>
                            <li className="text-slate-600">
                                <strong>Frequency:</strong> Every second day (48-hour rest intervals) for 12 weeks
                            </li>
                            <li className="text-slate-600">
                                <strong>Results:</strong> The strength training group showed significantly superior outcomes at 3 months
                                compared to the stretching-only group, with effects maintained at 12-month follow-up
                            </li>
                            <li className="text-slate-600">
                                <strong>Load Progression:</strong> Starting with bodyweight and progressively adding external load
                                (backpack/weights) as tolerated
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Science: Why Load Matters</h3>
                        <p className="text-slate-600 mb-4">
                            According to the research, the plantar fascia responds to mechanical loading by stimulating collagen
                            synthesis and tissue remodeling. Unlike passive stretching, high-load strength training:
                        </p>
                        <ul className="space-y-2 mb-8 list-disc pl-6">
                            <li className="text-slate-600">Increases tissue load capacity over time</li>
                            <li className="text-slate-600">Promotes structural adaptation in the fascial tissue</li>
                            <li className="text-slate-600">Requires precise tempo control (3-2-3 seconds) for optimal time under tension</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Who Was Included in the Study?</h3>
                        <p className="text-slate-600 mb-4">
                            The research studied individuals experiencing:
                        </p>
                        <ul className="space-y-2 mb-8 list-disc pl-6">
                            <li className="text-slate-600">Plantar heel pain lasting ≥3 months</li>
                            <li className="text-slate-600">Pain during initial steps in the morning or after rest</li>
                            <li className="text-slate-600">Localized tenderness at the medial calcaneal tubercle</li>
                        </ul>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                            <p className="text-sm text-amber-900">
                                <strong>Important Note:</strong> The research protocol was conducted under medical supervision.
                                The Plantarly app tracks the exercise protocol described in this research but does not diagnose,
                                treat, or provide medical guidance. Always consult healthcare professionals before beginning any
                                new exercise program, especially if you're experiencing pain or have underlying health conditions.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">How Plantarly Helps</h3>
                        <p className="text-slate-600 mb-4">
                            Research participants often struggled with protocol adherence due to:
                        </p>
                        <ul className="space-y-2 mb-6 list-disc pl-6">
                            <li className="text-slate-600">Difficulty counting tempo (3 seconds up, 2 hold, 3 down)</li>
                            <li className="text-slate-600">Forgetting the 48-hour rest requirement</li>
                            <li className="text-slate-600">Unclear progression guidelines (when to add weight, increase sets)</li>
                        </ul>
                        <p className="text-slate-600 mb-8">
                            Our app addresses these challenges by providing audio-visual pacing, automatic scheduling,
                            and clear progression tracking—making it easier to follow the research protocol accurately.
                        </p>

                        <div className="text-center mt-12">
                            <a
                                href="#waitlist"
                                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white  rounded-xl font-bold shadow-lg transition-all"
                            >
                                Track the Protocol with Plantarly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
