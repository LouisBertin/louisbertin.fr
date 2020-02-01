const supportedLanguages = [`en`, `fr`]
const defaultLanguage = "en"

module.exports = {
  siteMetadata: {
    titleTemplate: "%s | Louis Bertin",
    defaultTitle: 'Louis Bertin | Software Engineer, Freelancer, Writer',
    description: `French software engineer, freelancer, writer. Passionate about computer science since his childhood`,
    author: `Louis Bertin`,
    url: 'https://www.louisbertin.fr',
    defaultLanguage,
    supportedLanguages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: supportedLanguages,
        defaultLanguage,
        redirect: false,
        //redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
}
