import React, { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { getAllMarkdown } from '@/APIs/db.config';
import { Blog } from '@/interfaces/BlogData';

interface BlogsContextType {
    blogs: Blog[];
    isLoading: boolean;
    addBlog: (newBlog: Blog) => void;
}

// Create the context with a default value
const BlogsContext = createContext<BlogsContextType>({
    blogs: [],
    isLoading: true,
    addBlog: () => {} 
});

export const BlogsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllMarkdown();
                if (data) {
                    setBlogs(data);
                } else {
                    console.error("No data returned from the API.");
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const addBlog = (newBlog: Blog) => {
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    };

    const blogsContext: BlogsContextType = {
        blogs,
        isLoading,
        addBlog
    };

    return (
        <BlogsContext.Provider value={blogsContext}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogsContext;
