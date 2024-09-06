import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import myImage from '@/assets/me1.png';
import TypedTextCarousel from "@/utils/TypedTextCarousel";
const About = () => {
    const aStyle = "text-[24px] text-zinc-300 mr-2 bg-zinc-100 dark:bg-zinc-800 rounded-3 hover:text-[26px] dark:hover:text-zinc-100 ";
    // const handleGtag = () => {
    //     if (window.gtag) {
    //         window.gtag('event', 'click', {
    //             event_category: 'LinkedIn',
    //             event_label: 'Profile Link',
    //         });
    //     }
    // };
    return (_jsxs("div", { className: 'flex max-w-[100%] justify-center items-center my-[5rem] flex-col gap-10 md:flex-row sm:gap-10 ', children: [_jsxs("div", { className: 'w-[70%] md-[50%] md:ml-3', children: [_jsx("p", { className: "text-2xl mb-7", children: "About Me:" }), _jsxs("h1", { className: 'text-4xl font-bold', children: [_jsx(TypedTextCarousel, { texts: ['Front-End Developer', 'Computer Science Student', 'Passionate Learner'], typingSpeed: 150, pauseDuration: 1500 }), _jsx("span", { className: "opacity-20 text-mainColor", children: "|" })] }), _jsx("p", { className: 'my-7 text-sm text-zinc-600 dark:text-zinc-400', children: "I'm Worood Assi. I am an undergraduate computer science student at Birzeit University, in my fourth year. I am eager to expand my skills and knowledge in new technologies, particularly in front-end development with a focus on React. I am passionate about enhancing my learning and integrating into a professional work environment. I am also interested in exploring opportunities that allow me to contribute to innovative projects and collaborate with experienced professionals in the tech industry." }), _jsxs("div", { className: "flex", children: [_jsx("a", { href: "mailto:woroodassi345@gmail.com", target: "_blank", children: _jsx(SiGmail, { className: aStyle + ' hover:text-red-500 dark:hover:text-red-500' }) }), _jsx("a", { href: "https://github.com/woroodfathiassi", target: "_blank", children: _jsx(SiGithub, { className: aStyle + ' hover:text-black dark:hover:text-white' }) }), _jsx("a", { href: "https://www.linkedin.com/in/worood-fathi-assi/", target: "_blank", children: _jsx(FaLinkedinIn, { className: aStyle + ' hover:text-blue-700 dark:hover:text-blue-700' }) })] })] }), _jsx("div", { className: 'w-[60%] flex justify-center items-center md:w-[50%]', children: _jsx("figure", { className: 'w-[20rem] rounded-[1rem_2rem] overflow-hidden', children: _jsx("img", { src: myImage, alt: "worood assi.", className: '' }) }) })] }));
};
export default About;
