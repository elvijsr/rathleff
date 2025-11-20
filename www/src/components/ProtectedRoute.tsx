import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export function ProtectedRoute ({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useApp();

    if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    if (!user) {
        return <Navigate to="/onboarding" replace />;
    }

    return <>{children}</>;
}
