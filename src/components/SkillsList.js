import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skill from './Skill';
import java from '@/assets/java.png';
import php from '@/assets/php.png';
import js from '@/assets/js.png';
import css from '@/assets/css.png';
import html from '@/assets/html.png';
import python from '@/assets/python.png';
import mysql from '@/assets/mysql.png';
import tw from '@/assets/tw.png';
import ts from '@/assets/ts.png';
import react from '@/assets/react.png';
const images = {
    java: java,
    php: php,
    mysql: mysql,
    html: html,
    css: css,
    javascript: js,
    python: python,
    react: react,
    typescript: ts,
    tailwind: tw
};
const SkillsList = () => {
    return (_jsxs("div", { id: 'skills', className: 'bg-gray-100 my-[5rem] py-[5rem] text-center dark:bg-zinc-800/60', children: [_jsx("h2", { className: 'inline-block bg-white rounded-[2rem] py-2 px-5 dark:bg-zinc-600/40', children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-[2rem] items-center justify-center m-[3rem]", children: Object.entries(images).map(([key, image], index) => (_jsx(Skill, { image: image, title: key }, index))) })] }));
};
export default SkillsList;
