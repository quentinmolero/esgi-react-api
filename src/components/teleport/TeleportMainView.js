import React, { useState } from 'react';
import CityPicture from './CityPicture';
import MainCities from './MainCities';
import SearchCity from './SearchCity';
import '../../styles/Teleport.css';

const TeleportMainView = () => {
    const [researchedCity, setResearchedCity] = useState();

    return (
        <div className="teleport-page">
            <h1 className="teleport-title">Trouvez des informations sur la ville de vos rêves.</h1>
            <SearchCity setResearchedCity={setResearchedCity} />
            <CityPicture researchedCity={researchedCity} />
            <MainCities />
        </div>
    );
}

export default TeleportMainView;