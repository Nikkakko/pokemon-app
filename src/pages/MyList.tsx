import { useAppSelector } from '../app/hooks';
import { PokemonCard } from '../components';
import styled from 'styled-components';

const MyList = () => {
  const { myList } = useAppSelector(state => state.pokemon);
  return (
    <Container>
      <TitleWrapper>
        {myList?.length < 1 && (
          <NoList style={{}}>
            My List is Empty, add some Pokemon to your list!
          </NoList>
        )}
      </TitleWrapper>
      {myList?.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} myList />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0px 20px;
`;

const NoList = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 32px;

  /* margin: auto; */
`;

const TitleWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default MyList;
