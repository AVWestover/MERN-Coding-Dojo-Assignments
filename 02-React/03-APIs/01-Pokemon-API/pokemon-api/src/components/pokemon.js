import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [pokeNames, setPokeNames] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokeNames(response.results))
    }, []);

    return (
        <div className="pokeListDIV">
            <ul>
            {pokeNames.length > 0 && pokeNames.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
            </ul>
        </div>
    );
}
export default Pokemon;