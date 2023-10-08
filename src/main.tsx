import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth_context';
import { DefaultProvider } from '@/contexts/default_context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DefaultProvider>
          <App />
        </DefaultProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
