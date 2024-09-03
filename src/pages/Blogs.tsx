import BlogsList from "@/components/BlogsList";


const BlogsPage = () => {
    document.title = "Blogs | Worood Assi";
    
    return (
        <div className="container mx-auto py-7">
            <div className="py-3 mx-2">
                <h1 className=" tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Blogs List</h1>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">I write about things I learn and things I think about.</p>
            </div>
            <BlogsList />
        </div>
    );
};

export default BlogsPage;