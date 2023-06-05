import { Link, useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { pokeball } from '../assets';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const { id } = useParams();

  const PAGES = [
    {
      name: 'Search',
      path: '/',
    },
    {
      name: 'Compare',
      path: '/compare',
    },
    {
      name: 'Pokemon',
      path: `/pokemon/${id}/description`,
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

  return (
    <StyledNavbar>
      <Link to='/'>
        <PokeballLogo src={pokeball} alt='pokeball' />
      </Link>

      <Wrapper>
        {PAGES.map(page => (
          <StyledNavLink to={page.path} key={page.name}>
            {page.name}
          </StyledNavLink>
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

  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 1rem;
  }
`;

const PokeballLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    font-weight: 600;
    //animate the line

    &::after {
      content: '';
      display: block;

      bottom: -5px;

      width: 100%;
      height: 2px;
      background-color: white;
    }
  }
`;

export default Navbar;
