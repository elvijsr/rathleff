import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 text-left hover:text-blue-600 transition-colors"
            >
                <span className="text-lg font-semibold text-slate-900 pr-8">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="pb-6 text-slate-600 leading-relaxed prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            )}
        </div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Who is the Rathleff Protocol designed for?",
            answer: "The Rathleff Protocol was originally researched in a 2014 study involving adults experiencing <strong>plantar heel pain (plantar fasciitis)</strong> lasting at least 3 months. The research showed significant improvement for participants using high-load strength training compared to traditional stretching. <br/><br/>However, <strong>this app is a training tracker, not a diagnostic tool</strong>. Consult a healthcare provider to determine if this approach is appropriate for your specific situation."
        },
        {
            question: "Can this app treat or cure plantar fasciitis?",
            answer: "No. Plantarly is a <strong>fitness tracking tool</strong>, not a medical device. We track the exercise protocol described in the Rathleff et al. 2014 research study. The app does not diagnose, treat, cure, or prevent any medical condition. <br/><br/>For medical advice regarding plantar fasciitis or heel pain, consult a qualified healthcare professional such as a physical therapist, podiatrist, or sports medicine physician."
        },
        {
            question: "What makes this different from stretching exercises?",
            answer: "According to the research published by Rathleff et al., participants using <strong>high-load strength training</strong> showed significantly superior outcomes compared to plantar-specific stretching at 3 months, with effects maintained at 12-month follow-up. <br/><br/>The key difference is <strong>mechanical loading</strong>: strength training stimulates collagen synthesis and tissue remodeling in the plantar fascia, while stretching primarily addresses flexibility. The protocol uses progressive loading (starting with bodyweight, advancing to added weight) with specific tempo control."
        },
        {
            question: "How long does the protocol take to show results?",
            answer: "In the original research study, participants following the high-load strength training protocol showed <strong>significant improvement by 3 months</strong>, compared to 12+ months for those doing stretching only. <br/><br/>Individual results vary based on many factors including adherence to the protocol, baseline condition, and individual physiology. The app helps you track adherence to maximize your chances of following the research protocol accurately."
        },
        {
            question: "Do I need any special equipment?",
            answer: "To follow the research protocol, you'll need:<br/><ul><li>A step or raised platform</li><li>A rolled towel (placed under toes)</li><li>External weight for progression (backpack, weighted vest, or dumbbells)</li></ul><br/>The protocol starts with bodyweight only and progressively adds load over 12 weeks as described in the research."
        },
        {
            question: "Is it safe to exercise with heel pain?",
            answer: "The research protocol used a <strong>pain-monitoring approach</strong> based on the Silbernagel model: pain during exercise is acceptable if it remains tolerable (≤5/10) and resolves by the next morning. <br/><br/>However, <strong>pain is individual and complex</strong>. Before starting any new exercise program—especially if you're experiencing pain—consult with a healthcare professional. They can assess your specific situation and advise whether this approach is appropriate for you."
        },
        {
            question: "Why every second day? Can I do it more frequently?",
            answer: "The research protocol specifically required a <strong>48-hour rest period between sessions</strong>. This isn't arbitrary—it allows time for collagen synthesis and tissue adaptation. <br/><br/>More frequent training may interfere with recovery and tissue remodeling. The app enforces this schedule to help you follow the research protocol as designed."
        },
        {
            question: "What if I have other foot conditions or injuries?",
            answer: "This app tracks a specific research protocol studied in individuals with plantar heel pain. If you have other conditions such as:<br/><ul><li>Nerve compression or neuropathy</li><li>Stress fractures</li><li>Arthritis or systemic inflammatory conditions</li><li>Recent foot surgery</li></ul><br/>You <strong>must consult a healthcare professional</strong> before beginning this or any exercise program. The app cannot and does not provide individualized medical guidance."
        },
        {
            question: "How does the app help with protocol adherence?",
            answer: "Research shows that adherence to exercise protocols is challenging. Plantarly addresses common barriers by providing:<br/><ul><li><strong>Audio-visual tempo pacing</strong> for the critical 3-2-3 second cadence</li><li><strong>Automatic scheduling</strong> with 48-hour rest enforcement</li><li><strong>Progressive load tracking</strong> to guide when to increase sets/weight</li><li><strong>Pain monitoring prompts</strong> based on research guidelines</li></ul><br/>By removing guesswork and mental tracking burden, the app makes it easier to follow the protocol accurately."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
                    </div>
                    <p className="text-center text-slate-600 mb-12">
                        Common questions about the Rathleff Protocol and how Plantarly works
                    </p>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm text-slate-500 mb-4">
                            Still have questions? Join our waitlist and we'll send you more information.
                        </p>
                        <a
                            href="#waitlist"
                            className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors"
                        >
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
