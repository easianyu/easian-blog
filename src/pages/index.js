import * as React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const BlogLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title='Home'></Seo>
      <div>
        <h1>Yixuan's thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
              <p>{node.excerpt}</p>
            </BlogLink>
          </div>
        ))}
      </div>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home' />;

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
