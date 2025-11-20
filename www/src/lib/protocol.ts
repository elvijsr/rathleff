import type { UserProfile, WorkoutLog, DailyStatus } from './types';

export const PROTOCOL_PHASES = {
    1: {
        weeks: [1, 2],
        sets: 3,
        reps: 12,
        weightPercentage: 0, // Bodyweight only
        description: "Isometrics / Slow Concentric",
    },
    2: {
        weeks: [3, 4],
        sets: 3,
        reps: 10,
        weightPercentage: 0.10, // 10% of bodyweight
        description: "Isotonic with Load",
    },
    3: {
        weeks: [5, 99], // 5+
        sets: 4, // Range 4-5
        reps: 8,
        weightPercentage: 0.15, // Starts at higher load, progressive
        description: "Heavier Load",
    }
};

export function calculateDaysSinceStart (startDate: string): number {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getCurrentPhase (startDate: string): 1 | 2 | 3 {
    const days = calculateDaysSinceStart(startDate);
    const weeks = Math.ceil(days / 7);

    if (weeks <= 2) return 1;
    if (weeks <= 4) return 2;
    return 3;
}

export function calculateRecommendedLoad (bodyWeight: number, phase: 1 | 2 | 3): number {
    const phaseConfig = PROTOCOL_PHASES[phase];
    return Math.round(bodyWeight * phaseConfig.weightPercentage * 2) / 2; // Round to nearest 0.5
}

export function isTrainingDay (lastWorkoutDate?: string): boolean {
    if (!lastWorkoutDate) return true; // If no workout yet, today is training day

    const last = new Date(lastWorkoutDate);
    const now = new Date();

    // Reset hours to compare dates only
    last.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(now.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 2; // Every other day
}

export function getDailyStatus (user: UserProfile, lastWorkout?: WorkoutLog): DailyStatus {
    const phase = getCurrentPhase(user.startDate);
    const config = PROTOCOL_PHASES[phase];

    return {
        isTrainingDay: isTrainingDay(lastWorkout?.date),
        phase: phase,
        recommendedWeight: calculateRecommendedLoad(user.bodyWeight, phase),
        recommendedReps: config.reps,
        recommendedSets: config.sets,
        nextWorkoutDate: isTrainingDay(lastWorkout?.date)
            ? new Date().toISOString()
            : new Date(new Date().setDate(new Date().getDate() + 1)).toISOString() // Tomorrow
    };
}
