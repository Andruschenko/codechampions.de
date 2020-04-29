import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import Bio from './bio';

const footer = () => (
  <FooterContainer>
    <FooterInner>
      <Bio />
      <div>
        © {new Date().getFullYear()}, erstellt von
        {` `}
        <a
          href="https://www.andrekovac.com"
          target="_blank"
          rel="noopener noreferrer"
          className={'normal'}
        >
          André Kovac
        </a>
        <span> • </span>
        <Link className={'normal'} to={'/imprint'}>
          Impressum
        </Link>
        <span> • </span>
        <Link className={'normal'} to={'/privacy-policy'}>
          Datenschutzerklärung
        </Link>
      </div>
    </FooterInner>
  </FooterContainer>
);

export default footer;

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
