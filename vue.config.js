module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  assetsDir: 'static'
}
