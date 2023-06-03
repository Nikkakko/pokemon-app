import styled from 'styled-components';
import { pokemonTypes } from '../utils/pokemonTypes';
import { BiGitCompare } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';

type PokemonCardProps = {
  pokemon: {
    name: string;
    url: string;
    sprites?: {
      front_default: string;
    };

    types: [
      {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }
    ];
  };
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Container>
      <Title>{pokemon?.name}</Title>

      {pokemon?.types.map((type, idx) => {
        const keys = Object.keys(pokemonTypes).filter(
          key => key === type.type.name
        );

        return (
          <TypesWrapper key={idx}>
            <p>{type.type.name}</p>
            <TypeImg src={pokemonTypes[keys[0]].image} alt={type.type.name} />
          </TypesWrapper>
        );
      })}

      <IconAdd />
      <IconCompare />

      <PokemonImg src={pokemon?.sprites?.front_default} loading={'lazy'} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 15px;

  background-color: rgba(255, 255, 255, 0.125);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const Title = styled.h3`
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
`;

const TypesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  padding: 0 10px;
  gap: 10px;

  //first img in the div
  &:first-of-type {
    left: 0;
  }

  //second img in the div
  &:last-of-type {
    right: 0;
  }
`;

const TypeImg = styled.img`
  width: 20px;
  height: 20px;
`;

const PokemonImg = styled.img``;

const IconCompare = styled(BiGitCompare)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #1f51ff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const IconAdd = styled(HiPlus)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #27af0f;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
export default PokemonCard;
