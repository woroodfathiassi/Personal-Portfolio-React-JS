import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
import { getAllProjecs } from '@/APIs/db.config';
const ProjectContext = createContext({
    projects: [],
    isLoading: true,
    addProject: () => { },
});
export function ProjectContextProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProjecs();
                if (data) {
                    setProjects(data);
                }
                else {
                    console.error("No data returned from the API.");
                }
            }
            catch (error) {
                console.error("Error fetching projects:", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    // Function to add a new project
    const addProject = (project) => {
        setProjects((prevProjects) => [...prevProjects, project]);
    };
    const projectContext = {
        projects,
        isLoading,
        addProject, // Include the addProject function
    };
    return (_jsx(ProjectContext.Provider, { value: projectContext, children: children }));
}
export default ProjectContext;
