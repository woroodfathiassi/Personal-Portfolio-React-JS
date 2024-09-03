import { useContext } from "react";
import BlogsContext from "@/store/BolgsContext";
import FormattedDate from "@/utils/FormattedDate ";
import { Link } from "react-router-dom";
import SkeletonProject from "@/components/SkeletonProject";

const BlogsList = () => {
    const { blogs, isLoading } = useContext(BlogsContext);
    // const { isLoading } = useContext(BlogsContext);
    // const blogs = [];

    if (isLoading) {
        return (
            <div>
                <SkeletonProject />
            </div>
        );
    }

    if (blogs.length === 0) {
        return <div className="mt-10  text-center text-lg text-zinc-800 dark:text-zinc-100">There are currently no blogs.</div>;
    }
    
    return (
        <div className="mt-16 sm:mt-20 border border-l-2 border-t-0 border-b-0 border-r-0 border-l-zinc-100 p-1 mb-3 dark:border-l-zinc-700">
                {blogs.map((blog) => (
                    <div key={blog.id} className="flex flex-col items-start sm:flex-row">
                        <span className="w-1/5 font-time text-zinc-400 dark:text-zinc-300 pl-3 py-5">{FormattedDate(blog.date)}</span>
                        <div className="p-5 mb-10 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 sm:w-[90%]">
                            <Link to={`/blogs/${blog.id}`} className="mt-4  text-sm font-medium text-mainColor/80 dark:text-mainColor/80">
                                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{blog.title}</h2>
                                <p className="my-2 text-sm font-thin text-zinc-600 dark:text-zinc-400">"{blog.description}"</p>
                                {/* <MarkdownRenderer markdown={blog.content} /> */}
                                <p className="mt-5">Read Blog &gt;</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default BlogsList;