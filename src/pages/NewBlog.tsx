import React, { Suspense, lazy } from 'react';
import { addNewBlog } from "@/APIs/db.config";
import Input from "@/components/Input";
// import MarkdownEditor from "@/components/MarkdownEditor";
const MarkdownEditor = lazy(() => import('@/components/MarkdownEditor'));
import BlogsContext from "@/store/BolgsContext";
import { useState, useRef, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
    title: string;
    description: string;
    content: string;
    date: string;
}

interface Errors {
    title: string;
    description: string;
    content: string;
    date: string;
}

const NewBlogPage: React.FC = () => {
    document.title = "Add new blog | Worood Assi";
    const { addBlog } = useContext(BlogsContext);
    const navigate = useNavigate();

    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        content: '', 
        date: ''
    });
    const [errors, setErrors] = useState<Errors>({
        title: '',
        description: '',
        content: '', 
        date: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let valid = true;
        const newErrors: Errors = {
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
            console.log(formData)
            const response = await addNewBlog(
                formData.title,
                formData.content,
                formData.description,
                formData.date
            );

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
            } else {
                console.error('Failed to add the blog.');
            }
        }
    }

    return (
        // bg-gradient-to-r from-red-400 via-pink-300 to-green-500
        <div className='container m-auto p-3 '>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3'>
            New Blog:
        </h1>
        <p className='mb-6 mt-3 text-base text-zinc-600 dark:text-zinc-400'>
            This is where you can create a new blog post. Use the form below to enter details for your new blog.
        </p>
        <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
            <Input
                data={{ label: 'Title', type: 'text', name: 'title', value: formData.title }}
                onChange={handleChange}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div className="mb-4">
            <Input
                data={{ label: 'Description', type: 'textarea', name: 'description', value: formData.description }}
                onChange={handleChange}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>
            <div className="mb-4">
            <Input
                data={{ label: 'Date', type: 'date', name: 'date', value: formData.date }}
                onChange={handleChange}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div className="mb-4">
                <Suspense fallback='Loading...'>
                    <MarkdownEditor value={formData.content} onChange={(value) => handleChange({ target: { name: 'content', value } } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)} />
                    {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                </Suspense>
            </div>
            <button type="submit" className="bg-mainColor text-white p-2 rounded">Submit</button>
        </form>
        </div>
    );
};

export default NewBlogPage;
