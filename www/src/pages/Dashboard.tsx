import { useApp } from '../context/AppContext';
import { getDailyStatus } from '../lib/protocol';
import { useNavigate } from 'react-router-dom';

export function Dashboard () {
    const { user, workouts } = useApp();
    const navigate = useNavigate();

    if (!user) return null;

    const lastWorkout = workouts.length > 0 ? workouts[workouts.length - 1] : undefined;
    const status = getDailyStatus(user, lastWorkout);

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Hi, {user.name}</h1>
                <p className="text-muted-foreground">Phase {user.currentPhase}</p>
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
                            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
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

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-2">Pain Trend</h2>
                <div className="h-32 flex items-center justify-center bg-muted/20 rounded">
                    <p className="text-muted-foreground text-sm">Chart coming soon...</p>
                </div>
            </div>
        </div>
    );
}
