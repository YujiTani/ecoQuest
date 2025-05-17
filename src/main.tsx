import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import React from 'react';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
