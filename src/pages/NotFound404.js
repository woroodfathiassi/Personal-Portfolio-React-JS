import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const NotFound404 = () => {
    document.title = 'Not Found';
    return (_jsxs("div", { className: "container m-auto my-7", children: [_jsx("h1", { children: "404: Page Not Found" }), _jsx("p", { className: "mt-2 text-base text-zinc-600 dark:text-zinc-400", children: "Sorry, we couldn't find the page you're looking for." }), _jsxs("span", { className: "flex gap-1 items-center text-base font-medium text-mainColor hover:text-mainColor/50 dark:text-mainColor dark:hover:text-mainColor/40", children: [_jsx(Link, { to: "/", children: "Back to Home" }), " ", _jsx(FaArrowRightLong, {})] })] }));
};
export default NotFound404;
