const path = require('path');

module.exports = function() {
    return {
        resolve: {
            extensions: ['.js', '.jsx']
        },
        entry: path.resolve('src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve('public'),
            publicPath: '/'
        },
        devServer: {
            contentBase: path.resolve('public')
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        }
    };
};
