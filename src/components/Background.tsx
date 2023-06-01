import pokeball1 from '../assets/pokeball.png';
import pokeball2 from '../assets/pokeball2.png';
import styled from 'styled-components';

const Background = () => {
  return (
    <StyledBackground>
      <img src={pokeball1} alt='pokeball' />
      <img src={pokeball2} alt='pokeball' />
      <img src={pokeball1} alt='pokeball' />
      <img src={pokeball2} alt='pokeball' />
      <img src={pokeball1} alt='pokeball' />
      <img src={pokeball2} alt='pokeball' />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  z-index: -1;
  position: absolute;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;

  img {
    max-inline-size: 100%;
    block-size: auto;
    height: 20rem;
  }
`;

export default Background;
