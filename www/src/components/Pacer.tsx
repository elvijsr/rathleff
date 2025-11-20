import type { TimerPhase } from '../hooks/useWorkoutTimer';
import { cn } from '../lib/utils';

interface PacerProps {
    phase: TimerPhase;
    timeLeft: number;
}

export function Pacer ({ phase, timeLeft }: PacerProps) {
    // Calculate height percentage based on phase
    // concentric: 0 -> 100
    // isometric: 100
    // eccentric: 100 -> 0

    let height = '0%';
    let transitionDuration = '0s';
    let color = 'bg-primary';
    let text = '';

    switch (phase) {
        case 'prepare':
            height = '0%';
            text = 'Get Ready';
            color = 'bg-yellow-500';
            break;
        case 'concentric':
            height = '100%';
            transitionDuration = '3s';
            text = 'UP';
            color = 'bg-blue-500';
            break;
        case 'isometric':
            height = '100%';
            transitionDuration = '0s';
            text = 'HOLD';
            color = 'bg-green-500';
            break;
        case 'eccentric':
            height = '0%';
            transitionDuration = '3s';
            text = 'DOWN';
            color = 'bg-orange-500';
            break;
        case 'rest':
            height = '0%';
            text = 'REST';
            color = 'bg-slate-500';
            break;
        case 'finished':
            height = '100%';
            text = 'DONE';
            color = 'bg-green-600';
            break;
        default:
            height = '0%';
    }

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full">
            <div className="relative h-48 w-16 bg-muted rounded-full overflow-hidden border-2 border-border">
                <div
                    className={cn("absolute bottom-0 left-0 right-0 w-full transition-all ease-linear", color)}
                    style={{ height, transitionDuration }}
                />
            </div>
            <div className="mt-4 text-2xl font-bold animate-pulse">
                {text} ({timeLeft}s)
            </div>
        </div>
    );
}
