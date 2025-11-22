import { useState, useEffect, useRef, useCallback } from 'react';

export type TimerPhase = 'idle' | 'prepare' | 'concentric' | 'isometric' | 'eccentric' | 'rest' | 'finished';
export type WorkoutSide = 'left' | 'right';

interface UseWorkoutTimerProps {
    targetReps: number;
    targetSets: number;
    onComplete: () => void;
}

const TEMPO = {
    PREPARE: 5,
    CONCENTRIC: 3, // Up
    ISOMETRIC: 2,  // Hold
    ECCENTRIC: 3,  // Down
    REST: 60,      // Rest between sets
};

export function useWorkoutTimer ({ targetReps, targetSets, onComplete }: UseWorkoutTimerProps) {
    const [phase, setPhase] = useState<TimerPhase>('idle');
    const [timeLeft, setTimeLeft] = useState(0);
    const [currentRep, setCurrentRep] = useState(1);
    const [currentSet, setCurrentSet] = useState(1);
    const [side, setSide] = useState<WorkoutSide>('left');
    const [isActive, setIsActive] = useState(false);

    const timerRef = useRef<number | null>(null);

    const playAudio = useCallback((cue: string) => {
        // Placeholder for audio cues
        console.log(`Audio Cue: ${cue}`);
    }, []);

    const nextPhase = useCallback(() => {
        switch (phase) {
            case 'prepare':
                playAudio('up');
                setTimeLeft(TEMPO.CONCENTRIC);
                setPhase('concentric');
                break;
            case 'concentric':
                playAudio('hold');
                setTimeLeft(TEMPO.ISOMETRIC);
                setPhase('isometric');
                break;
            case 'isometric':
                playAudio('down');
                setTimeLeft(TEMPO.ECCENTRIC);
                setPhase('eccentric');
                break;
            case 'eccentric':
                if (currentRep < targetReps) {
                    setCurrentRep(r => r + 1);
                    playAudio('up');
                    setTimeLeft(TEMPO.CONCENTRIC);
                    setPhase('concentric');
                } else {
                    // Set complete
                    // Logic: Left -> Rest -> Right -> Rest -> Next Set Left...

                    // Check if we are finished with the current side
                    const nextSide = side === 'left' ? 'right' : 'left';
                    const nextSet = side === 'right' ? currentSet + 1 : currentSet;
                    const isWorkoutComplete = side === 'right' && currentSet >= targetSets;

                    if (!isWorkoutComplete) {
                        setSide(nextSide);
                        setCurrentSet(nextSet);
                        setCurrentRep(1);
                        playAudio('rest');
                        setTimeLeft(TEMPO.REST);
                        setPhase('rest');
                    } else {
                        // Workout complete
                        setIsActive(false);
                        onComplete();
                        setPhase('finished');
                    }
                }
                break;
            case 'rest':
                playAudio('prepare');
                setTimeLeft(TEMPO.PREPARE);
                setPhase('prepare');
                break;
            default:
                break;
        }
    }, [phase, currentRep, currentSet, side, targetReps, targetSets, onComplete, playAudio]);

    // Timer countdown effect
    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = window.setTimeout(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isActive, timeLeft]);

    // Phase transition effect
    useEffect(() => {
        if (isActive && timeLeft === 0) {
            // eslint-disable-next-line
            nextPhase();
        }
    }, [isActive, timeLeft, nextPhase]);

    const startWorkout = () => {
        setIsActive(true);
        setPhase('prepare');
        setTimeLeft(TEMPO.PREPARE);
        setSide('left'); // Always start with left
        setCurrentSet(1);
        setCurrentRep(1);
        playAudio('prepare');
    };

    const pauseWorkout = () => {
        setIsActive(false);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const resumeWorkout = () => {
        setIsActive(true);
    };

    const skipRest = () => {
        if (phase === 'rest') {
            if (timerRef.current) clearTimeout(timerRef.current);
            setTimeLeft(0); // Will trigger nextPhase immediately
        }
    };

    return {
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
        totalReps: targetReps,
        totalSets: targetSets
    };
}
