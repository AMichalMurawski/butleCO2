import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
<<<<<<< Updated upstream
import { IdSectionProvider } from './providers/IdSectionProvider';
=======
import { IdSectionProvider } from './provider/IdSectionProvider';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <IdSectionProvider>
        <App />
      </IdSectionProvider>
    </ThemeProvider>
  </StrictMode>
);
