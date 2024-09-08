import { jsx as _jsx } from "react/jsx-runtime";
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
import SkeletonNewBlog from './components/skeletonLoading/SkeletonNewBlog';
// Lazy-loaded components
// const BlogsPage = React.lazy(() => import('./pages/Blogs'));
const NewBlogPage = React.lazy(() => import('./pages/NewBlog'));
// const BlogsDetailsPage = React.lazy(() => import('./pages/BlogsDetails'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: '/',
            element: _jsx(RootLayout, {}),
            children: [
                { index: true, element: _jsx(HomePage, {}) },
                {
                    path: 'blogs',
                    element: _jsx(BlogsPage, {}),
                },
                {
                    path: 'blogs/:id',
                    element: _jsx(BlogsDetailsPage, {}),
                    // element: <React.Suspense fallback={<div>Loading...</div>}><BlogsDetailsPage /></React.Suspense>,
                },
                {
                    path: 'blogs/new',
                    element: isLoggedIn ? (_jsx(React.Suspense, { fallback: _jsx(SkeletonNewBlog, {}), children: _jsx(NewBlogPage, {}) })) : (_jsx(Navigate, { to: "/blogs", replace: true })),
                },
                { path: 'projects', element: _jsx(ProjectsPage, {}) },
                { path: 'contact', element: _jsx(Contact, {}) },
                {
                    path: 'login',
                    element: _jsx(React.Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LoginPage, {}) }),
                },
                { path: '*', element: _jsx(NotFound404, {}) },
            ],
        },
    ]);
    return _jsx(RouterProvider, { router: router });
};
export default AppRouter;
