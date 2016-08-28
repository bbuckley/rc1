var webpack = require('webpack');

module.exports = {
    entry: [
        './script.jsx'
    ],
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']

        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
