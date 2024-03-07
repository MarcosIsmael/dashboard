'use client'
import { SimplePokemon } from '@/app/pokemons/interfaces';
import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface PokemonsSlice{
  favorites:{
    [key:string] :SimplePokemon
  }
}

const initialState : PokemonsSlice = {
  favorites:{}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state,action:PayloadAction<SimplePokemon>){
        if(!!state.favorites[action.payload.id]){
            delete state.favorites[action.payload.id]
        }else{
          state.favorites[action.payload.id] = action.payload
        }
//TODO: No es bien visto por la comunidad de redux poner efectos secundarios dentro de los reducers
        // localStorage.setItem('pokémons-favorites',JSON.stringify(state))
    },
    initFavorites(state,action:PayloadAction<{ [key: string]: SimplePokemon } | undefined>){
      if(action.payload) state.favorites=  action.payload
      return
    },

  }
});

export const {toggleFavorite,initFavorites} = pokemonsSlice.actions

export default pokemonsSlice.reducer