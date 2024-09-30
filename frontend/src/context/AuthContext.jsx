// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Token aus den Cookies abrufen
    const token = Cookies.get('token');
    console.log('Initialer Token aus Cookie:', token);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (token) => {
    console.log('Login mit Token:', token);
    // Setze das Token in den Cookies, z.B. für 7 Tage
    Cookies.set('token', token, { expires: 7 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log('Logout');
    // Entferne das Token aus den Cookies
    Cookies.remove('token');
    setIsAuthenticated(false);
  };

  return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;
