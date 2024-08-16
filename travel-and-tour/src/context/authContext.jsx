// src/AuthContext.js
import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setAuthData(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setAuthData(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setAuthData(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ authData, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
