import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import HeaderGuest from './components/HeaderGuest';
import HeaderUser from './components/HeaderUser';
import AuthContext from './context/AuthContext';


function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <div>
        {isAuthenticated ? <HeaderUser /> : <HeaderGuest />}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
