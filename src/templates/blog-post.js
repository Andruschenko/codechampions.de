import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { StandardLink } from '../components/links';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  console.log({ pageContext });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Wrapper>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <HorizontalLine />
        </article>
        <PageNav previous={previous} next={next} post={post} />
      </Wrapper>
    </Layout>
  );
};

const PageNav = ({ previous, next, post }) => {
  return (
    <nav>
      {post.frontmatter.type !== 'extra' && (
        <NavList>
          <PageNavHeader>💪 Mach gleich weiter mit...</PageNavHeader>
          {/* <li>
            {previous && (
              <StandardLink to={previous.fields.slug} rel="prev">
                <FaArrowAltCircleLeft /> {previous.frontmatter.title}
              </StandardLink>
            )}
          </li> */}
          <li>
            {next && (
              <PageNavHeader>
                <StandardLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} <FaArrowAltCircleRight />
                </StandardLink>
              </PageNavHeader>
            )}
          </li>
        </NavList>
      )}
      <HomeLinkHeader>
        <StandardLink to={`/`}>
          Hier geht es zurück zur Startseite 🏠
        </StandardLink>
      </HomeLinkHeader>
    </nav>
  );
};

export default BlogPostTemplate;

const Wrapper = styled.div`
  padding: 0 ${rhythm(1)};
`;

const HorizontalLine = styled.hr`
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(1)};
`;

const PageNavHeader = styled.h3`
  margin: 0;
  margin-bottom: ${rhythm(0.5)};
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-left: 0;
`;

const HomeLinkHeader = styled.h4`
  margin-top: 0;
  margin-bottom: ${rhythm(3)};
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        type
      }
    }
  }
`;
