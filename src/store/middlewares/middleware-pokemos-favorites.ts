'use client'
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";
import { initFavorites } from "../pokemons/pokemonsSlice";

export const middlewarePokemonsFavorites = (state : MiddlewareAPI)=>{
    return (next: Dispatch)=>(action : Action)=>{
        next(action)
        if(action.type === 'pokemons/toggleFavorite'){
        const { pokemons }= state.getState() as RootState
        localStorage.setItem('pokémons-favorites',JSON.stringify(pokemons.favorites))
    }    
    if(action.type === 'pokemons/initFavorites'){
        const initialState = localStorage.getItem('pokémons-favorites')
        next(initFavorites( initialState ? JSON.parse(initialState) : undefined))
    }
        
    }
}