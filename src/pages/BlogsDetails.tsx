import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogsContext from '@/store/BolgsContext';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import FormattedDate from '@/utils/FormattedDate ';
import { FaArrowLeftLong } from "react-icons/fa6";


const BlogsDetailsPage = () => {
    const navigate = useNavigate();

    const { blogs } = useContext(BlogsContext);

    const { id } = useParams();

    const handleButtonClick = () => {
        navigate('/blogs');
    };
    
    const blogId: number = parseInt(id, 10); // Ensure the ID is an integer
    const blog = blogs?.find((blog) => blog.id === blogId);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container mx-auto py-7 ">
            <div className='items-center ml-[2rem] mb-4 flex gap-3 flex-col lg:flex-row'>
                <button onClick={handleButtonClick} className='group mr-2 p-3 rounded-full border-2 shadow-md shadow-zinc-800/5 border-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-500'>
                    <FaArrowLeftLong className=' text-zinc-300 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors' />
                </button>
                <span className='font-time m-2 border-l-4 border-r-0 border-t-0 border-b-0 rounded-sm border-l-zinc-200 text-zinc-400 dark:text-zinc-300 dark:border-l-zinc-500 pl-3'>{FormattedDate(blog.date)}</span>
            </div>
            <div className='mt-10'>
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <div className='w-1/2 mt-5'>
                    <MarkdownRenderer markdown={blog.content} />
                </div>
            </div>
        </div>
    );
};

export default BlogsDetailsPage;
