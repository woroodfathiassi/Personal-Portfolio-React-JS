import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { getAllMarkdown } from '@/APIs/db.config';

// Define types for context
interface Blog {
    id: string;
    title: string;
    content: string;
    description: string;
    date: string;
}

interface BlogsContextType {
    blogs: Blog[];
    isLoading: boolean;
}

// Create the context with a default value
const BlogsContext = createContext<BlogsContextType>({
    blogs: [],
    isLoading: true
});

// Define the provider component
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
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const blogsContext: BlogsContextType = {
        blogs: blogs,
        isLoading
    };

    return (
        <BlogsContext.Provider value={blogsContext}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogsContext;
