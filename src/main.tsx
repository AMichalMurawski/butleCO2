import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { IdSectionProvider } from './context/Section/IdSectionContext';
import { BrowserRouter } from 'react-router-dom';

// Roboto
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

// Roboto Slab
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/700.css';

// Montserrat
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

// Merriweather
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';

// Poppins
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

// Lora
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';

// Open Sans
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

// PT Serif
import '@fontsource/pt-serif/400.css';
import '@fontsource/pt-serif/700.css';

// Work Sans
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/700.css';

// Crimson Text
import '@fontsource/crimson-text/400.css';
import '@fontsource/crimson-text/700.css';


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
