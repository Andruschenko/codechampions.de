import React from 'react';
import { graphql } from 'gatsby';
import { useCookies } from 'react-cookie';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { StandardLink } from '../components/links';

const Confirmed = (props) => {
  const [cookies] = useCookies([
    'codechampions_email',
    'codechampions_firstName',
  ]);

  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout hideNewsletter={true} location={props.location} title={siteTitle}>
      <SEO title="Subscription Confirmed" />
      <h1>Abonnement bestätigt!</h1>
      <p>
        Hallo
        {!!cookies['codechampions_firstName'] &&
          ` ${cookies['codechampions_firstName']}`}
        ! <span role="img">😃</span>
        <br />
        Du bist nun offiziell ein Code Champion! <span role="img">🏅</span> Du
        wirst ab jetzt zum Programmieren Lernen motiviert und wirst ab und zu
        Emails von mir erhalten. <span role="img">📮</span>
      </p>
      <p>
        Solltest Du einmal keine Emails zum Programmieren lernen mehr erhalten
        wollen, findest Du in jeder Nachricht einen Link, um dich ohne Probleme
        abzumelden.
      </p>
      <p>
        Viel Spaß Dir,
        <br />
        Dein André
      </p>
      <h4>
        <StandardLink to={`/`}>
          Hier geht es zur Startseite <span role="img">🏠</span>
        </StandardLink>
      </h4>
    </Layout>
  );
};

export default Confirmed;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
