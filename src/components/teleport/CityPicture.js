import React, { useEffect, useState } from 'react';

const CityPicture = ({ researchedCity }) => {
    const [pictureURL, setPictureURL] = useState('');

    useEffect(() => {
        if (researchedCity !== undefined) {
            fetch(`https://source.unsplash.com/random?${researchedCity}`)
            .then(data => {
                setPictureURL(data.url);
            })
            .catch(err => console.error(err));
        }
        
    }, [researchedCity]);

    return (
        <div>
            {pictureURL !== '' ? <img alt='researched city' src={pictureURL} className="search-img"/> : ``}
        </div>
    );
}

export default CityPicture;