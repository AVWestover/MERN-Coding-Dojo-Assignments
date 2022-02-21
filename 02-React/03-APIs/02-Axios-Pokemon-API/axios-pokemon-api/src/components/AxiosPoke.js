import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosPoke = (props) => {
    const [pokeNames, setPokeNames] = useState([]);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokeNames(response.data.results)})
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
export default AxiosPoke;
