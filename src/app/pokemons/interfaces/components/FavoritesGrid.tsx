'use client'

import { useAppSelector } from "@/store"
import { PokemonsGrid } from ".."
import { IoHeartOutline } from "react-icons/io5"
import { useState } from "react"

export const FavoritesGrid = () => {
    const favorites = useAppSelector(state => state.pokemons.favorites)
    const favoritesList = Object.values(favorites)
    return (
        <>
            {
                favoritesList.length 
                ? ( <PokemonsGrid pokemons={favoritesList} />)
                : <NotFavorite />
            }
        </>
            )
}

export const NotFavorite = () => (
    <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-600" />
        <span>No hay favoritos</span>
    </div>
)