import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { IdSectionProvider } from './providers/IdSectionProvider';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <IdSectionProvider>
          <App />
        </IdSectionProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
