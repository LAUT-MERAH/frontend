import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null); 
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
      });
      const { token, user } = response.data; 
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('token', token); 
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      throw error; 
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token'); 
  };

  const register = async (registerData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', registerData);
      console.log('Registration successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      throw error; 
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
