import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from 'react';
// Create the context with a default value
const LightDarkContext = createContext(undefined);
// Define the provider component
export const LightDarkContextProvider = ({ children }) => {
    const [statusMode, setStatusMode] = useState(false); // Set a default mode
    useEffect(() => {
        if (statusMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [statusMode]);
    return (_jsx(LightDarkContext.Provider, { value: { statusMode, setStatusMode }, children: children }));
};
export default LightDarkContext;
