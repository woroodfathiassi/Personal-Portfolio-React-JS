import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const TypedTextCarousel = ({ texts, typingSpeed = 150, pauseDuration = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        let typingTimeout; // Explicitly type the timeout variable
        const handleTyping = () => {
            const fullText = texts[currentTextIndex];
            setCurrentText((prevText) => isDeleting
                ? fullText.substring(0, prevText.length - 1)
                : fullText.substring(0, prevText.length + 1));
            if (!isDeleting && currentText === fullText) {
                setIsDeleting(true);
                typingTimeout = setTimeout(() => setIsDeleting(false), pauseDuration);
            }
            else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
            else {
                typingTimeout = setTimeout(handleTyping, typingSpeed);
            }
        };
        typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, texts, typingSpeed, pauseDuration, currentTextIndex]);
    return _jsx(_Fragment, { children: currentText }); // Wrap in a fragment or element
};
export default TypedTextCarousel;
