const SkeletonProject = () => {
    return (
        <div className=" container mx-auto py-7 flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700">
                <span className="bg-zinc-300 h-[2rem] w-[6rem] rounded-full animate-pulse"></span>
                <div className="bg-zinc-300 h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-400 h-6 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700">
                <span className="bg-zinc-300 h-[2rem] w-[6rem] rounded-full animate-pulse"></span>
                <div className="bg-zinc-300 h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-400 h-6 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 h-3 animate-pulse rounded-sm"></div>
            </div>
        </div>
    );
}

export default SkeletonProject;