import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Skill = ({ image, title }) => {
    return (_jsxs("div", { className: 'group flex flex-col items-center text-center rounded-md p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700', children: [_jsx("img", { src: image, alt: title, className: 'w-[4rem] grayscale-[50%] group-hover:grayscale-0' }), _jsx("span", { className: 'uppercase', children: title })] }));
};
export default Skill;
