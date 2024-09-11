import { useEffect } from 'react';
import ProjectsList from '@/components/ProjectsList';
import ProjectModal from '@/components/ProjectModal';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
    document.title = "Projects | Worood Assi";
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                    {/* Open Graph Meta Tags */}
                    <title>Projects | Worood Assi</title>
                    <meta property="og:title" content="Projects | Worood Assi" />
                    <meta property='og:description' content="Explore a curated selection of projects from my university journey, showcasing the skills and knowledge I've acquired." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://woroodassi.netlify.app/projects" />
                    <meta property="og:site_name" content="Worood Assi" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Projects | Worood Assi" />
                    <meta name="twitter:description" content="Explore a curated selection of projects from my university journey, showcasing the skills and knowledge I've acquired." />
                    <meta name="twitter:site" content="Worood Assi" />
                </Helmet>
                <div className='container m-auto p-3 '>
                    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3'>
                        Discover Projects from My University Experience
                    </h1>
                    <p className='mb-6 mt-3 text-base text-zinc-600 dark:text-zinc-400'>Explore a curated selection of projects from my university journey, showcasing the skills and knowledge I've acquired.</p>
                    <ProjectModal />
                    <ProjectsList inHomePage={false} />
                </div>
            </>
    );
};

export default ProjectsPage;
