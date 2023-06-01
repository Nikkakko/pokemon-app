import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pokeball } from '../assets';
import { AiOutlineMenu } from 'react-icons/ai';

const PAGES = [
  {
    name: 'Search',
    path: '/search',
  },
  {
    name: 'Compare',
    path: '/compare',
  },
  {
    name: 'Pokemon',
    path: '/pokemon',
  },
  {
    name: 'My List',
    path: '/mylist',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <PokeballLogo src={pokeball} alt='pokeball' />

      <Wrapper>
        {PAGES.map(page => (
          <Link to={page.path}>{page.name}</Link>
        ))}
      </Wrapper>

      <AiOutlineMenu size={30} color='white' style={{ cursor: 'pointer' }} />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  border: 1px solid red;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 1rem;
  }
`;

const PokeballLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;

export default Navbar;
