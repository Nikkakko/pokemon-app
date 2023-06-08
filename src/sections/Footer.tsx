import { Link, useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const { id } = useParams();

  const POKEMON_PAGES = [
    {
      name: 'Description',
      path: `/pokemon/${id}/description`,
    },
    {
      name: 'Evolution',
      path: `/pokemon/${id}/evolution`,
    },
    {
      name: 'Catching',
      path: `/pokemon/${id}/catching`,
    },

    {
      name: 'Capable Moves',
      path: `/pokemon/${id}/capable-moves`,
    },
  ];

  return (
    <StyledFooter>
      <Wrapper>
        {POKEMON_PAGES.map(page => (
          <LinkWrapper>
            <StyledNavLink key={page.name} to={page.path}>
              <Link to={page.path}>{page.name}</Link>
            </StyledNavLink>
          </LinkWrapper>
        ))}
      </Wrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;

    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  height: 100%;
`;
const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #71fa9f;

    transition: all 0.3s ease-in-out;
  }

  &.active {
    background: #71fa9f;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export default Footer;
