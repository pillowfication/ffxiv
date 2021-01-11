const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  'de': 'de',
  'fr': 'fr',
  'ja': 'ja'
}

module.exports = {
  webpack (config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack'
      }]
    })

    config.module.rules.push({
      test: /\.(gif|png|jpe?g)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[ext]'
        }
      }]
    })

    config.module.rules.push({
      test: /\.ffmacro$/,
      use: [{
        loader: 'raw-loader'
      }]
    })

    return config
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
}
