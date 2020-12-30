import React, { useEffect, useState } from 'react';
import CityScore from './CityScore';

const CityInformations = ({ city }) => {
    const [cityScore, setCityScore] = useState();
    
    const cityData = {
        name: city.full_name,
        lat: city.location.latlon.latitude,
        lon: city.location.latlon.longitude,
        population: city.population,
    }

    const processCityScore = (data) => {
        return {
            summary: data.summary.replaceAll('<p>', '').replaceAll('</p>', '')
                .replaceAll('<b>', '').replaceAll('</b>', '')
                .replaceAll('<i>', '').replaceAll('</i>', '')
                .replaceAll('<br>', ' ').replaceAll('</br>', '')
                .replaceAll('\n', ''),
            cityScore: data.teleport_city_score.toString().substring(0, 5),
            scores: data.categories,
        }
    }

    const clearCityScore = () => {
        return {
            summary: 'No data for this city',
            cityScore: 'No score for this city',
            scores: [],
        }
    }

    useEffect(() => {
        if (Object.keys(city._links).filter((link) => link.toString().includes('urban_area')).length !== 0) {
            fetch(city._links['city:urban_area'].href + 'scores')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setCityScore(processCityScore(data));
            })
            .catch(err => console.error(err));
        } else {
            setCityScore(clearCityScore());
        }

    }, [city]);

    return (
        <div>
            <h3 className="city-name">{cityData.name}</h3>
            <p className="city-desc">
                <b>Latitude:</b> {cityData.lat},
                <b> Longitude:</b> {cityData.lon},
                <b> Population:</b> {cityData.population}
            </p>
            <div className="city-data">
                <p className="data-summary">{cityScore?.summary}</p>
                <p className="data-total-score">Score globale: {cityScore?.cityScore}</p>
                <div className="data-scores-list">
                    {cityScore?.scores.map((score) => <CityScore score={score} />)}
                </div>
            </div>
        </div>
    );
}

export default CityInformations;