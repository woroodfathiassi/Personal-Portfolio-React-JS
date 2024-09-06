import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import About from '@/components/About';
import SkillsList from '@/components/SkillsList';
import ProjectsList from '@/components/ProjectsList';
import Work from '@/components/Work';
const HomePage = () => {
    document.title = "Personal Website | Worood Assi";
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/projects');
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'container mx-auto py-7', children: _jsx(About, {}) }), _jsx(SkillsList, {}), _jsxs("div", { className: 'container mx-auto flex flex-col-reverse gap-2 justify-between items-start lg:flex-row lg:gap-2', children: [_jsxs("div", { className: 'ml-5 lg:w-[50%]', children: [_jsx(ProjectsList, { inHomePage: true }), _jsx("button", { onClick: handleButtonClick, className: 'rounded-md bg-mainColor my-5 px-5 py-3 text-base font-medium text-white hover:bg-opacity-80 dark:bg-mainColor  dark:text-white dark:hover:bg-opacity-80', children: "Show more" })] }), _jsx("div", { className: 'ml-5 lg:w-[$0%]', children: _jsx(Work, {}) })] })] }));
};
export default HomePage;
