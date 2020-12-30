import React, { useEffect, useState } from 'react';
import CityInformations from './CityInformations';

const MainCities = () => {
    const [citiesData, setCitiesData] = useState([]);
    const cities = [ //geonameid of the following cities, refer to https://api.teleport.org for details
        2988507, //Paris
        2618425, //Copenhague
        3117735, //Madrid
        2950159, //Berlin
        2761369, //Vienne (Autriche et non la sous prefecture de l'Isere)
    ]

    useEffect(() => {
        cities.map((city) => {
            fetch(`https://api.teleport.org/api/cities/geonameid:${city}`)
            .then(data => data.json())
            .then(data => {
                setCitiesData(citiesData => [...citiesData, data]);
            })
            .catch(err => console.error(err));
        })

    }, []);

    return (
        <div>
            <h2 className="city-title">Quelques villes</h2>
            {citiesData.length > 0 ? citiesData.map((city) => <CityInformations city={city} />) : <p>loading...</p>}
        </div>
    );
}

export default MainCities;