const SkeletonProject = () => {
    return (
        <div className=" container mx-auto py-7 flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700">
                <div className="bg-zinc-300 w-[10rem] h-5 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-400 w-[40rem] h-7 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[25rem] h-4 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700">
                <div className="bg-zinc-300 w-[10rem] h-5 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-400 w-[40rem] h-7 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[35rem] h-4 animate-pulse rounded-sm"></div>
                <div className="bg-zinc-300 w-[25rem] h-4 animate-pulse rounded-sm"></div>
            </div>
        </div>
    );
}

export default SkeletonProject;