import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allPokemonStateType } from '../utils/types';

export interface PokemonState {
  allPokemon: allPokemonStateType[];
}

const initialState: PokemonState = {
  allPokemon: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemon(state, action: PayloadAction<allPokemonStateType[]>) {
      state.allPokemon = action.payload;
    },
  },
});

export const { setAllPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
