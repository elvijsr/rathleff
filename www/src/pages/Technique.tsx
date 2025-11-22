import { useNavigate } from 'react-router-dom';

export function Technique() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 pb-20">
            <header className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <h1 className="text-2xl font-bold">Technique Guide</h1>
            </header>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-primary">The Exercise</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The Rathleff protocol is based on a specific type of heel raise (calf raise) performed with a towel under the toes to activate the plantar fascia.
                    </p>

                    <div className="bg-muted/30 p-4 rounded-lg border space-y-2">
                        <h3 className="font-medium">Setup</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Stand barefoot on a step or box</li>
                            <li>Place a rolled-up towel under your toes</li>
                            <li>Let your heels hang off the edge</li>
                            <li>Hold onto a wall or rail for balance</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-primary">Execution</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h3 className="font-medium">Concentric (Up)</h3>
                                <p className="text-sm text-muted-foreground">Lift your heels as high as possible over 3 seconds.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h3 className="font-medium">Isometric (Hold)</h3>
                                <p className="text-sm text-muted-foreground">Hold the top position for 2 seconds.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h3 className="font-medium">Eccentric (Down)</h3>
                                <p className="text-sm text-muted-foreground">Lower your heels slowly over 3 seconds until you feel a stretch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-primary">Important Notes</h2>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm space-y-2 text-blue-800 dark:text-blue-200">
                        <p><strong>Pain is okay:</strong> Pain during the exercise is acceptable as long as it is tolerable.</p>
                        <p><strong>Morning Pain:</strong> If your morning pain is worse the next day, the load was too high. Reduce the load for the next session.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
