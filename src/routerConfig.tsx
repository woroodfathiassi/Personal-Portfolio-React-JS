import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import Contact from './pages/Contact';
import BlogsPage from './pages/Blogs';
import BlogsDetailsPage from './pages/BlogsDetails';
import NotFound404 from './pages/NotFound404';
import AuthContext from '@/store/AuthContext';
import { SkeletonNewBlog } from './pages/NewBlog';

// Lazy-loaded components
// const BlogsPage = React.lazy(() => import('./pages/Blogs'));
const NewBlogPage = React.lazy(() => import('./pages/NewBlog'));
// const BlogsDetailsPage = React.lazy(() => import('./pages/BlogsDetails'));
const LoginPage = React.lazy(() => import('./pages/Login'));

const AppRouter: React.FC = () => {
    const { isLoggedIn } = useContext(AuthContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: 'blogs',
                    element: <BlogsPage />,
                },
                {
                    path: 'blogs/:id',
                    element: <BlogsDetailsPage />,
                    // element: <React.Suspense fallback={<div>Loading...</div>}><BlogsDetailsPage /></React.Suspense>,
                },
                {
                    path: 'blogs/new',
                    element: isLoggedIn ? (
                        <React.Suspense fallback={SkeletonNewBlog()}><NewBlogPage /></React.Suspense>
                    ) : (
                        <Navigate to="/blogs" replace />
                    ),
                },
                { path: 'projects', element: <ProjectsPage /> },
                { path: 'contact', element: <Contact /> },
                {
                    path: 'login',
                    element: <React.Suspense fallback={<div>Loading...</div>}><LoginPage /></React.Suspense>,
                },
                { path: '*', element: <NotFound404 /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
