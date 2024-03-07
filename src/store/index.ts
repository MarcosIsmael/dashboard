 import { configureStore } from '@reduxjs/toolkit'
import counter from './counter/counterSlice'
import pokemons from './pokemons/pokemonsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { middlewarePokemonsFavorites } from './middlewares/middleware-pokemos-favorites'

export const store = configureStore({
  reducer: {
    counter,
    pokemons
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(middlewarePokemonsFavorites),
  devTools:true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector