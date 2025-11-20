import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useWorkoutTimer } from '../hooks/useWorkoutTimer';
import { Pacer } from '../components/Pacer';
import { getDailyStatus } from '../lib/protocol';

export function WorkoutSession () {
    const { user, logWorkout } = useApp();
    const navigate = useNavigate();
    const [painLevel, setPainLevel] = useState<number | null>(null);

    // Default to phase 1 values if user not found (shouldn't happen due to protection)
    const status = user ? getDailyStatus(user) : { recommendedReps: 12, recommendedSets: 3, recommendedWeight: 0, phase: 1 };

    const handleComplete = () => {
        // Show pain input
    };

    const {
        phase,
        timeLeft,
        currentRep,
        currentSet,
        side,
        isActive,
        startWorkout,
        pauseWorkout,
        resumeWorkout,
        skipRest,
        totalReps,
        totalSets
    } = useWorkoutTimer({
        targetReps: status.recommendedReps,
        targetSets: status.recommendedSets,
        onComplete: handleComplete
    });

    const handleFinish = async () => {
        if (painLevel !== null && user) {
            await logWorkout({
                date: new Date().toISOString(),
                phase: user.currentPhase,
                reps: status.recommendedReps,
                sets: status.recommendedSets,
                weight: status.recommendedWeight,
                painLevelAfter: painLevel,
                completed: true
            });
            navigate('/');
        }
    };

    if (phase === 'finished') {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in duration-500">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Workout Complete!</h1>
                    <p className="text-muted-foreground">Great job. How is your pain right now?</p>
                </div>

                <div className="w-full max-w-xs space-y-6">
                    <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>No Pain (0)</span>
                        <span>Worst Pain (10)</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={painLevel ?? 0}
                        onChange={(e) => setPainLevel(parseInt(e.target.value))}
                        className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="text-center text-4xl font-bold text-primary">{painLevel ?? 0}</div>

                    <button
                        onClick={handleFinish}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md font-medium transition-all active:scale-95"
                    >
                        Save & Finish
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full py-6 space-y-8">
            <header className="grid grid-cols-3 items-start">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Set {currentSet}</h1>
                    <p className="text-sm text-muted-foreground">of {totalSets}</p>
                </div>
                <div className="text-center">
                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold ${side === 'left' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'}`}>
                        {side === 'left' ? 'LEFT' : 'RIGHT'} FOOT
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold">{status.recommendedWeight}<span className="text-sm font-normal text-muted-foreground">kg</span></div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Load</div>
                </div>
            </header>

            <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                <div className="text-center">
                    <span className="text-6xl font-black tabular-nums tracking-tighter">
                        {currentRep}
                    </span>
                    <span className="text-2xl text-muted-foreground font-medium"> / {totalReps}</span>
                    <p className="text-sm text-muted-foreground mt-1 uppercase tracking-widest">Reps</p>
                </div>

                <div className="w-full max-w-[280px]">
                    <Pacer phase={phase} timeLeft={timeLeft} />
                </div>
            </div>

            {/* Spacer to prevent content from being hidden behind fixed bottom bar */}
            <div className="h-24" />

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[100] border-t md:absolute pointer-events-auto">
                <div className="max-w-md mx-auto">
                    {phase === 'idle' && (
                        <button
                            onClick={() => {
                                startWorkout();
                            }}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-xl text-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer"
                        >
                            Start Workout
                        </button>
                    )}

                    {(phase !== 'idle') && (
                        <div className="flex gap-4">
                            {isActive ? (
                                <button
                                    onClick={pauseWorkout}
                                    className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-16 rounded-xl font-bold text-lg transition-all active:scale-95"
                                >
                                    Pause
                                </button>
                            ) : (
                                <button
                                    onClick={resumeWorkout}
                                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95"
                                >
                                    Resume
                                </button>
                            )}

                            {phase === 'rest' && (
                                <button
                                    onClick={skipRest}
                                    className="flex-1 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-100 h-16 rounded-xl font-bold text-lg transition-all active:scale-95"
                                >
                                    Skip Rest
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
