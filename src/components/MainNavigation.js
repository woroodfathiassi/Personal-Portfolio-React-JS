import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useContext } from "react";
import NavigationItem from "./NavigationItem";
import { MdOutlineMenu } from "react-icons/md";
import AuthContext from '@/store/AuthContext';
const MainNavigation = ({ menuItems, UlStyle }) => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const handleClick = () => {
        setVisibleMenu(!visibleMenu);
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: "pointer-events-auto hidden sm:block", children: _jsxs("ul", { className: UlStyle, children: [menuItems.map((menuItem) => (_jsx(NavigationItem, { title: menuItem.title, path: menuItem.path, isEnd: menuItem.isEnd }, menuItem.title))), isLoggedIn &&
                            _jsx("li", { children: _jsx("button", { className: "relative block px-4 py-3 font-bold capitalize hover:text-mainColor", onClick: logout, children: "Logout" }) })] }) }), _jsxs("nav", { className: "pointer-events-auto flex flex-col items-center justify-center sm:hidden", children: [_jsx("button", { onClick: handleClick, className: "", children: _jsx(MdOutlineMenu, { size: 35 }) }), _jsx("div", { className: visibleMenu ? 'block' : 'hidden', children: _jsx("div", { className: "fixed inset-x-4 top-20 z-50 origin-top bg-zinc-100 shadow-lg dark:bg-zinc-800 rounded-lg p-2 ", children: _jsxs("ul", { className: " w-full", children: [menuItems.map((menuItem) => (_jsx(NavigationItem, { title: menuItem.title, path: menuItem.path, isEnd: menuItem.isEnd }, menuItem.title))), isLoggedIn &&
                                        _jsx("li", { children: _jsx("button", { className: "relative block px-4 py-3 font-bold capitalize hover:text-mainColor", onClick: logout, children: "Logout" }) })] }) }) })] })] }));
};
export default MainNavigation;
