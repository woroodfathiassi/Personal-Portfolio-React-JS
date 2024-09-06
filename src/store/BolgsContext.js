import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
import { getAllMarkdown } from '@/APIs/db.config';
// Create the context with a default value
const BlogsContext = createContext({
    blogs: [],
    isLoading: true,
    addBlog: () => { }
});
// Define the provider component
export const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllMarkdown();
                if (data) {
                    setBlogs(data);
                }
                else {
                    console.error("No data returned from the API.");
                }
            }
            catch (error) {
                console.error("Error fetching blogs:", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    // Function to add a new blog
    const addBlog = (newBlog) => {
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    };
    const blogsContext = {
        blogs,
        isLoading,
        addBlog
    };
    return (_jsx(BlogsContext.Provider, { value: blogsContext, children: children }));
};
export default BlogsContext;
