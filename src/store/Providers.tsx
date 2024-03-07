'use client'
import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { initFavorites } from "./pokemons/pokemonsSlice"

interface Props {
    children: React.ReactNode
}
export const Providers = ({children}:Props) => {
  useEffect(() => {
store.dispatch(initFavorites())
  }, [])
  
  return (
    <Provider store={store} >
        {children}
    </Provider >
  )
}
