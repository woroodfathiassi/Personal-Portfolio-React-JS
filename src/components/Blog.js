import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
const Blog = ({ blogs }) => {
    const { blogId } = useParams(); // Type the useParams hook
    // Ensure blogId is defined before using it
    const parsedBlogId = blogId ? parseInt(blogId, 10) : undefined;
    // Find the blog by id, handling the case where parsedBlogId might be undefined
    const blog = blogs.find((b) => b.id === parsedBlogId);
    if (!blog) {
        return _jsx("h2", { children: "Blog not found" });
    }
    return (_jsxs("div", { children: [_jsx("h1", { children: blog.title }), _jsx("p", { children: blog.content })] }));
};
export default Blog;
