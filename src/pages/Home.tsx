import { useNavigate } from 'react-router-dom';

import About from '@/components/About';
import SkillsList from '@/components/SkillsList';
import ProjectsList from '@/components/ProjectsList';
import Work from '@/components/Work';

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/projects');
    };

    return (
        <>
            {/* <h1>Worood Assi</h1> */}
            <div className='container mx-auto py-7'>
                <About />
            </div>
            <SkillsList />
            <div className='container mx-auto flex justify-between items-start'>
                <div>
                    <ProjectsList inHomePage />
                    <button 
                        onClick={handleButtonClick}
                        className='rounded-md bg-mainColor my-5 px-5 py-3 text-base font-medium text-white hover:bg-opacity-80 dark:bg-mainColor  dark:text-white dark:hover:bg-opacity-80'
                    >
                        Show more
                    </button>
                </div>
                <Work />
            </div>
            
        </>
    );
};

export default HomePage;
