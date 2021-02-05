import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="home-title">React by Quentin MOLERO</h1>
            <div className="home-button-list">
                <button onClick={() => window.location.pathname += '/teleport'}>Teleport</button>
                <button onClick={() => window.location.pathname += '/jokes'}>Jokes</button>
            </div>
            <div className="home-desc-list">
                <div className="home-desc-api">
                    <p className="home-desc-api-title">Teleport + Unsplash</p>
                    <p className="home-desc-api-text">Teleport API permet de récupérer des informations par rapport à une ville. Une liste de ville est présenté mais il est aussi possible de rechercher une ville.</p>
                    <p className="home-desc-api-text">Une photo aléatoire de la ville recherché sera récupéré par l'API Unplash et affiché en plus des informations de la ville.</p>
                </div>
                <div className="home-desc-api">
                    <p className="home-desc-api-title">Jokes</p>
                    <p className="home-desc-api-text">API qui vas trouver une blague de programmeur à chaque appuie sur le bouton.</p>
                </div>
            </div>
            <p className="home-foot">Toutes les informations récupérés par API sont en anglais, une idée d'amélioration serait d'intégrer une API de traduction afin de traduire les données en Français.</p>
            <p className="home-foot">Source de l'API Teleport: https://developers.teleport.org/api/</p>
            <p className="home-foot">Source de l'API Unsplash: https://source.unsplash.com/</p>
            <p className="home-foot">Source de l'API Joke: https://sv443.net/jokeapi/v2/</p>
        </div>
    );
}

export default Home;