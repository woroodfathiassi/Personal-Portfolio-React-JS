import React, { useContext, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogsContext from '@/store/BolgsContext';
import FormattedDate from '@/utils/FormattedDate ';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Blog } from '@/interfaces/BlogData';
import NotFound404 from './NotFound404';
import { Helmet } from 'react-helmet';

const MarkdownRenderer = lazy(() => import('@/components/MarkdownRenderer'));

const BlogsDetailsPage: React.FC = () => {
    const navigate = useNavigate();
    const { blogs } = useContext(BlogsContext) || { blogs: [] }; // Provide default value to avoid errors
    const { id } = useParams<{ id: string }>();

    const handleBackToBlogs = () => {
        navigate('/blogs');
    };

    if (!id) {
        return <NotFound404 />;
    }

    const blogId = parseInt(id, 10);

    if (isNaN(blogId)) {
        return <NotFound404 />;
    }

    const blog = blogs.find((blog: Blog) => blog.id === blogId);

    if (!blog) {
        return <NotFound404 />;
    }

    return (
        <>
            <Helmet>
                {/* Open Graph Meta Tags */}
                <title>Personal Website | Worood Assi</title>
                <meta property="og:title" content={`${blog.title} | Worood Assi`} />
                <meta property='og:description' content={blog.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://woroodassi.netlify.app/blogs/${blog.id}`} />
                <meta property="og:site_name" content={`${blog.title} | Worood Assi`} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${blog.title} | Worood Assi`} />
                <meta name="twitter:description" content={blog.description}  />
                <meta name="twitter:site" content={`${blog.title} | Worood Assi`} />
            </Helmet>
            <div className="container mx-auto py-7">
                <div className='items-center ml-[2rem] mb-4 flex gap-3 flex-col lg:flex-row'>
                    <button 
                        onClick={handleBackToBlogs} 
                        className='group mr-2 p-3 rounded-full border-2 shadow-md shadow-zinc-800/5 border-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-500'
                    >
                        <FaArrowLeftLong className='text-zinc-300 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors' />
                    </button>
                    <span className='font-time m-2 border-l-4 border-r-0 border-t-0 border-b-0 rounded-sm border-l-zinc-200 text-zinc-400 dark:text-zinc-300 dark:border-l-zinc-500 pl-3'>
                        {FormattedDate(blog.date)}
                    </span>
                </div>
                <div className='mt-10'>
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className='w-full mt-5 lg:w-2/3'>
                        <Suspense fallback={SkeletonBlog()}>
                            <MarkdownRenderer markdown={blog.content} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsDetailsPage;

const SkeletonBlog = () => {
    return (
        <div className=" container mx-auto py-7 flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-800">
                <span className="bg-zinc-200 h-3 w-[6rem] animate-pulse dark:bg-zinc-700"></span>
                <div className="bg-zinc-200 h-4 animate-pulse rounded-sm dark:bg-zinc-700"></div>
                <div className="bg-zinc-200 h-[5rem] animate-pulse rounded-sm dark:bg-zinc-700"></div>
                <div className="bg-zinc-200 h-3 animate-pulse rounded-sm dark:bg-zinc-700"></div>
                <div className="bg-zinc-200 h-3 animate-pulse rounded-sm dark:bg-zinc-700"></div>
            </div>
        </div>
    );
}