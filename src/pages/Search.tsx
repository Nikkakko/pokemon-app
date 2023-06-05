import styled from 'styled-components';
import { PokeballLoader, PokemonCard, SearchBar } from '../components';
import { useAppSelector } from '../app/hooks';
import { usePokemon } from '../hooks/use-pokemon';
import { useState } from 'react';

const Search = () => {
  const { allPokemon } = useAppSelector(state => state.pokemon);
  const [limit, setLimit] = useState(20);

  const { isLoading, isFetching } = usePokemon(limit);

  if (isLoading) {
    return <PokeballLoader />;
  }

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  return (
    <StyledContainer>
      <SearchBar />
      <ContentWrapper>
        {allPokemon?.map((pokemon, idx) => (
          //loop through pokemon url and render a PokemonCard for each pokemon
          <PokemonCard key={idx} pokemon={pokemon} />
        ))}
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

export default Search;
