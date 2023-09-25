module.exports = function (sourceCode) {
  console.log("loader4실행", this.resourcePath.slice(56));
  return sourceCode;
};
