import { createContext, useState, useEffect, ReactNode } from 'react';
import { getAllProjecs } from '@/APIs/db.config';
import ProjectData from '@/interfaces/ProjectData';

interface ProjectContextType {
    projects: ProjectData[];
    isLoading: boolean;
    addProject: (project: ProjectData) => void;
}

const ProjectContext = createContext<ProjectContextType>({
    projects: [],
    isLoading: true,
    addProject: () => {}, 
});

export function ProjectContextProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProjecs();
                if (data) {
                    setProjects(data);
                } else {
                    console.error("No data returned from the API.");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Function to add a new project
    const addProject = (project: ProjectData) => {
        setProjects((prevProjects) => [...prevProjects, project]);
    };

    const projectContext: ProjectContextType = {
        projects,
        isLoading,
        addProject,  // Include the addProject function
    };

    return (
        <ProjectContext.Provider value={projectContext}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectContext;
