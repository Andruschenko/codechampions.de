import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

import Footer from './footer';
import Header from './header';

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <Header location={location} title={title} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;
`;

const MainContainer = styled.main`
  position: relative;
  margin: -20px auto 1.55rem auto;
  width: 100%;
  max-width: ${rhythm(26)};

  margin-bottom: ${rhythm(2)};
`;

export default Layout;
