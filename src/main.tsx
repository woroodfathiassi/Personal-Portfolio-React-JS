import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ProjectContextProvider} from './store/ProjectContext';
import { BlogsContextProvider } from './store/BolgsContext';
// import { LightDarkContextProvider } from './store/LightDarkContext';
import { AuthProvider } from '@/store/AuthContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    {/* <LightDarkContextProvider> */}
      <StrictMode>
        <ProjectContextProvider>
          <BlogsContextProvider>
            <App />
          </BlogsContextProvider>
        </ProjectContextProvider>
      </StrictMode>
    {/* </LightDarkContextProvider> */}
  </AuthProvider>
);
