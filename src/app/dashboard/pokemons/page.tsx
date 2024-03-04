import React from 'react'
import { PokemonResponse, PokemonsGrid, SimplePokemon } from '@/app/pokemons/interfaces'
import { notFound } from 'next/navigation'

const getPokemons = async( limit = 20, offset= 0 ):Promise<SimplePokemon[]> => {
  const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }`)
    .then( res => res.json() );

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    // throw new Error('Esto es un error que no debería de suceder');
    // throw notFound();

    return pokemons;
}

const PagePokemons = async () => {
  const pokemons = await getPokemons(151)
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap10 items-center justify-center'>

        <PokemonsGrid pokemons={pokemons} />
      </div>
    </div>
  )
}
export default PagePokemons