import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import Bio from './bio';
import Newsletter from './newsletter';

import { WhiteLink } from './links';

const footer = () => (
  <FooterContainer>
    <FooterInner>
      <Newsletter />
      <div>
        © {new Date().getFullYear()}, erstellt von
        {` `}
        <WhiteLink
          href="https://www.andrekovac.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          André Kovac
        </WhiteLink>
        <span> • </span>
        <WhiteLink className={'normal'} to={'/imprint'}>
          Impressum
        </WhiteLink>
        <span> • </span>
        <WhiteLink className={'normal'} to={'/privacy-policy'}>
          Datenschutzerklärung
        </WhiteLink>
      </div>
    </FooterInner>
  </FooterContainer>
);

export default footer;

const FooterContainer = styled.footer`
  min-height: 300px;
  background: linear-gradient(322deg, #f419e7, #9ba90c, #e32a1b);
  background-size: 100% 150%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1)};
`;
