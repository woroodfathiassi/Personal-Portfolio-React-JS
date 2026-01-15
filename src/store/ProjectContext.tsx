import { createContext, useState, useEffect, ReactNode } from 'react';
import { getAllProjecs } from '@/APIs/db.config';
import { getAllProjectIds } from '@/APIs/db.config';
import ProjectData from '@/interfaces/ProjectData';

interface ProjectContextType {
    projects: ProjectData[];
    projectIds: string[];
    isLoading: boolean;
    projectsCont: number;
    addProject: (project: ProjectData) => void;
}

const ProjectContext = createContext<ProjectContextType>({
    projects: [],
    projectIds: [],
    isLoading: true,
    projectsCont: 0,
    addProject: () => {},
});

export function ProjectContextProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [projectIds, setProjectIds] = useState<string[]>([]);
    const [projectsCont, setProjectsCont] = useState(projects.length);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProjecs();
                const ids = await getAllProjectIds();
                if (data && ids) {
                    setProjects(data);
                    setProjectIds(ids);
                    setProjectsCont(data.length);
                } else {
                    console.error('No data returned from the API.');
                }
            } catch (error: any) {
                console.error('Error fetching projects:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const addProject = (project: ProjectData) => {
        setProjects((prevProjects) => [...prevProjects, project]);
    };

    const projectContext: ProjectContextType = {
        projects,
        projectIds,
        isLoading,
        projectsCont,
        addProject,
    };

    return (
        <ProjectContext.Provider value={projectContext}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectContext;
