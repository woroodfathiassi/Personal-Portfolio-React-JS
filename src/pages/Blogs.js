import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import BlogsList from "@/components/BlogsList";
import { IoMdAdd } from "react-icons/io";
import AuthContext from '@/store/AuthContext';
import { useNavigate } from 'react-router-dom';
const BlogsPage = () => {
    document.title = "Blogs | Worood Assi";
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddBlog = () => {
        navigate('/blogs/new');
    };
    return (_jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3", children: "Blogs List" }), _jsx("p", { className: "mt-2 text-base text-zinc-600 dark:text-zinc-400", children: "I write about things I learn and things I think about." })] }), isLoggedIn &&
                _jsx("button", { onClick: handleAddBlog, className: 'bg-mainColor p-2 rounded-full shadow-md text-white transition-all hover:shadow-zinc-400 dark:hover:shadow-zinc-500', children: _jsx(IoMdAdd, { size: 35 }) }), _jsx(BlogsList, {})] }));
};
export default BlogsPage;
