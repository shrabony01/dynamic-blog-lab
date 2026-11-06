import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { ProtectedRoute } from './components/ProtectedRoute';

// Framer Motion animation configuration for smooth page fades
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default function App(): React.ReactElement {
  const location = useLocation();

  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-wrapper">
        {/* AnimatePresence enables exit animations when routes change */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Redirect root URL to /blog */}
            <Route path="/" element={<Navigate to="/blog" replace />} />

            {/* Public blog index */}
            <Route
              path="/blog"
              element={
                <AnimatedPage>
                  <BlogIndex />
                </AnimatedPage>
              }
            />

            {/* Dynamic slug route */}
            <Route
              path="/blog/:slug"
              element={
                <AnimatedPage>
                  <BlogPost />
                </AnimatedPage>
              }
            />

            {/* Login route */}
            <Route
              path="/login"
              element={
                <AnimatedPage>
                  <Login />
                </AnimatedPage>
              }
            />

            {/* Protected admin dashboard route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AnimatedPage>
                    <Admin />
                  </AnimatedPage>
                </ProtectedRoute>
              }
            />

            {/* Catch-all 404 route */}
            <Route path="*" element={<Navigate to="/blog" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}