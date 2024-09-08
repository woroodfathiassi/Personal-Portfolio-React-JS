import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogsContext from '@/store/BolgsContext';
import FormattedDate from '@/utils/FormattedDate ';
import { FaArrowLeftLong } from "react-icons/fa6";
import NotFound404 from './NotFound404';
import SkeletonBlog from '@/components/skeletonLoading/SkeletonBlog';
const MarkdownRenderer = lazy(() => import('@/components/MarkdownRenderer'));
const BlogsDetailsPage = () => {
    document.title = "Blog | Worood Assi";
    const navigate = useNavigate();
    const { blogs } = useContext(BlogsContext) || { blogs: [] }; // Provide default value to avoid errors
    const { id } = useParams();
    const handleBackToBlogs = () => {
        navigate('/blogs');
    };
    if (!id) {
        return _jsx(NotFound404, {});
    }
    const blogId = parseInt(id, 10);
    if (isNaN(blogId)) {
        return _jsx(NotFound404, {});
    }
    // Ensure blogs is typed as Blog[]
    const blog = blogs.find((blog) => blog.id === blogId);
    console.log('blogs:', blogs);
    console.log('blogId:', blogId);
    console.log('found blog:', blog);
    if (!blog) {
        return _jsx(NotFound404, {});
    }
    return (_jsxs("div", { className: "container mx-auto py-7", children: [_jsxs("div", { className: 'items-center ml-[2rem] mb-4 flex gap-3 flex-col lg:flex-row', children: [_jsx("button", { onClick: handleBackToBlogs, className: 'group mr-2 p-3 rounded-full border-2 shadow-md shadow-zinc-800/5 border-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-500', children: _jsx(FaArrowLeftLong, { className: 'text-zinc-300 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors' }) }), _jsx("span", { className: 'font-time m-2 border-l-4 border-r-0 border-t-0 border-b-0 rounded-sm border-l-zinc-200 text-zinc-400 dark:text-zinc-300 dark:border-l-zinc-500 pl-3', children: FormattedDate(blog.date) })] }), _jsxs("div", { className: 'mt-10', children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: blog.title }), _jsx("div", { className: 'w-full mt-5 lg:w-2/3', children: _jsx(Suspense, { fallback: _jsx(SkeletonBlog, {}), children: _jsx(MarkdownRenderer, { markdown: blog.content }) }) })] })] }));
};
export default BlogsDetailsPage;
