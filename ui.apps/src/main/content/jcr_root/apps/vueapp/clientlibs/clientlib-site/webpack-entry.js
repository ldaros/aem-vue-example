// Arquivo de entrada do webpack, aqui serão carregados todos os arquivos para compilação.

const components = require.context("../../components", true, /\.scss$|\.js?$/);
components.keys().forEach(components);
