import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { setAllPokemon } from '../features/pokemonSlice';
import { useAppDispatch } from '../app/hooks';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch pokemon data
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/${search.toLowerCase()}`);
        dispatch(setAllPokemon([res.data]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        type='text'
        placeholder='Search for a Pokemon'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #94949424;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

export default SearchBar;
