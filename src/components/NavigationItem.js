import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
const linkStyle = "relative block px-4 py-3 font-bold capitalize hover:text-mainColor";
const NavigationItem = ({ title, path, isEnd }) => {
    return (_jsx("li", { children: _jsx(NavLink, { to: path, className: ({ isActive }) => isActive ? `${linkStyle} text-[#ff395e]` : linkStyle, end: isEnd ? true : undefined, children: title }) }));
};
export default NavigationItem;
