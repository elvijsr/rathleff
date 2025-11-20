# Rathleff Protocol App MVP Implementation Plan

This document outlines the implementation plan for a Minimum Viable Product (MVP) of the Rathleff Protocol application. The app will be a Progressive Web App (PWA)/Single Page Application (SPA) built with Vite, React, and shadcn/ui. The backend will be powered by Supabase.

## 1. Project Setup & Scaffolding (Completed)

*   **Initialize Project:** Set up a new Vite project with the React + TypeScript template in the `www` directory. (Completed)
*   **Install Dependencies:** (Completed: `react-router-dom`, `tailwindcss`, `@supabase/supabase-js` installed, `shadcn/ui` initialized)
    *   `react-router-dom` for navigation.
    *   `tailwindcss` for styling.
    *   `shadcn/ui` for UI components (initialized).
    *   `@supabase/supabase-js` for backend integration.
*   **Project Structure:** Organize the project into logical folders (`src/components`, `src/pages`, `src/lib`, `src/hooks`, etc.). (Completed)
*   **PWA Configuration:** Configure the Vite PWA plugin to enable offline capabilities and "add to homescreen" functionality. (Completed, placeholder icons needed in `public` directory)

## 2. Backend Setup (Supabase)

*   **Create Supabase Project:** Set up a new project on Supabase.
*   **Database Schema:**
    *   `users` table (managed by Supabase Auth).
    *   `profiles` table to store user-specific data (e.g., name, weight, start date).
    *   `workouts` table to log each completed exercise session (reps, sets, weight, pain level, date).
    *   `pain_log` table to record daily pain levels (morning and evening).
*   **Row Level Security (RLS):** Implement RLS policies to ensure users can only access their own data.
*   **Authentication:** Configure Supabase Auth (email/password and potentially social logins).

## 3. Core MVP Features

### 3.1. User Onboarding & Authentication

*   **Landing Page:** A simple page explaining the app and the Rathleff Protocol.
*   **Sign Up / Login:** Create pages for user registration and login using Supabase Auth.
*   **Onboarding Flow:**
    1.  Welcome screen.
    2.  Disclaimer and consent form (confirming diagnosis by a professional).
    3.  Collect initial user data (weight for load calculation).
    4.  Brief tutorial on how to use the app.

### 3.2. The "Smart Timer" & Exercise Guidance

*   **Exercise Interface:** A clean UI to guide the user through the exercise.
*   **Visual/Audio Pacer:**
    *   Implement a visual indicator (e.g., a rising/falling bar) for the 3-2-3 tempo (3s up, 2s hold, 3s down).
    *   Add audio cues ("up," "hold," "down") to guide the user.
*   **Rep & Set Counter:** Automatically track reps and sets.
*   **Instructional Content:** Embed high-quality videos/illustrations showing the correct exercise form, including the "towel under the toes" setup.

### 3.3. Progressive Overload Algorithm

*   **Phase Management:**
    *   **Phase 1 (Weeks 1-2):** 3 sets of 12 reps, bodyweight only.
    *   **Phase 2 (Weeks 3-4):** 3 sets of 10 reps, add external weight (calculated as 10% of bodyweight).
    *   **Phase 3 (Weeks 5+):** 4-5 sets of 8 reps, with increased weight.
*   **Gating Logic:** After 2 weeks, prompt the user about their pain level. If pain is manageable (<5/10), progress to the next phase. Otherwise, recommend continuing the current phase.
*   **Weight Progression:** Prompt the user to increase weight in Phase 3.

### 3.4. Pain Monitoring Dashboard

*   **Pain Input:** A simple form for the user to rate their pain (0-10 VAS) immediately after exercise and the next morning.
*   **Feedback Loop:**
    *   If morning pain is at or below baseline, provide positive reinforcement.
    *   If morning pain is above baseline, suggest a regression (e.g., reduce weight).
*   **Pain Trend Visualization:** Display a simple chart showing pain levels over time.

### 3.5. Engagement & Retention

*   **"Compliance Streak":** Track adherence to the "every other day" protocol.
*   **Push Notifications (via Supabase):**
    *   "It's training day!"
    *   "It's recovery day - enjoy the rest."
    *   Reminders to log pain.

## 4. UI/UX with shadcn/ui

*   **Component-Based Design:** Use shadcn/ui components for a consistent and accessible UI (buttons, cards, dialogs, etc.).
*   **Theme:** Create a clean, motivating, and trustworthy theme.
*   **Responsiveness:** Ensure the app is fully responsive and works well on all screen sizes (mobile-first approach).

## 5. Future Considerations (Post-MVP)

*   **Native iOS App:**
    *   The choice of React for the web app provides a good foundation for a future React Native app, allowing for significant code reuse (logic, components, hooks).
    *   Alternatively, for a pure native experience, Swift and SwiftUI would be the choice. The Supabase backend can be reused entirely.
*   **Community/Forum:** Integrate a simple forum for users to share their progress and support each other.
*   **Advanced Analytics:** More detailed charts and insights into the user's progress.
*   **HealthKit/Google Fit Integration:** Sync workout data with native health platforms (especially relevant for a native app).

## 6. Deployment

*   **Hosting:** Deploy the PWA to a self-hosted platform like Coolify.
*   **Backend Hosting:** Host Supabase on the same Coolify instance.
*   **CI/CD:** Set up a CI/CD pipeline for automated builds and deployments.
