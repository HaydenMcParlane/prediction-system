module.exports = {
    entry: "./app/Entry.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, loader: "babel-loader",
                query: { presets: [ "es2015", "react"]}
            }
        ]
    }
};