import React, { useContext, createContext, useState } from 'react';

type AuthContextType = {
  user: string;
  login: () => void;
  logout: () => void;
};

const defaultAuthContext: AuthContextType = {
  user: '',
  login: () => {
    console.warn('login function not implemented.');
  },
  logout: () => {
    console.warn('logout function not implemented.');
  },
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState('muthu');

  const login = () => {
    console.log('User logged in');
    setUser('user');
  };

  const logout = () => {
    console.log(user); // This will log the current user
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
