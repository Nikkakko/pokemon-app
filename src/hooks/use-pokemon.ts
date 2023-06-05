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
        `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20}`
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

export const useSinglePokemon = (id: string) => {
  return useQuery({
    queryKey: ['search', id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      return data;
    },
  });
};
