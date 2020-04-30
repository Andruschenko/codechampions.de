import React from 'react';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import { rhythm } from '../utils/typography';

import Footer from './footer';
import Header from './header';
import GlobalStyles from '../GlobalStyles';

const Layout = ({ location, title, hideNewsletter, children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header location={location} title={title} />
      <MainContainer>{children}</MainContainer>
      <Footer hideNewsletter={hideNewsletter} />
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        enableDeclineButton={true}
        declineButtonText="Ablehnen"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '0.9rem' }}
        declineButtonStyle={{
          color: '#f77',
          backgroundColor: 'inherit',
          fontSize: '0.8rem',
        }}
      >
        Diese Webseite verwendet Cookies, um die Nutzerqualität zu verbessern.
      </CookieConsent>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  position: relative;
  margin: -20px auto 1.55rem auto;
  width: 100%;
  max-width: ${rhythm(26)};

  margin-bottom: ${rhythm(2)};

  flex: 1;
`;

export default Layout;
