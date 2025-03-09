<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust path if necessary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 9173e27 (feat: Implement user registration form with controlled components and Formik)
