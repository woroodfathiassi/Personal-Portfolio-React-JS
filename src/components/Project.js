import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LuLink } from 'react-icons/lu';
import FormattedDate from '@/utils/FormattedDate ';
const Project = ({ Pdata }) => {
    const dateFormatted = FormattedDate(Pdata.date);
    return (_jsxs("a", { target: "_blank", href: Pdata.link, className: 'group p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900', children: [_jsx("p", { className: 'font-time mb-2 border-l-4 border-r-0 border-t-0 border-b-0 rounded-sm border-l-zinc-200 text-zinc-400 dark:text-zinc-300 dark:border-l-zinc-500 pl-3', children: dateFormatted }), _jsxs("h2", { className: 'flex gap-1 items-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100', children: [_jsx(LuLink, { className: 'group-hover:text-mainColor' }), Pdata.title] }), _jsx("p", { className: 'my-2 text-sm text-zinc-600 dark:text-zinc-400', children: Pdata.description })] }));
};
export default Project;
