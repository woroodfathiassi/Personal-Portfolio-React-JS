import React, { useContext, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import Contact from './pages/Contact';
import BlogsPage from './pages/Blogs';
// const BlogsPage = lazy(() => import('./pages/Blogs'));
import BlogsDetailsPage from './pages/BlogsDetails';
import LoginPage from './pages/Login';
import NewBlogPage from './pages/NewBlog';
// const NewBlogLazyLoading = React.lazy(() => import('./pages/NewBlog'))
import AuthContext from '@/store/AuthContext';

const AppRouter: React.FC = () => {
    const { isLoggedIn } = useContext(AuthContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> },
                // { path: 'blogs', element: <Suspense fallback='Loading...'><BlogsPage /></Suspense> },
                { path: 'blogs/', element: <BlogsPage /> },
                { path: 'blogs/:id', element: <BlogsDetailsPage /> },
                { path: 'blogs/new', element: isLoggedIn ? <NewBlogPage /> : <Navigate to="/blogs" replace /> },
                { path: 'projects', element: <ProjectsPage /> },
                { path: 'contact', element: <Contact /> },
                { path: 'login', element: <LoginPage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
