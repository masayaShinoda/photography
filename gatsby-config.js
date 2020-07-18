module.exports = {
  siteMetadata: {
    title: 'Masaya Photography',
    author: 'Masaya Shida',
    description: 'Welcome to my photography showcase!',
    siteUrl: `https://photos.masayashida.xyz`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Masaya Photography',
        short_name: 'Masaya Photography',
        start_url: '/',
        background_color: '#4C88B3',
        theme_color: '#4C88B3',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-advanced-sitemap`,
  ],
}
