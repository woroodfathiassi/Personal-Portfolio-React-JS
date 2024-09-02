import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ProjectContextProvider} from './store/ProjectContext';
import { BlogsContextProvider } from './store/BolgsContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </ProjectContextProvider>
  </StrictMode>
);
