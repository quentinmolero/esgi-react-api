import React from 'react';
import JokesDescription from './JokesDescription';
import JokesGenerator from './JokesGenerator';
import '../../styles/Jokes.css';

const JokesMainView = () => {
    return (
        <div className="joke-page">
            <JokesDescription />
            <JokesGenerator />
        </div>
    );
}

export default JokesMainView;