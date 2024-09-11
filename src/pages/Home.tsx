import { useNavigate } from 'react-router-dom';
import About from '@/components/About';
import SkillsList from '@/components/SkillsList';
import ProjectsList from '@/components/ProjectsList';
import Work from '@/components/Work';
import { Helmet } from 'react-helmet';
import me1 from '@/assets/me1.png';

const HomePage = () => {
    // document.title = "Personal Website | Worood Assi";
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate('/projects');
    };
    
    return (
        <>
            <h1 className='hidden'>Worood Assi - Front-end Developer</h1>
            <Helmet>
                {/* Open Graph Meta Tags */}
                <title>Personal Website | Worood Assi</title>
                <meta property="og:title" content="Personal Website | Worood Assi" />
                <meta property='og:description' content='This responsive personal portfolio is built with React, TypeScript, and Tailwind CSS. It effectively showcases my skills, projects, and professional experience.' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://woroodassi.netlify.app" />
                <meta property="og:image" content={me1} />
                <meta property="og:site_name" content="Worood Assi" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Website | Worood Assi" />
                <meta name="twitter:description" content="This responsive personal portfolio is built with React, TypeScript, and Tailwind CSS. It effectively showcases my skills, projects, and professional experience." />
                <meta name="twitter:image" content={me1} />
                <meta name="twitter:site" content="Worood Assi" />
            </Helmet>
            <div className='container mx-auto py-7'>
                <About />
            </div>
            <SkillsList />
            <div className='container mx-auto flex flex-col-reverse gap-2 justify-between items-start lg:flex-row lg:gap-2'>
                <div className='ml-5 lg:w-[50%]'>
                    <ProjectsList inHomePage />
                    <button 
                        onClick={handleButtonClick}
                        className='rounded-md bg-mainColor my-5 px-5 py-3 text-base font-medium text-white hover:bg-opacity-80 dark:bg-mainColor  dark:text-white dark:hover:bg-opacity-80'
                    >
                        Show more
                    </button>
                </div>
                <div className='ml-5 lg:w-[$0%]'>
                    <Work />
                </div>
            </div>
        </>
    );
};

export default HomePage;
