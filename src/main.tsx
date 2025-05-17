import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
