import React, { createContext, useContext, useEffect, useState } from 'react';
import type { UserProfile, WorkoutLog, PainLog } from '../lib/types';
import { MockApi } from '../lib/mock-api';

interface AppContextType {
    user: UserProfile | null;
    workouts: WorkoutLog[];
    painLogs: PainLog[];
    isLoading: boolean;
    refreshData: () => Promise<void>;
    login: (name: string, weight: number) => Promise<void>;
    logout: () => void;
    logWorkout: (workout: Omit<WorkoutLog, 'id'>) => Promise<void>;
    logPain: (pain: Omit<PainLog, 'id'>) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider ({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [workouts, setWorkouts] = useState<WorkoutLog[]>([]);
    const [painLogs, setPainLogs] = useState<PainLog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const refreshData = async () => {
        setIsLoading(true);
        try {
            const [userData, workoutsData, painData] = await Promise.all([
                MockApi.getUser(),
                MockApi.getWorkouts(),
                MockApi.getPainLogs()
            ]);
            setUser(userData);
            setWorkouts(workoutsData);
            setPainLogs(painData);
        } catch (error) {
            console.error("Failed to load data", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

    const login = async (name: string, weight: number) => {
        await MockApi.createUser(name, weight);
        await refreshData();
    };

    const logout = async () => {
        await MockApi.clearData();
        setUser(null);
        setWorkouts([]);
        setPainLogs([]);
    };

    const logWorkout = async (workout: Omit<WorkoutLog, 'id'>) => {
        await MockApi.logWorkout(workout);
        await refreshData();
    };

    const logPain = async (pain: Omit<PainLog, 'id'>) => {
        await MockApi.logPain(pain);
        await refreshData();
    };

    return (
        <AppContext.Provider value={{
            user,
            workouts,
            painLogs,
            isLoading,
            refreshData,
            login,
            logout,
            logWorkout,
            logPain
        }}>
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp () {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
