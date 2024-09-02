import React from 'react';

const Image: React.FC<{src?: string, alt: string, style: string}> = ({ src, alt, style }) => {
    return(
        <img 
            src={src} 
            alt={alt}
            className={style}
        />
    );
};

export default Image;