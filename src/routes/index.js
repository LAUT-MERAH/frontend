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
import ArticleReading1 from '../pages/Public/article-1';
import ArticleReading2 from '../pages/Public/article-2';
import ArticleReading3 from '../pages/Public/article-3';
import ArticleReading4 from '../pages/Public/article-4';
import ArticleReading5 from '../pages/Public/article-5';
import ArticleReading6 from '../pages/Public/article-6';
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
      <Route path="/articles/1" element={<ArticleReading1 />} />
      <Route path="/articles/2" element={<ArticleReading2 />} />
      <Route path="/articles/3" element={<ArticleReading3 />} />
      <Route path="/articles/4" element={<ArticleReading4 />} />
      <Route path="/articles/5" element={<ArticleReading5 />} />
      <Route path="/articles/6" element={<ArticleReading6 />} />
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