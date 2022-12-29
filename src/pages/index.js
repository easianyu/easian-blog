import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Seo title='Home'></Seo>
      <div>
        <h1>Yixuan's thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
