import type { WorkoutLog } from '../lib/types';

interface CalendarProps {
    workouts: WorkoutLog[];
}

export function Calendar({ workouts }: CalendarProps) {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday

    // Adjust for Monday start if needed, but let's stick to Sunday start for simplicity or standard
    // Let's do Monday start as it's common in Europe (Rathleff is likely European/Danish)
    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: startDay }, (_, i) => i);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Helper to check if a date has a workout
    const getWorkoutForDate = (day: number) => {
        return workouts.find(w => {
            const wDate = new Date(w.date);
            return wDate.getDate() === day &&
                wDate.getMonth() === currentMonth &&
                wDate.getFullYear() === currentYear;
        });
    };

    // Helper to check if a date is a planned training day
    // This is tricky because it depends on the last workout relative to that date
    // For simplicity, let's just mark future days based on the *last recorded* workout
    const lastWorkout = workouts.length > 0 ? workouts[workouts.length - 1] : undefined;

    const isPlanned = (day: number) => {
        if (day < today.getDate()) return false; // Past days are not "planned", they are missed or done

        const dateToCheck = new Date(currentYear, currentMonth, day);
        // If we have a last workout, check if this date is a training day relative to it
        // But wait, isTrainingDay checks relative to *now* or relative to *last workout*?
        // isTrainingDay(lastWorkoutDate) returns true if today is a training day.

        // We need to project.
        // If last workout was on date X, then X+2, X+4, etc. are training days.
        if (!lastWorkout) return false; // Can't predict without history? Or assume every other day from start?

        const lastDate = new Date(lastWorkout.date);
        lastDate.setHours(0, 0, 0, 0);

        const diffTime = Math.abs(dateToCheck.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays > 0 && diffDays % 2 === 0;
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{monthNames[currentMonth]} {currentYear}</h2>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                <div className="text-muted-foreground font-medium">Mo</div>
                <div className="text-muted-foreground font-medium">Tu</div>
                <div className="text-muted-foreground font-medium">We</div>
                <div className="text-muted-foreground font-medium">Th</div>
                <div className="text-muted-foreground font-medium">Fr</div>
                <div className="text-muted-foreground font-medium">Sa</div>
                <div className="text-muted-foreground font-medium">Su</div>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {blanks.map((_, i) => (
                    <div key={`blank-${i}`} className="h-10" />
                ))}

                {days.map(day => {
                    const workout = getWorkoutForDate(day);
                    const planned = !workout && isPlanned(day);
                    const isToday = day === today.getDate();

                    return (
                        <div
                            key={day}
                            className={`
                                h-10 flex items-center justify-center rounded-md text-sm relative
                                ${isToday ? 'ring-2 ring-primary ring-offset-2' : ''}
                                ${workout ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-100 font-bold' : ''}
                                ${planned ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-200 border border-blue-200 dark:border-blue-800' : ''}
                                ${!workout && !planned ? 'hover:bg-muted/50' : ''}
                            `}
                        >
                            {day}
                            {workout && (
                                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-current" />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 mt-4 text-xs text-muted-foreground justify-center">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-green-100 border border-green-200 dark:bg-green-900/30 dark:border-green-800"></div>
                    <span>Done</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"></div>
                    <span>Planned</span>
                </div>
            </div>
        </div>
    );
}
