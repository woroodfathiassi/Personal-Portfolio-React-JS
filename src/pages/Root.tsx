import { useState, useEffect, useContext } from 'react';
import { Outlet } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaArrowTurnUp } from "react-icons/fa6";
import AuthContext from '@/store/AuthContext';

import DarkThemeButton from '@/components/DarkThemeButton';

export default function RootLayout(){
    const [isVisible, setIsVisible] = useState(false);
    const { isLoggedIn} = useContext(AuthContext);
    
    // Show button when page is scrolled down by a certain amount
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
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

    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow'>
                <Outlet />
                <div className='fixed bottom-8 right-8 flex flex-col gap-2'>
                    <button
                        onClick={scrollToTop}
                        className={`animate-bounce p-3 bg-mainColor text-white rounded-full shadow-lg hover:bg-gradient-to-t hover:from-amber-400 hover:via-orange-400 hover:to-mainColor transition-[4s] ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-label="Scroll to top"
                    >
                        <FaArrowTurnUp />
                    </button>
                    {isLoggedIn && <DarkThemeButton /> }
                </div>
            </main>
            <Footer />
        </div>
    );
}