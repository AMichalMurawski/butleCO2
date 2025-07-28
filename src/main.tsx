import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { IdSectionProvider } from './context/Section/IdSectionContext';
import { BrowserRouter } from 'react-router-dom';

// Montserrat
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

// Crimson Text
import '@fontsource/crimson-text/400.css';
import '@fontsource/crimson-text/700.css';
import { ToastProvider } from './context/Toast/ToastContext';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <IdSectionProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </IdSectionProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
