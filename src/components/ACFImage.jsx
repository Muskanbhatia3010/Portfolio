import React from 'react';

const ACFImage = ({ image }) => {
    if (!image || !image.url) {
        return null;
    }

    return (
        <figure className='acf-image'>
            <img src={image.url} alt={image.alt || 'Image'} />
        </figure>
    );
};

export default ACFImage;