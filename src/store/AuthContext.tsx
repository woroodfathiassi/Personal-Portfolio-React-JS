import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { supabase } from '@/APIs/db.config';
// import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    session: any;
    error: string | null;
    login: (email: string, password: string) => any | Promise<void>;
    handleGoogleSignIn: () => any|Promise<void>;
    logout: () => Promise<void>;
    isLoggedIn: boolean;
    getEmailInfo: any,
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    error: null,
    login: async () => {},
    handleGoogleSignIn: async () => {},
    logout: async () => {},
    isLoggedIn: false,
    getEmailInfo: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [session, setSession] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                setError(error.message);
                console.error('Error fetching session:', error.message);
            } else {
                setSession(data.session);
            }
        };

        fetchSession();

        // Listen for authentication state changes
        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) {
                localStorage.removeItem('supabase.auth.session');
            } else {
                localStorage.setItem('supabase.auth.session', JSON.stringify(session));
            }
        });
        
        const unsubscribe = (subscription as any)?.unsubscribe;
        
        return () => {
            if (typeof unsubscribe === 'function') {
              unsubscribe(); // Call the function to unsubscribe
            }
        };
    }, []);

    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            console.error('Login error:', error.message);
            return error;
        } else {
            setSession(data?.session || null);
            localStorage.setItem('supabase.auth.session', JSON.stringify(data?.session || null));
        }
    };

    const handleGoogleSignIn = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    
        if (error) {
            setError(error.message);
            console.error('Google sign-in error:', error.message);
        } else {
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            
            if (sessionError) {
                setError(sessionError.message);
                console.error('Error fetching session:', sessionError.message);
            } else {
                setSession(sessionData?.session || null);
            }
        }
    };

    const getEmailInfo = () => {
        if( session !== null ){
            const info = session.user.user_metadata;
            return info;
        }
    };
    

    const logout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            setError(error.message);
            console.error('Logout error:', error.message);
        } else {
            setSession(null);
            localStorage.removeItem('supabase.auth.session');
        }
    };

    const isLoggedIn = session !== null;

    const contextValue = useMemo(() => ({
        session,
        error,
        login,
        handleGoogleSignIn,
        logout,
        isLoggedIn,
        getEmailInfo
    }), [session, error]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
