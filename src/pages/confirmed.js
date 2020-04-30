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
        Sauber
        {!!cookies['codechampions_firstName'] &&
          ` ${cookies['codechampions_firstName']}`}
        ! Du bist nun offiziell ein Code Champion! Du wirst ab jetzt zum
        Programmieren Lernen motiviert und wirst ab und zu Emails von mir
        erhalten.
      </p>
      <p>André</p>
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
