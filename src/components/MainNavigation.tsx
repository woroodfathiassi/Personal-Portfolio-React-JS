import React, { useState } from "react";
import NavigationItem from "./NavigationItem";
import { MdOutlineMenu } from "react-icons/md";

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

    const handleClick = () => {
        setVisibleMenu(!visibleMenu);
    }

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
                <div className={visibleMenu ? 'block' : 'hidden'}>
                    <div className="fixed inset-x-4 top-20 z-50 origin-top bg-zinc-100 shadow-lg dark:bg-zinc-800 rounded-lg p-2 ">
                        <ul className=" w-full">
                        {menuItems.map((menuItem) => (
                            <NavigationItem
                                key={menuItem.title}
                                title={menuItem.title}
                                path={menuItem.path}
                                isEnd={menuItem.isEnd}
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
