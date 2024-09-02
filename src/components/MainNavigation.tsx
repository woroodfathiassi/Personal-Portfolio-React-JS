import React from "react";
import NavigationItem from "./NavigationItem";

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
    return (
        <nav className="pointer-events-auto hidden md:block">
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
    );
}

export default MainNavigation;
