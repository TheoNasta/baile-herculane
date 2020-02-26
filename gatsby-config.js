module.exports = {
    siteMetadata: {
        title: `Baile Herculane - Turism`,
        description: `Baile Herculane - statiune balneara`,
        author: `Baile Herculane`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `videos`,
                path: `${__dirname}/src/videos`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `dribbble`,
                path: `${__dirname}/src/dribbble`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `dribbble`,
                path: `${__dirname}/src/dribbble`,
            },
        },
    ],
}