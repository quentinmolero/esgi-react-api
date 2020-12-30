import React, { useEffect, useState } from 'react';
import CityInformations from './CityInformations';

const SearchCity = ({ setResearchedCity }) => {
    const [cityName, setCityName] = useState('');
    const [city, setCity] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const option = { signal: abortController.signal };

        const searchCity = () => {
            if (cityName !== '') {
                fetch('https://api.teleport.org/api/cities/?search=' + cityName, option)
                .then(data => data.json())
                .then(data => {
                    fetch(data._embedded['city:search-results'][0]._links['city:item'].href)
                    .then(data => data.json())
                    .then(data => {
                        console.log(data);
                        setCity(data);
                        setResearchedCity(data.name);
                    })
                    .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
            }
        }

        searchCity();

        return () => abortController.abort();

    }, [cityName]);

    return (
        <div>
            <input className="search-input" value={cityName} onChange={(e) => {setCityName(e.target.value)}} placeholder="Recherchez une ville"/>
            {city !== null ? <CityInformations city={city} /> : ``}
        </div>
    );
}

export default SearchCity;