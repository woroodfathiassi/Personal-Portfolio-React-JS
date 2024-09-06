// import { useParams } from 'react-router-dom';

// const Blog = ({ blogs }) => {
//     const { blogId } = useParams(); // Get the blogId from the URL
//     const blog = blogs.find((b) => b.id === parseInt(blogId)); // Find the blog by id

//     if (!blog) {
//         return <h2>Blog not found</h2>;
//     }

//     return (
//         <div className=''>
//             <h1>{blog.title}</h1>
//             <p>{blog.content}</p>
//         </div>
//     );
// };

// export default Blog;


// src/components/Blog.tsx
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
