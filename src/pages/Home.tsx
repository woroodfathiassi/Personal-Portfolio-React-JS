import { useNavigate } from 'react-router-dom';
import About from '@/components/About';
import SkillsList from '@/components/SkillsList';
import ProjectsList from '@/components/ProjectsList';
import Work from '@/components/Work';
import { Helmet } from 'react-helmet';
import blackLogo from '@/assets/blackLogo.png';
import SchemaMarkup from '@/components/SchemaMarkup';



const HomePage = () => {
    // document.title = "Personal Website | Worood Assi";
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate('/projects');
    };
    
    return (
        <>
            <h1 className='hidden'>Worood Assi - Frontend Developer</h1>
            <SchemaMarkup />
            <Helmet>
                <title>Personal Website | Worood Assi - Front-end Developer</title>
                <meta
                    name="description"
                    content="Front-End Developer with a focus on React.js. Experienced in building responsive and intuitive web applications using modern TypeScript, Tailwind CSS."
                />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Personal Website | Worood Assi" />
                <meta property='og:description' content='Worood Assi is a Front-End Developer with a focus on React.js. Experienced in building responsive and intuitive web applications using modern TypeScript, Tailwind CSS, and HTML.' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://woroodassi.netlify.app" />
                <meta property="og:image" content={blackLogo} />
                <meta property="og:site_name" content="Worood Assi" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Website | Worood Assi" />
                <meta name="twitter:description" content="Worood Assi is a Front-End Developer with a focus on React.js. Experienced in building responsive and intuitive web applications using modern TypeScript, Tailwind CSS, and HTML." />
                <meta name="twitter:image" content={blackLogo} />
                <meta name="twitter:site" content="Worood Assi" />
            </Helmet>
            <div className='container mx-auto py-7 animate-fade'>
                <About />
            </div>
            <SkillsList />
            <div className='flex flex-col-reverse justify-between items-start md:container md:mx-auto lg:flex-row lg:gap-2'>
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
