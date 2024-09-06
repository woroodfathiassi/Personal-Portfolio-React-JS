import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/APIs/db.config';

interface AuthContextType {
    session: any;
    error: string | null;
    login: (email: string, password: string) => any | Promise<void>;
    handleGoogleSignIn: () => Promise<void>;
    logout: () => Promise<void>;
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    error: null,
    login: async () => {},
    handleGoogleSignIn: async () => {},
    logout: async () => {},
    isLoggedIn: false,
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [session, setSession] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

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

        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) {
                localStorage.removeItem('supabase.auth.session');
            } else {
                localStorage.setItem('supabase.auth.session', JSON.stringify(session));
            }
        });

        return () => {
            (subscription as any)?.unsubscribe();
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
            // Assuming session is retrieved or handled elsewhere
            // For example, you might need to fetch the session separately or use another method
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    
            if (sessionError) {
                setError(sessionError.message);
                console.error('Error fetching session:', sessionError.message);
            } else {
                setSession(sessionData?.session || null);
            }
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

    return (
        <AuthContext.Provider value={{ session, error, login, handleGoogleSignIn, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
