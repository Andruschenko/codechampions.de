import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import { rhythm } from '../utils/typography';
import { StandardLink } from '../components/links';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const displayPosts = (type, title = undefined) => (
    <ElementWrapper>
      {title && <h2>{title}</h2>}
      {posts
        .filter(({ node }) => node.frontmatter.type === type)
        .map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <article key={node.fields.slug}>
              <header>
                <PostTitle>
                  <StandardLink
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </StandardLink>
                </PostTitle>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
    </ElementWrapper>
  );

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Werde zum Code Champion - Lerne kostenlos Programmieren und erstelle deine eigene Webseite" />
      <ElementWrapper>
        <div>
          <h2>
            Werde zum <b>Code Champion</b>{' '}
            <span role="img" aria-label="Smiling Face Icon">
              🏅
            </span>
            !
          </h2>
          <p>
            Lerne mit coolen Videos{' '}
            <span role="img" aria-label="Welt">
              📹
            </span>{' '}
            komplett <b>kostenlos</b> deine erste eigene <b>Homepage</b>{' '}
            <span role="img" aria-label="Welt">
              💻
            </span>{' '}
            zu bauen! Deine eigene Homepage in der du der Welt{' '}
            <span role="img" aria-label="Welt">
              🌍
            </span>{' '}
            von dir, deinem Lieblingshobby oder deinem Idol erzählen kannst. Mit
            deiner Persönlichen Web-Adresse, die du sofort mit jedem teilen
            kannst.{' '}
            <span role="img" aria-label="Welt">
              🤓
            </span>
          </p>
          <p>
            Melde dich gleich beim <b>Newsletter</b> an.{' '}
            <span role="img" aria-label="Welt">
              👇
            </span>{' '}
            Dann verpasst du nicht den Start des Programms!{' '}
            <span role="img" aria-label="Welt">
              🦎
            </span>
            <br />
            Und erzähle gerne deinen Freunden von dem Programm!{' '}
            <span role="img" aria-label="Welt">
              👩‍💻👨‍💻
            </span>
          </p>
        </div>
      </ElementWrapper>
      {/* {displayPosts('module', 'Lektionen')} */}
      {/* {displayPosts('extra', 'Extra Informationen')} */}
      {/* <ElementWrapper>
        <Bio />
      </ElementWrapper> */}
    </Layout>
  );
};

export default BlogIndex;

const ElementWrapper = styled.div`
  background: white none repeat scroll 0% 0%;
  padding: ${rhythm(1)} ${rhythm(2)};
  border-radius: 5px;
  margin-bottom: ${rhythm(1)};
`;

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      # Note: For this to work, at least one file has to be a draft!
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___module], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            description
            type
            module
            draft
          }
          timeToRead
        }
      }
    }
  }
`;
