import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Pokemon = {
  name: string;
  url: string;
};

export interface PokemonState {
  allPokemon: Pokemon[];
}

const initialState: PokemonState = {
  allPokemon: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemon(state, action: PayloadAction<Pokemon[]>) {
      // spread state and add payload
      state.allPokemon = action.payload;
    },
  },
});

export const { setAllPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
