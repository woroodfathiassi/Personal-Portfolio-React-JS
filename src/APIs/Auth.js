import { supabase } from "./db.config";
const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        console.error("Login error:", error.message);
        return;
    }
    // Authentication successful, save session information if needed
    const session = data.session;
    if (session) {
        localStorage.setItem('auth', JSON.stringify(session));
    }
};
export { handleLogin };
