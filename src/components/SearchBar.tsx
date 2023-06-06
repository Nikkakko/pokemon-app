import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { setSinglePokemon } from '../features/pokemonSlice';
import { useAppDispatch } from '../app/hooks';
import { useDebounce } from '../hooks/useDebounce';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const debouncedSearch = useDebounce(search, 500); // debounce search term

  // debounce function

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${search.toLowerCase()}`);
      dispatch(setSinglePokemon([res.data]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      fetchPokemon();
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (search === '') {
      dispatch(setSinglePokemon([]));
    }
  }, [search, dispatch]);

  return (
    <form>
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
