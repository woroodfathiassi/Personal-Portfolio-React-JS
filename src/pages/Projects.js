import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ProjectsList from '@/components/ProjectsList';
import ProjectModal from '@/components/ProjectModal';
const ProjectsPage = () => {
    document.title = "Projects | Worood Assi";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    // bg-gradient-to-r from-red-400 via-pink-300 to-green-500
    _jsxs("div", { className: 'container m-auto p-3 ', children: [_jsx("h1", { className: 'text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3', children: "Discover Projects from My University Experience" }), _jsx("p", { className: 'mb-6 mt-3 text-base text-zinc-600 dark:text-zinc-400', children: "Explore a curated selection of projects from my university journey, showcasing the skills and knowledge I've acquired." }), _jsx(ProjectModal, {}), _jsx(ProjectsList, { inHomePage: false })] }));
};
export default ProjectsPage;
