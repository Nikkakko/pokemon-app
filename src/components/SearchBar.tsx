import styled from 'styled-components';

const SearchBar = () => {
  return <Input type='text' placeholder='Search for a Pokemon' />;
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
