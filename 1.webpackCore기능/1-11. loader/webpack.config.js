module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /index\.js$/,
        use: ["./loaders/loader1", "./loaders/loader2"],
      }, //rule1
      {
        test: /\.js$/,
        use: ["./loaders/loader3", "./loaders/loader4"],
      }, ///rule2
    ],
  },
};

// module.exports = {
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /index\.js$/,
//         use: [
//           {
//             loader: "./loaders/test-loader",
//             options: {
//               changeVar: "미지수",
//             },
//           },
//           "./loaders/loader1",
//           "./loaders/loader2",
//         ],
//       }, //rule1
//       {
//         test: /\.js$/,
//         use: ["./loaders/loader3", "./loaders/loader4"],
//       }, ///rule2
//     ],
//   },
// };
