import React from 'react';

const JokesDescription = () => {
    return (
        <>
            <h1 className="joke-title">API Jokes</h1>
            <p className="joke-desc">Cette API renvoie une blague aléatoire en anglais. Je l'ai paramétré afin qu'elle renvoie uniquement des blagues de programmeur. Attention, je me dédouane de la qualité des blagues, elles ne proviennent pas de moi.</p>
        </>
    );
}

export default JokesDescription;