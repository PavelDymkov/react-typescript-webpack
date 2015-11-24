module.exports = {
    entry: "./sources/scripts/main.ts",
    output: {
        path: "./build",
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "webpack-typescript?target=ES5&jsx=react"
            }
        ]
    }
};