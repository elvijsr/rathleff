import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Layout() {
    const location = useLocation();

    // Hide navigation on workout session to prevent accidental exit
    const hideNav = location.pathname.includes('/workout');

    return (
        <div className="min-h-[100dvh] bg-gray-50/50 md:bg-gray-100 flex flex-col items-center justify-center font-sans antialiased text-foreground">
            <div className="w-full md:max-w-md h-[100dvh] bg-background md:h-[90dvh] md:rounded-[2rem] md:shadow-2xl md:border border-border/40 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out">
                <main className="flex-1 overflow-y-auto scrollbar-hide">
                    <div className="p-6 pb-24 min-h-full">
                        <Outlet />
                    </div>
                </main>

                {!hideNav && (
                    <nav className="absolute bottom-6 left-6 right-6 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg z-50 shrink-0 transition-all duration-300">
                        <div className="flex justify-around items-center h-full px-2">
                            <Link to="/" className={cn("flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200", location.pathname === '/' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary/70')}>
                                <Home size={20} strokeWidth={2.5} />
                            </Link>
                            <Link to="/workout/start" className="flex flex-col items-center justify-center -mt-8 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-xl shadow-primary/30 hover:scale-105 transition-transform duration-200 border-4 border-background">
                                <PlusCircle size={28} strokeWidth={2.5} />
                            </Link>
                            <Link to="/profile" className={cn("flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200", location.pathname === '/profile' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary/70')}>
                                <User size={20} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
}
