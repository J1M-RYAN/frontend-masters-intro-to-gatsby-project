import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { imageWrapper } from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date(fromNow: true)
            description
            title
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="corgi on bed"
          placeholder="tracedSVG"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello frontend masters</h1>
      <Link to="/about">about this site</Link>
      <h2>Check out my recent posts</h2>
      <ul>
        {posts.map((post) => (
          <Link to={post.slug}>
            <li>{post.frontmatter.title}</li>
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
