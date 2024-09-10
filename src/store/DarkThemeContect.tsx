import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface DarkThemeContextType {
    isDark: boolean;
    toggleDarkMode: () => void;
}

const savedDarkMode = sessionStorage.getItem('darkMode');
const initialDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : false;

const DarkThemeContext = createContext<DarkThemeContextType>({
    isDark: initialDarkMode,
    toggleDarkMode: () => {},
});

export function DarkThemeContextProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const savedMode = sessionStorage.getItem('darkMode');
        return savedMode ? savedMode === 'true' : false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        sessionStorage.setItem('darkMode', isDark.toString());
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(prevMode => !prevMode);
    };

    return (
        <DarkThemeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </DarkThemeContext.Provider>
    );
}

export default DarkThemeContext;
