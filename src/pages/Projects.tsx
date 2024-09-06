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
        <div className='container m-auto p-3 '>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3'>
                Discover Projects from My University Experience
            </h1>
            <p className='mb-6 mt-3 text-base text-zinc-600 dark:text-zinc-400'>Explore a curated selection of projects from my university journey, showcasing the skills and knowledge I've acquired.</p>
            <ProjectModal />
            <ProjectsList inHomePage={false} />
        </div>
    );
};

export default ProjectsPage;
