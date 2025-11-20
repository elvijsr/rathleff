import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export function Onboarding () {
    const { login } = useApp();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name && weight) {
            await login(name, parseFloat(weight));
            navigate('/');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6">
            <h1 className="text-3xl font-bold text-center">Welcome to Rathleff</h1>
            <p className="text-center text-muted-foreground">
                The science-backed protocol for plantar fasciitis recovery.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="weight" className="text-sm font-medium">Body Weight (kg)</label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="75"
                        required
                    />
                    <p className="text-xs text-muted-foreground">Used to calculate exercise load.</p>
                </div>

                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                    Get Started
                </button>
            </form>
        </div>
    );
}
