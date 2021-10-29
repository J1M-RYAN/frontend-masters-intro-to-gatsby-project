import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
const AboutPage = () => {
  return (
    <Layout title="About this site" description="More info about this site">
      <h1>About this site</h1>
      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default AboutPage;
