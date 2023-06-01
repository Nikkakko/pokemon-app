import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Navbar } from '../sections';
import { Background } from '../components';

const RootLayout = () => {
  return (
    <StyledRootLayout>
      <Background />
      <AppWrapper>
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </AppWrapper>
    </StyledRootLayout>
  );
};

const StyledRootLayout = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const AppWrapper = styled.div`
  z-index: 1;
  background: rgba(4, 6, 20, 0.85);
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: 1px solid rgba(23, 20, 20, 0.37);
  display: grid;
  grid-template-rows: 10vh auto 10vh;
  grid-template-columns: 1fr;
  color: white;
  padding: 0 2rem;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: rgba(55, 55, 56, 0.3);
`;
export default RootLayout;
