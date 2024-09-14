import React, { useState, useEffect, useRef } from "react";
import NavigationItem from "./NavigationItem";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

interface MenuItem {
    title: string;
    path: string;
    isEnd: boolean;
}

interface MainNavigationProps {
    menuItems: MenuItem[];
    UlStyle: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({menuItems, UlStyle}) => {
    const [ visibleMenu, setVisibleMenu ] = useState(false);
    const bodyRef = useRef(document.body);

    const handleClick = () => {
        setVisibleMenu(!visibleMenu);
    }

    // useEffect(() => {
    //     if (visibleMenu) {
    //         bodyRef.current.style.overflow = 'hidden';
    //     } else {
    //         bodyRef.current.style.overflow = 'auto';
    //     }

    //     const handleResize = () => {
    //         if (window.innerWidth >= 640) { 
    //             bodyRef.current.style.overflow = 'auto';
    //         }else{
    //             bodyRef.current.style.overflow = 'hidden';
    //         }
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [visibleMenu]);

    return (
        <>
            <nav className="pointer-events-auto hidden sm:block">
                <ul className={UlStyle}>
                    {menuItems.map((menuItem) => (
                        <NavigationItem
                            key={menuItem.title}
                            title={menuItem.title}
                            path={menuItem.path}
                            isEnd={menuItem.isEnd}
                        />
                    ))}
                </ul>
            </nav>
            <nav className="pointer-events-auto flex flex-col items-center justify-center sm:hidden">
                <button onClick={handleClick} className=""><MdOutlineMenu size={35} /></button>
                <div className={visibleMenu ? 'block' : 'hidden'} onClick={handleClick}>
                <div className={`w-full h-svh fixed mt-3 inset-x-0 z-50 -top-px bg-zinc-200 bg-opacity-90 shadow-lg dark:bg-zinc-800 rounded-lg p-2 transform transition-transform duration-300 ${visibleMenu ? 'animate-slide-in-left' : 'animate-slide-out-left'}`}>
                <button onClick={handleClick} className="p-2 rounded-lg shadow-sm hover:shadow-md"><RxCross1 /></button>
                        <ul className=" w-full">
                            {menuItems.map((menuItem) => (
                                <NavigationItem
                                    key={menuItem.title}
                                    title={menuItem.title}
                                    path={menuItem.path}
                                    isEnd={menuItem.isEnd}
                                    onClick={handleClick}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    );
}

export default MainNavigation;
