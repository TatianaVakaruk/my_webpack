module.exports = {
entry: './src/index.js',
output: {
    filename: 'buidle.js'
},
module: {
    rules: [
        {
            test: /.js$/,
            use: ['babel-loader']
        },
                
            ]
    
}
};