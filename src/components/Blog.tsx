import React from 'react';
import { useParams } from 'react-router-dom';
export interface BlogType {
    id: number;
    title: string;
    content: string;
    description: string;
    date: string;
}

interface BlogProps {
    blogs: BlogType[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
    const { blogId } = useParams<{ blogId: string }>(); // Type the useParams hook

    // Ensure blogId is defined before using it
    const parsedBlogId = blogId ? parseInt(blogId, 10) : undefined;

    // Find the blog by id, handling the case where parsedBlogId might be undefined
    const blog = blogs.find((b) => b.id === parsedBlogId);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default Blog;
