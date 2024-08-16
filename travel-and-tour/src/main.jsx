import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
import { AuthContextProvider } from './context/authContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router basename="/Travel-and-Tour-project">
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
