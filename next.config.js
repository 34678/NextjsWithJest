const withLess = require('@zeit/next-less')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const config = require('./config')
const path = require('path')
const logger = require('pino')({
  prettyPrint: true,
})

const DEPLOY_ENV = process.env.DEPLOY_ENV || 'dev'
logger.info(`部署环境：${DEPLOY_ENV}`)
logger.info(`环境配置：${JSON.stringify(config[DEPLOY_ENV])}`)
module.exports = withBundleAnalyzer(
  withLess({
    publicRuntimeConfig: Object.assign(config[DEPLOY_ENV], { DEPLOY_ENV }),
    assetPrefix: config[DEPLOY_ENV].assetPrefix,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    webpack(config, { webpack, isServer }) {
      console.log(webpack)
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:base64:5].[ext]',
              outputPath: 'static/assets',
              publicPath: `${this.publicRuntimeConfig.assetPrefix}/_next/static/assets`,
            },
          },
        ],
      })
      config.resolve.extensions.push('.less')
      config.resolve.alias['@'] = path.resolve(__dirname, './')
      if (isServer) {
        // 服务端webpack配置
      } else {
        // 客户端webpack配置
      }
      return config
    },
  }),
)
