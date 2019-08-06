const path = require('path');

module.exports = function() {
    return {
        resolve: {
            extensions: ['.js', '.jsx']
        },
        entry: path.resolve('src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve('dist'),
            publicPath: '/'
        },
        devServer: {
            contentBase: path.resolve('dist')
        },
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                use: [{
                      loader: 'babel-loader'
                }],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }]
        }
    };
};
