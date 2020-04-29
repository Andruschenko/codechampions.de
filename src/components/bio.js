/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

import { StandardLink } from './links';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `25%`,
        }}
        imgStyle={{
          borderRadius: `25%`,
        }}
      />
      <Text>
        <strong>{author.name}</strong> bringt sehr vielen Menschen auf der
        ganzen Welt Programmieren und andere Dinge bei.
        {` `}
        Besuche seine{' '}
        <StandardLink
          href={`https://www.andrekovac.com/`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Webseite
        </StandardLink>{' '}
        um mehr über ihn zu erfahren und ihn anzuschreiben.
      </Text>
    </Wrapper>
  );
};

const Text = styled.p`
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;

  background-color: white;
  padding: ${rhythm(0.5)};
  border-radius: 5px;
`;

export default Bio;
