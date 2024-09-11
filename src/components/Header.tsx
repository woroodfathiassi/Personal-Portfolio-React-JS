import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import whiteLogo from '@/assets/whiteLogo.png';
import blackLogo from '@/assets/blackLogo.png';
import AuthContext from '@/store/AuthContext';
import DarkThemeContext from '@/store/DarkThemeContect';
import AccountModal from './AccountModal';
import DarkThemeButton from './DarkThemeButton';

const menuItems: { title: string, path: string, isEnd: boolean }[] = [
    { title: 'home', path: '/', isEnd: true },
    { title: 'projects', path: '/projects', isEnd: false },
    { title: 'blogs', path: '/blogs', isEnd: false },
    { title: 'contact', path: '/contact', isEnd: false },
];

const headerUlStyle = `
    flex bg-white/90 rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-[0_5px_30px_-3px_rgba(255,57,94,0.3),_0_4px_5px_-4px_rgba(39,39,42,0.05)] 
    ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 `;

const Header = () => {
    const [emailInfo, setEmailInfo] = useState<any | null>(null);
    const [image, setImage] = useState();
    const { isLoggedIn, getEmailInfo, logout } = useContext(AuthContext); 
    const { isDark } = useContext(DarkThemeContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmailImage = async () => {
            if (isLoggedIn && getEmailInfo) {
                try {
                    const info = await getEmailInfo();
                    setEmailInfo(info);
                    setImage(info.picture); 
                } catch (error) {
                    console.error('Error fetching email image:', error);
                }
            }
        };

        fetchEmailImage();
    }, [isLoggedIn, getEmailInfo]);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        logout();
        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <header className='flex justify-between container mx-auto py-7'>
            <Link to='/'>
                <img src={isDark ? whiteLogo : blackLogo} alt="Logo" className='w-[3rem]' />
            </Link>
            <MainNavigation menuItems={menuItems} UlStyle={headerUlStyle} />
            <div className=' flex flex-col items-center justify-center'>
                {emailInfo && isLoggedIn && (
                    <button onClick={handleClick}>
                        <img src={emailInfo.picture} alt="User" className='w-[3rem] h-[3rem] rounded-full' />
                    </button>
                )}
                {!isLoggedIn ? (
                    <DarkThemeButton />
                ) : (
                    emailInfo && (
                        <AccountModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        userImage={emailInfo.picture}
                        userName={emailInfo.name}
                        userEmail={emailInfo.email}
                        onLogout={handleLogout}
                        />
                    )
                )}
            </div>
        </header>
    );
};

export default React.memo(Header);
