var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

function root(p) {
    return path.resolve(__dirname, p);
}

module.exports = {
    entry: {
        "app": "./src/main"
    },
    output: {
        path: root("dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: "awesome-typescript-loader",
                exclude: [
                    root("node_modules")
                ]
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [root('./src/styles')]
            },

            /*
             * sass loader support for *.scss files (styles directory only)
             * Loads external sass styles into the DOM, supports HMR
             *
             */
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: [root('./src/styles')]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            root("app")
        ],
        extensions: [".js", ".ts"],
        alias: {

        }
    },
    devtool: "source-map",
    target: "web",
    plugins: [

        new HtmlWebpackPlugin({
            title: "My App",
            filename: root("./dist/index.html"),
            template: root("./src/index.html")
        }),

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        }),

    ]
};