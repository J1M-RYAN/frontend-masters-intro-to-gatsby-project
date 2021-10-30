import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
export const query = graphql`
  query GetCocktailImage {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
const AboutPage = ({ data }) => {
  return (
    <Layout title="About this site" description="More info about this site">
      <GatsbyImage image={getImage(data.file)} alt="cocktail" />
      <h1>About this site</h1>
      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default AboutPage;
