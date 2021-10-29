module.exports = {
  siteMetadata: {
    siteUrl: 'https://somedomain.com',
    title: 'Frontend masters intro to gatsby',
    description: 'frontend masters course',
    image: 'https://api.corgi.cam/v1/img/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/posts-layout.js'),
        },
      },
    },
  ],
};
