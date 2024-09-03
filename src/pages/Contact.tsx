import Input from '@/components/Input';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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

        let valid = true;
        const newErrors = { user_name: '', user_email: '', message: '' };

        if (formData.user_name.trim() === '') {
            newErrors.user_name = 'Name is required';
            valid = false;
        }
        if (formData.user_email.trim() === '') {
            newErrors.user_email = 'Email is required';
            valid = false;
        } else if (!formData.user_email.includes('@')) {
            newErrors.user_email = 'Invalid email format';
            valid = false;
        }
        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
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
                    setTimeout(() => setSubmitted(false), 2000);
                })
                .catch((error) => {
                    console.log('FAILED...', error.text);
                    // Optionally set a failure state and display an error message to the user
                });
        }
    }

    return (
        <div className="w-4/5 m-auto mt-5 p-3 rounded-md bg-white shadow-lg dark:bg-gray-800 sm:w-3/5 lg:w-2/5">
            <h1 className="text-center text-2xl font-bold">Contact Us</h1>
            {submitted ? (
                <div className="text-center text-green-500">
                    Thank you for contacting us! We'll get back to you soon.
                </div>
            ) : (
                <div>
                    <p className="my-1 text-md text-zinc-600 dark:text-zinc-300">Fill out the form below and we'll get back to you as soon as possible.</p>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input data={{ label: 'Name', type: 'text', name: 'user_name', value: formData.user_name }} onChange={handleChange} />
                            {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
                        </div>
                        <div className="mb-4">
                            <Input data={{ label: 'Email', type: 'email', name: 'user_email', value: formData.user_email }} onChange={handleChange} />
                            {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
                        </div>
                        <div className="mb-4">
                            <Input data={{ label: 'Message', type: 'textarea', name: 'message', value: formData.message }} onChange={handleChange} />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <input type="submit" name="submit" id="submit" className="bg-mainColor/50 w-full rounded-md py-2" />
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contact;
