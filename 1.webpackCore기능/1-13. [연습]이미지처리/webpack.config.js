module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: "./loaders/img-loader.js",
            options: {
              limit: 3000, //3000바이트 이상은 이미지 사용, 3000바이트 미만은 Base64 사용
              filename: "img-[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
};
