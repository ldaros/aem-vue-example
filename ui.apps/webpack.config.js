/*-------------------- Arquivo de configuração webpack --------------------*/

// Loader para arquivos .vue
const { VueLoaderPlugin } = require("vue-loader");

// Extrator CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Diretorio Bibliotecas de clientes AEM
const LIB_ROOT = "./src/main/content/jcr_root/apps/vueapp/clientlibs";

// Diretorio de destino
const LIB_NAME = "clientlib-site";

module.exports = {
  // Arquivo de entrada
  entry: { bundle: `./${LIB_ROOT}/${LIB_NAME}/webpack-entry.js` },

  // Arquivo de saida
  output: {
    path: `${__dirname}/${LIB_ROOT}/${LIB_NAME}/dist`,

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

  // Permite a importação de arquivos .vue
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
