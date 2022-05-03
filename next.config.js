const webpack = require('webpack')
const { i18n } = require('./next-i18next.config')

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

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, '')
        switch (mod) {
          case 'buffer':
            resource.request = 'buffer'
            break
          default:
            throw new Error(`Not found ${mod}`)
        }
      })
    )

    return config
  },
  i18n,
  reactStrictMode: false
}
