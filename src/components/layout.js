import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';
import Logo from './logo';
import Bio from './bio';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <StyledHomeLink to={`/`}>
          <Logo width={'2.5em'} height={'2.5em'} />
          <Title>{title}</Title>
        </StyledHomeLink>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <StyledLink to={`/`}>{title}</StyledLink>
      </h3>
    );
  }
  return (
    <Container>
      <HeaderContainer>{header}</HeaderContainer>
      <MainContainer>{children}</MainContainer>
      <FooterContainer>
        <FooterInner>
          <Bio />
          <div>
            © {new Date().getFullYear()}, Built and designed by{''}
            <a href="https://www.andrekovac.com">André Kovac</a>
          </div>
        </FooterInner>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;
`;

const Title = styled.div`
  margin-left: 10px;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  color: inherit;
`;

const StyledHomeLink = styled(StyledLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainContainer = styled.main`
  position: relative;
  margin: -20px auto 1.55rem auto;
  background: white none repeat scroll 0% 0%;

  width: 100%;
  max-width: ${rhythm(24)};
  padding: ${rhythm(2)} ${rhythm(2)};
  border-radius: 5px;
`;

const HeaderContainer = styled.header`
  background: linear-gradient(322deg, #f419e7, #9ba90c, #e32a1b);
  background-size: 100% 150%;
  padding: ${rhythm(1)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.footer`
  height: 300px;
  padding: ${rhythm(1)};
  background: linear-gradient(322deg, #f419e7, #9ba90c, #e32a1b);
  background-size: 100% 150%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: ${rhythm(24)};

  padding: ${rhythm(1)};
`;

export default Layout;
