module.exports = function (sourceCode) {
  console.log("loader3실행", this.resourcePath.slice(56));
  return sourceCode;
};
