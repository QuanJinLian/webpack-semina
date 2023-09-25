var FileListPlugin = require("./plugins/FileListPlugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new FileListPlugin("fileList.md"),
    new FileListPlugin("secondList.txt"),
  ],
};
