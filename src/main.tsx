import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ProjectContextProvider} from './store/ProjectContext';
import { BlogsContextProvider } from './store/BolgsContext';
import { LightDarkContextProvider } from './store/LightDarkContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <LightDarkContextProvider>
    <StrictMode>
      <ProjectContextProvider>
        <BlogsContextProvider>
          <App />
        </BlogsContextProvider>
      </ProjectContextProvider>
    </StrictMode>
  </LightDarkContextProvider>
    
);
