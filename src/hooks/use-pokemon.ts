import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { setAllPokemon } from '../features/pokemonSlice';
import { useAppDispatch } from '../app/hooks';

type Pokemon = {
  name: string;
  url: string;
};

export const usePokemon = (limit: number) => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=20}`
      );

      //loop though data and get each pokemon
      const pokemon = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );

          return data;
        })
      );

      // dispatch to redux
      dispatch(setAllPokemon(pokemon));
      return pokemon;
    },
  });
};

export const usePokemonByName = (name: string) => {
  return useQuery({
    queryKey: ['search', name],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      return data;
    },
  });
};

// get pokemon evolution chain by id
export const usePokemonEvolutionChain = (id: number) => {
  return useQuery({
    queryKey: ['search', id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${id}`
      );

      return data;
    },
  });
};
