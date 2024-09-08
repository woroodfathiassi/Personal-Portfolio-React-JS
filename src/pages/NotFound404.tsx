import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";


const NotFound404 = () => {
    document.title = 'Not Found';

    return(
        <div className="container m-auto my-7">
            <h1>404: Page Not Found</h1>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">Sorry, we couldn't find the page you're looking for.</p>
            <span className="flex gap-1 items-center text-base font-medium text-mainColor hover:text-mainColor/50 dark:text-mainColor dark:hover:text-mainColor/40">
                <Link to="/">Back to Home</Link> <FaArrowRightLong />
            </span>
        </div>
    );
};

export default NotFound404;