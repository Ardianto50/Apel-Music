import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Register } from "./pages/Register";
import { Login } from './pages/Login';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './custom_mui/theme';
// import { Login } from './pages/Login';
// import { Navbar } from './assets/components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
