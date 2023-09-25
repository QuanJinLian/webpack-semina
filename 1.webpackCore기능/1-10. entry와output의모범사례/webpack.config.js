var path = require("path");

// module.exports = {
//   entry: {
//     pageA: "./src/pageA/index.js",
//     pageB: "./src/pageB/index.js",
//     pageC: ["./src/pageC/main1.js", "./src/pageC/main2.js"],
//   },
//   output: {
//     filename: "[name].[chunkhash:5].js",
//   },
// };

// module.exports = {
//   mode: "production",
//   entry: {
//     pageA: "./src/pageA/index.js",
//     pageB: "./src/pageB/index.js",
//     statistics: "./src/statistics/index.js",
//   },
//   output: {
//     filename: "[name].[chunkhash:5].js",
//   },
// };

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[hash:5].js",
  },
};
