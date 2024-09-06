import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavigationItemProps {
    title: string;
    path: string;
    isEnd: boolean;
}

// Define a type for the className function parameter
type NavLinkClassNameProps = Pick<NavLinkProps, 'isActive'>;

const linkStyle = "relative block px-4 py-3 font-bold capitalize hover:text-mainColor";

const NavigationItem: React.FC<NavigationItemProps> = ({ title, path, isEnd }) => {
    return (
        <li>
            <NavLink  
                to={path}
                className={({ isActive }: NavLinkClassNameProps) =>
                    isActive ? `${linkStyle} text-[#ff395e]` : linkStyle
                }
                end={isEnd ? true : undefined}
            >
                {title}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
