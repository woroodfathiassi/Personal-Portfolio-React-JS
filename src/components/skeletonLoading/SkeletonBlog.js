import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SkeletonBlog = () => {
    return (_jsx("div", { className: " container mx-auto py-7 flex flex-col gap-2", children: _jsxs("div", { className: "flex flex-col gap-2 bg-zinc-100 p-6 rounded-md dark:bg-zinc-700", children: [_jsx("span", { className: "bg-zinc-300 h-3 w-[6rem] animate-pulse" }), _jsx("div", { className: "bg-zinc-300 h-4 animate-pulse rounded-sm" }), _jsx("div", { className: "bg-zinc-400 h-[5rem] animate-pulse rounded-sm" }), _jsx("div", { className: "bg-zinc-300 h-3 animate-pulse rounded-sm" }), _jsx("div", { className: "bg-zinc-300 h-3 animate-pulse rounded-sm" })] }) }));
};
export default SkeletonBlog;
