import React from 'react';

const ACFImage = ({ image, className = '' }) => {
    if (!image || !image.url) {
        return null;
    }

    return (
        <figure className={`acf-image ${className}`}>
            <img src={image.url} alt={image.alt || 'Image'} />
        </figure>
    );
};
export default ACFImage;