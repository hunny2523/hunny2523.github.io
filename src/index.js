import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { ReminderContextProvider } from './context/reminderContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReminderContextProvider>

      <App />
      </ReminderContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
