import styled from 'styled-components';
import { PokeballLoader, PokemonCard, SearchBar } from '../components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { usePokemon } from '../hooks/use-pokemon';
import { useState, useCallback } from 'react';
import { setAllPokemon } from '../features/pokemonSlice';
import axios from 'axios';

type Pokemon = {
  name: string;
  url: string;
};

const Search = () => {
  const { allPokemon, singlePokemon } = useAppSelector(state => state.pokemon);
  const [offset, setOffset] = useState<number>(20);
  const dispatch = useAppDispatch();
  const { isLoading, isFetching } = usePokemon();

  const handleLoadMore = useCallback(async () => {
    const newOffset = offset + 20;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${newOffset}`
    );

    const pokemon = res.data.results.map(async (pokemon: Pokemon) => {
      const res = await axios.get(pokemon.url);
      return res.data;
    });

    const allPokemon = await Promise.all(pokemon);

    setOffset(newOffset);

    dispatch(setAllPokemon(allPokemon));
  }, [offset, dispatch]);

  if (isLoading || isFetching) {
    return <PokeballLoader />;
  }

  return (
    <StyledContainer>
      <SearchBar />
      <ContentWrapper>
        {singlePokemon.length > 0 &&
          singlePokemon?.map((pokemon, idx) => (
            <PokemonCard key={idx} pokemon={pokemon} />
          ))}

        {singlePokemon.length < 1 &&
          allPokemon?.map((pokemon, idx) => (
            //loop through pokemon url and render a PokemonCard for each pokemon
            <PokemonCard key={idx} pokemon={pokemon} />
          ))}

        <Button onClick={handleLoadMore} disabled={isFetching || isLoading}>
          Load More
        </Button>
      </ContentWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const ContentWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
  overflow-y: scroll;
  height: 80vh;

  // style scrollbar
  ::-webkit-scrollbar {
    width: 10px;

    &-track {
      background: #f1f1f1;
    }

    &-thumb {
      background: #888;
    }

    &-thumb:hover {
      background: #555;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;

  border: none;

  background-color: #94949424;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #949494;
  }

  &:focus {
    outline: none;
  }
`;

export default Search;
