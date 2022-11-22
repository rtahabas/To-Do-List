const path = require(`path`);
const webpack = require("webpack");

module.exports = {
    webpack: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],

        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@features": path.resolve(__dirname, "src/features"),
        },
    },
};
