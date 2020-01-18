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

    // // For gatsby manifest
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Dillion Megida`,
    //     short_name: `Dillion Megida`,
    //     start_url: `/`,
    //     background_color: `#130327`,
    //     theme_color: `#130327`,
    //     display: `standalone`,
    //     icon: `src/img/icon.png`,
    //   },
    // },


    // // Gatsby offline
    // `gatsby-plugin-offline`
  ]
}
