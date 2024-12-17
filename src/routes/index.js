import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomepageGuest from '../pages/Public/HomepageGuest';
import HomepageUser from '../pages/Private/HomepageUser';
import LoginPage from '../pages/Public/LoginPage';
import RegisterPage from '../pages/Public/RegisterPage';
import Dashboard from '../pages/Private/Dashboard';
import ModulePage from '../pages/Private/ModulePage';
import ModuleWatching from '../pages/Private/ModuleWatching';
import ArticlePage from '../pages/Public/ArticlePage';
import ArticleReading from '../pages/Public/ArticleReading';
import ContactUs from '../pages/Public/ContactUs';
import ForgotPassword from '../pages/Public/ForgotPassword';
import AuthContext from '../context/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('Is Authenticated:', isAuthenticated); // Debugging

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={isAuthenticated ? <HomepageUser /> : <HomepageGuest />} />
      <Route path="/Hero" element={isAuthenticated ? <HomepageUser /> : <HomepageGuest />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/articles/:id" element={<ArticleReading />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      {isAuthenticated ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/module" element={<ModulePage />} />
          <Route path="/module-watching/:moduleId" element={<ModuleWatching />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Navigate to="/login" replace />} />
          <Route path="/module" element={<Navigate to="/login" replace />} />
          <Route path="/module-watching/:moduleId" element={<Navigate to="/login" replace />} />
        </>
      )}

      {/* Catch-All Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
