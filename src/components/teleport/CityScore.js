import React from 'react';

const CityScore = ({ score }) => {
    return (
        <div className="data-score">
            <p>{score.name}: {score.score_out_of_10.toString().substring(0, 3)}</p>
        </div>
    );
}

export default CityScore;