export interface UserProfile {
  id: string;
  email: string;
  name: string;
  bodyWeight: number; // in kg
  startDate: string; // ISO date string
  currentPhase: 1 | 2 | 3;
  completedWorkouts: number;
}

export interface WorkoutLog {
  id: string;
  date: string; // ISO date string
  phase: 1 | 2 | 3;
  reps: number;
  sets: number;
  weight: number; // in kg
  painLevelAfter: number; // 0-10
  painLevelNextMorning?: number; // 0-10, optional as it's filled later
  completed: boolean;
}

export interface PainLog {
  id: string;
  date: string; // ISO date string
  painLevel: number; // 0-10
  context: 'morning' | 'after_activity' | 'evening';
}

export interface DailyStatus {
  isTrainingDay: boolean;
  phase: 1 | 2 | 3;
  recommendedWeight: number;
  recommendedReps: number;
  recommendedSets: number;
  nextWorkoutDate: string;
}
