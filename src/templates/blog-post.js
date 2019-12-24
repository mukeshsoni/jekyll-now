import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import Layout from "../components/layout";

import Bio from "../components/Bio";
import typography from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          </Helmet>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...typography.scale(-1 / 5),
              display: "block",
              marginBottom: typography.rhythm(1),
              marginTop: typography.rhythm(-1)
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: typography.rhythm(1)
            }}
          />
          <Bio />

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
