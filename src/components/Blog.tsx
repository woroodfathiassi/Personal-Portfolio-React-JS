import { useParams } from 'react-router-dom';

const Blog = ({ blogs }) => {
    const { blogId } = useParams(); // Get the blogId from the URL
    const blog = blogs.find((b) => b.id === parseInt(blogId)); // Find the blog by id

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
