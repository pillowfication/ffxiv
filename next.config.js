module.exports = {
  i18n: {
    locales: ['de', 'en', 'fr', 'ja'],
    defaultLocale: 'en',
    localeDetection: false
  },
  webpack (config, { isServer }) {
    if (isServer) {
      require('./generate-sitemap')
    }

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
  }
}
