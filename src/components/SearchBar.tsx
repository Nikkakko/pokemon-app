import styled from 'styled-components';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { usePokemonBySearch } from '../hooks/use-pokemon';
import { PokeballLoader } from '.';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); // debounce search term

  const { isLoading, isFetching } = usePokemonBySearch(debouncedSearch);

  if (isLoading || isFetching) {
    return <PokeballLoader />;
  }

  return (
    <Input
      type='text'
      placeholder='Search for a Pokemon'
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
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
