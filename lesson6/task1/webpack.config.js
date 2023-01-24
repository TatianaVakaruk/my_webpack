module.exports = {
entry: './src/index.js',
output: {
    filename: 'buidle.js'
},
module: {
    rules: [
        {
            test: /.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /.(jpg|png)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit:8,
                        name:'[name].[ext]',
                        outPath:'images'
                    }
                }
            ]
        }
    ]
}
};