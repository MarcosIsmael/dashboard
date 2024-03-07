import React from 'react'
import { PokemonCard, SimplePokemon } from '..'

interface Props {
  pokemons: SimplePokemon[]
}
export const PokemonsGrid = ({ pokemons }:Props) => {
  return (
    <div className='flex flex-wrap gap20 items-center justify-center my-2'>

    {pokemons.map(pokemon =>(
<PokemonCard key={pokemon.id} pokemon={pokemon}/>

    ))}
  </div>
  )
}

