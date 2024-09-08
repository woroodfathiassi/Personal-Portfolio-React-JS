const SkeletonNewBlog = () => {
    return (
        <div className="container mx-auto py-7 flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700">
                <span className="bg-zinc-300 h-3 w-[6rem] animate-pulse mt-3"></span>
                <div className="bg-zinc-300 h-5 animate-pulse rounded-sm mt-2"></div>
                <span className="bg-zinc-400 h-3 w-[6rem] animate-pulse mt-3"></span>
                <div className="bg-zinc-300 h-5 animate-pulse rounded-sm mt-2"></div>
                <span className="bg-zinc-400 h-3 w-[6rem] animate-pulse mt-3"></span>
                <div className="bg-zinc-300 h-5 animate-pulse rounded-sm mt-2"></div>
                <span className="bg-zinc-400 h-3 w-[6rem] animate-pulse mt-3"></span>
                <div className="bg-zinc-300 h-5 animate-pulse rounded-sm mt-2"></div>
                <span className="bg-zinc-400 h-3 w-[6rem] animate-pulse mt-3"></span>
                <div className="bg-zinc-300 h-[10rem] animate-pulse rounded-sm mt-2"></div>
                <span className="bg-zinc-400 h-3 w-[6rem] rounded-lg animate-pulse mt-4"></span>
            </div>
        </div>
    );
}

export default SkeletonNewBlog;