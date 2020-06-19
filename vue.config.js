const merge = require("webpack-merge");

module.exports = {
    publicPath: "./",
    outputDir: "dist",
    productionSourceMap: true,
    devServer: {
        // open:true,
        open: false,
        host: "0.0.0.0",
        port: 8080,
        https: true,
        proxy: null,
    },
    chainWebpack: (config) => {
        const oneOfsMap = config.module.rule("sass").oneOfs.store;
        oneOfsMap.forEach((item) => {
            item
                .use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    // Provide path to the file with resources
                    //   resources: "./path/to/resources.scss",

                    // Or array of paths
                    // resources: ["./src/assets/sass/variable.sass", "./src/assets/sass/hokori.sass"],
                    resources: "./src/assets/sass/hokori.sass"
                })
                .end();
        });
    },
};