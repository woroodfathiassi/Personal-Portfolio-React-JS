import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import { TiWeatherSunny } from "react-icons/ti";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import whiteLogo from '@/assets/whiteLogo.png';
import blackLogo from '@/assets/blackLogo.png';
const menuItems = [
    { title: 'home', path: '/', isEnd: true },
    { title: 'projects', path: '/projects', isEnd: false },
    { title: 'blogs', path: '/blogs', isEnd: false },
    { title: 'contact', path: '/contact', isEnd: false },
];
const headerUlStyle = `
    flex bg-white/90 rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-[0_5px_30px_-3px_rgba(255,57,94,0.3),_0_4px_5px_-4px_rgba(39,39,42,0.05)] 
    ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 `;
const Header = () => {
    const savedDarkMode = sessionStorage.getItem('darkMode');
    const initialDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : false;
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        sessionStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);
    return (_jsxs("header", { className: 'flex justify-between container mx-auto py-7', children: [_jsx(Link, { to: '/', children: _jsx("img", { src: darkMode ? whiteLogo : blackLogo, alt: "", className: 'w-[3rem]' }) }), _jsx(MainNavigation, { menuItems: menuItems, UlStyle: headerUlStyle }), _jsx("button", { onClick: () => setDarkMode(!darkMode), className: 'w-10 h-10 px-2 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ', children: darkMode ?
                    _jsx(BsMoonStars, { size: 25, className: 'text-[#ff395d6c] hover:text-mainColor' })
                    :
                        _jsx(TiWeatherSunny, { size: 25, color: "#606060" }) })] }));
};
export default Header;
