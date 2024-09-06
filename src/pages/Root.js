import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaArrowTurnUp } from "react-icons/fa6";
export default function RootLayout() {
    const [isVisible, setIsVisible] = useState(false);
    // Show button when page is scrolled down by a certain amount
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (_jsxs("div", { className: 'min-h-screen flex flex-col', children: [_jsx(Header, {}), _jsxs("main", { className: 'flex-grow', children: [_jsx(Outlet, {}), _jsx("button", { onClick: scrollToTop, className: `animate-bounce fixed bottom-8 right-8 p-3 bg-mainColor text-white rounded-full shadow-lg hover:bg-gradient-to-t hover:from-amber-400 hover:via-orange-400 hover:to-mainColor transition-[4s] ${isVisible ? 'opacity-100' : 'opacity-0'}`, "aria-label": "Scroll to top", children: _jsx(FaArrowTurnUp, {}) })] }), _jsx(Footer, {})] }));
}
