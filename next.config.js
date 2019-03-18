const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        // 要忽略, 不要緩存的檔案
        staticFileGlobsIgnorePatterns: [/\.next\//],
        // 設定緩存策略
        runtimeCaching: [
          {
            // 選用 有網路時隨時取得最新資料 策略
            // 其他選項 'cacheFirst'  'cacheOnly'  'fastest'  'networkOnly'
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      })
    )

    return config
  },
}
