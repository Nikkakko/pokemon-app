import styled from 'styled-components';
import { pokemonTypes } from '../utils/pokemonTypes';
import { BiGitCompare } from 'react-icons/bi';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addPokemon, removePokemon } from '../features/pokemonSlice';
import { allPokemonStateType } from '../utils/types';
import { toast } from 'react-toastify';

type PokemonCardProps = {
  pokemon: {
    id: number;
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

  myList?: boolean;
};

const PokemonCard = ({ pokemon, myList }: PokemonCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { allPokemon } = useAppSelector(state => state.pokemon);

  const findPokemon = allPokemon.find(poke => poke.id === pokemon.id);

  const handleNavigate = () => navigate(`/pokemon/${pokemon.id}/description`);

  const handleAddPokemon = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation to the parent container
    dispatch(addPokemon(pokemon as allPokemonStateType));
    //add toastify here
    toast.success(`${pokemon.name} added to your list!`, {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const handleRemovePokemon = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation to the parent container
    dispatch(removePokemon(pokemon as allPokemonStateType));

    //add toastify here
    toast.error(`${pokemon.name} removed from your list!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };

  return (
    <Container onClick={handleNavigate}>
      <Title>{pokemon?.name}</Title>

      {(findPokemon?.types || pokemon?.types)?.map((type, idx) => {
        const typeName = type.type.name;
        const keys = Object.keys(pokemonTypes).filter(key => key === typeName);

        return (
          <TypesWrapper key={idx}>
            <p>{typeName}</p>
            <TypeImg src={pokemonTypes[keys[0]].image} alt={typeName} />
          </TypesWrapper>
        );
      })}

      {!myList && <IconAdd onClick={handleAddPokemon} />}
      {myList && <IconDelete onClick={handleRemovePokemon} />}

      <IconCompare />

      <PokemonImg
        src={
          pokemon?.sprites?.front_default || findPokemon?.sprites?.front_default
        }
        loading={'lazy'}
      />
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

const IconDelete = styled(HiTrash)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #ee8e8e;
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
