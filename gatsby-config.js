module.exports = {
  pathPrefix: '/angelogulina.github.io',
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        background: '#102E56'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        head: false,
        trackingId: 'UA-29351905-1'
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({ stage: 0 }),
          require('postcss-svg')({ stage: 0 }),
          require('autoprefixer')
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    }
  ]
}
