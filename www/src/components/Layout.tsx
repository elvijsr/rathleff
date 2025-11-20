import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, PlusCircle } from 'lucide-react';

export function Layout () {
    const location = useLocation();

    // Hide navigation on workout session to prevent accidental exit
    const hideNav = location.pathname.includes('/workout');

    return (
        <div className="min-h-[100dvh] bg-background md:bg-gray-100 md:dark:bg-gray-900 flex flex-col items-center justify-center font-sans antialiased">
            <div className="w-full md:max-w-md h-[100dvh] bg-background md:shadow-2xl flex flex-col relative overflow-hidden">
                <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                    <Outlet />
                </main>

                {!hideNav && (
                    <nav className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 shrink-0">
                        <div className="flex justify-around items-center h-16">
                            <Link to="/" className={`flex flex-col items-center p-2 ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
                                <Home size={24} />
                                <span className="text-xs mt-1">Home</span>
                            </Link>
                            <Link to="/workout/start" className="flex flex-col items-center p-2 text-primary">
                                <PlusCircle size={32} />
                            </Link>
                            <Link to="/profile" className={`flex flex-col items-center p-2 ${location.pathname === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}>
                                <User size={24} />
                                <span className="text-xs mt-1">Profile</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
}
