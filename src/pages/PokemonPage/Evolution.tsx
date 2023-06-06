import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonEvolutionChain } from '../../hooks/use-pokemon';
import { PokeballLoader } from '../../components';

const Evolution = () => {
  const { id } = useParams();
  const paramId = Number(id);

  const { data, isLoading } = usePokemonEvolutionChain(paramId);

  if (isLoading) {
    return <PokeballLoader />;
  }

  console.log(data);
  return <div>Evolution</div>;
};

export default Evolution;
