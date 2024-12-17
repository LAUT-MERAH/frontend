import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import HomepageUser from '../pages/Private/HomepageUser';
import Dashboard from '../pages/Private/Dashboard';
import ModulePage from '../pages/Private/ModulePage';

// A wrapper for protected routes
const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Define Private Routes
const PrivateRoutes = () => {
  return (
    <>
      <Route element={<PrivateRoute />}>
        <Route path="/user-home" element={<HomepageUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<ModulePage />} />
      </Route>
    </>
  );
};

export default PrivateRoutes;
