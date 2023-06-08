import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetPokemonSpecies,
  usePokemonEvolutionChain,
} from '../../hooks/use-pokemon';
import { PokeballLoader, PokemonCard } from '../../components';
import { setEvolutions } from '../../features/pokemonSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import axios, { all } from 'axios';
import styled from 'styled-components';

type EvolutionChain = {
  species: {
    name: string;
    url: string;
  };

  evolves_to: EvolutionChain[];
};

const Evolution = () => {
  const { id } = useParams();
  const paramId = Number(id);
  const dispatch = useAppDispatch();
  const { evolutions, allPokemon } = useAppSelector(state => state.pokemon);

  const { data } = useGetPokemonSpecies(paramId);

  useEffect(() => {
    //get evolution chain url from data and fetch it using axios and set it to state using dispatch

    const fetchEvolutionChain = async () => {
      const res = await axios.get(data?.evolution_chain?.url);

      const evolutionChain = res.data.chain;

      const evolutionChainArray: EvolutionChain[] = [];

      evolutionChainArray.push(evolutionChain);

      evolutionChainArray.push(...evolutionChain.evolves_to);

      evolutionChainArray.push(...evolutionChain.evolves_to[0].evolves_to);

      const pokemon = evolutionChainArray.map(
        async (pokemon: EvolutionChain) => {
          const res = await axios.get(pokemon.species.url);
          return res.data;
        }
      );

      const allPokemon = await Promise.all(pokemon);

      dispatch(setEvolutions(allPokemon));
    };

    fetchEvolutionChain();
  }, [data, dispatch]);

  console.log(evolutions);

  return (
    <StyledContainer>
      {evolutions?.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
`;

export default Evolution;
