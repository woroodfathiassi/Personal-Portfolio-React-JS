import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Input from '@/components/Input';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
    document.title = "Contact | Worood Assi";
    const form = useRef(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState(''); // <-- Added State
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
    function handleSubmit(e) {
        e.preventDefault();
        if (!captchaToken) { // <-- Check Captcha Token
            alert('Please complete the reCAPTCHA.');
            return;
        }
        let valid = true;
        const newErrors = { user_name: '', user_email: '', message: '' };
        if (formData.user_name.trim() === '') {
            newErrors.user_name = 'Name is required';
            valid = false;
        }
        if (formData.user_email.trim() === '') {
            newErrors.user_email = 'Email is required';
            valid = false;
        }
        else if (!formData.user_email.includes('@')) {
            newErrors.user_email = 'Invalid email format';
            valid = false;
        }
        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            valid = false;
        }
        setErrors(newErrors);
        if (valid && form.current) {
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                console.log('SUCCESS!', result.text);
                setSubmitted(true);
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
                setCaptchaToken(''); // <-- Clear Token
                setTimeout(() => setSubmitted(false), 2000);
            })
                .catch((error) => {
                console.log('FAILED...', error.text);
                // Optionally set a failure state and display an error message to the user
            });
        }
    }
    const onChange = (value) => {
        setCaptchaToken(value || ''); // <-- Set Token
    };
    return (_jsxs("div", { className: "w-4/5 m-auto mt-5 p-3 rounded-md bg-white shadow-lg dark:bg-gray-800 sm:w-3/5 lg:w-2/5", children: [_jsx("h1", { className: "text-center text-2xl font-bold", children: "Contact Us" }), submitted ? (_jsx("div", { className: "text-center text-green-500", children: "Thank you for contacting us! We'll get back to you soon." })) : (_jsxs("div", { children: [_jsx("p", { className: "my-1 text-md text-zinc-600 dark:text-zinc-300", children: "Fill out the form below and we'll get back to you as soon as possible." }), _jsxs("form", { ref: form, onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Name', type: 'text', name: 'user_name', value: formData.user_name }, onChange: handleChange }), errors.user_name && _jsx("p", { className: "text-red-500 text-sm", children: errors.user_name })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Email', type: 'email', name: 'user_email', value: formData.user_email }, onChange: handleChange }), errors.user_email && _jsx("p", { className: "text-red-500 text-sm", children: errors.user_email })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Message', type: 'textarea', name: 'message', value: formData.message }, onChange: handleChange }), errors.message && _jsx("p", { className: "text-red-500 text-sm", children: errors.message })] }), _jsx(ReCAPTCHA, { sitekey: import.meta.env.VITE_ReCAPTCHA_SITE_KEY, onChange: onChange }), _jsx("input", { type: "submit", name: "submit", id: "submit", className: "bg-mainColor w-full rounded-md py-2 my-4" })] })] }))] }));
};
export default Contact;
