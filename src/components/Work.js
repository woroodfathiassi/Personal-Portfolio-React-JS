import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'w-[90%] p-5 border-2 border-zinc-200 rounded-2xl dark:border-zinc-800 sm:w-[100%] lg:w-[100%]', children: [_jsxs("h2", { className: 'flex gap-2 items-center mt-3 mb-7 text-md font-semibold text-zinc-900 dark:text-zinc-100', children: [_jsx(MdOutlineWorkHistory, {}), " My Experience"] }), experience.map((e) => (_jsxs("div", { className: 'flex gap-5 mb-6 p-3', children: [_jsx("img", { src: e[0], alt: e[0], className: 'rounded-full w-[3rem] h-[3rem]' }), _jsxs("div", { children: [_jsx("p", { className: 'font-bold tracking-tight text-zinc-800 dark:text-zinc-100', children: e[1] }), _jsx("p", { className: 'text-sm text-zinc-600 dark:text-zinc-400', children: e[2] }), _jsx("p", { className: 'text-zinc-600 font-time dark:text-zinc-400', children: e[3] })] })] }, e[0]))), _jsxs("a", { className: "group flex gap-2 items-center justify-center rounded-lg p-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800/80", href: resume, download: "WoroodCV.pdf", children: ["Download CV ", _jsx(IoArrowDownOutline, { className: 'group-hover:text-mainColor' })] })] }) }));
};
const Work = () => {
    return (_jsx(_Fragment, { children: _jsx(WorkItem, {}) }));
};
export default Work;
