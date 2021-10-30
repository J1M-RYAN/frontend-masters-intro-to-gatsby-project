import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout.js';

const PostsLayout = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontmatter;
  return (
    <>
      <Layout title={title} description={description}>
        {children}
        <Link to="/">&larr; back</Link>
      </Layout>
    </>
  );
};

export default PostsLayout;
