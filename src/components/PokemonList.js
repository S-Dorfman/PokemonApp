
import React from 'react';

function PokemonList({pokemon}) {     //destructure pokeman props 
  return (
    <div>
         {/* map through pokemon array, key for react to identify  */}
       {pokemon.map(p => (
        <div key={p}>{p}</div>
       ))} 
    </div>
  )
}

export default PokemonList;
