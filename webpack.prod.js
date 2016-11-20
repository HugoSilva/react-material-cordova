var webpack = require('webpack');
var config = require('./webpack.config');

var custom = {
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          output: { comments: false },
          sourceMap: false,
          mangle: true,
          minimize: true
        }),
    ]
};

module.exports = Object.assign({}, config, custom);
