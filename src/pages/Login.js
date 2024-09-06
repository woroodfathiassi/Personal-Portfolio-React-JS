import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useContext } from "react";
import Input from "@/components/Input";
import ReCAPTCHA from "react-google-recaptcha";
import AuthContext from '@/store/AuthContext';
import { useNavigate } from "react-router-dom";
import googleIcon from '@/assets/google.png';
const LoginPage = () => {
    const navigate = useNavigate();
    const { login, handleGoogleSignIn } = useContext(AuthContext);
    document.title = "Login | Worood Assi";
    const form = useRef(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        recaptcha: ''
    });
    const [captchaToken, setCaptchaToken] = useState('');
    // : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let valid = true;
        const newErrors = { email: '', password: '', recaptcha: '' };
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        }
        else if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        }
        if (!captchaToken) {
            newErrors.recaptcha = 'reCAPTCHA is required';
            valid = false;
        }
        setErrors(newErrors);
        if (valid) {
            const error = await login(formData.email, formData.password);
            if (error) {
                alert('Login error: Invalid email or password');
            }
            else {
                navigate('/');
            }
        }
    }
    const onChangeReCaptcha = (value) => {
        setCaptchaToken(value || '');
    };
    const handleeSignInWithGoogle = async () => {
        await handleGoogleSignIn();
    };
    return (_jsxs("div", { className: "container mx-auto py-7", children: [_jsxs("form", { ref: form, onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Email', type: 'email', name: 'email', value: formData.email }, onChange: handleChange }), errors.email && _jsx("p", { className: "text-red-500 text-sm", children: errors.email })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Password', type: 'password', name: 'password', value: formData.password }, onChange: handleChange }), errors.password && _jsx("p", { className: "text-red-500 text-sm", children: errors.password })] }), _jsxs("div", { className: "mb-4", children: [_jsx(ReCAPTCHA, { sitekey: import.meta.env.VITE_ReCAPTCHA_SITE_KEY, onChange: onChangeReCaptcha }), errors.recaptcha && _jsx("p", { className: "text-red-500 text-sm", children: errors.recaptcha })] }), _jsx("input", { type: "submit", name: "submit", id: "submit", className: "bg-mainColor/50 w-full rounded-md py-2" })] }), _jsxs("button", { onClick: handleeSignInWithGoogle, className: "bg-yellow-500 flex items-center justify-center gap-3 w-full rounded-md py-2 my-3", children: ["Sign in with Google ", _jsx("img", { className: "w-10 h-10", src: googleIcon, alt: "" })] })] }));
};
export default LoginPage;
