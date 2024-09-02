import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
    
    return (
        <footer className='container bottom-0 flex justify-between items-center mx-auto mt-16 py-7 px-3 border-t-2 border-zinc-200 dark:border-zinc-700 '>
            <span className='text-sm text-zinc-600 dark:text-zinc-400 flex gap-2 items-center'><MdOutlineLocationOn /> Palestine - Ramallah</span>
            <span className='text-sm text-zinc-600 dark:text-zinc-400'>&copy; 2024 Worood Assi. All rights reserved.</span>
        </footer>
    );
};

export default Footer;