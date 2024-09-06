import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from 'react';
import { addNewBlog } from "@/APIs/db.config";
import Input from "@/components/Input";
// import MarkdownEditor from "@/components/MarkdownEditor";
const MarkdownEditor = lazy(() => import('@/components/MarkdownEditor'));
import BlogsContext from "@/store/BolgsContext";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
const NewBlogPage = () => {
    document.title = "Add new blog | Worood Assi";
    const { addBlog } = useContext(BlogsContext);
    const navigate = useNavigate();
    const form = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        date: ''
    });
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        content: '',
        date: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = {
            title: '',
            description: '',
            content: '', // Added for Markdown content
            date: ''
        };
        if (formData.title.trim() === '') {
            newErrors.title = 'Title is required';
            valid = false;
        }
        if (formData.description.trim() === '') {
            newErrors.description = 'Description is required';
            valid = false;
        }
        if (formData.content.trim() === '') {
            newErrors.content = 'Content is required';
            valid = false;
        }
        if (formData.date.trim() === '') {
            newErrors.date = 'Date is required';
            valid = false;
        }
        setErrors(newErrors);
        if (valid) {
            console.log(formData);
            const response = await addNewBlog(formData.title, formData.content, formData.description, formData.date);
            if (response && response.length > 0) {
                const blog = response[0];
                console.log('Blog added successfully:', blog);
                addBlog(blog);
                setFormData({
                    title: '',
                    description: '',
                    date: '',
                    content: '',
                });
                navigate('/blogs');
            }
            else {
                console.error('Failed to add the blog.');
            }
        }
    };
    return (
    // bg-gradient-to-r from-red-400 via-pink-300 to-green-500
    _jsxs("div", { className: 'container m-auto p-3 ', children: [_jsx("h1", { className: 'text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3', children: "New Blog:" }), _jsx("p", { className: 'mb-6 mt-3 text-base text-zinc-600 dark:text-zinc-400', children: "This is where you can create a new blog post. Use the form below to enter details for your new blog." }), _jsxs("form", { ref: form, onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Title', type: 'text', name: 'title', value: formData.title }, onChange: handleChange }), errors.title && _jsx("p", { className: "text-red-500 text-sm", children: errors.title })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Description', type: 'textarea', name: 'description', value: formData.description }, onChange: handleChange }), errors.description && _jsx("p", { className: "text-red-500 text-sm", children: errors.description })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Date', type: 'date', name: 'date', value: formData.date }, onChange: handleChange }), errors.date && _jsx("p", { className: "text-red-500 text-sm", children: errors.date })] }), _jsx("div", { className: "mb-4", children: _jsxs(Suspense, { fallback: 'Loading...', children: [_jsx(MarkdownEditor, { value: formData.content, onChange: (value) => handleChange({ target: { name: 'content', value } }) }), errors.content && _jsx("p", { className: "text-red-500 text-sm", children: errors.content })] }) }), _jsx("button", { type: "submit", className: "bg-mainColor text-white p-2 rounded", children: "Submit" })] })] }));
};
export default NewBlogPage;
