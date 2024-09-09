import { useState, useRef, useContext, ChangeEvent } from "react";
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
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let valid = true;
        const newErrors = { email: '', password: '', recaptcha: '' };

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!formData.email.includes('@')) {
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
            const error: any | undefined = await login(formData.email, formData.password);
            if(error){
                alert('Login error: Invalid email or password');
            }else{
                navigate('/');
            }
        }
    }

    const onChangeReCaptcha = (value: string | null) => {
        setCaptchaToken(value || ''); 
    };

    const handleeSignInWithGoogle = async () => {
        await handleGoogleSignIn();
    };
    
    return (
        <div className="container mx-auto py-7 w-3/5">
            <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Input data={{ label: 'Email', type: 'email', name: 'email', value: formData.email }} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <Input data={{ label: 'Password', type: 'password', name: 'password', value: formData.password }} onChange={handleChange} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_ReCAPTCHA_SITE_KEY}
                        onChange={onChangeReCaptcha}
                    />
                    {errors.recaptcha && <p className="text-red-500 text-sm">{errors.recaptcha}</p>}
                </div>
                <input type="submit" name="submit" id="submit" className="bg-mainColor text-zinc-50 w-full rounded-md py-2" />
            </form>
            <button 
                onClick={handleeSignInWithGoogle}
                className="shadow-md py-2 text-zinc-600 flex items-center justify-center gap-3 w-full rounded-md px-3 my-6 transition-all hover:text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:shadow-zinc-800 dark:text-zinc-600 dark:hover:text-zinc-500 "
            >
                Continue with Google <img className="w-6 h-6" src={googleIcon} alt="" />
            </button>
        </div>
    );
};

export default LoginPage;
