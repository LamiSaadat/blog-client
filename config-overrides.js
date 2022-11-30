const path = require("path");
const react = require("react");

module.exports = function override(config) {
  const { output } = config;
  output.filename = "index.js";
  output.pathinfo = false;

  // config.externals = {
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "react-dom",
  //     root: "ReactDOM",
  //   },
  // };

  config.resolve.alias[react] = path.resolve("./node_modules/react");

  //   output: {
  //     filename: "index.js",
  //     pathinfo: false,
  //     libraryTarget: 'umd',
  // },
  //   externals: {
  //     "react": {
  //         "commonjs": "react",
  //         "commonjs2": "react",
  //         "amd": "react",
  //         "root": "React"
  //     },
  //     "react-dom": {
  //         "commonjs": "react-dom",
  //         "commonjs2": "react-dom",
  //         "amd": "react-dom",
  //         "root": "ReactDOM"
  //     }
  // },
  // resolve: {
  //   alias: {
  //     react: path.resolve('./node_modules/react'),
  // }

  return config;
};
