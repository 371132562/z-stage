const webpack = require('webpack')
module.exports = {
    lintOnSave: false,
    publicPath: '',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)]
    },
    devServer: {
        disableHostCheck: true,
        proxy: 'http://localhost:3000'
    }
}
