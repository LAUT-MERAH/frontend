import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const API_URL = 'http://localhost:3000/api/v1/auth';

  // Load token and user from localStorage on app load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const { token } = response.data;

      setToken(token);
      setIsAuthenticated(true);

      localStorage.setItem('token', token);

      console.log('Login successful');

    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);

    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
