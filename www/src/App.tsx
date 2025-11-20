import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { WorkoutSession } from './pages/WorkoutSession';
import { Profile } from './pages/Profile';

function AppRoutes () {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route element={<Layout />}>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/workout/start" element={
          <ProtectedRoute>
            <WorkoutSession />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}

function App () {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
