import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Navbar, Wrapper } from '../sections';
import { Background } from '../components';

const RootLayout = () => {
  return (
    <StyledRootLayout>
      <Background />
      <AppWrapper>
        <Navbar />
        <Wrapper></Wrapper>
        <Outlet />
        <Footer />
      </AppWrapper>
    </StyledRootLayout>
  );
};

const StyledRootLayout = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const AppWrapper = styled.div`
  z-index: 1;
  background: rgba(4, 6, 20, 0.85);
  height: 100vh;
  width: 100vw;
`;

export default RootLayout;
