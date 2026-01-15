import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import myImage from '@/assets/me1.png';
import TypedTextCarousel from "@/utils/TypedTextCarousel";

const About = () => {
    const aStyle = "text-[24px] text-zinc-300 mr-2 rounded-3";

    const handleGtag = () => {
        gtag('event', 'click', {
            event_category: 'Social Link',
            event_label: 'LinkedIn Profile',
            value: 'LinkedIn'
        });
    };

    return(
        <div className='flex max-w-[100%] justify-center items-center my-[5rem] flex-col gap-10 md:flex-row sm:gap-10 '>{/*  justify-center items-center*/}
            <div className='w-9/10 md-[50%] md:ml-3'>
                <p className="text-2xl mb-7">About Me:</p>
                <h2 className='text-4xl font-bold'>
                    <TypedTextCarousel 
                        texts={['Software Engineer', 'Full-Stack Developer', 'Back-End Developer', 'Front-End Developer', 'Passionate Learner']}
                        typingSpeed={150} 
                        pauseDuration={1500} 
                    />
                    <span className="opacity-20 text-mainColor">|</span>         
                </h2>
                <p className='my-7 text-sm text-zinc-700 dark:text-zinc-400'>
                    I’m Worood Assi, a Computer Science graduate from Birzeit University. I am motivated to continuously expand my skills and knowledge in modern technologies, 
                    with a strong interest in front-end development, particularly using React. I have experience building responsive and intuitive web applications using technologies such as TypeScript, 
                    Tailwind CSS, HTML, and CSS.
                    In addition, I have hands-on experience working with back-end technologies, including .NET Core, 
                    which allows me to understand and contribute to different layers of web applications. I am passionate about continuous learning and eager to grow within a professional work environment. 
                    I am especially interested in opportunities that enable me to contribute to innovative projects and collaborate with experienced professionals in the technology industry.
                </p>
                <div className="flex">
                    <a href="mailto:woroodassi345@gmail.com" target="_blank"><SiGmail className={aStyle+' hover:text-red-500 dark:hover:text-red-500/70'} /></a>
                    <a href="https://github.com/woroodfathiassi" target="_blank"><SiGithub className={aStyle+' hover:text-black dark:hover:text-white'} /></a>
                    <a 
                        href="https://www.linkedin.com/in/worood-fathi-assi/"
                        target="_blank" 
                        onClick={handleGtag}
                    >
                        <FaLinkedinIn className={aStyle+' hover:text-blue-700 dark:hover:text-blue-700/70'} />
                    </a>
                </div>
            </div>
            {/* <div className='w-[80%] flex justify-center items-center md:w-[50%] '>
                <figure className='w-[20rem] rounded-[1rem_2rem] overflow-hidden'>
                    <img 
                        src={myImage} 
                        alt="worood assi." 
                        className=''
                    />
                </figure>
            </div> */}
        </div>
    );
};

export default About;