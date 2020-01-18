module.exports = {
  siteMetadata: {
    siteUrl: `https://kwasu-notes.netlify.com`,
  },
  plugins: [

    // For NetlifyCMS
    `gatsby-plugin-netlify-cms`,

    // Automatic sitemaps when built
    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   exclude: ["/tags/*", "/search"]
      // }
    },
   

    // React Helmet for populating thehead tag
    `gatsby-plugin-react-helmet`,

    // For handling file sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    // For transforming markdowns
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: []
      }
    },

    // For gatsby manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KWASU Notes`,
        short_name: `KWASU Notes`,
        start_url: `/`,
        background_color: `darkslategrey`,
        theme_color: `darkslategrey`,
        display: `standalone`,
        icon: `assets/images/logo.png`,
      },
    },


    // Gatsby offline
    `gatsby-plugin-offline`
  ]
}
