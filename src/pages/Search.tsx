import styled from 'styled-components';
import { PokeballLoader, PokemonCard, SearchBar } from '../components';
import { useAppSelector } from '../app/hooks';
import { usePokemon } from '../hooks/use-pokemon';

const Search = () => {
  const { allPokemon } = useAppSelector(state => state.pokemon);
  const { isLoading } = usePokemon();

  if (isLoading) {
    return <PokeballLoader />;
  }

  console.log(allPokemon);

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
  margin-top: 20px;

  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0 20px;
`;

export default Search;
