import React, { createContext, useEffect, ReactNode, FC, useState } from 'react';

// Define the shape of the context value
interface LightDarkContextType {
    statusMode: boolean;
    setStatusMode: (mode: boolean) => void;
}

// Create the context with a default value
const LightDarkContext = createContext<LightDarkContextType | undefined>(undefined);

// Define the provider component
export const LightDarkContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [statusMode, setStatusMode] = useState<boolean>(false); // Set a default mode

    useEffect(() => {
        if (statusMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [statusMode]);

    return (
        <LightDarkContext.Provider value={{ statusMode, setStatusMode }}>
            {children}
        </LightDarkContext.Provider>
    );
};

export default LightDarkContext;
