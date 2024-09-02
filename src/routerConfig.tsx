// src/routerConfig.tsx
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from "./pages/Root";
import HomePage from './pages/Home'
// import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import BlogsPage from './pages/Blogs';
import BlogsDetailsPage from './pages/BlogsDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'blogs', element: <BlogsPage /> },
            { path: 'blogs/:id', element: <BlogsDetailsPage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'contact', element: <Contact /> },
        ]
    }
]);
