import { useApp } from '../context/AppContext';

export function Profile () {
    const { user, logout } = useApp();

    if (!user) return null;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Profile</h1>

            <div className="space-y-2">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Weight:</strong> {user.bodyWeight}kg</p>
                <p><strong>Start Date:</strong> {new Date(user.startDate).toLocaleDateString()}</p>
                <p><strong>Current Phase:</strong> {user.currentPhase}</p>
            </div>

            <button
                onClick={logout}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 rounded-md w-full"
            >
                Reset Data & Logout
            </button>
        </div>
    );
}
