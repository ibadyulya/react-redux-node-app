var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var path = require("path");
var express = require("express");
var app = express();
var opn = require('opn');
var merge = require('webpack-merge');
function resolve (dir) {
    return path.join(__dirname,  dir)
}
var config = require('../config');

var webpackConfig = require("./webpack.base");

webpackConfig = merge(webpackConfig, {
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        new FriendlyErrorsPlugin(),
    ]
});

Object.keys(webpackConfig.entry).forEach(function (name) {
    webpackConfig.entry[name] = ['react-hot-loader/patch','webpack/hot/only-dev-server','./config/dev-client'].concat(webpackConfig.entry[name])
});
var compiler = webpack(webpackConfig);
var proxyTable = config.dev.proxyTable;
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
var proxyMiddleware = require('http-proxy-middleware')
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
});

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    quiet: true
});

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});


// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
      options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
  })
  

// app.use(require('connect-history-api-fallback')()) html5 history

app.use(devMiddleware)


app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
console.log(staticPath)
app.use(staticPath, express.static('./static'))


var port = process.env.port || config.dev.port;

var uri = 'http://localhost:' + port


var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}