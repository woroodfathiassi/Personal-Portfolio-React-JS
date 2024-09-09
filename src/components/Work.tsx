import { MdOutlineWorkHistory } from "react-icons/md";
import { IoArrowDownOutline } from "react-icons/io5";

import quizplus_logo from '@/assets/quizplusIcon.png';
import bzulogo from '@/assets/bzu-logo.png';
import resume from '@/assets/Resume/WoroodCV.pdf';

const experience = [
    [quizplus_logo, 'Quality Assurance Automation Engineer', 'Quizplus · Internship', 'Jul 2024 - Sep 2024'],
    [bzulogo, 'Full-stack Developer', 'Computer Center - Birzeit University · Internship', 'Feb 2024 - Apr 2024'],
];

const WorkItem = () => {

    const openCV = () => {
        // Replace the URL with the actual link to your CV
        const cvUrl = resume;
        window.open(cvUrl, '_blank');
    };
    
    return (
        <>
            <div className='w-[90%] flex flex-col p-5 border-2 border-zinc-200 rounded-2xl dark:border-zinc-800 sm:w-[100%] lg:w-[100%]'>
                <h2 className='flex gap-2 items-center mt-3 mb-7 text-md font-semibold text-zinc-900 dark:text-zinc-100'>
                    <MdOutlineWorkHistory /> My Experience
                </h2>
                {experience.map((e) => (
                    <div key={e[0]} className='flex gap-5 mb-6 p-3'>
                        <img src={e[0]} alt={e[0]} className='rounded-full w-[3rem] h-[3rem]'/>
                        <div>
                            <p className='font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>{e[1]}</p>
                            <p className='text-sm text-zinc-600 dark:text-zinc-400'>{e[2]}</p>
                            <p className='text-zinc-600 font-time dark:text-zinc-400'>{e[3]}</p>
                        </div>
                    </div>
                ))}
                <button className="group flex gap-2 items-center justify-center rounded-lg p-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800/80"
                    // href={resume}
                    // download="WoroodCV.pdf"
                    onClick={openCV}
                >
                    Download CV <IoArrowDownOutline className='group-hover:text-mainColor' /> 
                </button>
            </div>
        </>    
    );
};

const Work = () => {
    return (
        <>
            <WorkItem />
        </>
    );
};

export default Work;