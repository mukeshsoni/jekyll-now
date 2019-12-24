import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Layout from "../components/layout";

import Bio from "../components/Bio";
import typography from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout>
        <div>
          <Bio />
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: typography.rhythm(1 / 4)
                  }}
                >
                  <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
