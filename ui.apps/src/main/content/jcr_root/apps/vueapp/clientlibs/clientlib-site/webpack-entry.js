// import scss,and js
const components = require.context("../../components", true, /\.scss$|\.js?$/);
components.keys().forEach(components);
