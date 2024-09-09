import { TiWeatherSunny } from "react-icons/ti";
import { BsMoonStars } from "react-icons/bs";
import { useContext } from "react";
import DarkThemeContext from "@/store/DarkThemeContect";

const DarkThemeButton = () => {
    const { isDark, toggleDarkMode } = useContext(DarkThemeContext);

    return(
        <button 
            onClick={toggleDarkMode}
            className='w-10 h-10 px-2 rounded-full bg-white/90 shadow-lg shadow-zinc-800/50'
        >
            {
                isDark ? 
                    <BsMoonStars size={25} className='text-[#ff395d6c] hover:text-mainColor'/> 
                : 
                    <TiWeatherSunny size={25} color="#606060" />
            }
        </button>
    );
};

export default DarkThemeButton;