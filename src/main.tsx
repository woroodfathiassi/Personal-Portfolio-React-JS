import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProjectContextProvider } from './store/ProjectContext';
import { BlogsContextProvider } from './store/BolgsContext';
import { DarkThemeContextProvider } from './store/DarkThemeContect';
import { AuthProvider } from '@/store/AuthContext';
import App from './App';
import './index.css';

// Load Google Analytics script
const loadGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_MEASUREMENT_ID}`;

  // Define the global gtag function
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    // Define gtag globally
    (window as any).gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', import.meta.env.VITE_MEASUREMENT_ID);
  };

  script.onerror = () => {
    console.error('Failed to load Google Analytics script');
  };

  document.head.appendChild(script);
};

// Load the script outside of the React rendering
loadGoogleAnalytics();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <DarkThemeContextProvider>
        <ProjectContextProvider>
          <BlogsContextProvider>
            <App />
          </BlogsContextProvider>
        </ProjectContextProvider>
      </DarkThemeContextProvider>
    </AuthProvider>
  </StrictMode>
);
