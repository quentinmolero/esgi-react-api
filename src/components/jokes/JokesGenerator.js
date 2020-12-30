import React, { useState } from 'react';

const JokesGenerator = () => {
    const [joke, setJoke] = useState();

    const generateJoke = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming")
        .then(data => data.json())
        .then(data => {
            formatJoke(data);
        })
        .catch(err => console.error(err));
    }

    const formatJoke = (data) => {
        if (data.type === 'single') {
            setJoke(data.joke);
        } else {
            setJoke(data.setup + '\n' + data.delivery);
        }
    }

    return (
        <div>
            <button className="joke-button" onClick={() => generateJoke()}>Générer une blague</button>
            <p className="joke-content">{joke}</p>
        </div>
    );
}

export default JokesGenerator;