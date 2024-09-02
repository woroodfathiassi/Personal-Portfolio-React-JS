import { useContext } from 'react';
import ProjectContext from '@/store/ProjectContext';
import Project from './Project';
import SkeletonProject from './SkeletonProject';
import ProjectData from '@/interfaces/ProjectData';

const homeProjectsIDs = [4, 3, 2];

interface ProjectsListProps {
    inHomePage: boolean;
}

const ProjectsList = ({ inHomePage }: ProjectsListProps) => {
    const { projects, isLoading } = useContext(ProjectContext);

    if (isLoading) {
        return <SkeletonProject />;
    }

    if (projects.length === 0) {
        return <div className="mt-10  text-center text-lg text-zinc-800 dark:text-zinc-100">There are currently no projects.</div>;
    }

    const filteredProjects = inHomePage
        ? projects.filter((project: ProjectData) => homeProjectsIDs.includes(project.id))
        : projects;

    const homeStyle ='flex flex-col gap-3 w-3/4 mt-10';
    const projectsStyle ='grid gap-3 grid-cols-[auto_auto_auto] mt-10';

    return (
        <div className={inHomePage ? homeStyle : projectsStyle}>
            {inHomePage && <p className="text-2xl mb-7">My Projects:</p>}
            {filteredProjects.map((project: ProjectData) => (
                <Project key={project.id} Pdata={project} />
            ))}
        </div>
    );
};

export default ProjectsList;
