import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allPokemonStateType } from '../utils/types';

export interface PokemonState {
  allPokemon: allPokemonStateType[];
  singlePokemon: allPokemonStateType[];
}

const initialState: PokemonState = {
  allPokemon: [],
  singlePokemon: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemon(state, action: PayloadAction<allPokemonStateType[]>) {
      state.allPokemon = [...state.allPokemon, ...action.payload];
    },

    setSinglePokemon(state, action: PayloadAction<allPokemonStateType[]>) {
      state.singlePokemon = action.payload;
    },
  },
});

export const { setAllPokemon, setSinglePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
