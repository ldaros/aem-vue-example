const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CLIENTLIB_ROOT = "./src/main/content/jcr_root/apps/vueapp/clientlibs";
const CLIENTLIB_NAME = "clientlib-site";

function createConfig(clientlibRoot, clientlib) {
  return {
    entry: { bundle: `./${clientlibRoot}/${clientlib}/webpack-entry.js` },

    output: {
      path: `${__dirname}/${clientlibRoot}/${clientlib}/dist`,

      filename: "./[name].js",
    },

    module: {
rules: [
  {
    test: /\.vue$/,
    loader: "vue-loader",
  },
  {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
],
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
      extensions: [".js", ".vue", ".json"],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "./[name].css",
      }),
    ],
  };
}

module.exports = createConfig(CLIENTLIB_ROOT, CLIENTLIB_NAME);
