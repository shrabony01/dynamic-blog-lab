# Blog Application (Dynamic Routing & Client-Side Authentication)

## Overview
This project is a multi-page blog application built using **React**, **TypeScript**, and **React Router v7**. The application demonstrates client-side single-page application (SPA) architecture, dynamic URL parameter extraction, state-driven navigation guards, and animated route transitions powered by **Framer Motion**.

---

## Technical Features

### 1. Dynamic Routing & Data Extraction
- **Index View (`/blog`)**: Renders a dynamic catalog of articles mapped from an in-memory dataset, generating semantic slug-based paths.
- **Dynamic Post View (`/blog/:slug`)**: Consumes the `:slug` route parameter via the `useParams` hook to query the mock dataset and render article content.
- **Fallback Handling**: Implements a dedicated "Post not found" UI state when an invalid or non-existent slug parameter is accessed.

### 2. Client-Side Authentication (`AuthContext`)
- Global authentication state is managed using React Context API (`isAuthenticated`, `login`, `logout`).
- Eliminates prop drilling by exposing authentication actions directly to child components via the custom `useAuth` hook.
- **Conditional UI Rendering**: The navigation header dynamically swaps between a "Log In" link and an "Admin" link with a "Log Out" session control depending on user authentication status.

### 3. Route Protection (`ProtectedRoute`)
- A higher-order routing guard wraps the `/admin` path.
- Checks authentication state prior to mounting dashboard views; unauthenticated requests are automatically intercepted and redirected to `/login` via `<Navigate replace to="/login" />`.
- Seamlessly redirects users to the protected `/admin` dashboard upon completing the simulated login flow.

### 4. Page Transitions
- Integrated `framer-motion` (`AnimatePresence` and `motion.div`) across top-level route switches to provide smooth entry, exit, and opacity fade transitions between pages.
