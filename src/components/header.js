import React from 'react';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';
import Logo from './logo';
import { StyledLink } from './links';

const Header = ({ location, title }) => {
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
  return <HeaderContainer>{header}</HeaderContainer>;
};

export default Header;

const Title = styled.div`
  margin-left: 10px;
`;

const StyledHomeLink = styled(StyledLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderContainer = styled.header`
  background: linear-gradient(322deg, #f419e7, #9ba90c, #e32a1b);
  background-size: 100% 150%;
  padding: ${rhythm(1)};

  display: flex;
  justify-content: center;
  align-items: center;
`;
