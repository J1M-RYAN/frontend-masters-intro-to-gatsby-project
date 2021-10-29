import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello frontend masters</h1>
      <Link to="/about">about this site</Link>
    </Layout>
  );
};

export default IndexPage;
