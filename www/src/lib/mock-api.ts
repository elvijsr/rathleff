import type { UserProfile, WorkoutLog, PainLog } from './types';

const STORAGE_KEYS = {
    USER: 'rathleff_user',
    WORKOUTS: 'rathleff_workouts',
    PAIN_LOGS: 'rathleff_pain_logs',
};

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MockApi = {
    async getUser (): Promise<UserProfile | null> {
        await delay(500);
        const data = localStorage.getItem(STORAGE_KEYS.USER);
        return data ? JSON.parse(data) : null;
    },

    async createUser (name: string, bodyWeight: number): Promise<UserProfile> {
        await delay(800);
        const newUser: UserProfile = {
            id: 'user_' + Date.now(),
            email: 'demo@example.com',
            name,
            bodyWeight,
            startDate: new Date().toISOString(),
            currentPhase: 1,
            completedWorkouts: 0,
        };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
        return newUser;
    },

    async updateProfile (updates: Partial<UserProfile>): Promise<UserProfile> {
        await delay(300);
        const current = await this.getUser();
        if (!current) throw new Error("No user found");

        const updated = { ...current, ...updates };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
        return updated;
    },

    async getWorkouts (): Promise<WorkoutLog[]> {
        await delay(400);
        const data = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
        return data ? JSON.parse(data) : [];
    },

    async logWorkout (workout: Omit<WorkoutLog, 'id'>): Promise<WorkoutLog> {
        await delay(500);
        const workouts = await this.getWorkouts();
        const newWorkout: WorkoutLog = {
            ...workout,
            id: 'wo_' + Date.now(),
        };
        workouts.push(newWorkout);
        localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));

        // Update user stats
        const user = await this.getUser();
        if (user) {
            await this.updateProfile({ completedWorkouts: user.completedWorkouts + 1 });
        }

        return newWorkout;
    },

    async getPainLogs (): Promise<PainLog[]> {
        await delay(300);
        const data = localStorage.getItem(STORAGE_KEYS.PAIN_LOGS);
        return data ? JSON.parse(data) : [];
    },

    async logPain (pain: Omit<PainLog, 'id'>): Promise<PainLog> {
        await delay(300);
        const logs = await this.getPainLogs();
        const newLog: PainLog = {
            ...pain,
            id: 'pain_' + Date.now(),
        };
        logs.push(newLog);
        localStorage.setItem(STORAGE_KEYS.PAIN_LOGS, JSON.stringify(logs));
        return newLog;
    },

    async clearData () {
        localStorage.removeItem(STORAGE_KEYS.USER);
        localStorage.removeItem(STORAGE_KEYS.WORKOUTS);
        localStorage.removeItem(STORAGE_KEYS.PAIN_LOGS);
    }
};
