import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
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
const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: '/',
            element: _jsx(RootLayout, {}),
            children: [
                { index: true, element: _jsx(HomePage, {}) },
                // { path: 'blogs', element: <Suspense fallback='Loading...'><BlogsPage /></Suspense> },
                { path: 'blogs/', element: _jsx(BlogsPage, {}) },
                { path: 'blogs/:id', element: _jsx(BlogsDetailsPage, {}) },
                { path: 'blogs/new', element: isLoggedIn ? _jsx(NewBlogPage, {}) : _jsx(Navigate, { to: "/blogs", replace: true }) },
                { path: 'projects', element: _jsx(ProjectsPage, {}) },
                { path: 'contact', element: _jsx(Contact, {}) },
                { path: 'login', element: _jsx(LoginPage, {}) },
            ],
        },
    ]);
    return _jsx(RouterProvider, { router: router });
};
export default AppRouter;
