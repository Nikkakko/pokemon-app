import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styled from 'styled-components';

const Description = () => {
  const { allPokemon } = useAppSelector(state => state.pokemon);
  const { id } = useParams();
  const paramId = Number(id);

  // map through allPokemon and find the pokemon with the matching id
  const findPokemon = allPokemon?.find(pokemon => pokemon.id === paramId);

  if (!findPokemon)
    return (
      <NotFound>
        <h1>
          404
          <br />
          Pokemon not found!
        </h1>
      </NotFound>
    );

  return (
    <Container>
      <NameAndType>
        <NameTitle>{findPokemon?.name}</NameTitle>
        <TypeTitle>
          TYPE: {findPokemon?.types.map(type => type.type.name).join(' - ')}
        </TypeTitle>

        <TypeTitle>
          {/* EVOLUTION: {findPokemon?.evolution.map(evolution => evolution.name)} */}
        </TypeTitle>
      </NameAndType>

      <PokemonImg src={findPokemon?.sprites?.front_default} alt='' />

      <Stats>
        <ul>
          {findPokemon?.stats?.map(stat => {
            return (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
                <ProgressBar max={100} value={stat.base_stat} />
              </li>
            );
          })}
        </ul>
      </Stats>

      {/* <BattleStatsWrapper>
        {findPokemon?.types.map(type => (
          <BattleStats key={type.type.name} type={type.type.name} />
        ))}
      </BattleStatsWrapper> */}
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  position: relative;
  display: flex;

  width: 100%;
  height: 100%;
`;

const NameAndType = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  width: 350px;
  height: 100px;
  position: relative;
  gap: 1rem;

  &::before {
    content: '';
    background: #71fa9f;
    width: 100px;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const NameTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
`;

const TypeTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const PokemonImg = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  object-fit: contain;

  //add circle around image
`;

const Stats = styled.div`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  width: 350px;

  position: absolute;

  bottom: 8rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    gap: 1rem;
    li {
      color: white;
      text-align: right;
      text-transform: uppercase;
      /* letter-spacing: 0.1rem; */
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const ProgressBar = styled.progress<{
  value: number;
}>`
  transition: 2s ease-in-out;
  width: 100px;
  height: 100%;
  -webkit-appearance: none;
  appearance: none;
  &::-webkit-progress-bar {
    border-radius: 1rem;
    height: 0.3rem;
    background-color: transparent;
  }
  &::-webkit-progress-value {
    border-radius: 1rem;
    background-color: #71fa9f;
  }
`;

const BattleStatsWrapper = styled.div`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  width: 350px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: flex-start;
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  color: white;

  text-align: center;
`;
export default Description;
