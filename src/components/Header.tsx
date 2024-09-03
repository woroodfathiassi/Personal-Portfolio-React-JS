import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import { TiWeatherSunny } from "react-icons/ti";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import whiteLogo from '@/assets/whiteLogo.png';
import blackLogo from '@/assets/blackLogo.png';

const menuItems: {title: string, path: string, isEnd: boolean}[] = [
    {title: 'home', path: '/', isEnd: true},
    {title: 'projects', path: '/projects', isEnd: false},
    {title: 'blogs', path: '/blogs', isEnd: false},
    {title: 'contact', path: '/contact', isEnd: false},
];

const headerUlStyle = `
    flex bg-white/90 rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-[0_5px_30px_-3px_rgba(255,57,94,0.3),_0_4px_5px_-4px_rgba(39,39,42,0.05)] 
    ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 `;

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className='flex justify-between container mx-auto py-7'>
            <Link to='/' ><img src={darkMode ? whiteLogo : blackLogo } alt="" className='w-[3rem]'/></Link>
            <MainNavigation menuItems={menuItems} UlStyle={headerUlStyle} />
            <button 
                onClick={() => setDarkMode(!darkMode)}
                className='w-10 h-10 px-2 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 '
            >
                {
                darkMode ? 
                    <BsMoonStars size={25} className='text-[#ff395d6c] hover:text-mainColor'/> 
                : 
                    <TiWeatherSunny size={25} color="#606060" />
                }
            </button>
        </header>
    );
};

export default Header;
