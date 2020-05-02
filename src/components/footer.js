import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import Newsletter from './newsletter';
import Bio from './bio';

import { WhiteLink } from './links';

const footer = (props) => (
  <FooterContainer>
    <FooterInner>
      {props.hideNewsletter ? null : <Newsletter />}
      <ElementWrapper>
        <Bio />
      </ElementWrapper>
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

const ElementWrapper = styled.div`
  background: white none repeat scroll 0% 0%;
  padding: ${rhythm(1)} ${rhythm(2)};
  border-radius: 5px;
  margin-bottom: ${rhythm(1)};
`;

const FooterContainer = styled.footer`
  min-height: 300px;
  background: linear-gradient(322deg, #f419e7, #9ba90c, #e32a1b);
  background-size: 100% 150%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1)};
`;
