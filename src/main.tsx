import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { IdSectionProvider } from './context/Section/IdSectionContext';
import { HashRouter } from 'react-router-dom';

// Montserrat
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

// Crimson Text
import '@fontsource/crimson-text/400.css';
import '@fontsource/crimson-text/700.css';
import { ToastProvider } from './context/Toast/ToastContext';
import { ConfigProvider } from './context/Config/ConfigContext';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <IdSectionProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </IdSectionProvider>
        </HashRouter>
      </ThemeProvider>
    </ConfigProvider>
  </StrictMode>
);
