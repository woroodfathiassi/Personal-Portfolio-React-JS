import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import ProjectContext from '@/store/ProjectContext';
import Project from './Project';
import SkeletonProject from './skeletonLoading/SkeletonProject';
const homeProjectsIDs = [4, 3, 2];
const ProjectsList = ({ inHomePage }) => {
    const { projects, isLoading } = useContext(ProjectContext);
    if (isLoading) {
        return _jsx(SkeletonProject, {});
    }
    if (projects.length === 0) {
        return _jsx("div", { className: "mt-10  text-center text-lg text-zinc-800 dark:text-zinc-100", children: "There are currently no projects." });
    }
    const filteredProjects = inHomePage
        ? projects.filter((project) => homeProjectsIDs.includes(project.id))
        : projects;
    const homeStyle = 'flex flex-col gap-3 w-[90%] mt-10 sm:w-[100%] lg:w-[100%]';
    const projectsStyle = 'grid gap-3 grid-cols-[auto] mt-16 sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]';
    return (_jsxs("div", { className: inHomePage ? homeStyle : projectsStyle, children: [inHomePage && _jsx("p", { className: "text-2xl mb-7", children: "My Projects:" }), filteredProjects.map((project) => (_jsx(Project, { Pdata: project }, project.id)))] }));
};
export default ProjectsList;
