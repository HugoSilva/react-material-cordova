var webpack = require('webpack');
var config = require('./webpack.config');

var custom = {
    devtool: 'inline-source-maps',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            },
        }),
    ]
};

module.exports = Object.assign({}, config, custom);
