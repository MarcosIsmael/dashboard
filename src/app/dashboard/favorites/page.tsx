import { FavoritesGrid,  } from '@/app/pokemons/interfaces'
import React from 'react'

const FavoritesPage = () => {
  return (
    <div className='flex flex-col'>
<span className='text-5xl my-2'>Pokémos favoritos <small className='text-blue-500'> Global state</small></span>
      <FavoritesGrid/>

    </div>
  )
}

export default FavoritesPage