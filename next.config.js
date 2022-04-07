const webpack = require('webpack')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  de: 'de',
  fr: 'fr',
  ja: 'ja',
  cn: 'cn',
  ko: 'ko'
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
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
}
