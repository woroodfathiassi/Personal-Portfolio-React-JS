import { useContext, useEffect } from "react";
import BlogsList from "@/components/BlogsList";
import { IoMdAdd } from "react-icons/io";
import AuthContext from '@/store/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const BlogsPage = () => {
    document.title = "Blogs | Worood Assi";
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const addedMessage = location.state?.added ? 'Blog added successfully!' : null;

    useEffect(() => {
        if (addedMessage) {
            const timer = setTimeout(() => {
                navigate(location.pathname, { replace: true, state: {} });
        }, 2500); 
    
          // Clean up the timer
            return () => clearTimeout(timer);
        }
    }, [addedMessage, navigate, location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 10,
            behavior: 'smooth',
        });
    };scrollToTop();

    const handleAddBlog = () => {
        navigate('/blogs/new');
    }
    
    return (
        <>
            <Helmet>
                {/* Open Graph Meta Tags */}
                <title>Blogs | Worood Assi</title>
                <meta property="og:title" content="Blogs | Worood Assi" />
                <meta property='og:description' content="I write about things I learn and things I think about." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://woroodassi.netlify.app/bolgs" />
                <meta property="og:site_name" content="Worood Assi" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Projects | Worood Assi" />
                <meta name="twitter:description" content="I write about things I learn and things I think about." />
                <meta name="twitter:site" content="Worood Assi" />
            </Helmet>
            <div className="container mx-auto">
                <div className="">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3">Blogs List</h1>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">I write about things I learn and things I think about.</p>
                </div>
                {
                    isLoggedIn && 
                    <button 
                        onClick={handleAddBlog}
                        className='bg-mainColor p-2 rounded-full shadow-md text-white transition-all hover:shadow-zinc-400 dark:hover:shadow-zinc-500'
                    >
                        <IoMdAdd size={35}/>
                    </button>
                }
                { addedMessage && 
                    <div className="text-center font-bold text-green-500">** Blog added successfully! **</div>
                }
                <BlogsList />
            </div>
        </>
    );
};

export default BlogsPage;