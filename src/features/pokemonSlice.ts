import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allPokemonStateType } from '../utils/types';

export interface PokemonState {
  allPokemon: allPokemonStateType[];
  singlePokemon: allPokemonStateType[];
  myList: allPokemonStateType[];
  evolutions: allPokemonStateType[];
}

const initialState: PokemonState = {
  allPokemon: [],
  singlePokemon: [],
  evolutions: [],
  myList: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemon(state, action: PayloadAction<allPokemonStateType[]>) {
      //loop state.allPokemon and action.payload and remove duplicates
      const currentList = [...state.allPokemon];
      const newList = action.payload.filter(pokemon => {
        const found = currentList.find(p => p.id === pokemon.id);
        return !found;
      });

      state.allPokemon = [...currentList, ...newList];
    },

    setSinglePokemon(state, action: PayloadAction<allPokemonStateType[]>) {
      state.singlePokemon = action.payload;
    },

    addPokemon(state, action: PayloadAction<allPokemonStateType>) {
      const found = state.myList.find(
        pokemon => pokemon.id === action.payload.id
      );

      if (!found) {
        state.myList.push(action.payload);
      }
    },

    removePokemon(state, action: PayloadAction<allPokemonStateType>) {
      const found = state.myList.find(
        pokemon => pokemon.id === action.payload.id
      );

      if (found) {
        state.myList = state.myList.filter(
          pokemon => pokemon.id !== action.payload.id
        );
      }
    },

    setEvolutions(state, action: PayloadAction<allPokemonStateType[]>) {
      state.evolutions = action.payload;
    },
  },
});

export const {
  setAllPokemon,
  setSinglePokemon,
  addPokemon,
  removePokemon,
  setEvolutions,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
