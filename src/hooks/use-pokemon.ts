import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { setAllPokemon, setSinglePokemon } from '../features/pokemonSlice';
import { useAppDispatch } from '../app/hooks';
import { useDebounce } from './useDebounce';

type Pokemon = {
  name: string;
  url: string;
};

export const usePokemon = () => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
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

      //combine data and nextData

      const currentList = [...pokemon];

      // dispatch to redux
      dispatch(setAllPokemon(currentList));
      return data;
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

// get pokemon by search input

export const usePokemonBySearch = (name: string) => {
  const debouncedName = useDebounce(name, 500);
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['search', debouncedName],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${debouncedName}`
      );

      if (debouncedName !== '') {
        dispatch(setSinglePokemon([data]));
        return data;
      } else {
        dispatch(setSinglePokemon([]));
        return [];
      }
    },
  });
};
