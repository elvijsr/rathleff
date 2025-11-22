import { useApp } from '../context/AppContext';
import { getDailyStatus } from '../lib/protocol';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '../components/Calendar';

export function Dashboard() {
    const { user, workouts } = useApp();
    const navigate = useNavigate();

    if (!user) return null;

    const lastWorkout = workouts.length > 0 ? workouts[workouts.length - 1] : undefined;
    const status = getDailyStatus(user, lastWorkout);

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">Hi, {user.name}</h1>
                    <p className="text-muted-foreground">Phase {user.currentPhase}</p>
                </div>
                <button
                    onClick={() => navigate('/technique')}
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    Technique
                </button>
            </header>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-2">Today's Status</h2>
                {status.isTrainingDay ? (
                    <div className="space-y-4">
                        <p className="text-green-600 font-medium">It's Training Day!</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold">{status.recommendedSets}</div>
                                <div className="text-xs text-muted-foreground">Sets</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{status.recommendedReps}</div>
                                <div className="text-xs text-muted-foreground">Reps</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{status.recommendedWeight}kg</div>
                                <div className="text-xs text-muted-foreground">Load</div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/workout/start')}
                            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors"
                        >
                            Start Workout
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="text-blue-600 font-medium">Rest Day</p>
                        <p className="text-sm text-muted-foreground mt-1">
                            Next workout scheduled for tomorrow.
                        </p>
                    </div>
                )}
            </div>

            <Calendar workouts={workouts} />

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Workouts</h2>
                <div className="space-y-4">
                    {workouts.slice().reverse().slice(0, 5).map(workout => (
                        <div key={workout.id} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                            <div>
                                <div className="font-medium">{new Date(workout.date).toLocaleDateString()}</div>
                                <div className="text-xs text-muted-foreground">
                                    {workout.sets} sets × {workout.reps} reps @ {workout.weight}kg
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-muted-foreground">Pain</span>
                                <span className={`font-bold ${workout.painLevelAfter > 3 ? 'text-red-500' : 'text-green-500'}`}>
                                    {workout.painLevelAfter}/10
                                </span>
                            </div>
                        </div>
                    ))}
                    {workouts.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-4">No workouts yet.</p>
                    )}
                </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-2">Pain Trend</h2>
                <div className="h-32 flex items-center justify-center bg-muted/20 rounded">
                    <p className="text-muted-foreground text-sm">Chart coming soon...</p>
                </div>
            </div>
        </div>
    );
}
