var loaderUtils = require("loader-utils");

module.exports = function (sourceCode) {
  //sourceCode : 미지수 a = 1; 미지수 b = 3;
  // console.log("test-loader실행", this.resourcePath.slice(56));
  var options = loaderUtils.getOptions(this);
  console.log(options);
  var reg = new RegExp(options.changeVar, "g");
  return sourceCode.replace(reg, "var");
};
