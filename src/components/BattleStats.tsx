import styled from 'styled-components';
import { pokemonTypes } from '../utils/pokemonTypes';

type Props = {
  type: string;
};

const renderTypeItems = (typeName: string) => {
  if (typeName === 'normal') {
    return null;
  }

  const types = typeName.split('/');

  const stats = {
    strength: new Set<string>(),
    weakness: new Set<string>(),
    resistance: new Set<string>(),
    vulnerable: new Set<string>(),
  };

  types.forEach(type => {
    const currentType = pokemonTypes[type];

    if (currentType) {
      Object.entries(currentType).forEach(([key, value]) => {
        if (key !== 'image' && Array.isArray(value)) {
          value.forEach((stat: string) => {
            stats[key].add(stat);
          });
        }
      });
    }
  });

  return (
    <div>
      {Object.entries(stats).map(([key, value]) => (
        <Container key={key}>
          <KeyTitle>{key}:</KeyTitle>
          {Array.from(value).map((stat, index) => (
            <span key={index}>{stat}</span>
          ))}
        </Container>
      ))}
    </div>
  );
};

const BattleStats = ({ type }: Props) => {
  return <>{renderTypeItems(type)}</>;
};

const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0.5rem;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const KeyTitle = styled.h4`
  padding: 0.5rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export default BattleStats;
