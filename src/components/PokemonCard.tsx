import styled from 'styled-components';
import React from 'react';
import electicImage from '../assets/types/electric.svg';

type PokemonCardProps = {
  pokemon: {
    name: string;
    url: string;
    sprites?: {
      front_default: string;
    };

    types?: [
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

      {pokemon?.types?.map(type => (
        <React.Fragment key={type.slot}>
          <p>{type.type.name}</p>

          <img
            src={`/assets/types/${type.type.name}.svg`}
            alt={type.type.name}
          />
        </React.Fragment>
      ))}
      <img src={pokemon?.sprites?.front_default} />
    </Container>
  );
};

const Container = styled.div`
  background-color: #94949424;

  border-radius: 10px;

  width: 200px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
`;

export default PokemonCard;
